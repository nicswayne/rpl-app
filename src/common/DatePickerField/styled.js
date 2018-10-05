// @flow
import styled, { css } from "styled-components";

import { color } from "styles";

export const StyleOverrides = styled.div`
  display: inline-block;

  ${props =>
    props.shouldFitContainer &&
    css`
      display: block;
    `}

  .DateInput_screenReaderMessage {
    display: none;
  }
  .DayPicker_weekHeader {
    color: ${color.GREY_50};
  }
  .DayPicker_weekHeader_ul {
    font-weight: 400;
  }
  .DayPicker_weekHeader_li small {
    font-size: 11px;
  }
  .CalendarMonth_caption {
    font-size: 14px;
  }
  .CalendarDay {
    font-size: 13px;
    font-weight: 400;

    &.CalendarDay__today {
      font-weight: 600;
    }
  }
  .CalendarDay__default {
    border: none;

    &:hover {
      border: none;
      background ${color.GREY_5};
    }
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background ${color.BLACK};
  }
  .SingleDatePicker {
    flex: 1;
  }
  .DateInput_input {
    line-height: inherit;
    border-radius: inherit;
    padding-right: 35px;
  }
  .SingleDatePickerInput {
    background: initial;
    width: 100%;
  }
  .DateInput {
    background: initial;
    position: relative;
    display: initial;
    width: initial;
    vertical-align: initial;
    width: 100%;
  }
  .DayPickerNavigation_button__default {
    border: none;

    &:hover {
      border: none;
    }
  }
  .DayPickerNavigation_button {
    position: absolute;
    top: 17px;
    display: inline-flex;
    font-size: 0;

    &:first-child {
      left: 24px;
    }
    &:last-child {
      right: 24px;
    }
  }
  .DateInput_fang {
    display: none;
  }
  .DayPicker {
    margin-bottom: 100px;
    padding-bottom: 15px;

    &:after {
      content: "";
      position: absolute;
      top: -12px;
      left: 40px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 12px solid ${color.WHITE};
    }
  }
  .DayPicker__withBorder {
    border-radius: 0;
    box-shadow: 0 5px 60px rgba(0,0,0,0.08);
  }
  .SingleDatePicker_picker {
    top: 60px;
  }
  .DayPickerNavigation_button:focus {
    outline: none;
  }
`;
