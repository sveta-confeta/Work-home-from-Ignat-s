import React from 'react'
import Header from './Header'
import {GreatRoutes} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>
                <GreatRoutes/>
            </HashRouter>
        </div>

    )
}

export default HW5
