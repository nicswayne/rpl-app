// @flow
import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Tasks from 'data/tasks';
import Card from 'common/Card';
import { Box, Flex, Spacing } from 'common/Layout';
import NavLink from 'common/NavLink';
import Screen from 'common/Screen';
import Table from 'common/Table';

import { Padding, ColorBox, RelativeFlex } from './styled';
import { color } from 'styles';
import { formatDate } from 'utils/formatters';

type Row = {
    value: string,
    original: {
        completed: boolean,
    },
};

function getColor(value: string, completed: boolean) {
    const currentDate = moment(new Date());
    if (completed) return '';
    if (moment(value).isBefore(currentDate)) {
        return `background-color: red; color: white; font-weight: bold;`;
    }
    if (moment(value).isBefore(moment(currentDate).add(1, 'week'))) {
        return `background-color: yellow; font-weight: bold;`;
    }
    return '';
}

const columns = [
    {
        Header: '',
        accessor: 'completed',
        width: 115,
        Cell: (row: { value: boolean }) => (
            <Padding>
                <input type="checkbox" defaultChecked={row.value} />
            </Padding>
        ),
    },
    {
        Header: 'Name',
        accessor: 'name',
        width: 225,
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Due Date',
        accessor: 'dueDate',
        width: 250,
        Cell: (row: Row) =>
            row.value ? (
                <ColorBox
                    jusitfy="center"
                    align="center"
                    backgroundColor={getColor(
                        row.value,
                        row.original.completed
                    )}
                >
                    {formatDate(row.value)}
                </ColorBox>
            ) : (
                ''
            ),
    },
];

type Props = {};
type State = {};

export default class Dashboard extends Component<Props, State> {
    render() {
        return (
            <Screen>
                <Card>
                    <RelativeFlex>
                        <Box percent={80}>
                            <Flex justify="center" align="center">
                                <h2>Your Tasks</h2>
                            </Flex>
                        </Box>
                        <Box percent={20}>
                            <ColorBox
                                width="110px"
                                jusitfy="center"
                                align="center"
                                backgroundColor="background-color: red; color: white; font-weight: bold;"
                            >
                                Overdue
                            </ColorBox>
                            <ColorBox
                                width="110px"
                                jusitfy="center"
                                align="center"
                                backgroundColor="background-color: yellow; font-weight: bold;"
                            >
                                {'<'} 1 week
                            </ColorBox>
                        </Box>
                    </RelativeFlex>
                    <Spacing height={50} />
                    <Table data={Tasks} columns={columns} />
                    <NavLink
                        link="/tasks/volunteer"
                        isCollapsed={false}
                        name="Volunteer"
                        color={color.GREY_40}
                        justifyContent="center"
                    />
                </Card>
            </Screen>
        );
    }
}
