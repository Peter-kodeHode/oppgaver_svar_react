import React from "react";

export const MainPageOne = () => {
    return (
    <div className="mainPage">
        <h1>This is the main page!</h1>
    </div>)
}

export const MainPageForm = () => {
    return(
        <form action="/form-submit" method="post">
            <ul>
                <li>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="user_name"></input>
                </li>
                <li>
                    <label for="mail">E-mail: </label>
                    <input type="email" id="mail" name="user_mail"></input>
                </li>
                <li>
                    <label for="message">Message: </label>
                    <textarea type="text" id="message" name="user_message"></textarea>
                </li>
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
        </form>
    )
}