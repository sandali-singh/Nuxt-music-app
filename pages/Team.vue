<template>
  <div class="Team">
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="text-slate-200 flex flex-col items-center justify-center mt-24"
      >
        <p class="text-amber-500 text-xl">Get to know our team members !</p>
        <h1 class="text-6xl mb-10">Team Members</h1>
        <div class="text-xl mb-20 flex flex-col items-center justify-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          mollitia, consequuntur eius rem corporis itaque
          <p>
            placeat quos illum voluptas harum exercitationem ullam! Soluta odio
            accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor
          </p>
          <p>
            sit amet consectetur adipisicing elit. Error explicabo minus rerum
            iusto numquam ex et delectus quasi sapiente expedita distinctio
            architecto, esse magni,
          </p>
          <p>Eillum dolorum iste eaque voluptatibus rem.</p>
        </div>
      </v-col>
    </v-row>

    <v-row
      class="section flex items-center justify-center mt-24 max-w-screen-xl"
    >
      <v-col cols="12" md="4" class="">
        <img
          src="@/assets/img/19.jpg"
          alt="person1"
          loading="lazy"
          class="w-[400px]"
        />
      </v-col>
      <v-col cols="12" md="4" class="">
        <img
          src="@/assets/img/20.jpg"
          alt="person2"
          loading="lazy"
          class="w-[400px]"
        />
      </v-col>
      <v-col cols="12" md="4" class="">
        <img
          src="@/assets/img/21.jpg"
          alt="person3"
          loading="lazy"
          class="w-[400px]"
        /> </v-col
    ></v-row>
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="rounded-lg p-20 mt-24 max-w-screen-lg flex items-center justify-between text-slate-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <h2 class="text-5xl">Start your business with us.</h2>
        <v-spacer></v-spacer>
        <v-btn
          class="rounded cursor-pointer px-10 py-4 mr-5 bg-slate-700 text-white drop-shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none"
        >
          sign in
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="my-24 bg-red-500 flex items-center justify-between"
      >
        <img
          src="@/assets/img/23.jpg"
          alt="person3"
          loading="lazy"
          class="w-[600px] h-[250px]" />
        <img
          src="@/assets/img/25.jpg"
          alt="person3"
          loading="lazy"
          class="w-[600px] h-[250px]" />

        <img
          src="@/assets/img/24.jpg"
          alt="person3"
          loading="lazy"
          class="w-[600px] h-[250px]" />
        <img
          src="@/assets/img/13.jpg"
          alt="person3"
          loading="lazy"
          class="w-[600px] h-[250px]"
      /></v-col>
    </v-row>
    <!-- <Carousel /> -->
  </div>
</template>

<!-- <script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import carouselData from "@/assets/data/carousel.json";
</script> -->
