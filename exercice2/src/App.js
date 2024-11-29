import React from 'react'
import Header from './header/header'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import Profil from './content/profil';
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