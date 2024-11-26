import React from 'react'
import cake from '../../assets/cake/cake.jpg'
import dessert from '../../assets/dessert/dessert.jpg'
import noodles from '../../assets/noodles/noodles.jpg'
import pasta from '../../assets/pasta/pasta.jpg'
import rolls from '../../assets/rolls/rolls.jpg'
import salad from '../../assets/salad/salad.jpg'
import sandwich from '../../assets/sandwhich/sandwich.jpg'
import veg from '../../assets/veg/veg.jpeg'


const Topmenu = () => {
  return (
    <div className='container mx-auto flex justify-around overflow-y-auto mt-5 ps-5 md:ps-0'>

        {/* menu 1 */}
      <div className='mx-2 flex-col p-2'>
        <img className='h-32 w-32 rounded-full' src={cake} alt="Cake" />
        <p className='text-black opacity-80 font-semibold mx-10'>Cake</p>
      </div>

       {/* menu 2 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full' src={dessert} alt="Dessert" />
        <p className='text-black opacity-80 font-semibold mx-9'>Dessert</p>
      </div>

       {/* menu 3 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full' src={noodles} alt="Noodles" />
        <p className='text-black opacity-80 font-semibold mx-9'>Noodles</p>
      </div>

       {/* menu 4 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full' src={pasta} alt="Pasta" />
        <p className='text-black opacity-80 font-semibold mx-9'>Pasta</p>
      </div>

       {/* menu 5 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full ms-2' src={rolls} alt="Rolls" />
        <p className='text-black opacity-80 font-semibold mx-12'>Rolls</p>
      </div>

       {/* menu 6 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full ms-4' src={salad} alt="Salad" />
        <p className='text-black opacity-80 font-semibold mx-14'>Salad</p>
      </div>

       {/* menu 7 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full' src={sandwich} alt="Sandwich" />
        <p className='text-black opacity-80 font-semibold mx-7'>Sandwich</p>
      </div>

       {/* menu 8 */}
       <div className='mx-2 p-2'>
        <img className='h-32 w-32 rounded-full' src={veg} alt="Vegetable" />
        <p className='text-black opacity-80 font-semibold mx-10'>Vegetable</p>
      </div>
      
    </div>
  )
}

export default Topmenu
