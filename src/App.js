

import { createGlobalStyle } from 'styled-components'
import Card from './Card.js'

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
  }

  body{
      background: #2d2e36;
      height: 100vh;
      display:grid;
      place-items:center;
      margin:0;
      padding:0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Card/>
    </div>
  );
}

export default App;
