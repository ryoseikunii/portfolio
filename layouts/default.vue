<template>
  <v-main>
    <Header />
    <slot />
    <Welcome />
    <Works1 />
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