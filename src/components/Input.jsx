import React from 'react'

const Input = ({ type, placeholder, inputName, value, className }) => {
  return (
   <input type={type} placeholder={placeholder} name={inputName} value={value} className={`${className} focus:outline-none placeholder:text-[#767676] placeholder:text-[14px] placeholder:font-regular placeholder:font-DM border-b-2 border-[#D8D8D8] w-full pb-[16px]`}/>
  )
}

export default Input