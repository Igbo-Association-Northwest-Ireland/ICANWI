import React from 'react'
import styled from 'styled-components';
import video1 from '../video/masq-vid.mp4'
import video2 from '../video/kidsdance.mp4'
import video3 from '../video/ladyvid.mp4'
import {FaQuoteLeft, FaQuoteRight, FaRegCalendarCheck} from 'react-icons/fa'
import {GoTriangleRight} from 'react-icons/go'

const Videos = () => {
  return (
    <VIDEO className="section-5-container section-container mt-10" id="section-5">
    <div className="container">
        <QUOTE className="row">
            <div className="col section-5 section-description wow fadeIn my-4">
                <h3 className='mt-1'>Groups | mission and Models</h3>
                <div className="divider-1 wow fadeInUp"><span></span></div>
                <span className='d-flex pt-2 pb-1'>

                <FaQuoteLeft/>
                <h5> Why our socializing model is based on entertainment</h5>
                <FaQuoteRight/>
                </span>
                <h6>
               Simply to promote a friendly community environment
                </h6>
            </div>
        </QUOTE>
        <div className="row brand mt-2">
            <div className="col-md-4 section-5-box wow fadeInUp">
                <div className="section-5-box-image">
                    
                    <video className="video-fluid z-depth-1 embed-responsive embed-responsive-16by9" autoPlay loop controls muted>
                    <source src={video1} type="video/mp4" allowFullScreen/>
                  </video>
                
                </div>
                <h5 className='mt-2 d-flex'><span href="#" color='#1e154e'>Culture and oneself</span><GoTriangleRight className='mt-1'/></h5>
                <div className="section-5-box-date d-flex "> June 2017 <FaRegCalendarCheck className='mt-1 mx-1'/></div>
                <p>Man without culture is like a tree without roots. 
                    Igbos are naturally endowed with diverse cultures and traditions, 
                    most of which were created to administer justice
                      </p>
            </div>
            <div className="col-md-4 section-5-box wow fadeInDown">
                <div className="section-5-box-image">
                    
                    <video className="video-fluid z-depth-1 embed-responsive 
                    embed-responsive-16by9" autoPlay loop controls muted>
                        <source src={video2} type="video/mp4" 
                    allowFullScreen/>
                </video>
                
                </div>
                <h5 className='mt-2 d-flex'><span href="#" color='#1e154e'>Created Memory</span><GoTriangleRight className='mt-1'/></h5>
                <div className="section-5-box-date d-flex "><i className="far fa-calendar"></i> December 2019 <FaRegCalendarCheck className='mt-1 mx-1'/></div>
                <p>Providing children with the opportunity to explore their
                     potential is the ultimate gift that they need to grow
                    </p>
            </div>
            <div className="col-md-4 section-5-box wow fadeInUp">
                <div className="section-5-box-image">

                    <video className="video-fluid z-depth-1 embed-responsive 
                    embed-responsive-16by9" autoPlay loop controls muted>
                        <source src={video3} type="video/mp4" 
                    allowFullScreen/>
                </video>

                </div>
                <h5 className='mt-1 d-flex'color='#1e154e'><span href="#" color='#1e154e'>End of the Year Party</span><GoTriangleRight className='mt-1'/></h5>
                <div className="section-5-box-date d-flex">
                <i className="far fa-calendar">
                </i> December 2019 <FaRegCalendarCheck className='mt-1 mx-1'/></div>
                <p>
                We live in a world that is unfairly divided,
                 and life itself dishes out depression and
                  descouragement at will. Viewing the world in a way
                   that promotes joy rather than suffering is our goal.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col section-bottom-button wow fadeInUp">
                <a className="btn btn btn-customised btn-outline px-3 py-1 " 
                href="#" role="button" 
                style={{border: '2px solid #1e154e',
                borderRadius:'10px', fontWeight:'700',
                color:'#1e154e' }}>
                    <i className="fas fa-sync"></i> Click to View more videos
                </a>
            </div>
        </div>
    </div>
</VIDEO>
  )
}

export default Videos
const VIDEO =  styled.div`

`
const QUOTE = styled.div`
position:relative;
   
h3{
    color:#1e154e !important;
text-decoration:none;
}
`
