<template>
  <v-toolbar app dense dark color="primary">
    <v-toolbar-side-icon @click="()=>toggleDrawer()"></v-toolbar-side-icon>

    <v-btn icon hidden>
      <v-icon>arrow_back</v-icon>
    </v-btn>

    <v-toolbar-title class="white--text pr-4">Title</v-toolbar-title>

    <v-progress-circular v-show="actionLoading" indeterminate :size="20" :width="2"></v-progress-circular>

    <v-spacer></v-spacer>
    <v-flex shrink>
      <v-expand-x-transition>
        <div v-show="expand" style="white-space: nowrap">
          <v-text-field
            prepend-icon="search"
            autofocus
            @blur="expand = !expand"
            color="white"
            placeholder="菜单搜索"
          ></v-text-field>
        </div>
      </v-expand-x-transition>
    </v-flex>
    <v-btn icon @click="expand = !expand" v-show="!expand">
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      actionLoading: false,
      expand: false,
    }
  },
  methods: {
    ...mapActions('system', ['toggleDrawer']),
  },
}
</script>

<style>
</style>
