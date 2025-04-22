import React from "react";

import Hero from "../../components/Hero";
import LandingLayout from "./LandingLayout.js";
import Bio from "../../components/Bio";
import Works from "../../components/Works.js";
import Contact from "../../components/Contact.js";
import FadeInSection from '../../components/FadeInSection';

import  { useEffect } from 'react';


export default function Landing(props) {

 
  const isInViewport=(el)=> {
    const rect = el.getBoundingClientRect();

 

 
    return (
        (!(rect.bottom < window.innerHeight/5 || rect.top > (window.innerHeight-window.innerHeight/5 || document.documentElement.clientHeight-window.innerHeight/5)  ))
//(rect.top>=0 &&  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)  )||  (rect.top<=0 &&  rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)  )

    );
}

  const handleScroll = (e) => {
    
    if(isInViewport(document.getElementById("Bio"))) props.setActive("Bio");
    else if(isInViewport(document.getElementById("Contact"))) props.setActive("Contact");
    else if(isInViewport(document.getElementById("About"))) props.setActive("About");
    
    else if(isInViewport(document.getElementById("Projects"))) props.setActive("Projects");
	};

 
  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run once on mount/unmount

  return (
    
    <div className="App-main"> 
      <LandingLayout  >
      
      <div ref={props.refs["About"]}  className="landing-div">
      <FadeInSection>
        <Hero
          title="iZaac"
          subtitle=" Web Developer | Graphic Designer"
          image="./../icons8-youtube-48.png"
          ctaText="Indie Game Development Studio"
          ctaLink="/works"
        />  </FadeInSection>
      
       
        </div> 
        
        <FadeInSection>
        <div className="landing-div" ref={props.refs["Bio"]}> <Bio  title="iZaac" subtitle=" Web Developer | Graphic Designer"/>  </div> 
        </FadeInSection>
       
          
        <FadeInSection>
        <div className="landing-div" ref={props.refs["Projects"]} ><Works/></div>
        </FadeInSection>
        
      <div className="landing-div" ref={props.refs["Contact"]} ><Contact></Contact> </div>  
     
      </LandingLayout>

    </div>
  );


}
