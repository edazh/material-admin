<template>
  <v-flex md6 lg4>
    <v-card hover>
      <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img> -->
      <form>
        <v-card-title primary-title>
          <v-icon large color="primary">account_circle</v-icon>
          <!-- <h3 class="headline">Login</h3> -->
          <span class="title font-weight-bloder pl-1">Material Admin</span>
        </v-card-title>
        <v-layout pa-4 align-space-around justify-space-around column fill-height>
          <v-text-field
            label="username"
            v-model="form.username"
            prepend-inner-icon="person"
            :counter="10"
            clearable
            required
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="form.password"
            prepend-inner-icon="lock"
            :counter="16"
            :type="show?'text':'password'"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            @click:append="show = !show"
            required
          ></v-text-field>
        </v-layout>
        <v-card-actions>
          <v-layout pa-4 align-center justify-end fill-height>
            <v-btn flat round color="primary">sign in</v-btn>
            <v-btn round color="primary">Login</v-btn>
          </v-layout>
        </v-card-actions>
      </form>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      //是否显示密码
      show: false
    }
  } // data end
}
</script>

<style>
</style>
