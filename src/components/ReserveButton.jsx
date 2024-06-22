import React from 'react'

const ReserveButton = () => {
  return (
    <div>
      <button class="
        group
        p-5
        cursor-pointer 
        relative  
        font-semibold
        border-1 
        flex 
        items-center 
        justify-center
        bg-transparent
        hover:text-secondary
         text-primary
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
        <span class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
      border-primary
        transition-all
         duration-500">
        </span>
        <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200">RESERVAR</p>
        <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">RESERVÁ AHORA
        </span>
        <span
          class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r border-primary transition-all duration-500">
        </span>
      </button>
      {/* <button className='bg-primary rounded px-6 py-1.5 text-white uppercase font-semibold border-2 border-primary hover:bg-new-white hover:text-primary transition duration-500'>Reservar</button> */}
    </div>

  )
}

export default ReserveButton