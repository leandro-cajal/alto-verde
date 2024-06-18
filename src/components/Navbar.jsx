import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-7 text-lg font-quicksand pt-2 '>
        <a className='hover:text-orange-500' href="">Nosotros</a>
        <a className='hover:text-orange-500' href="">Amenities</a>
        <a className='hover:text-orange-500' href="">Habitaciones</a>
        <a className='hover:text-orange-500' href="">Restaurant</a>
        <a className='hover:text-orange-500' href="">Galeria</a>
        <a className='hover:text-orange-500' href="">Ubicación</a>
        <a className='hover:text-orange-500' href="">Contacto</a>
      </nav>
    </div>
  )
}

export default Navbar