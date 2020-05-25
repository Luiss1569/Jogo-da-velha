import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import GameM from './pages/GameM'
import GameS from './pages/GameS'
import Index from './pages/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Index}/> 
            <Route path="/game" exact component={GameM}/> 
            <Route path="/:gameid/game" exact component={GameS}/>
        </BrowserRouter>
    )
}