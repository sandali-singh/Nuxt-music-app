<template>
  <v-row class="section flex max-w-screen-xl items-center justify-start mt-24">
    <v-col
      v-for="(item, index) in aboutData"
      :key="index"
      cols="12"
      md="3"
      sm="6"
      class="text-slate-200 w-[300px]"
    >
      <img :src="`/img/${item.image}`" alt="blog item" />

      <div class="text-xl mb-20 flex flex-col items-start justify-center">
        {{ item.title }}
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import aboutData from "@/assets/data/about.json";
</script>
