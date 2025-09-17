import { Component } from 'react'
import './App.css'
import tw from "tailwind-styled-components"
import Wanted from './components/Wanted'
import backgroundOnePiece from './assets/backgroundop.png'

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    `

class App extends Component {

  render(){
    return (
      <Container  >
        <Wanted />
      </Container>
        

    )
  }
}

export default App;
