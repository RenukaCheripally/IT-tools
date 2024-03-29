<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const menuItems = [];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="nav">
    <nav class="desktop-nav" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink :to="{name: 'home', params: {country: ''}}" class="-m-1.5 p-1.5">
          <span class="sr-only">Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500" alt="" />
        </RouterLink>
      </div>

      <div class="flex">
        <button @click.prevent="toggleMenu()" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
          <span class="sr-only">Open main menu</span>
          <svg class="stroke-[1.3] w-8 h-8 text-white transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
        </button>
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
