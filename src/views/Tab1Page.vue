<template>
  <IonPage>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ExploreContainer />
    </ion-content>
  </IonPage>
</template>

<script setup lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
