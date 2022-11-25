<template>
  <IonPage>
    <ion-header>
      <ion-toolbar>
        <ion-title>ホーム</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">ホーム</ion-title>
        </ion-toolbar>
      </ion-header>

      <p
        v-if="isLoading"
        class="text-center">
        <IonSpinner />
      </p>
      <ExploreContainer v-else />
    </ion-content>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { onMounted, ref } from 'vue';
import { IonSpinner } from '@ionic/vue';

const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  setTimeout(() => isLoading.value = false, 2000)
})
</script>

<style scoped>
.text-center {
  text-align: center;
  max-width: 500px;
  margin: auto;
}
</style>
