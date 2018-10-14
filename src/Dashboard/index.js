// @flow
import React, { Component } from 'react';
import { getActors, getUser } from 'data/compiler';

// import Card from 'common/Card';
import { Col, Row } from 'common/Layout';
import Screen from 'common/Screen';

import { Card, Wrapper } from './styled';

import type { Crew, Role } from 'data/Crew';

type Props = {};

type State = {
    actors: {
        id: string,
        first_name: string,
        last_name: string,
        guardian: string,
        role: Array<Role>,
        dob: date,
    },
    user: ?{
        id: string,
        first_name: string,
        last_name: string,
        phone: string,
        email: string,
        type: string,
        active: boolean,
        crew: Crew,
    },
};

export default class Dashboard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            actors: {},
            user: {},
        };
    }
    componentDidMount() {
        const user = getUser('945f0a30-d8a1-4424-8935-b35b671e5b82');
        const actors = getActors('945f0a30-d8a1-4424-8935-b35b671e5b82');
        this.setState({ user, actors });
    }

    render() {
        return (
            <Screen
            // title={`${customer.firstName} ${customer.lastName}`}
            // background={color.GREY_5}
            >
                <Wrapper>
                    <Card padding="30px">
                        <div>this works</div>
                    </Card>
                    <Card padding="30px">
                        <div>this works</div>
                    </Card>
                    <Card padding="30px">
                        <div>this works</div>
                    </Card>
                    <Card padding="30px">
                        <div>this works</div>
                    </Card>
                </Wrapper>
            </Screen>
        );
    }
}
