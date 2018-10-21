// @flow
import React, { Component } from 'react';
import { getActors } from 'data/compiler';

import Screen from 'common/Screen';

import { Wrapper } from './styled';
import ActorCard from './components/ActorCard';

import type { Role } from 'data/Crew';

type Props = {};

type State = {
    actors: Array<{
        id: string,
        firstName: string,
        lastName: string,
        guardian: string,
        roles: Array<Role>,
        dob: Date,
    }>,
};

export default class Dashboard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            actors: [],
        };
    }
    componentDidMount() {
        const actors = getActors('945f0a30-d8a1-4424-8935-b35b671e5b82');
        this.setState({ actors });
    }

    render() {
        const { actors } = this.state;
        return (
            <Screen>
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
