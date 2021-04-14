import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = React.lazy(() => import('./Home/HomeComponent'))
const Store = React.lazy(() => import('./Store/Store'))

export default function RouterComponent(){
    return <React.Suspense fallback={<CircularProgress/>}>
        <Router basename={"/"}>
            <Switch>
                <Route exact path='/' render={routeProps => <Home {...routeProps} />} />
                <Route exact path='/:storeId' render={routeProps => <Store {...routeProps} />} />
            </Switch>
        </Router>
    </React.Suspense>
}