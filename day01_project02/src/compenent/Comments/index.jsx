import React, {useEffect, useState} from 'react';
import Styled from 'styled-components'
import { Loader } from '../Load'


const StyledTitle = Styled.h1`
        color: rgb(15,148,163);
        font-family: sans-serif;
        font-size: 2em;
`

const StyledComments = Styled.div`
    border-radius: 20px;
    margin: 5px;
`

const StyledName = Styled.p`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color:  rgb(35,80,219);
    color: white;
    font-family: sans-serif;
    font-size: 1.5em;
    padding: 10px;
`
const StyledEmail = Styled.p`
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color:  rgb(35,80,219);
    color: white;
    font-family: sans-serif;
    font-size: 1em;
    padding: 15px;
`
const StyledBody = Styled.p`
    font-family: sans-serif;
    font-size: 1.2em;
    padding: 5px;
`


function Comments(){
    const [data, setData] = useState([]) 
    const [isLoading, setIsLoading] = useState(false);
   
    useEffect(()=>{

        const takeComments  = async ()=> {
            setIsLoading(true)
            try{
                const post = await fetch('https://jsonplaceholder.typicode.com/comments')
                const result = await post.json()
                
                setData(result)
               
            }catch (error) {
                console.error('Error fetching  data:', error)
              
            }finally {
                setIsLoading(false); // Set loading state to false after fetching (or error)
            }
            };
        
        takeComments()
          }, []);


    return (<div>
                <StyledTitle>Comments</StyledTitle>
                
                {isLoading ? <Loader/> : data.map((comment) => (
                <StyledComments key={comment.id}>
                    <StyledName>{comment.name}</StyledName>
                    <StyledBody> {comment.body}</StyledBody>
                    <StyledEmail>{comment.email}</StyledEmail>
                </StyledComments>
                ))}
           </div>
        
    )
}

export default Comments;