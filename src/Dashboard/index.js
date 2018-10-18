// @flow
import React, { Component } from 'react';
import { getActors, getUser } from 'data/compiler';

import Screen from 'common/Screen';

import { Wrapper } from './styled';
import ActorCard from './components/ActorCard';

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
        const { actors, user } = this.state;
        return (
            <Screen title={`Welcome ${user.firstName} ${user.lastName}`}>
                <Wrapper>
                    {actors.length > 0 &&
                        actors.map(actor => (
                            <ActorCard key={actor.id} actor={actor} />
                        ))}
                </Wrapper>
            </Screen>
        );
    }
}
