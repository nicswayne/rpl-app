// @flow
import React, { Component, type Node } from 'react';

import { Wrapper, Label, FocusBorder, Error, Info } from './styled';

type Props = {
    children: Node,
    label?: string,
    hasValue?: boolean,
    isFocused?: boolean,
    shouldFitContainer?: boolean,
    error?: string,
    info?: string,
    isNativeSelect?: boolean,
    labelHtmlFor?: string,
    readOnly?: boolean,
    hasOnClick?: boolean,
};

export default class Field extends Component<Props> {
    render() {
        const {
            children,
            label,
            hasValue,
            isFocused,
            shouldFitContainer,
            error,
            info,
            isNativeSelect,
            labelHtmlFor,
            readOnly,
            hasOnClick,
        } = this.props;

        return (
            <div>
                <Wrapper
                    hasOnClick={hasOnClick}
                    isFocused={isFocused}
                    hasValue={hasValue}
                    shouldFitContainer={shouldFitContainer}
                    label={label}
                    isNativeSelect={isNativeSelect}
                    readOnly={readOnly}
                >
                    <Label
                        isFocused={isFocused}
                        hasValue={hasValue}
                        isNativeSelect={isNativeSelect}
                        htmlFor={labelHtmlFor}
                    >
                        {label}
                    </Label>
                    {children}
                    <FocusBorder isFocused={isFocused} />
                </Wrapper>
                <Error hasError={error && error.length}>{error}</Error>
                {info && info.length && !error && <Info>{info}</Info>}
            </div>
        );
    }
}
