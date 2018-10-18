// @flow
import React from 'react';

import { ButtonGroup, Card, InfoBlock } from '../styled';
import Button from 'common/Button';
import Text from 'common/Text';
import { Spacing } from 'common/Layout';

export default function ActorCard({ actor: { firstName, lastName, roles } }) {
    return (
        <Card>
            <InfoBlock>
                <Text type="h2">{firstName}</Text>
                <Spacing />
                <Text type="h4">Roles:</Text>
                <Spacing height={10} />
                {roles.length > 0 &&
                    roles.map(role => (
                        <Spacing key={role.id} padding="0 0 0 15px">
                            <Text>{role.name}</Text>
                        </Spacing>
                    ))}
            </InfoBlock>
            <ButtonGroup>
                <Button appearance="secondary" shouldFitContainer>
                    <Text type="h5">Script</Text>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <Text type="h5">Songs</Text>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <Text type="h5">Costume</Text>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <Text type="h5">Bio</Text>
                </Button>
                <Button appearance="secondary" shouldFitContainer>
                    <Text type="h5">Treasure Box</Text>
                </Button>
            </ButtonGroup>
        </Card>
    );
}
