import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import canUseDOM from 'functions/canUseDOM';

import { hydrateRoot } from 'components/Root';
import Navbar from 'components/Navbar';
import '../index.css';

function Routes() {
    return (
        <>
            <Helmet title="Routes" />
            <Navbar />
            <Switch>
                <Route path="/:lang/routes/:title/" render={
                    ({ match }) => {
                        return (
                            <>
                                <Helmet title={match.params.title} />
                                <div>
                                    <Link to="/ru/routes/Tab1">Tab 1</Link>
                                    <Link to="/ru/routes/Tab2">Tab 2</Link>
                                    <Link to="/ru/routes/Tab3">Tab 3</Link>
                                    <Link to="/ru/routes/Tab4">Tab 4</Link>
                                </div>
                            </>
                        );
                    }
                } />
            </Switch>
        </>
    );
}

export default Routes;

if (canUseDOM()) {
    hydrateRoot(Routes, {});
}
