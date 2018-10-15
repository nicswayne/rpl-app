// @flow
import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Fullscreen } from 'common/Layout';

import Family from '../Dashboard';
import Sidenav from './components/Sidenav';

export default class Root extends Component<{}> {
    render() {
        return (
            <Fullscreen>
                <Sidenav />
                <Fragment>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/dashboard" />}
                        />
                        <Route exact path="/family" component={Family} />
                    </Switch>
                </Fragment>
            </Fullscreen>
        );
    }
}
