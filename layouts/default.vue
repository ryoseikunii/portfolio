<template>
  <v-main>
    <Header />
    <slot />
    <Welcome />
    <h1 class="text-4xl text-green-700 text-center font-semibold bg-gray-100">
      WORKS
    </h1>
    <Works1 />
    <Works2 />
    <Works3 />
    <Works4 />
  </v-main>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header
  }
}
</script>