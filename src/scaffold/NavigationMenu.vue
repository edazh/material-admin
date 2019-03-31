<template>
  <v-list>
    <v-list-group
      :value="drawerExpanded&&menu.active"
      v-for="menu in menus"
      :key="menu.title"
      :prepend-icon="menu.icon"
      no-action
    >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>

      <v-list-tile
        ripple
        v-for="subMenu in menu.children"
        :key="subMenu.title"
        @click="onMenuClick(subMenu)"
      >
        <v-list-tile-action>
          <v-icon>{{ subMenu.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ subMenu.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      menus: state => state.menu.menus,
      drawerExpanded: state => state.system.drawerExpanded,
    }),
  },
  methods: {
    onGroupClick(activator) {
      console.log('onGroupClick', activator)
    },
    onMenuClick(menu) {
      console.log('clicked:', menu)
      console.log('onGroupClick', this.drawerExpanded)
    },
  },
}
</script>

<style>
</style>
