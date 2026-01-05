import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { headerNav } from './assets/data/navigation'


function App() {
  return (
    <>
    <Header navLinks={headerNav} />
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App
