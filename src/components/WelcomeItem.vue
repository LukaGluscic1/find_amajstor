<template>
  <li>
      {{ item.name }}
  </li>
</template>

<script>
export default {
  props: {
      item: Object
  }
};
</script>
