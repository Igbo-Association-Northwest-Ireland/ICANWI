import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';
import {useLocation} from 'react-router';
import SignIn from './components/Header/DropdownContainer/SignIn'
import Minutes from './components/Pages/Minutes';

const Protected = ({isLogged}) => {
const location = useLocation();
return isLogged ? <Outlet/> : <Navigate to = "/SignIn" replace state={{from:location}}/>;
 
}

export default Protected