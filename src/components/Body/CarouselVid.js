import React from 'react'
import women from '../image/womenGpic.JPG'
import men from '../image/menGpic.JPG'
import { Button } from 'react-bootstrap'


const CarouselVid = () => {
  return (
    
    <div className="carol-2"> 
    <div className="container pb-3">
<div className="carousel-example-2 carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
{/* <!--Indicators-->
 */}
 <ol className="carousel-indicators">
<li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
<li data-target="#carousel-example-2" data-slide-to="1"></li>
<li data-target="#carousel-example-2" data-slide-to="2"></li>
</ol>
    <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view">
        <img className="d-block w-100" src={men} alt="First slide"/>
        <div className="mask rgba-black-light"></div>
      </div>
      <div className="carousel-caption">
      <Button className='bg-transparent border-0' style={{color:'white', fontWeight:'500', fontFamily:'   font-family: Arial, Helvetica, sans-serif', fontSize:'1.2rem'}}>Click to explore our Gallary</Button>
      </div>
    </div>
  </div>
  
  <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
{/*   <!--/.Controls-->
 */}  </div>
</div>
</div>

 
  )
}
export default CarouselVid
