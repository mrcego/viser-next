<template>
  <div>
    <v-app-bar dense color="accent" dark class="elevation-1" app>
      <v-app-bar-nav-icon
        color="primary"
        @click.stop="openSidebar"
      ></v-app-bar-nav-icon>

      <v-avatar size="30px" class="logo-tissini">
        <img
          :src="require('@/assets/logo-tissini-toolbar.png')"
          alt="TISSINIAPP"
        />
      </v-avatar>

      <v-spacer></v-spacer>

      <v-btn icon color="primary">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <the-sidebar :drawer="drawer" @open-sidebar="drawer = false" />
  </div>
</template>

<script>
import TheSidebar from '@/components/Commons/TheSidebar'

export default {
  data: () => ({
    drawer: false
  }),

  components: {
    TheSidebar
  },
  // watch: {
  //   drawer: function(val) {
  //     console.log(val)
  //   }
  // },
  methods: {
    openSidebar: function() {
      if (this.drawer) {
        this.drawer = !this.drawer
      }
      setTimeout(() => {
        this.drawer = true
      })
    }
  }
}
</script>

<style scoped>
.logo-tissini {
  margin-left: -7px;
}

.v-btn:before {
  display: none;
}
</style>
