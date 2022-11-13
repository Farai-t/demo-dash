import React from 'react'

const Quote = () => {
  return (
    <form className=' mt-10 py-3 h-auto px-2 w-full lg:pr-8 border'>
        <div className='mb-6 flex justify-between'>
            <span>Logo</span>
            <div>Address</div>
        </div>
        <div className='grid grid-cols-4 gap-2 text-center'>
          <div>12</div>
          <div>12</div>
          <div>12</div>
          <div>12</div>
        </div>
    </form>
  )
}

export default Quote