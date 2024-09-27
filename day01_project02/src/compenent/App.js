import React, {useState} from 'react';
import Styled from 'styled-components'
import Post from './Post'
import Comments from './Comments'
import Users from './Users'
import postImage from '../image/post.svg'
import commentImage from '../image/comments.svg'
import userImage from '../image/users.svg'

const StyledTitle = Styled.h1`
text-align: center;
margin-top: 30px;
margin-bottom:100px;
font-family: sans-serif;
font-size: 5em;
`
const Styledimage = Styled.img`
width: 20px;
height: 20px;
`
const StyledContainerButton= Styled.div`
display: flex;
gap:10px;
margin: 50px;
`
const Styledbutton = Styled.button`
display: flex;
align-items: center;
gap: 4px;
padding: 0.5% 1%;
background-color:  rgb(15,148,163);
font-family: sans-serif;
font-size: 1em;
color: white;
border-radius: 10px;
cursor: pointer;
border: none;
&:hover{
background-color : rgb(132,236,247)

}
`
const StyledSousTitle = Styled.h1`
        color: rgb(15,148,163);
        font-family: sans-serif;
        font-size: 2em;
`

function App() {
  const [post, setpost] = useState(false)
  const [users, setusers] = useState(false)
  const [comments, setcomments] = useState(false)

  function hundelVal(){
     if (post){
      setpost(false)
     }
     if(users){
      setusers(false)
     }
     if(comments){
      setcomments(false)
     }
  }
  
  
  return (
    <div>
      <StyledTitle>Testimonials</StyledTitle>

      <StyledContainerButton>
        <Styledbutton onClick={()=>{
          hundelVal()
          setpost(true)
        }}>
          <Styledimage src={postImage} alt={'post.svg'}/> 
          Posts
        </Styledbutton>

        <Styledbutton onClick={()=>{
          hundelVal()
          setusers(true)
        }}>
          <Styledimage src={userImage} alt={'users.svg'}/>
          Users
        </Styledbutton>

        <Styledbutton onClick={()=>{
          hundelVal()
          setcomments(true)
        }}>
           <Styledimage src={commentImage} alt={'comments.svg'}/>
          Comments
        </Styledbutton>

      </StyledContainerButton>

      { post ? <Post/> : users ? <Users/> : comments ? <Comments/>:<StyledSousTitle> Select from above! </StyledSousTitle> }
    
    </div> 
  )
}

export default App;
