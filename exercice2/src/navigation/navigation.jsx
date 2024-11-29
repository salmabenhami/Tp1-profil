import React from "react";
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="../App.js">Profil</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
