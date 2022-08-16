import React from 'react'
import {Button, Container, Form, Nav, Navbar, Image, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components'
import { BiSearch, FaSearch } from "react-icons/fa";




const Forms = () => {
  return (
    <div>
<Searcher className="d-flex relative left-64 ">
            <Form.Control
            placeholder="Search"
            className="searches"
            aria-label="Search"
             style={{
                    borderTopRightRadius: '1rem',
                    borderBottomLeftRadius: '1rem',
                    outline:'none',
                    padding:'5px 0 0 15px',
            }}/>
          <Icons2 style={{color:'black'}}/>
        </Searcher>
    </div>
  )
}

export default Forms
const Icons2 = styled(FaSearch)`
color:black !important;
position:absolute;
font-size:1.3rem;
right:5%;
bottom:50%;
top:20%;
z-index:80;
cursor: pointer;
padding:0px !important;
`
const Searcher = styled(Form)`
color:black;
min-width:auto;
min-height:auto;
position:relative;
font-size:1.8rem;
border-bottom-left-radius: 1rem !important;
border-top-right-radius: 1rem !important;
;&:focus{
    outline:none !important;
    border-top:none;
}
`