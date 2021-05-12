import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';

export default function Routes(){
    return (
        <>
            <Switch>
                <Route exact path='/' component={()=><LandingPage/>} />
            </Switch>
        </>
    )
}