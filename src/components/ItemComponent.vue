<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { defineProps } from "vue"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ion-card>
    <img :alt="props.item.title" :src="props.item.src" />
    <ion-card-header>
      <ion-card-title>{{ props.item.title }}</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ props.item.description }}
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
