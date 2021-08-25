
import './App.css';
import { createGlobalStyle } from 'styled-components'
import Card from './Card.js'

const GlobalStyle = createGlobalStyle`
  body{
    background: #2d2e36;
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
