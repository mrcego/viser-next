<template>
  <v-app>
    <the-toolbar />
    <v-main>
      <v-container fluid class="pa-0">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4" class="pa-0">
            <v-card class="elevation-1" tile>
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <the-bottom-navigation />
  </v-app>
</template>

<script>
import TheToolbar from '@/components/Commons/TheToolbar'
import TheBottomNavigation from '@/components/Commons/TheBottomNavigation'
export default {
  name: 'App',
  components: {
    TheToolbar,
    TheBottomNavigation
  },
  watch: {
    openSidebar: function(val) {
      console.log(val)
    }
  },
  data: () => ({
    openSidebar: false
  })
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
