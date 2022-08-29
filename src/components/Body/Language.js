import React from 'react'
import styled from 'styled-components'

const Language = () => {
  return (
  

<div className="languages mt-5">
<h5 className="text-center p-3" style={{backgroundColor: '#6351ce', 
  marginBottom: '1px', textShadow: '2px 3px 6px rgba(98, 10, 150, 0.548)', color:'white'}}
  >Igbo Language  - Family Challenge in Diaspora</h5>
  <div className="language-inner">
    <div className="lan head row bg-warning w-100vw p-5"><span className="lead" 
  > Being able to communicate with the wilder communities using Igbo language is our goal</span>
    </div>
    <div className="language-container">
      <div className="row lang-row">
        <div className="column-66">
     
          <h1 className="large-font">
            <b>What makes Igbo worth learning</b></h1>
          <p className='page'><span className="page-header">Igbos don't have much pride in their mother tongue | Why..??</span>
          <br/>language is a powerful tool for communicating emotions, thoughts, and ideas,
           and it is more effective when a native language is involved.
People's mother tongues are an integral part of their culture, 
as well as one of the most sociable skills. Unfortunately,
 the Igbo language has been constantly threatened with 
 negligence across the globe and is at risk of disappearing within our lifetimes.
  The fact that half of the Igbo population speaks foreign languages is concerning. 
  Globally, it is hard to pinpoint the number of languages less spoken than Igbo. 
  An answer to the question of why 
  Igbos don't take pride in their mother tongue would be helpful

          </p>
          <button className="button">What is your take</button>
        </div>
        <UTUBE className="column-33">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/kdjp4JZpmHU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
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