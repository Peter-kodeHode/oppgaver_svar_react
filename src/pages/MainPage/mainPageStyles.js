import styled from "styled-components";

export const MainPageDiv = styled.div`
    max-width:100%;
    max-height:100wh;
`

 export const CoolH1  = styled.h1`
 background-color: ${props => props.primary ? "palevioletred" : "lightblue"};
 color: ${props => props.primary ? "white" : "black"};
 font-size:4em;
 transition:500ms;
 &:hover{
     color:black;
     font-size:5em;
     transition:500ms;
 }
`

export const LessCoolH1 = styled.h1`
    font-size:larger;
    color: green;
`
export const CoolH1Green = styled(CoolH1)`
color:green;
`