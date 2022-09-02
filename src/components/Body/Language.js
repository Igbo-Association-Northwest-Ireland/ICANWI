import React from 'react'
import styled from 'styled-components'

const Language = () => {
  return (
  

<div className="languages mt-5">
<h5 className="text-center p-3" style={{backgroundColor: '#40336B', 
  marginBottom: '1px', textShadow: '2px 3px 6px rgba(98, 10, 150, 0.548)', color:'white'}}
  >Igbo Language  - Family Challenge in Diaspora</h5>
  <div className="language-inner ">
    <div className="lan b head row bg-warning w-100vw p-5"><span className="lead" 
  > Being able to communicate with the wilder communities using Igbo language is our goal</span>
    </div>

{/*     language body starts here
 */}    
 
 <div className="language-container lan">
      <div className="row lang-row d">
        <div className="column-66 ">
     
          <h1 className="large-font">
            <b>Igbos Ashamed of Their Mother Tongue | Why..??
              </b></h1>
          <p className='page'><span className="page-header e"></span>
          <br/>language is a powerful tool for communicating emotions, thoughts, and ideas,
           and it is more effective when a native language is involved.
People's mother tongues are an integral part of their culture, 
as well as one of the most sociable skills. Unfortunately,
 the Igbo language has been constantly threatened with 
 negligence across the globe and is at risk of disappearing within our lifetimes.
  The fact that half of the Igbo population speaks foreign languages is concerning. 
  Globally, it is hard to pinpoint the number of languages less spoken than Igbo. Here are the facts
  that make Igbo worth learning

          </p>
          <button className="button">Explore the facts</button>
        </div>
        <UTUBE className="column-33">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/kdjp4JZpmHU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </UTUBE>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Language
 const UTUBE =styled.div`
 @media(max-width:786px){
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
 }

 `