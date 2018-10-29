// @flow
import React from 'react';

import { ButtonGroup, Card, InfoBlock } from '../styled';
import Button from 'common/Button';
import { Spacing } from 'common/Layout';

import type { Role } from 'data/Crew';

type Props = {
    actor: {
        firstName: string,
        lastName: string,
        roles: Array<Role>,
    },
};

export default function ActorCard({
    actor: { firstName, lastName, roles },
}: Props) {
    return (
        <Card>
            <InfoBlock>
                <h2>{firstName}</h2>
                <Spacing />
                <h4>Roles:</h4>
                <Spacing height={10} />
                {roles.length > 0 &&
                    roles.map(role => (
                        <Spacing key={role.id} padding="0 0 0 15px">
                            <h5>{role.name}</h5>
                        </Spacing>
                    ))}
            </InfoBlock>
            <ButtonGroup>
                <Button appearance="secondary" shouldFitContainer>
                    <h5>Script</h5>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <h5>Songs</h5>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <h5>Costume</h5>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <h5>Bio</h5>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <h5>Treasure Box</h5>
                </Button>
            </ButtonGroup>
        </Card>
    );
}
