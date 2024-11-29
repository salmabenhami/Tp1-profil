import React from 'react'
import Header from './component/header/header'
import Navigation from './component/navigation/navigation';
import Footer from './component/footer/footer';
import Profil from './component/content/profil'
import "./App.css";
function App(){
  return(
    <div>
      <header className='div1'>
        <Header/>
        <Navigation/>  
      </header> 
      <main>
        <Profil/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}
export default App