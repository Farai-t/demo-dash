import React from 'react'

const CreateJob = () => {
  return (
    <>
        <form>
            <h2 className='mb-2 py-2 text-4xl font-bold dark:text-white'>Create Job</h2>
            <div className='mb-4'>
                <span className='mb-2 text-lg font-semibold dark:text-white'>Job type</span>
                <span className=''>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </span>
            </div>
            <div className='mb-4'>
                <span className='mb-2 text-lg font-semibold dark:text-white'>Job description</span>
                <span>
                <textarea rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </span>
            </div>
            <div className='mb-4'>
                <span className='mb-2 text-lg font-semibold dark:text-white'>Job duration (days)</span>
                <span>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </span>
            </div>
            <div className='mb-4'>
                <span className='mb-2 text-lg font-semibold dark:text-white'>Location</span>
                <span>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </span>
            </div>
            <div className='mb-4'>
                <span className='mb-2 text-lg font-semibold dark:text-white'>Priority</span>
                <span>
                    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option>Urgent</option>
                        <option>2</option>
                    </select>
                </span>
            </div>
            <div className='mb-4'>
                <label className='block mb-2 text-lg font-semibold dark:text-white'>Upload file</label>
                <input type="file" className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer'
                    aria-describedby='file_input_help' id='file_input'
                />
                <p className='mt-1 text-sm text-gray-500' id='file_input_help'>SVG, PNG, JPG or GIF</p>
            </div>
            <button type='button' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
                Submit
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </form>
    </>
  )
}

export default CreateJob