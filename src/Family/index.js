// @flow
import React, { Component } from 'react';
import { getActors } from 'data/compiler';

import { Box, Flex } from 'common/Layout';
import Screen from 'common/Screen';

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
                <Flex>
                    {actors.length > 0 &&
                        actors.map(actor => (
                            <Box percent={33} max={400}>
                                <ActorCard key={actor.id} actor={actor} />
                            </Box>
                        ))}
                </Flex>
            </Screen>
        );
    }
}
