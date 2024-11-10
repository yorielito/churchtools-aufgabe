<template>
  <nav aria-label="Page navigation example" class="bottom-20 fixed">
    <ul class="flex">
      <button
        @click="getPersonsByPageApi(currentPage - 1)"
        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous Page
      </button>

      <button
        @click="getPersonsByPageApi(currentPage - 1)"
        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {{ currentPage - 1 }}
      </button>

      <button
        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        {{ currentPage }}
      </button>

      <button
        @click="getPersonsByPageApi(currentPage + 1)"
        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {{ currentPage + 1 }}
      </button>

      <button
        @click="getPersonsByPageApi(currentPage + 1)"
        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next Page
      </button>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  // totalItems: Number,
  // itemsPerPage: Number,
  currentPage: Number,
  getPersonsByPageApi: Function,
});
</script>
