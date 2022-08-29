import React from 'react'
import children from '../image/childrenGpic.JPG'
import women from '../image/womenGpic.JPG'
import men from '../image/menGpic.JPG'
import { Button } from 'react-bootstrap'


const CarouselVid = () => {
  return (
    
    <div className="carol-2"> 

{/* <h5 class="text-center p-3 bg-slate-100 larger py-4" style={{fontSize:'2rem',
  marginBottom: '1px', boxShadow: '2px 3px 6px rgba(98, 10, 150, 0.548)'}}
  ><span className='btn btn-customised btn-outline-info'>Click to Explore our Gallary</span> </h5> */}
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
    <div className="carousel-item">
{/*       <!--Mask color-->
 */}      <div className="view">
        <img className="d-block w-100" src={women} alt="Second slide"/>
        <div className="mask rgba-black-light"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Thir is the second title</h3>
        <p>Secondary text</p>
      </div>
    </div>
    <div className="carousel-item">
{/*       <!--Mask color-->
 */}      <div className="view">
        <img className="d-block w-100" src={children} alt="Third slide"/>
        <div className="mask rgba-black-light"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">This is the third title</h3>
        <p>Third text</p>
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
