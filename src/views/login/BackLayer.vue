<template>
  <v-app>
    <div id="backLayer"></div>
    <slot></slot>
  </v-app>
</template>

<script>
export default {
  mounted() {
    if (window.runGenScene) {
      window.runGenScene()
    } else {
      console.error("Scene not found")
    }
  }
}
</script>

