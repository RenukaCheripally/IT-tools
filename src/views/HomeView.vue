<script setup>
import OperationsGrid from "@/components/OperationsGrid.vue";
import tools from "../assets/data/tools.json"

const title = "All the tools";

</script>

<template>
  <main>
    <div class="text-white mb-2 text-lg">{{ title }}</div>
    <OperationsGrid :tools="tools"/>
  </main>
</template>
