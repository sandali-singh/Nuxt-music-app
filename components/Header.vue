<template>
  <div
    class="flex sticky top-0 rounded-full z-50 backdrop-blur-md bg-slate/70 items-center justify-between max-w-screen-lg py-10 px-0"
  >
    <img src="@/assets/img/logo3.png" alt="logo" class="w-[40px]" />
    <v-spacer></v-spacer>
    <form @submit.prevent="onSubmit" class="search" action="#">
      <input
        v-model="query"
        type="text"
        class="search__input"
        placeholder="Search"
      />
      <button class="search__button" type="submit">
        <svg class="search__icon">
          <use xlink:href="@/public/img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>

    <v-row class="flex items-center justify-between w-[200px]">
      <v-col v-for="(item, index) in menuList" :key="index">
        <ul>
          <li class="">
            <a :href="item.link">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-btn
      class="rounded cursor-pointer bg-slate-700 text-white p-2 drop-shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none"
      >sign in</v-btn
    >
  </div>
</template>
<script>
import "@mdi/font/css/materialdesignicons.css";

export default {
  data() {
    return {
      query: "",
      menuList: [
        {
          link: "/",
          icon: "mdi-home",
          text: "Home",
        },
        {
          link: "/about",
          icon: "mdi-home",
          text: "About",
        },
        {
          link: "/team",
          icon: "mdi-home",
          text: "Team",
        },
        {
          link: "/blogs",
          icon: "mdi-home",
          text: "Blogs",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(`Search for: ${this.query}`);
      this.query = "";
    },
  },
};
</script>
<style scoped></style>
