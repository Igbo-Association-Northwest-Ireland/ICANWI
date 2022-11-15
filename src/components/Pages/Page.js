import React from 'react'
import Gallary from './Gallary';
import styled from 'styled-components'
import Footer from '../Footer/Footer';
import Drops from '../Home';
import Modals from '../Header/DropdownContainer/Modals';
import { motion } from "framer-motion"
import Label from './Label';
import Videos from './Videos';
import Minutes from './Minutes';
import Home from '../Home';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

const Page = () => {
return (
 <>

<PAGE className='PAGES'>
<Routes>
 <Route path='Gallary' element={<Gallary/>}/>
 <Route path='Videos' element={<Videos/>}/>  
 <Route path='Minutes' element={<Minutes/>}/>
 </Routes> 

 </PAGE>
</>

    )
}

export default Page

const PAGE = styled.div`


height:auto !important;
z-index:10;
`
