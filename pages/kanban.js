import React from 'react'

const kanban = () => {
  return (
    <>
      <main>
        <div class="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div class="block items-center mb-3 divide-x divide-gray-100 sm:flex sm:mb-0">
            <div class="flex justify-start items-center">
              <h3 class="mr-3 text-sm font-normal text-gray-500">Team members:</h3>
              <a href="#" data-tooltip-target="bonnie-tooltip" class="-mr-3">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
              </a>
              <div id="bonnie-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                Bonnie Green
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a href="#" data-tooltip-target="roberta-tooltip" class="-mr-3">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
              </a>
              <div id="roberta-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                Roberta Casas
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a href="#" data-tooltip-target="roberta-tooltip" class="-mr-3">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos.png" alt="Jese Leos" />
              </a>
              <div id="roberta-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                Jese Leos
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <a href="#" data-tooltip-target="michael-tooltip" class="-mr-3">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
              </a>
              <div id="michael-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                Michael Gough
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div class="inline-flex items-center space-x-3">
            <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                </path>
              </svg>
            </a>
            <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow-lg">
                <div class="flex justify-start items-start px-4 mb-6 space-x-6">
                  <div class="min-w-20">
                    <div class="py-4 text-base font-semibold text-gray-900">To Do</div>
                    <div id="kanban-list-1" class="p-4 mb-6 space-y-6 bg-gray-200 rounded-xl min-w-20">
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Change charts javascript</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_32_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_32_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_32_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_32_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_32_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_32_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                              5 days left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Change homepage</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex justify-center items-center pb-4">
                          <img class="bg-contain rounded-2xl" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/kanban/task-3.jpg" alt="attachment" />
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">Change homepage for Volt Dashboard.</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_23_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_23_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_23_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_23_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_23_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_23_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                              22 days left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Change charts javascript</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_65_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_65_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>

                              <a href="#" data-tooltip-target="user_65_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_65_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_65_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_65_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                              7 days left
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" data-modal-toggle="new-card-modal" class="flex justify-center items-center py-2 w-full font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                      Add another card
                    </button>
                  </div>
                  <div class="min-w-20">
                    <div class="py-4 text-base font-semibold text-gray-900">In Progress</div>
                    <div id="kanban-list-2" class="p-4 mb-6 space-y-6 bg-gray-200 rounded-xl min-w-20">
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Redesign tables card</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex justify-center items-center pb-4">
                          <img class="bg-contain rounded-2xl" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/kanban/task-1.jpg" alt="attachment" />
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_76_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_76_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_76_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_76_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_76_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_76_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                              9 days left
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Redesign tables card</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_49_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_49_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_49_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_49_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_49_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_49_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>

                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                              3 days left
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" data-modal-toggle="new-card-modal" class="flex justify-center items-center py-2 w-full font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                      Add another card
                    </button>
                  </div>
                  <div class="min-w-20">
                    <div class="py-4 text-base font-semibold text-gray-900">Done</div>
                    <div id="kanban-list-3" class="p-4 mb-6 space-y-6 bg-gray-200 rounded-xl min-w-20">
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Redesign tables card</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex justify-center items-center pb-4">
                          <img class="bg-contain rounded-2xl" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/kanban/task-2.jpg" alt="attachment" />
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_87_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_87_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_87_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_87_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_87_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_87_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-green-500 to-green-700 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              Done
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Redesign tables card</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_43_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_43_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_43_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_43_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_43_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_43_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-green-500 to-green-700 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              Done
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col p-5 max-w-md bg-white rounded-2xl shadow-sm transform cursor-move">
                        <div class="flex justify-between items-center pb-4">
                          <div class="text-base font-semibold text-gray-900">Create Javascript elements</div>
                          <button type="button" data-modal-toggle="kanban-card-modal" class="p-1 text-gray-500 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="flex flex-col">
                          <div class="pb-4 text-sm font-normal text-gray-700">In _variables.scss on line 672 you define $table_variants. Each instance of "color-level" needs to be changed to "shift-color".</div>
                          <div class="flex justify-between">
                            <div class="flex justify-start items-center">
                              <a href="#" data-tooltip-target="user_34_1" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                              </a>
                              <div id="user_34_1" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Bonnie Green<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_34_2" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                              </a>
                              <div id="user_34_2" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Roberta Casas<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                              <a href="#" data-tooltip-target="user_34_3" class="-mr-3">
                                <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                              </a>
                              <div id="user_34_3" role="tooltip" class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">Michael Gough<div class="tooltip-arrow" data-popper-arrow></div>
                              </div>
                            </div>
                            <div class="flex justify-center items-center px-3 text-xs font-bold uppercase text-white bg-gradient-to-br from-green-500 to-green-700 rounded-2xl">
                              <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              Done
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" data-modal-toggle="new-card-modal" class="flex justify-center items-center py-2 w-full font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                      Add another card
                    </button>
                  </div>
                  <div class="min-w-20">
                    <div class="py-4 text-base font-semibold text-gray-900">
                      Add another group
                    </div>
                    <button type="button" data-modal-toggle="new-card-modal" class="flex justify-center items-center py-2 m-0 w-full h-32 font-semibold text-gray-500 rounded-lg border-2 border-gray-200 border-dashed hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300">
                      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden fixed inset-0 z-50 bg-gray-900 opacity-50" id="kanban-card-modal-backdrop"></div>

        <div class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full" id="kanban-card-modal">
          <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">

            <div class="relative bg-white rounded-2xl shadow-lg">

              <div class="flex justify-between items-center p-4 rounded-t border-b md:px-6">
                <div class="text-xl font-semibold">Edit task</div>
                <button type="button" data-modal-toggle="kanban-card-modal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>

              <div class="p-4 md:p-6">
                <div class="mb-3 text-2xl font-semibold leading-none text-gray-900">Redesign Themesberg Homepage</div>
                <div class="flex flex-col justify-center items-start mb-5 space-y-3">
                  <div class="text-sm text-gray-500">
                    Added by <a class="text-fuchsia-500 no-underline cursor-pointer hover:underline">Bonnie Green</a>, 22 hours ago
                  </div>
                  <div class="flex flex-row flex-wrap">
                    <div class="flex justify-start items-center">
                      <a href="#" data-tooltip-target="bonnie-tooltip" class="-mr-3">
                        <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png" alt="Bonnie Green" />
                      </a>
                      <div id="bonnie-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                        Bonnie Green
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <a href="#" data-tooltip-target="roberta-tooltip" class="-mr-3">
                        <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/roberta-casas.png" alt="Roberta Casas" />
                      </a>
                      <div id="roberta-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                        Roberta Casas
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <a href="#" data-tooltip-target="michael-tooltip" class="-mr-3">
                        <img class="w-7 h-7 rounded-full border-2 border-white" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Michael Gough" />
                      </a>
                      <div id="michael-tooltip" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-2xl opacity-0 transition-opacity duration-300 tooltip shadow-lg-sm">
                        Michael Gough
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                    <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-2xl text-xs px-3 py-1.5 text-center inline-flex items-center ml-5">
                      <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                      Join
                    </button>
                    <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-2xl text-xs px-3 py-1.5 text-center inline-flex items-center ml-2">
                      <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                      Attachment
                    </button>
                  </div>
                </div>
                <div class="inline-flex items-center mb-2 text-lg font-semibold text-center text-gray-900">
                  <svg class="mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  Description
                </div>
                <div class="mb-4 space-y-2 text-base text-gray-600">
                  <p>I made some wireframes that we would like you to follow since we are building it in Google’s Material Design (Please learn more about this and see how to improve standard material design into something beautiful). But besides that, you can just do it how you like.</p>
                  <p>Next Friday should be done. Next Monday we should deliver the first iteration. Make sure, we have a good result to be delivered by the day.</p>
                  <div class="w-max text-sm font-semibold text-fuchsia-500 cursor-pointer">
                    Show Full Description
                  </div>
                </div>
                <div class="mb-4 w-full bg-gray-100 rounded-lg border border-gray-100">
                  <div class="p-4">
                    <label for="compose-mail" class="sr-only">Your comment</label>
                    <textarea id="compose-mail" rows="4" class="block px-0 w-full text-base text-gray-900 bg-gray-100 border-0 focus:ring-0" placeholder="Write a comment..."></textarea>
                  </div>
                  <div class="flex justify-between items-center p-4 border-t">
                    <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                      <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                      Post comment
                    </button>
                    <div class="flex pl-0 space-x-1 sm:pl-2">
                      <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                      </a>
                      <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3">
                    <a href="#" class="flex-shrink-0">
                      <img class="w-7 h-7 rounded-full" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png" alt="Micheal Gough" />
                    </a>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-900 truncate">Micheal Gough</p>
                      <p class="text-sm font-normal text-gray-500 truncate">Product Manager</p>
                    </div>
                    <a href="#" class="p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </a>
                  </div>
                  <ul class="pl-6 text-xs list-disc list-outside text-gray-500">
                    <li>Latest clicks/conversions. Where you currently have the logo for merchant, we should instead have a logo that represent the referring traffic sources (ex. Google or Facebook). So we’re actually missing a column that should say “Source”. And there should be no icon for the merchants.</li>
                  </ul>
                </div>
              </div>

              <div class="grid grid-rows-2 grid-flow-col gap-2 p-4 rounded-b border-t border-gray-200 sm:grid-rows-1 md:p-6">
                <button type="button" class="inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-voilet-500 border border-fuchsia-700 hover:border-fuchsia-800 font-semibold rounded-lg text-sm py-2.5 text-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  Save
                </button>
                <button type="button" class="inline-flex items-center justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-sm py-2.5 text-center hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  Move
                </button>
                <button type="button" class="inline-flex items-center justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-sm py-2.5 text-center hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                  Copy
                </button>
                <button type="button" class="inline-flex items-center justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-sm py-2.5 text-center hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  Archive
                </button>
                <button type="button" class="inline-flex items-center justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-sm py-2.5 text-center hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                  Watch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full" id="new-card-modal">
          <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">

            <div class="relative bg-white rounded-2xl shadow-lg">

              <div class="flex justify-between items-center p-4 rounded-t border-b md:px-6">
                <div class="text-xl font-semibold">Add new task</div>
                <button type="button" data-modal-toggle="new-card-modal" class="text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>

              <div class="p-4 space-y-6 md:px-6">
                <form action="#">
                  <div class="grid grid-cols-2 gap-6 mb-4">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="product-name" class="block mb-2 text-sm font-medium text-gray-900">Task Name</label>
                      <input type="text" name="product-name" id="product-name" class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Redesign Homepage" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="product-details" class="block mb-2 text-sm font-medium text-gray-900">Enter a description</label>
                      <textarea id="product-details" rows="6" class="block w-full text-gray-900 rounded-lg border border-gray-200 sm:text-sm focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300" placeholder="On line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'."></textarea>
                    </div>
                  </div>
                  <div class="flex justify-center items-center w-full">
                    <label class="flex justify-center items-center w-full h-32 text-gray-500 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900">
                      <div class="flex justify-center items-center space-x-2">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <p class="text-base">Drop files to upload</p>
                      </div>
                      <input type="file" class="hidden" />
                    </label>
                  </div>
              

              <div class="flex items-center p-4 space-x-3 rounded-b border-t border-gray-200 md:p-6">
                <button type="submit" class="w-32 inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-voilet-500 border border-fuchsia-700 hover:border-fuchsia-800 font-semibold rounded-lg text-sm py-2.5 text-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                  <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  Add Card
                </button>
                <button type="button" data-modal-toggle="new-card-modal" class="w-24 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 font-semibold rounded-lg text-sm py-2.5 text-center hover:scale-[1.02] transition-transform">
                  Close
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>

      <div class="hidden fixed inset-0 z-40 bg-gray-900 opacity-50" id="new-card-modal-backdrop"></div>
    </main> 
    </>
  )
}

export default kanban