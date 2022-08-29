import React from 'react'
import styled from 'styled-components';
import abacha from '../image/abacha.jpg';
import oji from '../image/ojiOse.jpg';
import nqwobi from '../image/nqwobi.jpg';
import pammy from '../image/pammy.jpg';
import video1 from '../video/bg-video.mp4';
import {Card, Row, Col, Grid} from 'react-bootstrap';

const Nativefood = () => {
  return (


    <div className=' contcaianer-fluid position mt-3 mb-3 food-cover'>

   <Row className='significant-items w-100 pt-2 pb-3 text-center'>
            <h3 className='text-slate-800'>
                Significant Cultural Items | Amazing Native Edibles </h3>
        </Row>
    <ROWS>


    <COL className = 'col col-pammy'>
    <Card  className='cards card-pammy'>
      <div variant="top" className='pammy-img'>
      </div>
      <Card.Body className='cards-body'>
        <Card.Title>Pammy</Card.Title>
        <Card.Text>
        Pammy is an alcoholic Nigerian side beverage that plays an essential role in traditional activities in Igbo lands. Similar to Kolanut, it is used for rituals and traditional marriage ceremonies. 
        </Card.Text>
      </Card.Body>
      </Card>
      </COL>
        <COL className='col col-nqwobi'>
    <Card  className='cards card-nqwobi'>
      <div variant="top" className='Nqwobi-img'>
      </div>
      <Card.Body className='cards-body'>
        <Card.Title>Nqwobi</Card.Title>
        <Card.Text>
        There are some types of dishes that are associated with people's origins. Nqwobi is a good example of that dish as its origin can be traced back to the Igbo tribe__the eastern part of Nigeria. {/* Formerly, bush meats were used to prepare Nqwobi. But nowadays, Nqwobi can be prepared using cow legs, spicy sauces, and herbs such as Utazi-leaf and Nchanwu. The sauce is thickened with a chemical substance called Okanwu, which actually foams up the stew. The instance is traditionally referred to as Igbangu. Nqwobi is considered an antidote to alcohol intoxication, and as such, it is preferablly taken with alcohol.  */}
        </Card.Text>
      </Card.Body>
      </Card>
      </COL>
        <COL className='col col-abacha'>
    <Card  className='cards card-abacha'>
      <div variant="top" className='abacha-img'>
      </div>
      <Card.Body className='cards-body'>
        <Card.Title>Abacha</Card.Title>
        <Card.Text>
        Abacha, commonly known as African salad, is a dish made from cassava, but what makes it unique is the ingredients used in its preparation. A typical Abacha meal is best prepared with a variety of dried fishes but here's a complete version of the Abacha with all the possible ingredients
        </Card.Text>
      </Card.Body>
      </Card>
      </COL>
        <COL className='col col-oji'>
    <Card  className='cards card-ose'>
      <div variant="top" className='oji-img'>
      </div>
      <Card.Body className='cards-body'>
        <Card.Title>Oji-Ose</Card.Title>
        <Card.Text>
        It is impossible to overstate the historical significance and importance of kolanut to the Igbos due to its numerous roles. Among the Igbos, it represents acceptance, cooperation, and solidarity. Guests are usually offered it as a way to make them feel welcome by their hosts.
        </Card.Text>
      </Card.Body>
      </Card>
      </COL>
      </ROWS>
   </div>

  )
}
export default Nativefood
const ROWS = styled(Row)`

 display:grid;
 grid-template-columns:repeat(4, auto);
 justify-items:center;
 align-items:center;
 @media(max-width:992px){
  grid-template-columns:repeat(2, auto);
 }
 @media(max-width:786px){
  grid-template-columns:repeat(1, auto);
 }
 .col{
  padding:2% !important;
  min-width:15rem !important;

 @media(max-width:786px){
  max-width: 100% !important;
  min-width:100% !important;
 padding:2% !important;
}
 
/* .col-oji{
  background:green;
}
.col-abacha{
  background:red;
}
.col-pammy{
  background:black;
}
.col-nqwobi{
  background:gray;
} */
}
`
 

const COL = styled(Col)`
`
