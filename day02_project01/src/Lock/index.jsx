import React from 'react';
import Styled from 'styled-components'
import lock from  '../image/lock.svg'
import mer from  '../image/pexels-mer.jpg'

const StyledTitle = Styled.h1`
    text-align: center;
    font-size: 4em;
    font-family: sans-serif;
    color:  rgb(54,66,103);
`
const Styledlock = Styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;
`
const StyledContainer = Styled.div`
    width: 20vw;
    height: 60vh;
     background-image: url(${mer});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10vh;
`
function Lock({ islock, setislock}){
    function hundellock(){
            if(islock){
                setislock(false)
            }
    }
    return(
        <StyledContainer>
            <StyledTitle> Lock screen</StyledTitle>
            <Styledlock src={lock} onClick={hundellock}/>
        </StyledContainer>
    )
}

export default Lock