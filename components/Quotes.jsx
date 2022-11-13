import Link from 'next/link'
import React from 'react'

const Quotes = () => {
  return (
    <form>
        <h2 className='my-3 py-2 md:py-3 text-5xl lg:text-6xl items-end lg:py-4'>Quotes</h2>
        <div className='my-2 py-4 md:pr-4'>
            <div className='grid grid-cols-5 '>
                <div className='p-2 border rounded-tl border-black'>ID</div>
                <div className='p-2 border border-black'>Name</div>
                <div className='p-2 border border-black'>Location</div>
                <div className='p-2 border border-black'>Details</div>
                <div className='p-2 border rounded-tr border-black'>Amount</div>
            </div>
            <div>
                <Link href=''>
                    <a>
                        <ul>
                            <li>
                                <div className='grid grid-cols-5 '>
                                    <div className='p-2 border border-black'>quoteId</div>
                                    <div className='p-2 border border-black'>quoteName</div>
                                    <div className='p-2 border border-black'>location</div>
                                    <div className='p-2 border border-black'>details</div>
                                    <div className='p-2 border border-black'>amount</div>
                                </div>
                            </li>
                        </ul>
                    </a>
                </Link>
            </div>
        </div>
    </form>
  )
}

export default Quotes