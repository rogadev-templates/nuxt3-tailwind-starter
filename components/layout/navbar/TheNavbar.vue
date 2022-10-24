<script setup lang="ts">
import { Ref, ref } from "@vue/reactivity";

import NavbarLink from "~/components/layout/navbar/NavbarLink.vue";
import NavbarHamburger from "~/components/layout/navbar/NavbarHamburger.vue";
import NavbarBrandLogo from "~/components/layout/navbar/NavbarBrandLogo.vue";
import NavbarSocials from "~/components/layout/navbar/NavbarSocials.vue";
import NavbarThemeToggler from "~/components/layout/navbar/NavbarThemeToggler.vue";

// Side Drawer Control
const showSideDrawer: Ref<boolean> = ref(false);
useRouter().afterEach(() => {
  showSideDrawer.value = false;
});
const toggleSideDrawer = () => {
  showSideDrawer.value = !showSideDrawer.value;
};

// import { userLogout } from "~/composables/useAuth";
// const logout = userLogout;
const logout = () => console.log("I don't do anything rn...");

// const user = useState("user");
// const initialAuthCheck = await useLoggedIn();
// const isLoggedIn = ref(initialAuthCheck);
// TEMP
const isLoggedIn = ref(false);

// async function checkIfLoggedIn() {
//   const check = await useLoggedIn();
//   isLoggedIn.value = check;
// }

// watch(
//   user,
//   async () => {
//     await checkIfLoggedIn();
//   },
//   { deep: true }
// );
</script>

<template>
  <div class="bg-white dark:bg-slate-800 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between border-b-2 border-gray-100">
        <div class="flex justify-between min-w-full md:min-w-0">
          <div
            class="md:hidden mt-4 dark:bg-slate-800 flex w-full justify-between"
          >
            <NavbarBrandLogo />
            <NavbarHamburger @click="toggleSideDrawer" />
          </div>
          <div class="hidden md:block">
            <NavbarBrandLogo />
          </div>
        </div>

        <nav
          class="hidden md:flex justify-between space-x-10 align-bottom mt-14"
        >
          <div class="hidden md:flex space-x-10 align-bottom">
            <!-- links -->
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/subscribe">Subscribe</NavbarLink>
            <!-- dashboard link -->
            <NavbarLink v-if="isLoggedIn" to="/dashboard">Dashboard</NavbarLink>
            <!-- Register Link -->
            <NavbarLink v-if="!isLoggedIn" to="/register">Register</NavbarLink>
            <!-- login link -->
            <NavbarLink v-if="!isLoggedIn" to="/login">Login</NavbarLink>
            <!-- logout link -->
            <NavbarLink v-if="isLoggedIn" to="/logout">Logout</NavbarLink>
          </div>
        </nav>
        <div class="flex justify-between space-x-5 align-bottom mt-14">
          <NavbarThemeToggler />
          <NavbarSocials />
          <NavbarHamburger @click="toggleSideDrawer" />
        </div>
      </div>

      <div class="py-4 overflow-y-auto">
        <!-- Socials & Color Theme -->

        <!-- Menu Links -->
        <div v-if="showSideDrawer">
          <ul class="space-y-2">
            <li>
              <NavbarThemeToggler />
            </li>
            <li>
              <NavbarSocials />
            </li>
            <li>
              <NuxtLink
                to="/dashboard"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    w-6
                    h-6
                    text-gray-500
                    dark:text-gray-200
                    transition
                    duration-75
                    group-hover:text-gray-900
                    dark:hover:text-gray-300 dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3">Dashboard</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/subscribe"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-500
                    dark:text-gray-200
                    transition
                    duration-75
                    group-hover:text-gray-900
                    dark:hover:text-gray-300 dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Suggest</span>
                <span
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-2
                    ml-3
                    text-sm
                    font-medium
                    text-gray-800
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700 dark:text-gray-300
                  "
                  >Pro</span
                >
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/videos"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Videos</span>
                <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/search"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Maps</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">FAQ</span>
              </NuxtLink>
            </li>
            <li v-if="!isLoggedIn">
              <NuxtLink
                to="/login"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </NuxtLink>
            </li>
            <li v-if="!isLoggedIn">
              <NuxtLink
                to="/register"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </NuxtLink>
            </li>
            <li @click="logout" v-if="isLoggedIn">
              <span
                to="/register"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">logout</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>