import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='gap-7 text-lg font-quicksand pt-2 text-[#0D1821] hidden lg:flex'>
        <a className='link-active cursor-pointer link-custom transition-colors' href="">Inicio</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Nosotros</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Amenities</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Habitaciones</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Restaurant</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Galería</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Ubicación</a>
        <a className='hover:text-secondary cursor-pointer link-custom transition-colors' href="">Contacto</a>
      </nav>
    </div>
  )
}

export default Navbar