<template>
  <div class="about">
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="text-slate-200 flex flex-col items-center justify-center mt-24"
      >
        <h1 class="text-6xl mb-10">About Us</h1>
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
          <p>illum dolorum iste eaque voluptatibus rem.</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="text-slate-200 bg-pink-600 flex items-center justify-center"
      >
        <img
          src="@/assets/img/6.jpg"
          alt=""
          class="min-w-full h-[600px] inline-block" /></v-col
    ></v-row>

    <v-row
      class="section flex max-w-screen-xl items-start justify-between mt-24"
    >
      <v-col
        cols="12"
        md="6"
        sm="6"
        class="text-slate-200 w-[500px] items-start justify-between flex flex-col"
      >
        <h1 class="text-6xl font-bold text-amber-500">Know Us</h1>
        <v-spacer></v-spacer>
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          mollitia, consequuntur eius rem corporis itaque placeat quos illum
          voluptas harum exercitationem ullam! Soluta odio accusantium odit
          explicabo alias maxime dicta. Lorem ipsum dolor
        </p>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="text-slate-200 w-[500px]">
        <p class="text-2xl">
          placeat quos illum voluptas harum exercitationem ullam! Soluta odio
          accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Error explicabo minus rerum iusto
          numquam ex et delectus quasi sapiente expedita distinctio architecto,
          esse magni, illum dolorum iste eaque voluptatibus rem.
        </p>
      </v-col>
    </v-row>
    <v-row
      class="section flex max-w-screen-xl items-center justify-start mt-24"
    >
      <v-col
        v-for="(item, index) in aboutData"
        :key="index"
        cols="12"
        md="3"
        sm="6"
        class="text-slate-200 w-[300px]"
      >
        <h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600">
          {{ item.title }}
        </h2>
        <div class="text-xl mb-20 flex flex-col items-start justify-center">
          {{ item.desc }}
        </div>
      </v-col>
    </v-row>
    <avatar />
  </div>
</template>

<script setup>
import aboutData from "@/assets/data/about.json";
</script>
