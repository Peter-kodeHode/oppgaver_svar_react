import React from "react";
import 
  MainPageOne
  from "./MainPage/mainPageConsts";
import AnimatedPage from "./AllPages/AnimatedPage";



  const MainPage = () => {
    return (
      <AnimatedPage>
      <div>
      <MainPageOne/>
      {/* <MainPageForm/> */}
      </div>
      </AnimatedPage>
    );
};

export default MainPage;