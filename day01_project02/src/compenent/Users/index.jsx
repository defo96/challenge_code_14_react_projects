import React, {useEffect, useState} from 'react';
import Styled from 'styled-components'
import { Loader } from '../Load'


const StyledTitle = Styled.h1`
        color: rgb(15,148,163);
        font-family: sans-serif;
        font-size: 2em;
`

const StyledUsers = Styled.div`
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

const StyledVide = Styled.p`
    height: 3px;
`

function Users(){
    const [data, setData] = useState([]) 
   const [isLoading, setIsLoading] = useState(false);
   
    useEffect(()=>{

        const takeUsers  = async ()=> {
            setIsLoading(true)
            try{
                const post = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await post.json()
                
                setData(result)
                
            }catch (error) {
                console.error('Error fetching  data:', error)
              
            }finally {
                setIsLoading(false); // Set loading state to false after fetching (or error)
            }
            };
        
        takeUsers()
          }, []);

    return (<div>
                <StyledTitle>Users</StyledTitle>
                
                {isLoading ? <Loader/> : data.map((user) => (
                <StyledUsers key={user.id}>
                    <StyledName>{user.name}</StyledName>
                    <StyledVide> </StyledVide>
                    <StyledEmail>{user.email}</StyledEmail>
                </StyledUsers>
                ))}
           </div>
        
    )
}

export default Users;