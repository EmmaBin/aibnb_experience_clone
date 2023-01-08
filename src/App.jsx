import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardsData from './data'

function App() {
  const cardsInfo = cardsData.map(data=>{

    return <Card img ={data.coverImg}
                  rating={data.stats.rating}
                  reviewCount={data.stats.reviewCount}
                  location={data.location}
                  title={data.title}
                  price={data.price}
                  id={data.id}
    />
  })
 

  return (
    <>
    <Navbar />
    <Hero />
    <section className='card-list'>
    {cardsInfo}
    </section>
    
    </>
    
  )

}

export default App
