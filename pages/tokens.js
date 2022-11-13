 
const Tokens = () => {
  return (
    <div className="my-6">
        <div className='mb-4 mr-3'>
            <h2 className='text-4xl px-1 tracking-tighter font-semibold text-gray-800'>My tokens</h2>
            <div className='my-4 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 lg:my-4 px-4 py-2 w-full h-auto md:inline-flex border border-neutral-200 shadow-lg justify-between items-center rounded-lg'>
                <div className='py-4 flex justify-center items-center'>
                    <span className='py-2 text-2xl font-semibold shadow-sm tracking-tight'>Available tokens</span>
                    <span className='px-3 py-2 text-3xl font-semibold shadow-sm rounded-lg'>35</span>
                </div>
                <div className='py-4'>
                <button type="button" className="w-full justify-center md:w-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Purchase more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                </div>
            </div>
        </div>
        <div className="mb-4 mr-3">
            <h3 className="text-4xl px-1 tracking-tighter font-semibold text-gray-800">My token history</h3>  
            <div class="my-4 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 lg:my-4 px-4 py-2 w-full h-auto md:inline-flex border border-neutral-50 shadow-lg justify-between items-center rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6 rounded-tl-lg">
                                Purchase date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Qty
                            </th>
                            <th scope="col" class="py-3 px-6 rounded-tr-lg">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="py-4 px-6">
                                1
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="py-4 px-6">
                                1
                            </td>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="py-4 px-6">
                            1
                            </td>
                            <td class="py-4 px-6">
                                $99
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <th scope="row" class="py-3 px-6 text-base ">Total</th>
                            <td class="py-3 px-6">3</td>
                            <td class="py-3 px-6">21,000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Tokens