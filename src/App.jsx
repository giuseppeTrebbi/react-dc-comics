import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { headerNav } from './assets/data/navigation'
import comics from './assets/data/comics'
import { shopLinks } from './assets/data/navigation'


function App() {
  return (
    <>
    <Header navLinks={headerNav} />
    <Main comicsArray={comics} iconsArray={shopLinks}></Main>
    <Footer></Footer>
    </>
  )
}

export default App
