<template>
  <BackLayer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <LoginForm></LoginForm>
        </v-layout>
      </v-container>
    </v-content>
  </BackLayer>
</template>

<script lang="ts">
import BackLayer from "./BackLayer.vue"
import LoginForm from "./LoginForm.vue"
export default {
  components: { LoginForm, BackLayer }
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
