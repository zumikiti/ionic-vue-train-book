<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>クイズ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">クイズ</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container">
        <template v-if="isFinQuestion">
          <h2>
            せいかいすう: {{ state.result }} / {{ questionCount }}
          </h2>

          <IonButton @click.prevent="onResetClick">
            もういっかい
          </IonButton>
        </template>

        <template v-else-if="state.question.src">
          <h2>第{{ state.questions.length + 1 }}問</h2>
          <img
            :src="state.question.src"
            width="500">

          <IonList>
            <IonItem
              v-for="(option, i) in state.options"
              :key="i"
              @click.prevent="addAnswer(option)"
              button>
              <IonLabel>
                {{ option }}
              </IonLabel>
            </IonItem>
          </IonList>
        </template>

        <IonButton
          v-else
          @click.prevent="selectQuestion">
          スタート
        </IonButton>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, loadingController } from '@ionic/vue'
import { computed, reactive, watch } from 'vue'
import items from '@/consts/Item'

const questionCount = 5

const state = reactive({
  question: {
    title: '' as string,
    src: '' as string,
  },
  options: [] as string[],
  questions: [] as string[],
  answers: [] as string[],
  count: questionCount,
  result: 0,
})

const selectQuestion = () => {
  const item = items[Math.floor(Math.random() * items.length)]
  state.question.src = item.src
  state.question.title = item.title

  const tag = item.tags[Math.floor(Math.random() * item.tags.length)]
  state.options = items
    .filter(o => o.tags.indexOf(tag) !== -1)
    .map(o => o.title)

  state.count--
}

const addAnswer = (option:string) => {
  state.questions.push(state.question.title)
  state.answers.push(option)

  selectQuestion()
}

const showLoading = async () => {
  const loading = await loadingController.create({
    message: 'けいさんちゅう...',
    duration: 2000,
  })
  loading.present()
}
const isFinQuestion = computed(() => state.count < 0)
watch(() => state.count, async () => {
  if (isFinQuestion.value === false) return

  state.questions.forEach((o, i) => {
    if (state.answers[i] === o) {
      state.result++
    }
  })

  await showLoading()
})


const onResetClick = () => {
  state.questions = []
  state.answers = []
  state.count = questionCount
  state.result = 0
}
</script>

<style scoped>
#container {
  text-align: center;
  max-width: 500px;
  margin: auto;
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
