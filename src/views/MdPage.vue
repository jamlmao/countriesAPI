<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>

                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">
                        Universities
                    </ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-button href="/home" size="default" fill="outline">
                    <ion-icon :icon="homeSharp"></ion-icon>
                </ion-button>
                <ion-card-header>
                    <ion-card-title style="text-align:center; ">Maldova Universities </ion-card-title>
                    <img :src="'https://flagsapi.com/MD/shiny/64.png'" style="width:90px; height:100px; margin:auto">
                </ion-card-header>
                <h1 style="text-align:center;"><strong>API IS NOT WORKING</strong></h1>
                <p style="text-align:center;">Empty Array</p>
                <ion-item v-for="(item, i) in university.univ" :key="item">

                    <ion-label> <strong>{{ item.name }}</strong></ion-label>
                    <ion-button :href="university.link[i]" target="_blank"><ion-icon
                            :icon="chevronForwardOutline"></ion-icon></ion-button>
                </ion-item>

            </ion-card>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { caretBackOutline, chevronForwardOutline, homeSharp } from 'ionicons/icons';
import axios from "axios";
import { defineComponent } from "vue";
import { onMounted, reactive } from "vue";

const university = reactive({
    univ: [],
    link: [],
});

onMounted(() => {
    axios.get("http://universities.hipolabs.com/search?country=Moldova").then((response) => {
        university.univ = response.data;
        university.link = response.data.map((item: any) => item.web_pages[0]);
        console.log(response.data.map((item: any) => item.univ[0]))
    });
});

</script>