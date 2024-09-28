import React,  { useState } from 'react';
import Styled from 'styled-components'
import lune from  '../image/pexelslune.jpg'
import '../Style/index.css'



const StyledTitle = Styled.h1`
    text-align: center;
    font-size: 4em;
    font-family: sans-serif;
    color: white
`

const StyledContainer = Styled.div`
    width: 20vw;
    height: 60vh;
    background-image: url(${lune});
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

function UnLock({ islock, setislock}){

    const [value, setvalue] = useState(0)
 
    

        const hundelUnlock = (e) => {
            console.log((!islock) && (e.target.value === '10'))
            if((!islock) && (e.target.value === '10')){
                setislock(true)
                e.target.value = '0'
            }
            e.preventDefault()
            setvalue(e.target.value)
          };

  
    



  
    return(
            <StyledContainer>
                <StyledTitle> Unlock screen</StyledTitle>
                <input type="range" min="0" max="10" value={value} step={0.01} onChange={hundelUnlock}  >
                </input>
            </StyledContainer>
    )
}

export default UnLock