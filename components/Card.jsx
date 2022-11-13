import React from 'react'

const Card = () => {
  return (
    <div>
        <div>
      <Head>
        <title>shop app</title>
      </Head>
      <div class="block justify-between items-center p-4 mx-4 mb-5 bg-white rounded-2xl shadow-lg shadow-gray-200 sm:flex lg:mt-5">
<div class="flex items-center divide-x divide-gray-100">
<div class="pr-3">
<input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900" />
<label for="checkbox-all" class="sr-only">checkbox</label>
</div>
<div class="flex px-0 space-x-2 sm:px-2">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
<path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
</a>
</div>
<div class="pl-3">
<a href="https://demos.creative-tim.com/soft-ui-flowbite-pro/mailing/compose/" class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
<svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
</svg>
Compose
</a>
</div>
</div>
<div class="hidden items-center space-y-3 space-x-0 sm:flex sm:space-y-0 sm:space-x-3">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
</svg>
</a>
<span class="font-normal text-gray-500 sm:text-xs md:text-sm">Show <span class="font-semibold text-gray-900">1-25</span> of
<span class="font-semibold text-gray-900">2290</span></span
              >
</div>
</div>
      <div class="block justify-between items-center p-4 my-6 mx-4 bg-white rounded-2xl shadow-lg shadow-gray-200 sm:flex">
<div class="flex items-center divide-x divide-gray-100">
<div class="pr-3">
<a href="https://demos.creative-tim.com/soft-ui-flowbite-pro/mailing/inbox/" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
<div class="flex pl-0 space-x-2 sm:px-2">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
<path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
</svg>
</a>
</div>
<div class="pl-3 text-sm font-medium text-gray-500">
Today, 08:34 AM
</div>
</div>
<div class="hidden pl-0 space-x-2 divide-x divide-gray-100 sm:flex sm:px-2">
<div class="pr-2">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
<div class="pl-2">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
      <div>
        <div class="p-5">
<div class="flex items-center mb-4">
<div class="flex-shrink-0">
<img class="w-8 h-8 rounded-full" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Neil image" />
</div>
<div class="ml-4">
<div class="text-base font-semibold text-gray-900 truncate">
Bonnie Green
</div>
<div class="text-sm text-gray-500 text-normal">
<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="71141c10181d31171d1e06131805145f121e1c">[email&#160;protected]</a>
</div>
</div>
</div>
<h1 class="mb-4 text-2xl font-bold text-gray-900">
Website Hosting Reviews Free The Best Resource For Hosting
Comparison
</h1>
<div class="space-y-2">
<p class="text-base font-normal text-gray-600">
Do you know what could beat the exciting feeling of having a new
computer? Make your own PC easy and compatible!
</p>
<p class="text-base font-normal text-gray-600">
So insisted received is occasion advanced honoured. Among ready
to which up. Attacks smiling and may out assured moments man
nothing outward. Thrown any behind afford either the set depend
one temper. Instrument melancholy in acceptance collecting
frequently be if. Zealously now pronounce existence add you
instantly say offending. Merry their far had widen was. Concerns
no in expenses raillery formerly.
</p>
<p class="text-base font-normal text-gray-600">
Best Regards,<br />
Bonnie Green, CEO Bergside Inc.
</p>
</div>
</div>
<div class="bottom-0 p-4 mx-4 mb-4 w-full bg-white rounded-2xl shadow-lg shadow-gray-200 lg:fixed">
<div class="items-center sm:flex sm:divide-x sm:divide-gray-100 lg:pl-4">
<div class="mb-3 space-y-3 sm:flex sm:space-y-0 sm:mb-0">
<div>
<a href="https://demos.creative-tim.com/soft-ui-flowbite-pro/mailing/reply/" class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-sm px-5 py-2.5 text-center inline-flex items-center justify-center w-full sm:w-auto mr-3">
<svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
</svg>
Reply
</a>
</div>
<div>
<a href="#" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg hover:scale-[1.02] transition-transform text-sm px-5 py-2.5 text-center inline-flex items-center justify-center w-full sm:w-auto mr-3">
<svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
</svg>
Forward
</a>
</div>
</div>
<div class="flex pl-0 space-x-1 sm:pl-2">
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
</a>
<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
    </div>
    </div>
    
<div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 sm:p-6 xl:p-8 mb-6">
<div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
<img class="mb-2 w-20 h-20 rounded-2xl shadow-lg shadow-gray-300" src="../../../assets/soft-ui-flowbite/images/people/profile-picture-5.jpg" alt="Jese portrait" />
<div>
 <h2 class="text-xl font-bold">Alec Thompson</h2>
<ul class="mt-2 space-y-1">
<li class="flex items-center text-sm font-normal text-gray-500">
<svg class="mr-2 w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
</svg>
CEO / Co-Founder
</li>
<li class="flex items-center text-sm font-normal text-gray-500">
<svg class="mr-2 w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
</svg>
San Francisco, USA
</li>
</ul>
</div>
</div>
<div class="mb-4 sm:flex xl:block">
<div class="sm:flex-1">
<address class="text-sm not-italic font-normal text-gray-500">
<div class="mt-4">Email adress</div>
<a class="text-sm font-medium text-gray-900" href="mailto:webmaster@creative-tim.com">yourname@creative-tim.com</a>
<div class="mt-4">Home adress</div>
<div class="mb-2 text-sm font-medium text-gray-900">
92 Miles Drive, Newark, NJ 07103, California,
<br />United States of America
</div>
<div class="mt-4">Phone number</div>
<div class="mb-2 text-sm font-medium text-gray-900">
+00 123 456 789 / +12 345 678
</div>
</address>
</div>
</div>
<div>
<h3 class="mb-2 text-base font-bold text-gray-900">
Software Skill
</h3>
<div class="flex space-x-3">
<svg class="w-6 h-6" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z" fill="#DC395F"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z" fill="white"></path>
</svg>
<svg class="w-6 h-6" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.297 0.762876L8.9845 0.259155L13.672 0.762876L17.301 5.71471L8.9845 15.5586L0.667969 5.71471L4.297 0.762876Z" fill="#FDB300"></path>
<path d="M4.03524 5.71497L8.98317 15.5589L0.666626 5.71497H4.03524Z" fill="#EA6C00"></path>
<path d="M13.929 5.71497L8.98107 15.5589L17.2976 5.71497H13.929Z" fill="#EA6C00"></path>
<path d="M4.03467 5.71497H13.9305L8.9826 15.5589L4.03467 5.71497Z" fill="#FDAD00"></path>
<path d="M8.98272 0.259277L4.2952 0.762992L4.03479 5.71483L8.98272 0.259277Z" fill="#FDD231"></path>
<path d="M8.98164 0.259277L13.6692 0.762992L13.9296 5.71483L8.98164 0.259277Z" fill="#FDD231"></path>
<path d="M17.2987 5.71453L13.6696 0.762695L13.9301 5.71453H17.2987Z" fill="#FDAD00"></path>
<path d="M0.666626 5.71453L4.29565 0.762695L4.03524 5.71453H0.666626Z" fill="#FDAD00"></path>
<path d="M8.98272 0.259277L4.03479 5.71483H13.9306L8.98272 0.259277Z" fill="#FEEEB7"></path>
</svg>
<svg class="w-6 h-6" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.07892 17.2564C4.61226 17.2564 5.8567 16.0098 5.8567 14.4738V11.6913H3.07892C1.54559 11.6913 0.301147 12.9379 0.301147 14.4738C0.301147 16.0098 1.54559 17.2564 3.07892 17.2564Z" fill="#0ACF83"></path>
<path d="M0.301147 8.90901C0.301147 7.37305 1.54559 6.12646 3.07892 6.12646H5.8567V11.6916H3.07892C1.54559 11.6916 0.301147 10.445 0.301147 8.90901Z" fill="#A259FF"></path>
<path d="M0.301025 3.34407C0.301025 1.8081 1.54547 0.561523 3.0788 0.561523H5.85658V6.12662H3.0788C1.54547 6.12662 0.301025 4.88004 0.301025 3.34407Z" fill="#F24E1E"></path>
<path d="M5.85718 0.561523H8.63495C10.1683 0.561523 11.4127 1.8081 11.4127 3.34407C11.4127 4.88003 10.1683 6.12661 8.63495 6.12661H5.85718V0.561523Z" fill="#FF7262"></path>
<path d="M11.4127 8.90901C11.4127 10.445 10.1683 11.6916 8.63495 11.6916C7.10162 11.6916 5.85718 10.445 5.85718 8.90901C5.85718 7.37305 7.10162 6.12646 8.63495 6.12646C10.1683 6.12646 11.4127 7.37305 11.4127 8.90901Z" fill="#1ABCFE"></path>
</svg>
<svg class="w-6 h-6" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.12203 1.09285H4.79923V2.63598H5.5665V1.09285H6.24703V0.321289H4.12203V1.09285ZM2.30926 0.321317H1.54199V2.63602H2.31593V1.86445H3.01648V2.63602H3.78375V0.321317H3.01648V1.08618H2.30926V0.321317ZM6.58222 0.321289H7.38618L7.8799 1.13646L8.37362 0.321289H9.17759V2.63598H8.41032V1.4887L7.87323 2.32065L7.33614 1.4887V2.63598H6.58222V0.321289ZM10.3271 0.321289H9.5598V2.63598H11.4146V1.87113H10.3271V0.321289Z" fill="black"></path>
<path d="M1.51371 16.1212L0.412842 3.69568H12.5157L11.4148 16.1145L6.45425 17.4966" fill="#E44D26"></path>
<path d="M6.46338 16.4406V4.71619H11.4106L10.4665 15.3168" fill="#F16529"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4651 6.23572H2.66211L3.07577 10.8383H6.4651V9.31863H4.46353L4.32342 7.75872H6.4651V6.23572ZM4.66104 11.6036H3.13985L3.35335 13.9955L6.46245 14.8677V13.2776L4.76779 12.8214L4.66104 11.6036Z" fill="#EBEBEB"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.45831 6.23572H10.2546L10.1145 7.75872H6.45831V6.23572ZM6.45654 9.31902H9.97597L9.55897 13.9954L6.45654 14.8609V13.2775L8.14787 12.8213L8.32467 10.842H6.45654V9.31902Z" fill="white"></path>
</svg>
<svg class="w-6 h-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2726 15.2265H3.03646C1.64757 15.2265 0.515625 14.1118 0.515625 12.744V3.07392C0.515625 1.70616 1.64757 0.591431 3.03646 0.591431H13.2656C14.6615 0.591431 15.7865 1.70616 15.7865 3.07392V12.7372C15.7934 14.1118 14.6615 15.2265 13.2726 15.2265Z" fill="#2E001F"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4111 7.39617L8.35555 11.0755C8.39027 11.1302 8.36943 11.1849 8.31388 11.1849H7.10554C7.02916 11.1849 6.99443 11.1644 6.95971 11.096C6.84486 10.8627 6.72954 10.6294 6.61364 10.395L6.61349 10.3946C6.28094 9.72192 5.94359 9.03947 5.5986 8.31941H5.58471C5.16804 9.23582 4.70971 10.2001 4.26526 11.1028C4.23054 11.1575 4.19582 11.178 4.14026 11.178H2.99443C2.92499 11.178 2.91804 11.1233 2.95276 11.0823L4.85554 7.51243L3.01526 3.90153C2.9736 3.84682 3.01526 3.80579 3.05693 3.80579H4.25138C4.32082 3.80579 4.3486 3.81947 4.37638 3.88102C4.81388 4.78374 5.25832 5.71382 5.67499 6.62339H5.68888C6.09165 5.72066 6.5361 4.78374 6.96666 3.88785L6.96793 3.88585C7.0019 3.83231 7.02306 3.79895 7.09166 3.79895H8.20971C8.26527 3.79895 8.2861 3.83998 8.25138 3.89469L6.4111 7.39617ZM8.69629 8.51069C8.69629 6.91725 9.77268 5.67258 11.481 5.67258C11.6268 5.67258 11.7032 5.67258 11.8421 5.68626V3.87397C11.8421 3.83293 11.8768 3.80558 11.9116 3.80558H13.0088C13.0643 3.80558 13.0782 3.8261 13.0782 3.86029V10.1383C13.0782 10.323 13.0782 10.5555 13.113 10.8085C13.113 10.8496 13.0991 10.8632 13.0574 10.8838C12.4741 11.1573 11.863 11.2804 11.2796 11.2804C9.77268 11.2873 8.69629 10.3709 8.69629 8.51069ZM11.4393 6.69151C11.6059 6.69151 11.7448 6.71886 11.842 6.75989V10.1451C11.7101 10.1998 11.5295 10.2203 11.3629 10.2203C10.5781 10.2203 9.95315 9.71427 9.95315 8.45592C9.95315 7.35487 10.5643 6.69151 11.4393 6.69151Z" fill="#FFD9F2"></path>
</svg>
</div>
</div>
</div>


<div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
<div class="flex justify-between items-center pb-4">
<div class="text-base font-semibold text-gray-900">
Redesign tables card
</div>
<button type="button" class="p-1 text-gray-500 hover:text-gray-900">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
</svg>
</button>
</div>
<div class="flex justify-center items- ncenter pb-4">
<img class="bg-contain rounded-2xl" src="../../../assets/soft-ui-flowbite/images/blog/image-1.jpg" alt="attachment" />
</div>
<div class="flex flex-col">
<div class="pb-4 text-sm font-normal text-gray-700">
In _variables.scss on line 672 you define
$table_variants. Each instance of "color-level"
needs to be changed to "shift-color".
</div>
<div class="flex justify-between">
<div class="flex justify-start items-center">
<a href="#" data-tooltip-target="user_76_1" class="-mr-3">
<img class="w-7 h-7 rounded-full border-2 border-white" src="../../../assets/soft-ui-flowbite/images/people/profile-picture-2.jpg" alt="Bonnie Green" />
</a>
<div id="user_76_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(-23.2px, -56px, 0px);" data-popper-reference-hidden="" data-popper-escaped="">
Bonnie Green
<div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(52.8px, 0px, 0px);"></div>
</div>
<a href="#" data-tooltip-target="user_76_2" class="-mr-3">
<img class="w-7 h-7 rounded-full border-2 border-white" src="../../../assets/soft-ui-flowbite/images/people/profile-picture-3.jpg" alt="Roberta Casas" />
</a>
<div id="user_76_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(-11.2px, -56px, 0px);" data-popper-reference-hidden="" data-popper-escaped="">
Roberta Casas
<div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(56.8px, 0px, 0px);"></div>
</div>
<a href="#" data-tooltip-target="user_76_3" class="-mr-3">
<img class="w-7 h-7 rounded-full border-2 border-white" src="../../../assets/soft-ui-flowbite/images/people/profile-picture-4.jpg" alt="Michael Gough" />
</a>
<div id="user_76_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(4px, -56px, 0px);" data-popper-reference-hidden="" data-popper-escaped="">
Michael Gough
<div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(58.4px, 0px, 0px);"></div>
</div>
</div>
<div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
<svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
</svg>
9 days left
</div>
</div>
</div>
</div>


    </div>
  )
}

export default Card