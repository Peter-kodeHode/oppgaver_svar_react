import styled from "styled-components";

export const NavBar = styled.div`
    background: black;
    display:flex;
    width:100%;
    height:100px;
`

export const NavButtons = styled.button`
    height:50px;
    width:100px;
    background-color: blue;
    color:White;
    font-size:15px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.500);
    border-radius: 50%;
    border-style:none;
    margin:25px;
    transition: 500ms;
    &:hover{
        transform: scale(1.2);
        transition: 500ms;
        background-color: cyan;
        font-size: 20px;
    }
    &:active{
        background-color: greenyellow;
        transition: 1ms;
    }
`

export const Arrow = styled.img`
    rotate: ${props => props.right ? "180deg" : "0"};
    background:green;
    transition: 500ms;
    border-radius: 50%;
    padding:10px;
    margin:auto;
    &:hover{
        transform: scale(1.2);
        transition: 500ms;
        background-color: greenyellow;
    }
    &:active{
        background-color:aqua;
        transition: 1ms;
    }
`

