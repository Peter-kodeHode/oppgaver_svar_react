import React from "react";
import { 
    AboutUsOne, 
    AboutUsTwo }
 from "./AboutUsPage/aboutUsConsts";
 import AnimatedPage from "./AllPages/AnimatedPage";



 const AboutUsPage = () => {
     return (
    <AnimatedPage>
     <div>
         <AboutUsOne></AboutUsOne>
         <AboutUsTwo></AboutUsTwo>
     </div>
     </AnimatedPage>
     )
 };

 export default AboutUsPage;