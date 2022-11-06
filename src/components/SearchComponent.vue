<script setup lang="ts">
import { computed, ref } from 'vue';
import items from '../consts/Item'
import ExploreContainer from './ExploreContainer.vue';
import { IonButton, IonSpinner } from '@ionic/vue';

const colorList = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'light',
]
const getColor = (i:number) => {
  while (i > colorList.length ) {
    i -= colorList.length
  }

  return colorList[i]
}

const tags = items
  .flatMap(o => o.tags)
  .filter((x, i, self) => self.indexOf(x) === i)

const choice = ref('')
const isLoading = ref(false)
const onTagClick = (tag:string) => {
  isLoading.value = true
  setTimeout(() => isLoading.value = false, 500)

  choice.value = tag 
}

const displayItems = computed(() => {
  return items.filter(o => o.tags.indexOf(choice.value) !== -1)
})
</script>

<template>
  <div id="container">
    <IonButton
      v-for="(tag, i) in tags"
      :key="i"
      :color="getColor(i)"
      @click.prevent="onTagClick(tag)">
      {{ tag }}
    </IonButton>

    <p v-if="isLoading">
      <IonSpinner />
    </p>
    <ExploreContainer 
      v-if="isLoading === false && choice"
      :items="displayItems" />
  </div>
</template>

<style scoped>
#container {
  text-align: center;
  max-width: 500px;
  margin: auto;
}
</style>
