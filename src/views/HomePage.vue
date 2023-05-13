<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title style="text-align:center; ">EUROPE</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" style="text-align:center; "> European Countries</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card color="primary">
        <ion-card-header>
          <ion-card-title style="text-align:center;border-radius:10px;"></ion-card-title>
        </ion-card-header>
        <ion-list :inset="true">
          <ion-item v-for="(item, i) in state.countries" :key="item.cca2">
            <strong>{{ (i + 1) }}.</strong>
            <ion-img :src="`https://flagsapi.com/${item.cca2}/flat/64.png`"> </ion-img>
            <ion-label> <strong>{{ item.name.common }}</strong></ion-label>
            <ion-button @click="goToCountry(item)" fill="clear"><ion-icon
                :icon="chevronForwardOutline"></ion-icon></ion-button>
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import axios from "axios";
import { caretBackOutline, chevronForwardOutline, homeSharp } from 'ionicons/icons';
import { DefineComponent } from "vue";
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router';

const state = reactive({
  countries: [],
});

const router = useRouter();

onMounted(() => {
  axios.get("https://restcountries.com/v3.1/region/europe",
  ).then((response) => {
    state.countries = response.data;
  });
});
function goToCountry(country: any) {
  if (country.cca2 === "IE") {
    router.push("/IE");
  } else if (country.cca2 === "CY") {
    router.push("/cy");
  } else if (country.cca2 === "ES") {
    router.push("/es");
  } else if (country.cca2 === "LI") {
    router.push("/li");
  } else if (country.cca2 === "BG") {
    router.push("/bg");
  } else if (country.cca2 === "DE") {
    router.push("/de");
  } else if (country.cca2 === "FO") {
    router.push("/fo");
  } else if (country.cca2 === "FO") {
    router.push("/fo");
  } else if (country.cca2 === "GB") {
    router.push("/gb");
  } else if (country.cca2 === "MD") {
    router.push("/md");
  } else if (country.cca2 === "LT") {
    router.push("/lt");
  } else if (country.cca2 === "PL") {
    router.push("/pl");
  } else if (country.cca2 === "CH") {
    router.push("/ch");
  } else if (country.cca2 === "AX") {
    router.push("/ax");
  } else if (country.cca2 === "IS") {
    router.push("/is");
  }
}
</script>

<style scoped></style>