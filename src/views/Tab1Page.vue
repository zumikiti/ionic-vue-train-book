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

      <ExploreContainer />
    </ion-content>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
