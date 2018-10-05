// @flow
import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

import FieldBase from "common/FieldBase";
import Icon from "common/Icon";
import { StyleOverrides } from "./styled";

type Props = {
  shouldFitContainer?: boolean,
  label: string,
  error?: string,
  name: string,
  setFieldValue: (field: string, value: any) => {},
  setFieldTouched: (
    field: string,
    isTouched: boolean,
    shouldValidate?: boolean
  ) => {},
  value: string
};

type State = {
  focused: boolean
};

export default class DatePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  handleFocusChange = ({ focused }: any) => {
    this.setState({ focused });
    if (!focused) {
      this.props.setFieldTouched(this.props.name, true, true);
    }
  };

  handleDateChange = (date: string) => {
    this.props.setFieldValue(this.props.name, date);
  };

  render() {
    const { shouldFitContainer, label, name, error, value } = this.props;
    const { focused } = this.state;

    return (
      <StyleOverrides shouldFitContainer={shouldFitContainer}>
        <FieldBase
          isFocused={focused}
          label={label}
          hasValue={value ? true : false}
          shouldFitContainer={shouldFitContainer}
          error={error}
        >
          <SingleDatePicker
            readOnly
            numberOfMonths={1}
            transitionDuration={0}
            noBorder
            hideKeyboardShortcutsPanel
            date={value ? value : null}
            onDateChange={date => this.handleDateChange(date)}
            focused={focused}
            placeholder=""
            onFocusChange={this.handleFocusChange}
            isOutsideRange={day => moment().diff(day) > 0}
          />
        </FieldBase>
      </StyleOverrides>
    );
  }
}
