<template>
  <div class="blog">
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="text-slate-200 flex flex-col items-center justify-center mt-24"
      >
        <h1 class="text-6xl">Blog Posts</h1>
        <p class="text-amber-500 text-xl mb-10">News Feed And Blogs</p>
        <div class="text-2xl mb-20 flex flex-col items-center justify-center">
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
    <v-row class="section flex flex-col items-center justify-center">
      <v-col
        cols="12"
        md="6"
        class="text-slate-200 flex items-center justify-center mt-24 w-[700px]"
      >
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          voluptatibus
        </div>
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          Consectetur
        </div>
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          Adipisicing
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="text-slate-200 flex items-center justify-around mt-24 w-[700px]"
      >
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          Distinctioned
        </div>
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          Numquadem
        </div>
        <div
          class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"
        >
          Exercitationem
        </div></v-col
      >
    </v-row>
    <v-row class="section">
      <v-col
        cols="12"
        md="12"
        class="text-slate-200 bg-pink-600 mt-24 flex items-center justify-center"
      >
        <img
          src="@/assets/img/2.jpg"
          alt=""
          class="min-w-full h-[700px] inline-block" /></v-col
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
        <h1 class="text-6xl font-semibold text-amber-500">seeking knowledge</h1>
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

    <!-- First Set of Data -->
    <v-row
      class="section flex max-w-screen-xl items-center justify-start mt-24"
    >
      <v-col
        v-for="(item, index) in firstHalf"
        :key="index"
        cols="12"
        md="3"
        sm="6"
        class="text-slate-200 w-[300px]"
      >
        <img :src="`/img/${item.image}`" alt="blog item" />
        <h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600">
          {{ item.title }}
        </h2>
        <div class="text-xl mb-20 flex flex-col items-start justify-center">
          {{ item.desc }}
        </div>
      </v-col>
    </v-row>

    <!-- Second Set of Data -->
    <v-row
      class="section flex max-w-screen-xl items-center justify-start mt-24"
    >
      <v-col
        v-for="(item, index) in secondHalf"
        :key="index"
        cols="12"
        md="2"
        sm="6"
        class="text-slate-200 w-[300px]"
      >
        <img :src="`/img/${item.image}`" alt="blog item" />
        <h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600">
          {{ item.title }}
        </h2>
        <div class="text-xl mb-20 flex flex-col items-start justify-center">
          {{ item.desc }}
        </div>
      </v-col>
    </v-row>
    <!-- third Set of Data -->
    <v-row
      class="section flex max-w-screen-xl items-center justify-start mt-24"
    >
      <v-col
        v-for="(item, index) in thirdHalf"
        :key="index"
        cols="12"
        md="2"
        sm="6"
        class="text-slate-200 w-[300px]"
      >
        <img :src="`/img/${item.image}`" alt="blog item" />
        <h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600">
          {{ item.title }}
        </h2>
        <div class="text-xl mb-20 flex flex-col items-start justify-center">
          {{ item.desc }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import blogsData from "@/assets/data/blogs.json";
import { splitArray } from "~/utils/splitArray";

// Split the data into two halves
const [firstHalf, secondHalf, thirdHalf] = splitArray(blogsData, 4);
</script>
