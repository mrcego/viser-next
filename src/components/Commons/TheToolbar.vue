<template>
  <v-app-bar dense color="accent" dark class="elevation-1" app>
    <template v-if="isLogin">
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

      <the-sidebar :drawer="drawer" @open-sidebar="drawer = false" />
    </template>
    <template v-else>
      <v-btn block depressed color="primary" @click="test">
        INICIA SESIÓN Ó REGISTRATE
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import TheSidebar from '@/components/Commons/TheSidebar'

export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false,
      required: true
    }
  },
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
    },
    test: function() {
      this.$httpv2('/categories', {
        method: 'get'
      }).then(response => console.log(response))
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
