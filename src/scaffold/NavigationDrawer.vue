<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant="!drawerExpanded" hide-overlay stateless>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon>
              <v-icon>setting</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <NavigationMenu/>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import NavigationMenu from './NavigationMenu'
export default {
  components: { NavigationMenu },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      mini: true,
      right: null,
    }
  },
  computed: {
    ...mapState('system', ['drawerExpanded']),
  },
}
</script>

<style>
</style>
