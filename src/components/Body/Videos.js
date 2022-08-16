import React from 'react'
import styled from 'styled-components';

const Videos = () => {
  return (

    <VIDEO className="section-5-container section-container" id="section-5">
    <div className="container">
        <div className="row">
            <div className="col section-5 section-description wow fadeIn my-4">
                <h2>Amazing Videos</h2>
                <div className="divider-1 wow fadeInUp"><span></span></div>
                <p>In our honour we have chosen to socialize in this way: Dancing, communion, wining and dinning</p>
            </div>
        </div>
        <div className="row brand">
            <div className="col-md-4 section-5-box wow fadeInUp">
                <div className="section-5-box-image">
                    
                    <video className="video-fluid z-depth-1 embed-responsive embed-responsive-16by9" autoplay loop controls muted>
                    <source src="/video/AfricaDay1.mp4" type="video/mp4" allowfullscreen/>
                  </video>
                
                </div>
                <h3><a href="#" color='#1e154e'>Acme branding</a> <i className="fas fa-angle-right"></i></h3>
                <div className="section-5-box-date"><i className="far fa-calendar"></i> June 2019</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="col-md-4 section-5-box wow fadeInDown">
                <div className="section-5-box-image">
                    
                    <video className="video-fluid z-depth-1 embed-responsive 
                    embed-responsive-16by9" autoplay loop controls muted>
                        <source src="/video/childreDance.mp4" type="video/mp4" 
                    allowfullscreen/>
                </video>
                
                </div>
                <h3><a href="#" color='#1e154e'>Created 150 flyers</a> <i className="fas fa-angle-right"></i></h3>
                <div className="section-5-box-date"><i className="far fa-calendar"></i> February 2019</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
            <div className="col-md-4 section-5-box wow fadeInUp">
                <div className="section-5-box-image">

                    <video className="video-fluid z-depth-1 embed-responsive 
                    embed-responsive-16by9" autoplay loop controls muted>
                        <source src="/video/ladiesDance.mp4" type="video/mp4" 
                    allowfullscreen/>
                </video>

                </div>
                <h3 color='#1e154e'><a href="#" color='#1e154e'>WordPress design</a> <i className="fas fa-angle-right"></i></h3>
                <div className="section-5-box-date"><i className="far fa-calendar"></i> November 2018</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </div>
        </div>
        <div className="row">
            <div className="col section-bottom-button wow fadeInUp">
                <a className="btn btn btn-customised btn-outline px-3 py-1 " href="#" role="button" 
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
h3>a{
    color:#1e154e !important;
text-decoration:none;
}



`
