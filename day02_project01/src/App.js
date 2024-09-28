import React, { useState } from 'react';
import Styled from 'styled-components'
import UnLock from './Unlock/index.jsx'
import Lock from './Lock/index.jsx'


const StyledContainer = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
function App() {

  const [islock, setislock] = useState(true)
  return (<StyledContainer>
            {islock? <Lock islock={ islock } setislock= { setislock} /> :<UnLock islock={ islock } setislock={ setislock} />
               }
              
           </StyledContainer>
           
  );
}

export default App;
