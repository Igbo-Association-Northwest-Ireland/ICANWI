import React from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { useAuth } from '../Auth'
import SignIn from './Header/DropdownContainer/SignIn';

const ReguireAuth = ({children}) => {
    const auth = useAuth();
    const location = useLocation();
    if(!auth.user){
   return <Navigate to='/SignIn' state={{path: location.pathname}}/>
    }
  return children 
}

export default ReguireAuth