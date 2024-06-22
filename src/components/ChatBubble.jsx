import React from 'react'

const ChatBubble = () => {
  return (
    <div className='bg-[#66cb52] rounded-full w-14 h-14 bottom-8 right-8 cursor-pointer fixed transition duration-300 shadow-md hover:shadow-[#8fd6816d] z-50 flex'>
        <i class="bi bi-chat-fill text-4xl text-white m-auto hover:scale-125 transition duration-500"></i>
    </div>
  )
}

export default ChatBubble