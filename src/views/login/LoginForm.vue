<template>
  <v-flex xs12 sm5 md4 lg3>
    <v-card hover>
      <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img> -->
      <form>
        <v-card-title primary-title>
          <v-icon large color="primary">account_circle</v-icon>
          <!-- <h3 class="headline">Login</h3> -->
          <span class="title font-weight-black pl-1">Material Admin</span>
        </v-card-title>
        <v-layout px-4 align-space-around justify-space-around column fill-height>
          <v-text-field
            label="用户名"
            v-model="form.username"
            prepend-inner-icon="person"
            :counter="10"
            clearable
            required
          ></v-text-field>
          <v-text-field
            label="密码"
            v-model="form.password"
            prepend-inner-icon="lock"
            :counter="16"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            @click:append="show = !show"
            required
          ></v-text-field>
        </v-layout>
        <v-card-actions>
          <v-layout align-center justify-end px-4 py-2>
            <v-btn flat round color="primary">忘记密码</v-btn>
            <v-btn round color="primary" @click="submit">登录</v-btn>
          </v-layout>
        </v-card-actions>
      </form>
    </v-card>
  </v-flex>
</template>

<script>
import { login } from '@/api/login'
import { mapState, mapActions } from 'vuex'
import { Cookies } from '@/lib/util'
export default {
  data() {
    return {
      show: false,
      form: {
        username: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'info',
    }),
  },
  methods: {
    ...mapActions('user', ['saveInfo']),
    async submit() {
      const info = await login(this.form)
      this.saveInfo(info)
      this.saveToken(info.token)
      this.$router.push('/')
    },
    saveToken(token) {
      Cookies.set('token', token)
    },
  },
}
</script>
