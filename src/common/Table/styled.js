// @flow
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export const StyledTable = styled(ReactTable)`
    border: none;
    font-size: 14px;

    .status {
        display: flex;
        align-items: center;

        span:first-child {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;

            .warning {
                background-color: #ffaa01;
            }

            .success {
                background-color: #bb0a30;
            }

            .default {
                background-color: #bb0a30;
            }
        }
    }
    .rt-thead {
        font-family: 'sans-serif';
        font-weight: bold;
        .-header {
            border-top: 3px solid #000000;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
        }
        .rt-th {
            text-align: left;
            border-right: none;
            padding: 20px 0;
            font-size: 15px;
        }
    }
    .rt-tbody {
        .rt-td {
            display: flex;
            align-items: center;
            text-align: left;
            border-right: none;
            height: 62px;
        }
        .rt-tr-group {
            border-bottom: none;
            border-top: 1px solid #000000;
        }
        .rt-tr {
            cursor: pointer;
        }
        .rt-th.-sort-desc,
        .rt-td.-sort-desc {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none !important;
            color: #bb0a30;
        }
    }

    .rt-th.-sort-asc,
    .rt-td.-sort-asc {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none !important;
        color: #bb0a30;
    }

    div {
        outline: none;
    }

    .-sort-asc,
    .-sort-desc {
        display: flex;
        align-items: center;
    }

    a {
        color: #bb0a30;
        text-decoration: none;
    }
`;
