import React from 'react'

const HeaderPhone = () => {
    return (
        <div className='bg-[#1b7d07] text-white w-full flex h-full py-2'>
            <div className='mx-auto flex items-center gap-2 cursor-pointer'>
                <i class="bi bi-telephone"></i>
                <span className='font-semibold'>0800-0000-000</span>
                <span className='text-sm uppercase'>Reserva directa</span>
            </div>
        </div>
    )
}

export default HeaderPhone