<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    email: String,
    id: Number
  },
};
</script>

<template>
    <h2 class="text-lg font-bold">
      {{ firstName }} {{ lastName }}
    </h2>
    <p>
      {{ email }}
    </p>
</template>
