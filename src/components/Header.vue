<script setup>
import { RouterLink } from "vue-router";
import MenuSVG from "../assets/images/menu.svg?component";
import HomeSVG from "../assets/images/home.svg?component";
import Lucide from "../base-components/Lucide";
import Button from "../base-components/Button";
import _ from "lodash";

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
      </div>

      <div>
        <Button variant="primary" class="">
          Fun Quote <Lucide icon="Heart" class="w-5 ml-1" />
        </Button>
      </div>

    </nav>

  </header>
</template>
