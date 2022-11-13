const Account = () => {
  return (
    <div>
        <h2 className="py-4 text-4xl tracking-tighter font-semibold">My Account</h2>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 my-6">
    <div className="px-1">
          <h3 className="text-2xl tracking-tight font-semibold">Verification</h3>
          <p className="py-2">
            Your account is <span className="text-green-800 tracking-tighter font-semibold">verified</span>
          </p>
        </div>
        <div className="px-1">
            <h3 className="text-2xl tracking-tighter font-semibold py-3 ">Ratings</h3>
            <div className="mb-2 rounded shadow-sm">
              <div class="flex items-center ">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                 <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
              </div>
              <p className="text-gray-600 px-1">
                <span className="text-neutral-900">200</span> Ratings
              </p>
            </div>
        </div>
        <div>
          <h3 className="text-2xl tracking-tighter font-semibold">Reviews</h3>
          
        </div>
    </div>
    
        <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 my-6">
<h3 class="mb-4 text-xl font-bold">Password information</h3>
<form action="#">
<div class="grid grid-cols-6 gap-6">
<div class="col-span-6 sm:col-span-3">
<label for="current-password" class="block mb-2 text-sm font-medium text-gray-900">Current password</label
                      >
<input type="text" name="current-password" id="current-password" class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="••••••••" required />
</div>
<div class="col-span-6 sm:col-span-3">
<label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">New password</label
                      >
<input type="text" name="new-password" id="new-password" class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="••••••••" required />
</div>
<div class="col-span-6 sm:col-span-3">
<label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label
                      >
<input type="text" name="confirm-password" id="confirm-password" class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="••••••••" required />
</div>
<div class="col-span-full">
 <div class="text-sm font-medium">
Password requirements:
</div>
<div class="mb-1 text-sm font-normal text-gray-500">
Ensure that these requirements are met:
</div>
<ul class="pl-4 space-y-1 text-gray-500">
<li class="text-xs font-normal">
At least 10 characters (and up to 100 characters)
</li>
<li class="text-xs font-normal">
At least one lowercase character
</li>
<li class="text-xs font-normal">
Inclusion of at least one special character, e.g., ! @
# ?
</li>
<li class="text-xs font-normal">
Some text here zoltan
</li>
</ul>
</div>
<div class="col-span-6 sm:col-full">
<button class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center" type="submit">
Save all
</button>
</div>
</div>
</form>
</div>
<div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-6 xl:mb-8">
<div class="flow-root">
<h3 class="text-xl font-bold">Sessions</h3>
<ul class="divide-y divide-gray-200">
<li class="py-4">
<div class="flex items-center space-x-4">
<div class="flex-shrink-0">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
</div>
<div class="flex-1 min-w-0">
<p class="text-base font-semibold text-gray-900 truncate">
California 123.123.123.123
</p>
<p class="text-sm font-normal text-gray-500 truncate">
Chrome on macOS
</p>
</div>
<div class="inline-flex items-center">
<a href="#" class="py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-fuchsia-200">Revoke</a
                          >
</div>
</div>
</li>
<li class="pt-4 pb-6">
<div class="flex items-center space-x-4">
<div class="flex-shrink-0">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
</svg>
</div>
<div class="flex-1 min-w-0">
<p class="text-base font-semibold text-gray-900 truncate">
Rome 24.456.355.98
</p>
<p class="text-sm font-normal text-gray-500 truncate">
Safari on iPhone
</p>
</div>
<div class="inline-flex items-center">
<a href="#" class="py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-fuchsia-200">Revoke</a>
</div>
</div>
</li>
</ul>
<div>
<button class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center">
See more
</button>
</div>
</div>
</div>
    </div>
    
  )
}

export default Account