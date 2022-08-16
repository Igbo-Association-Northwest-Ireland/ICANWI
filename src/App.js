
import  './App.scss' 
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HeroImage from './components/Body/HeroImage';
import styled from 'styled-components';
import DropdownMenu from './components/Header/DropdownMenu';
import Navab from './components/Header/Navab';
import Activities from './components/Body/Activities';
import Myteam from './components/Body/Myteam';
import AboutUs from './components/Body/AboutUs';
import Videos from './components/Body/Videos';
import Footer from './components/Footer/Footer';
import { FaOtter } from 'react-icons/fa';
import './Fotter.css'

function App() {
  return (
   <APP className='p-0 m-0 position-relative '>

    <Navab/>
    <APPLET>
    <HeroImage/>
    </APPLET>
    <AboutUs/>
    <Activities/>
     <Myteam/>
     <Videos/>
     <Footer/>

   </APP>
  );
}

export default App;
const APP = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;

`
const APPLET = styled.div`
width:auto;
height:auto;
box-sizing:border-box;
background-color:#1e154e;


`
