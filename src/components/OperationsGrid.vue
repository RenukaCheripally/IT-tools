<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
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
  {{ message }}
</template>
