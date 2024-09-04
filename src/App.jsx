// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Banner } from './components/banner/banner.jsx'
import { Header } from './components/header/header.jsx'
import { Page2 } from './components/page2/page2.jsx'
import { Page3 } from './components/page3/page3.jsx'
import { Page4 } from './components/page4/page4.jsx'
// import { Page5 } from './components/page5/page5.jsx'
import { Page6 } from './components/page6/page6.jsx'

function App() {

  return (
    <>
     
     <Header/>
     {/* <Banner/> */}
     <Page2/>
     <Page3/>
     <Page4/>
     {/* <Page5/> */}
     <Page6/>
     
     
    </>
  )
}

export default App
