<template>
  <v-flex md6 lg4>
    <v-card hover>
      <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img> -->
      <form>
        <v-card-title primary-title>
          <v-icon large color="primary">account_circle</v-icon>
          <!-- <h3 class="headline">Login</h3> -->
          <span class="title font-weight-black pl-1">Material Admin</span>
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
            <v-btn flat round color="primary">sign up</v-btn>
            <v-btn round color="primary" @click="login">Login</v-btn>
          </v-layout>
        </v-card-actions>
      </form>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { login as submitLogin } from '@/api/login'

import { mapState, mapActions } from 'vuex'

interface User {
  username: string
  token: string
  name: string
}

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  computed: {
    ...mapState('user', {
      userInfo: 'info',
    }),
  },
})
export default class LoginForm extends Vue {
  // 初始数据可以直接声明为实例的属性
  // 是否显示密码
  private show: boolean = false
  private form: object = {
    username: '',
    password: '',
  }
  private async login() {
    console.log()
  }
}
</script>