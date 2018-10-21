// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Tasks from 'data/tasks';
import Card from 'common/Card';
import NavLink from 'common/NavLink';
import Screen from 'common/Screen';
import Table from 'common/Table';

import { color } from 'styles';
import { formatDate } from 'utils/formatters';

const Padding = styled.div`
    padding-left: 20px;
`;
const columns = [
    {
        Header: 'Completed',
        accessor: 'completed',
        width: 100,
        Cell: row => (
            <Padding>
                <input type="checkbox" defaultChecked={row.value} />
            </Padding>
        ),
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Due Date',
        accessor: 'dueDate',
        Cell: row => (row.value ? formatDate(row.value) : ''),
    },
];

type Props = {};
type State = {};

export default class Dashboard extends Component<Props, State> {
    render() {
        return (
            <Screen>
                <Card>
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
