<template>
  <v-app>
    <the-toolbar :isLogin="isLogin" />
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
    <the-bottom-navigation :isLogin="isLogin" />
  </v-app>
</template>

<script>
import TheToolbar from '@/components/Commons/TheToolbar'
import TheBottomNavigation from '@/components/Commons/TheBottomNavigation'
export default {
  name: 'App',
  data: () => ({
    openSidebar: false,
    isLogin: false
  }),
  watch: {
    openSidebar: function(val) {
      console.log(val)
    }
  },
  async beforeCreate() {
    let { response } = await this.$auth()
    this.isLogin = !!response
  },
  components: {
    TheToolbar,
    TheBottomNavigation
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
