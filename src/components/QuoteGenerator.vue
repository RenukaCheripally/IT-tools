<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue';
import LikeSVG from "../assets/images/like.svg?component";
import utils from '../utils/index';

const data = reactive({
  counter: 0,
  quotes: []
})

// This simulates the onCreated behavior
const initComponent = () => {
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then(json => {
      data.quotes = json;
    })
    .catch((e) => {
      console.log(e)
    })
}
// Initialize when the component is mounted
onMounted(() => initComponent())

function getImgSrc(tool) {
  return `src/assets/images/tools/${tool.key}.svg`;
}

</script>

<template>
  <ul class="operations-grid">
    <!-- TODO: Add box shadow to card -->
    <li v-for="tool in props?.tools" class="card">
      <div class="icons">
        <img v-if="getImgSrc(tool) != null" :src="getImgSrc(tool)" class="w-6">
        <LikeSVG alt="Menu" class="w-6 menu" />
      </div>
      <div class="name">
        {{ tool.name }}
      </div>
      <div class="description">
        <!-- TODO: Use CSS to trim for better experience -->
        {{ utils.trim(tool.description) }}
      </div>
    </li>
  </ul>
</template>
