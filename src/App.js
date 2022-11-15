
import react, {useState} from 'react';
import Register from './components/Header/DropdownContainer/Register';
import Modals from './components/Header/DropdownContainer/Modals';
import  './CSS/App.scss';
import  './CSS/custom.css';
import './CSS/Header.scss';
import './CSS/ExternalPages.scss';
import './CSS/Body.scss';
import './CSS/Mediaquery.scss';
import Label from './components/Pages/Label';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import HeroImage from './components/Body/HeroImage';
import styled from 'styled-components';
import Myteam from './components/Body/Myteam';
import AboutUs from './components/Body/AboutUs';
import Footer from './components/Footer/Footer';
import Pictures from './components/Body/Pictures';
import Language from './components/Body/Language';
import Home from './components/Home';
import Nativefood from './components/Footer/Nativefood';
import WhatweDo from './components/Body/WhatweDo';
import Gallary from './components/Pages/Gallary';
import Page from './components/Pages/Page';
import Minutes from './components/Pages/Minutes';
import Videos from './components/Pages/Videos';
import Forms from './components/Pages/Forms';
import May2022meeting from './components/Pages/InnerPage/May2022meeting';
import April2022Meeting from './components/Pages/InnerPage/April2022Meeting';
import {BrowserRouter as Router,Routes, Route, NavLink, useNavigate} from "react-router-dom";
import SignIn from './components/Header/DropdownContainer/SignIn';
import Protected from './Protected';
import { AuthProvider } from './Auth';
import RequireAuth from './components/ReguireAuth'
import { Constitution } from './components/Pages/InnerPage/Constitution';
import Feb2022Meeting from './components/Pages/InnerPage/Feb2022Meeting';
import Match2022Meeting from './components/Pages/InnerPage/Match2022Meeting';
import June2022Meeting from './components/Pages/InnerPage/June2022Meeting'; 
import Sept2022Meeting from './components/Pages/InnerPage/Sept2022Meeting';
import Oct2019Meeting from './components/Pages/InnerPage/Oct2019Meeting';

 const App =() =>{
const[islogged, setIslogged] = useState(false)
const logging = ()=>{setIslogged(!islogged)}


function refreshPage() {window.reload(false);}

 return (
     <>
<AuthProvider>
<APP className='p-0 m-0 position-relative bg-slate-900 text-light h-100'>
<AppHeader>
<Routes>
 <Route exact path='/' element={<Home/>}/>
 <Route path='/Gallary' element={<Gallary/>}/>
 <Route path='/Videos' element={<Videos/>}/> 
<Route path='/Minutes' element={
 /*   <RequireAuth> */
      <Minutes/>
 /*   </RequireAuth> */
}/>


 <Route path='/May2022meeting' element={<May2022meeting/>}/>
 <Route path='/April2022Meeting' element={<April2022Meeting/>}/>
 <Route path='/Match2022Meeting' element={<Match2022Meeting/>}/>
 <Route path='/Feb2022Meeting' element={<Feb2022Meeting/>}/>
 <Route path='/June2022Meeting' element={<June2022Meeting/>}/>
 <Route path='/Sept2022Meeting' element={<Sept2022Meeting/>}/>
 <Route path='/Oct2019Meeting' element={<Oct2019Meeting/>}/>
 <Route path='/Constitution' element={<Constitution/>}/>
 <Route path='/SignIn' element={<SignIn/>}/>
 </Routes> 
    </AppHeader>
   </APP> 
</AuthProvider>
   </>
  );
}

export default App;

const APP = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const AppHeader = styled.div`
position:absolute;
width:100%;
height:100%;
box-sizing:border-box;
left:0;
right:0;
bottom:0;
top:0;


`

