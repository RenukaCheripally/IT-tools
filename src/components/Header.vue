<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import MenuSVG from "../assets/images/menu.svg?component";
import HomeSVG from "../assets/images/home.svg?component";
import Lucide from "../base-components/Lucide";
import { FormInput } from "../base-components/Form";
import _ from "lodash";

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
        <RouterLink :to="{ name: 'home', params: { country: '' } }" class="p-1.5  w-9">
          <MenuSVG alt="Menu" class="menu text-white" />
        </RouterLink>
        <RouterLink :to="{ name: 'home', params: { country: '' } }" class="p-1.5  w-9">
          <HomeSVG alt="Menu" class="menu text-white" />
        </RouterLink>
        <div class="relative mr-3 intro-x sm:mr-6">
          <div class="relative hidden sm:block">
            <FormInput type="text"
              class="border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400"
              placeholder="Search..." @focus="showSearchDropdown" @blur="hideSearchDropdown" />
            <Lucide icon="Search"
              class="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500" />
          </div>

        </div>
      </div>

    </nav>
    
  </header>
</template>
