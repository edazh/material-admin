<template>
  <div>
    <div id="backLayer"></div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <LoginForm/>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
export default {
  components: { LoginForm },
  mounted() {
    if (window.runGenScene) {
      window.runGenScene()
    } else {
      console.error('Scene not found')
    }
  },
}
</script>

<style scoped>
.v-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
