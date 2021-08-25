

import { createGlobalStyle } from 'styled-components'
import Card from './Card.js'

const GlobalStyle = createGlobalStyle`

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
      <Card
        title="An Above Average Experience"
        content="Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty."
       />
    </div>
  );
}

export default App;
