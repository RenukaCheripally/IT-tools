<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import MenuSVG from "../assets/images/menu.svg?component";
import HomeSVG from "../assets/images/home.svg?component";
import Lucide from "../base-components/Lucide";

const isMenuOpen = ref(false);

const menuItems = [];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="nav">
    <nav class="desktop-nav" aria-label="Global">
      <div class="flex lg:flex-1 gap-2">
        <RouterLink :to="{name: 'home', params: {country: ''}}" class="p-1.5  w-9">
          <MenuSVG alt="Menu" class="menu text-white" />
        </RouterLink>
        <RouterLink :to="{name: 'home', params: {country: ''}}" class="p-1.5  w-9">
          <HomeSVG alt="Menu" class="menu text-white" />
        </RouterLink>
      </div>
      <div class="relative hidden sm:block">
          <FormInput
            type="text"
            class="border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400"
            placeholder="Search..."
            @focus="showSearchDropdown"
            @blur="hideSearchDropdown"
          />
          <Lucide
            icon="Search"
            class="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
          />
        </div>

    </nav>

    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-show="isMenuOpen" class="mobile-nav" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>

      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-4 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">jjjkk</span>
            <img class="h-10 md:h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500" alt="kkjkj">
          </a>

          <button @click.prevent="toggleMenu()" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
            <span class="sr-only">Close menu</span>
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="menuItem in menuItems"
                :key="menuItem.title"
                :to="menuItem.path"
                @click.prevent="toggleMenu()"
                class="nav-item"
              >
                {{ menuItem.title }}
              </RouterLink>
            </div>

            <div class="py-6">
              <a href="lkl" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800" target="_blank">
                <span class="block text-xs text-gray-400 leading-none">Caterer</span>
                Login / Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
