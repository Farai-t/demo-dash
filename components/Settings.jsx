import Script from "next/script"
import ThemeChanger from "./ThemeChanger";
const Settings = () => {
  return (
    <>
      <div className="px-2 my-4">
        <div className="my-4 py-1">
          <h2 className="text-4xl px-1 tracking-tighter font-semibold">General Settings</h2>
          <div className="text-lg py-2 my-2">
            {/* Theme settings */}
            <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl py-2 mb-4 xl:mb-0">
              <span className="px-2 py-1 md:px-4 text-xl font-bold tracking-tight">Theme</span>
              {/* Theme changer */}
              <div className="flex py-1 px-2 items-center md:px-4 justify-between">
                <span>Change theme</span>
                <span className="px-2 md:px-4 mx-2">
                  <ThemeChanger />
                </span>
              </div>
            </div>
            {/* Action notifications */}
            <div className="my-2 md:my-4 px-2 md:px-4 bg-white shadow-lg shadow-gray-200 rounded-2xl py-2 xl:mb-0 text-xl font-bold tracking-tight">
              Action Confirmation
            </div>
          </div>
        </div>
      </div>
      {/* Alerts and notifications */}
      <div class="mx-2 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-4 xl:mb-0">
        <div class="flow-root">
          <h3 class="text-xl font-bold">Alerts & Notifications</h3>
          <p class="text-sm font-normal text-gray-500">
            You can set up Themesberg to get notifications
          </p>
          <div class="divide-y divide-gray-200">
            <div class="flex justify-between items-center py-4">
              <div class="flex flex-col flex-grow">
                <div class="text-lg font-semibold text-gray-900">
                  Company News
                </div>
                <div class="text-base font-normal text-gray-500">
                  Get Themesberg news, announcements, and product updates
                </div>
              </div>
              <label
                for="company-news"
                class="flex relative items-center cursor-pointer"
              >
                <input type="checkbox" id="company-news" class="sr-only" />
                <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
              </label>
            </div>
            {/* Account settings */}
            <div class="flex justify-between items-center py-4">
              <div class="flex flex-col flex-grow">
                <div class="text-lg font-semibold text-gray-900">
                  Account Activity
                </div>
                <div class="text-base font-normal text-gray-500">
                  Get important notifications about you or activity you've
                  missed
                </div>
              </div>
              <label
                for="account-activity"
                class="flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="account-activity"
                  class="sr-only"
                />
                <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
              </label>
            </div>

            <div class="flex justify-between items-center py-4">
              <div class="flex flex-col flex-grow">
                <div class="text-lg font-semibold text-gray-900">
                  Meetups Near You
                </div>
                <div class="text-base font-normal text-gray-500">
                  Get an email when a Dribbble Meetup is posted close to my
                  location
                </div>
              </div>
              <label
                for="meetups"
                class="flex relative items-center cursor-pointer"
              >
                <input type="checkbox" id="meetups" class="sr-only" />
                <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
              </label>
            </div>
            <div class="flex justify-between items-center pt-4">
              <div class="flex flex-col flex-grow">
                <div class="text-lg font-semibold text-gray-900">
                  New Messages
                </div>
                <div class="text-base font-normal text-gray-500">
                  Get Themsberg news, announcements, and product updates
                </div>
              </div>
              <label
                for="new-messages"
                class="flex relative items-center cursor-pointer"
              >
                <input type="checkbox" id="new-messages" class="sr-only" />
                <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
              </label>
            </div>
          </div>
          <div class="mt-6">
            <button class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center">
              Save all
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 mx-2 py-1">
        <h2 className="text-4xl my-4 px-1 tracking-tighter font-semibold">Account Settings</h2>
        <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-4 xl:mb-0">
          <div class="flow-root">
            <h3 class="text-xl font-bold">Email Notifications</h3>
            <p class="text-sm font-normal text-gray-500">
              You can set up Themesberg to get email notifications
            </p>
            <div class="divide-y divide-gray-200">
              <div class="flex justify-between items-center py-4">
                <div class="flex flex-col flex-grow">
                  <div class="text-lg font-semibold text-gray-900">
                    Rating reminders
                  </div>
                  <div class="text-base font-normal text-gray-500">
                    Send an email reminding me to rate an item a week after
                    purchase
                  </div>
                </div>
                <label
                  for="rating-reminders"
                  class="flex relative items-center cursor-pointer"
                >
                  <input type="checkbox" id="rating-reminders" class="sr-only" />
                  <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
                </label>
              </div>

              <div class="flex justify-between items-center py-4">
                <div class="flex flex-col flex-grow">
                  <div class="text-lg font-semibold text-gray-900">
                    Item update notifications
                  </div>
                  <div class="text-base font-normal text-gray-500">
                    Send user and product notifications for you
                  </div>
                </div>
                <label
                  for="item-update"
                  class="flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="item-update"
                    class="sr-only"
                  />
                  <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
                </label>
              </div>

              <div class="flex justify-between items-center py-4">
                <div class="flex flex-col flex-grow">
                  <div class="text-lg font-semibold text-gray-900">
                    Item comment notifications
                  </div>
                  <div class="text-base font-normal text-gray-500">
                    Send me an email when someone comments on one of my items
                  </div>
                </div>
                <label
                  for="item-comment"
                  class="flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="item-comment"
                    class="sr-only"
                  />
                  <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
                </label>
              </div>

              <div class="flex justify-between items-center pt-4">
                <div class="flex flex-col flex-grow">
                  <div class="text-lg font-semibold text-gray-900">
                    Buyer review notifications
                  </div>
                  <div class="text-base font-normal text-gray-500">
                    Send me an email when someone leaves a review with their
                    rating
                  </div>
                </div>
                <label
                  for="buyer-rev"
                  class="flex relative items-center cursor-pointer"
                >
                  <input type="checkbox" id="buyer-rev" class="sr-only" />
                  <span class="w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg"></span>
                </label>
              </div>
            </div>
            <div class="mt-6">
              <button class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center">
                Save all
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

export default Settings;
