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
                    <ion-title size="large" style="text-align:center; ">
                        Universities
                    </ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-button href="/home" size="default" fill="outline">
                    <ion-icon :icon="homeSharp"></ion-icon>
                </ion-button>
                <ion-card-header>
                    <ion-card-title style="text-align:center; ">Aland Islands Universities </ion-card-title>
                    <img :src="'https://flagsapi.com/AX/shiny/64.png'" style="width:90px; height:100px; margin:auto">
                </ion-card-header>
                <h1 style="text-align:center;"><strong>API IS NOT WORKING</strong></h1>
                <p style="text-align:center;">Empty Array</p>



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
    axios.get("http://universities.hipolabs.com/search?country=").then((response) => {
        university.univ = response.data;
        university.link = response.data.map((item: any) => item.web_pages[0]);
    });
});

</script>