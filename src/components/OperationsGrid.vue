<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue';
import JSONDiffSVG from "../assets/images/tools/json-diff.svg?component";
import LikeSVG from "../assets/images/like.svg?component";
import utils from '../utils/index';

const props = defineProps({
  tools: {
    type: Object,
    required: true,
    default: [],
  },
});


// This simulates the onCreated behavior
const initComponent = () => {
}

// Initialize when the component is mounted
onMounted(() => initComponent())

const data = reactive({

})

</script>

<template>
  <ul class="operations-grid">
    <!-- TODO: Add box shadow to card -->
    <li v-for="tool in props?.tools" class="card">
      <div class="icons">
        <!-- TODO: Use different icons for each card based on the key mentioned in tools.json file -->
        <JSONDiffSVG alt="Menu" class="w-9 menu" />
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
