// @flow
import React, {
    Component,
    type Element,
    type ElementRef,
    type Node,
} from 'react';

import FieldBase from 'common/FieldBase';
import Text from 'common/Text';

type Props = {
    children: Element<'input' | 'select'>,
    label?: string,
    shouldFitContainer?: boolean,
    error?: string,
    info?: string,
    icon?: Node,
    onClick?: () => void,
    rightText?: string,
};

type State = {
    hasValue: boolean,
    isFocused: boolean,
    readOnly: boolean,
};

export default class FormField extends Component<Props, State> {
    childRef: ElementRef<'input' | 'select'>;
    child: Element<'input' | 'select'>;
    handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => {};
    handleFocus: () => {};
    handleBlur: () => {};

    constructor(props: Props) {
        super(props);

        this.state = {
            isFocused: false,
            hasValue: false,
            readOnly: false,
        };

        this.child = this.props.children;

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillMount() {
        const childHasInitialValue = this.child.props.value;
        const childIsReadOnly = this.child.props.readOnly;
        if (childHasInitialValue) {
            this.setState({ hasValue: true });
        }
        if (childIsReadOnly) {
            this.setState({ readOnly: true });
        }
    }

    handleFocus(event: SyntheticInputEvent<HTMLInputElement>) {
        const childOnFocus = this.child.props.onFocus;

        this.props.onClick && this.props.onClick();

        if (!this.child.props.readOnly) {
            this.childRef && this.childRef.focus();
            this.setState({ isFocused: true });
        }

        // Call onFocus declared on child
        childOnFocus && childOnFocus(event);
    }

    handleBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        const childOnBlur = this.child.props.onBlur;

        event.target.value = event.target.value.trim();

        if (this.childRef) {
            this.childRef.blur();
        }
        this.setState({ isFocused: false });

        // Call onBlur declared on child
        childOnBlur && childOnBlur(event);

        // Call change to validate against trimmed value
        this.handleChange(event);
    }

    handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
        const childOnChange = this.child.props.onChange;

        if (event.target.value) {
            this.setState({ hasValue: true });
        } else {
            this.setState({ hasValue: false });
        }

        // Call onChange declared on child
        childOnChange && childOnChange(event);
    }

    render() {
        const {
            label,
            shouldFitContainer,
            error,
            info,
            icon,
            rightText,
            onClick,
        } = this.props;

        const { isFocused, hasValue, readOnly } = this.state;

        const extendedChild = React.cloneElement(this.props.children, {
            ref: () => this.childRef,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
        });

        const isNativeSelect = extendedChild.type === 'select';
        return (
            <FieldBase
                label={label}
                isFocused={isFocused}
                hasValue={hasValue}
                shouldFitContainer={shouldFitContainer}
                error={error}
                info={info}
                isNativeSelect={isNativeSelect}
                readOnly={readOnly}
                hasOnClick={onClick ? true : false}
            >
                {extendedChild}
                <div onClick={this.handleFocus}>
                    {rightText && <Text weight={400}>{rightText}</Text>}
                    {icon}
                </div>
            </FieldBase>
        );
    }
}
