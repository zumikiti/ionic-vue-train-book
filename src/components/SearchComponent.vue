<script setup lang="ts">
import { computed, ref } from 'vue';
import items from '../consts/Item'
import ExploreContainer from './ExploreContainer.vue';

const tags = items
  .flatMap(o => o.tags)
  .filter((x, i, self) => self.indexOf(x) === i)

const choice = ref('')

const onTagClick = (tag:string) => {
  choice.value = tag 
}

const displayItems = computed(() => {
  return items.filter(o => o.tags.indexOf(choice.value) !== -1)
})
</script>

<template>
  <button
    v-for="(tag, i) in tags"
    :key="i"
    @click.prevent="onTagClick(tag)">
    {{ tag }}
  </button>

  <ExploreContainer 
    v-if="choice"
    :items="displayItems" />
</template>
