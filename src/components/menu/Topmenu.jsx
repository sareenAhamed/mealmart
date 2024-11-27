import React, { createContext, useState } from 'react'
import cake from '../../assets/cake/cake.jpg'
import dessert from '../../assets/dessert/dessert.jpg'
import noodles from '../../assets/noodles/noodles.jpg'
import pasta from '../../assets/pasta/pasta.jpg'
import rolls from '../../assets/rolls/rolls.jpg'
import salad from '../../assets/salad/salad.jpg'
import sandwich from '../../assets/sandwhich/sandwich.jpg'
import veg from '../../assets/veg/veg.jpeg'

const foodContext = createContext()

const Topmenu = () => {
  const foodList = [
    {image: cake, name: "Cake", type: "cake"},
    {image: dessert, name: "Dessert", type: "dessert"},
    {image: noodles, name: "Noodles", type: "noodles"},
    {image: pasta, name: "Pasta", type: "pasta"},
    {image: rolls, name: "Rolls", type: "rolls"},
    {image: salad, name: "Salad", type: "salad"},
    {image: sandwich, name: "Sandwich", type: "sandwich"},
    {image: veg, name: "Pure Veg", type: "veg"},
  ]
    
  

  return (
    <div className='container mx-auto flex justify-around overflow-x-auto scrollbar-hide scroll-snap-x mandatory mt-5 ps-5 md:ps-0 '>

       {
        foodList.map((food) => (
          <div className='mx-2 flex-col p-2 scroll-snap-start'>
            <img className='h-32 w-32 rounded-full' src={food.image} alt="Cake" onClick={() => setFoodType(food.type)}/>
            <p className='text-black opacity-80 font-semibold mx-10'>{food.name}</p>
          </div>
        ))
       }

      
      
    </div>
  )
}

export default Topmenu
