import React from "react";
import { useNavigate } from 'react-router';


export const MainPageOne = () => {
    return (
    <div className="mainPage">
        <h1>This is the main page!</h1>
    </div>)
}

export const MainPageForm = () => {

    function Redirect() {
        let navigate = useNavigate();
        function handleClick() {
          navigate(-1)
        }}
    return(
        
        <form action="/form-submit" method="post">
            <ul>
                <li>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="user_name"></input>
                </li>
                <li>
                    <label htmlFor="mail">E-mail: </label>
                    <input type="email" id="mail" name="user_mail"></input>
                </li>
                <li>
                    <label htmlFor="message">Message: </label>
                    <textarea type="text" id="message" name="user_message"></textarea>
                </li>
                <li>
                    <button type="submit" onClick={Redirect}>Submit</button>
                </li>
            </ul>
        </form>
    )
}