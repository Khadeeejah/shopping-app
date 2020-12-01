import React, { Component } from 'react'
import './App.css';
import Header from './Component/global/Header'
import Section1 from './Component/main/Section1';
import Section2 from './Component/main/Section2';
import Section3 from './Component/main/Section3';
import Footer from './Component/main/Footer';
export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>  
        <Footer/>
      </div>
    )
  }
}

export default App
