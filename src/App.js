
import  './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import HeroImage from './components/Body/HeroImage';
import styled from 'styled-components';
import Navab from './components/Header/Navab';
import Activities from './components/Body/Activities';
import Myteam from './components/Body/Myteam';
import AboutUs from './components/Body/AboutUs';
import Videos from './components/Body/Videos';
import Footer from './components/Footer/Footer';
import { FaOtter } from 'react-icons/fa';
import CarouselVid from './components/Body/CarouselVid';
import Language from './components/Body/Language';
import './Body.scss';
import './Mediaquery.scss';
import Drops from './components/Header/DropdownContainer/Drops';
import Nativefood from './components/Footer/Nativefood';
import WhatweDo from './components/Body/WhatweDo';

function App() {
  return (
   <APP className='p-0 m-0 position-relative'>
   <Drops/>
    <HeroImage/>
    <AboutUs/>
    <WhatweDo/>
     <Myteam/>
     <Videos/>
     <Language/>
     <Nativefood/>
     <CarouselVid/>
    
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
background:#ff00;


`
