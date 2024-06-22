import React, { useState } from 'react'

const LanguageSelector = () => {

  const [isClicked, setIsClicked] = useState(false);
  const languages = ["Español", "English", "Português"]
  const [languageSelected, setLanguageSelected] = useState(0);

  function handdleClicked() {
    setIsClicked(!isClicked);
  }
  function changeLanguage(idx) {
    setLanguageSelected(idx)
  }

  return (
    <div className='flex items-center justify-center gap-1 relative cursor-pointer select-none text-primary hover:text-secondary'>
      <div className='flex items-center justify-center' onClick={handdleClicked}>
        <button className='text-sm font-semibold w-[90px]'>{languages[languageSelected]}</button>
        <i class=" bi bi-chevron-down text-sm"></i>
      </div>
      <ul className={`flex flex-col absolute text-xs z-40 bg-new-white bottom-[-7.5rem] shadow-lg left-2 w-28 px-2 rounded-b border ${isClicked ? "block" : "hidden"} `}>
        {languages.map((language, index) => (
          <li
            key={index}
            className='py-2 text-black hover:text-secondary flex items-center gap-2'
            onClick={() => changeLanguage(index)}
          >
            <img
              className='w-6 h-6 rounded-full object-cover'
              src={`./src/assets/images/flags/${index}.png`}
              alt=""
            />
            {language}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSelector