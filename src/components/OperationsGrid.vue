<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue';
import JSONDiffSVG from "../assets/images/tools/json-diff.svg?component";
import LikeSVG from "../assets/images/like.svg?component";

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
    <li v-for="tool in props?.tools" class="card">
      <div class="icons">
        <JSONDiffSVG alt="Menu" class="w-9 menu text-white" />
        <LikeSVG alt="Menu" class="w-6 menu text-white" />
        <!-- svg -->
      </div>
      <div class="name">
        {{ tool.name }}
      </div>
      <div class="description">
        {{ tool.description }}
      </div>
    </li>
  </ul>
</template>
