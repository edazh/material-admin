<template>
  <div>
    <NavigationDrawer></NavigationDrawer>
    <ToolBar></ToolBar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavigationDrawer from './NavigationDrawer'
import ToolBar from './ToolBar'
export default {
  components: { NavigationDrawer, ToolBar },
}
</script>

<style>
</style>
