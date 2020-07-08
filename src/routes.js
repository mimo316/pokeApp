import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Main from './pages/Main/Index';
import Checkout from './pages/Checkout/Index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/'
                    exact
                    component={Main}
                />

                <Route path='/checkout'
                    exact
                    component={Checkout}
                />


            </Switch>

        </BrowserRouter>
    )
}