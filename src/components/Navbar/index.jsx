// import React from 'react'
function Navbar( {ecellLogo}) {
  return (
    <div className="h-20 flex flex-row px-40 items-center w-full text-white bg-black border-b-2">
        <div className="h-auto justify-left items-left py-4 rounded-md">
          <img  src={ecellLogo} alt="image description" height={40} width={40}></img>
        </div>
        <div className="text-xl font-bold">E-CELL SIP Portal</div>
        
    </div>
  )
}

export default Navbar
