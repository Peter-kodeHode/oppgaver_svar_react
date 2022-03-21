import React from "react";
import {CoolH1,
     LessCoolH1,
     MainPageDiv,
     CoolH1Green,
} from "./mainPageStyles";



const MainPageOne = () => {

    return (
        
    <MainPageDiv>
            <LessCoolH1>This is the main page!</LessCoolH1>
            <CoolH1>ello I am styled-component😎</CoolH1>
            <CoolH1 primary>I am props styled component yo</CoolH1>
            <CoolH1Green>I am extended styled component and green</CoolH1Green>
        </MainPageDiv>

    );
};

// export const MainPageForm = () => {

//     function Redirect() {
//         let navigate = useNavigate();
//         function handleClick() {
//           navigate(-1)
//         }}
//     return(
        
//         <form action="/form-submit" method="post">
//             <ul>
//                 <li>
//                     <label htmlFor="name">Name: </label>
//                     <input type="text" id="name" name="user_name"></input>
//                 </li>
//                 <li>
//                     <label htmlFor="mail">E-mail: </label>
//                     <input type="email" id="mail" name="user_mail"></input>
//                 </li>
//                 <li>
//                     <label htmlFor="message">Message: </label>
//                     <textarea type="text" id="message" name="user_message"></textarea>
//                 </li>
//                 <li>
//                     <button type="submit" onClick={Redirect}>Submit</button>
//                 </li>
//             </ul>
//         </form>
//     )
export default MainPageOne;