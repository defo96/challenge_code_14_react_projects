import React, { useState } from 'react';
import styled from 'styled-components';
//import Proptypes from 'prop-types';

const StyledContainer = styled.div`
height: 90vh;
width: 99vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`


const Steledinput = styled.div`
display: flex;
gap: 350px;
`
const Styledh1 = styled.h1`
font-family: sans-serif;
text-align: center;
`

const Styledp = styled.p`
font-family: sans-serif;
font-size: 1.2em;
font-weight: bold;
text-align: center;
`


function Text() {
   
   
    const [name, setName] = useState('Name')
    const [date, setDate] = useState('DoB')

    function handelName(e){
        console.log('mabou')
       setName(e.target.value)
    }
    function handelDate(e){
        
        setDate(e.target.value)
    }
    return (
      <StyledContainer>
            <div>
                <Styledh1> {name.toUpperCase()} </Styledh1>
                <Styledh1> {date} </Styledh1>
                <Styledp> Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. 
                    Ipsa molestias autem, numquam
                    possimus nulla quasi, accusamus ipsam 
                    et quia temporibus commodi. <br></br>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ipsam nostrum ratione, 
                    veniam culpa nam maiores libero hic amet 
                    tenetur quibusdam distinctio,
                </Styledp>
                
            </div>
            <Steledinput>
                <input type="date" onChange={(e)=>{handelDate(e)}}/>
                <input type="text" onChange={(e)=>{handelName(e)}}></input>
            </Steledinput>
        
      </StyledContainer>
    );
  }
export default Text