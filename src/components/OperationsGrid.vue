<script setup>
import { ref, reactive, onMounted } from 'vue';
import JSONDiffSVG from "../assets/images/tools/json-diff.svg?component";
import LikeSVG from "../assets/images/like.svg?component";

const message = ref('Hello world');


// This simulates the onCreated behavior
const initComponent = () => {
  message.value = 'Hello, World!'
}

// Initialize when the component is mounted
onMounted(() => initComponent())

const data = reactive({
  operations: [
    {
      "name": "JSON to CSV",
      "description": "Parsing JSON and converting data to CSV format, ensuring that the correct data is extracted and formatted to suit CSV standards and specifications."
    },
    {
      "name": "CSV to JSON",
      "description": "Parsing and converting CSV data to JSON format, using appropriate techniques for delimiters, quote characters, and escape sequences."
    },
    {
      "name": "SQL to CSV",
      "description": "Exporting SQL data to CSV format, selecting appropriate data fields, handling SQL queries, and managing the export of large data sets."
    },
    {
      "name": "Encrypting Data",
      "description": "Encrypting structured or unstructured data using preferred encryption algorithms and protocols, such as AES, RSA, or PGP, and managing encryption keys securely."
    },
    {
      "name": "Decrypting Data",
      "description": "Decrypting previously encrypted data, securely managing and handling decryption keys, and following best practices for data access, storage, and removal."
    }
  ]
})

</script>

<template>
  <ul>
    <li v-for="op in data?.operations">
      <div class="card">
        <div class="icons">
          <RouterLink :to="{ name: 'home', params: { country: '' } }" class="p-1.5  w-9">
            <JSONDiffSVG alt="Menu" class="w-9 menu text-white" />
            <LikeSVG alt="Menu" class="w-6 menu text-white" />
          </RouterLink>
          <!-- svg -->
        </div>
        <div>
          {{ op.name }}
        </div>
        <div>
          {{ op.description }}
        </div>
      </div>
    </li>
  </ul>
</template>
