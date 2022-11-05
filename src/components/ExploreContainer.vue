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
import { Client } from "@notionhq/client"
import { onMounted, ref } from "vue";

const items = ref([]);

const client = new Client({
  auth: 'secret_k1sVgQjarupTD7Qdc5n2W1T1j1wkZaKfr3u4P3wcQs1',
})

const fetchItems = async () => {
  const res = await client.databases.query({
    database_id: 'db0f7e62548e4870a3e2ed49b25eca06',
  })

  items.value = res.results.map(o => {
    return {
      title: o.name.text.content,
      description: o.description.rich_text.content,
      src: o.src.rich_text.content,
    }
  })
}

onMounted(() => fetchItems())
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
