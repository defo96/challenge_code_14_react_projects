import React, {useEffect, useState} from 'react';
import Styled from 'styled-components'
import { Loader } from '../Load'


const StyledTitle = Styled.h1`
        color: rgb(15,148,163);
        font-family: sans-serif;
        font-size: 2em;
`
const StyledSousTitle = Styled.h2`
    font-family: sans-serif;
    font-size: 1.2em;
    font-weigh: bold;
`
const StyledPost = Styled.div`
    border: 1px solid rgb(15,148,163);
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    box-shadow: 10px 10px 5px grey;
`

function Post(){
   const [data, setData] = useState([]) 
   const [isLoading, setIsLoading] = useState(false);
   
    useEffect(()=>{

        const takePost  = async ()=> {
            setIsLoading(true)
            try{
                const post = await fetch('https://jsonplaceholder.typicode.com/posts')
                const result = await post.json()
                
                setData(result)
                
            }catch (error) {
                console.error('Error fetching  data:', error)
              
            }finally {
                setIsLoading(false); // Set loading state to false after fetching (or error)
            }
            };
        
        takePost()
          }, []);


    return (<div>
                <StyledTitle>
                    Posts
                </StyledTitle>
                
                {isLoading ? 
                <Loader/> : data.map((post) => (
                <StyledPost key={post.id}>
                    <StyledSousTitle>{post.title}</StyledSousTitle>
                    <p>{post.body}</p>
                </StyledPost>
                ))}
            </div>
        
    )
}

export default Post;