<template>
  <div id="container">
    <ItemComponent
      v-for="(item, i) in items"
      :key="i"
      :item="item" />
  </div>
</template>

<script setup lang="ts">
import ItemComponent from "./ItemComponent.vue"
import items from "../consts/Item"
</script>

<style scoped>
#container {
  text-align: center;
  max-width: 500px;
  margin: auto;
  --opacity: .5
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
