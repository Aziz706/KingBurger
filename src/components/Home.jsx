import React from 'react'
import { Section2 } from './Section-2/Section2'
import Section3 from './Section-3/Section-3'
import SectionPizza from './Section-4Pizza/Section-pizza'
import SectionFriedChick from './Section-5FriedChick/Section-friedChick'
import { Slider } from "../components/Section-1/Slider"
import SectionIceCream from './Section-6IceCream/Section-iceCream'
import SectionDessert from './Section-7Desserts/Section-Desserts'
import SectionDrinks from './Section-8Drinks/Section-Drinks'
import Section9 from './Section-9/Section9'

function Home() {
  return (
    <div>
      <Slider />  
        <Section2 />
      <Section3 />
      <SectionPizza />
      <SectionFriedChick />
      <SectionIceCream />
      <SectionDessert />
      <SectionDrinks />
      <Section9 /> 
    </div>
  )
}

export default Home