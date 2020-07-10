import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import SignIn from './screens/Signin/index'
import Home from './screens/Home/index'
import SignUp from './screens/Signup/index'
import ManageLinks from './screens/Manage/Links/index'
import ManageLinksCreate from './screens/Manage/Links/Create/index'
import ManageLinksEdit from './screens/Manage/Links/Edit/index'
const App = () => {
    return (
        <BrowserRouter>
            <div >
                <nav>
                    <ul className = "list-group list-group-horizontal">
                        <li className = "list-group-item">
                            <Link to='/sign-in'> Sign-in</Link>
                        </li>
                        <li className = "list-group-item">
                            <Link to='/sign-up'> Sign-up</Link>
                        </li>
                        <li className = "list-group-item">
                            <Link to='/manage/links/create'> Create Link </Link>
                        </li>
                        <li className = "list-group-item">
                            <Link to='/manage/links/edit'> Edit Link</Link>
                        </li>
                        <li className = "list-group-item">
                            <Link to='/manage/links'> Links</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/sign-in'> <SignIn/> </Route>

                    <Route path='/sign-up'> <SignUp/> </Route>

                    <Route path='/manage/links/create'> <ManageLinksCreate/> </Route>
                    
                    <Route path='/manage/links/edit'><ManageLinksEdit/></Route>
                    
                    <Route path='/manage/links'> <ManageLinks/> </Route>
                    
                    <Route path='/'> <Home /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App