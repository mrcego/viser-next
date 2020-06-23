<template>
  <v-navigation-drawer
    v-model="openSidebar"
    temporary
    app
    width="300"
    class="sidebar-background"
  >
    <v-list-item three-line class="user-toplist">
      <v-list-item-avatar size="64" class="user-avatar elevation-3">
        <v-img :src="require('@/assets/customer.png')"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="user-toplist-title"
          ><span
            style="max-width: 170px;"
            class="text-h6 white--text text--lighten-1 font-weight-bold text-truncate d-inline-block"
            >Cesar Gomez Hernandez</span
          >
          <v-btn
            :ripple="false"
            dark
            icon
            class="float-right"
            @click.stop="$emit('open-sidebar')"
          >
            <v-icon class="mdi mdi-36px">mdi-chevron-left</v-icon>
          </v-btn></v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense class="options-list">
      <v-list-item v-for="(option, index) in sidebarOptions" :key="index" link>
        <v-list-item-icon class="mr-4">
          <v-icon size="36" :color="option.icon.color"
            >mdi-{{ option.icon.name }}</v-icon
          >
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="body-2">{{
            option.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list-item three-line class="digital-catalogs">
      <span class="white--text ml-3 mt-14 text-uppercase"
        >Ver más detalles</span
      >
    </v-list-item>
    <v-list-item three-line class="feedback">
      <v-list-item-content class="text-justify py-0">
        <p class="font-weight-bold mb-0">
          Tienes algún problema, sugerencia o duda con la app? Háznoslo saber
          <a href="">presionando aquí.</a>
        </p>
      </v-list-item-content>
    </v-list-item>
    <div class="px-2 pb-2">
      <span class="text-subtitle-2">Versión {{ version }}</span>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
      default: null
    }
  },
  data: () => ({
    sidebarOptions: [
      {
        title: 'Ver perfil',
        icon: { name: 'account-circle', color: 'pink lighten-2' }
      },
      {
        title: 'Llamar a mi asesor',
        icon: { name: 'phone', color: 'teal darken-1' }
      },
      {
        title: 'Chat a mi asesor',
        icon: { name: 'whatsapp', color: 'green accent-4' }
      },
      {
        title: 'Compras',
        icon: { name: 'shopping-search', color: 'brown lighten-1' }
      },
      {
        title: 'Mi Tienda',
        icon: { name: 'store', color: 'deep-purple darken-1' }
      },
      {
        title: 'Galería',
        icon: { name: 'image-multiple', color: 'amber darken-4' }
      },
      {
        title: 'Devoluciones',
        icon: { name: 'clipboard-arrow-left', color: 'light-blue darken-4' }
      },
      {
        title: 'Manejo y Envío',
        icon: { name: 'truck-delivery-outline', color: 'lime darken-4' }
      },
      { title: 'Salir', icon: { name: 'logout', color: 'red' } }
    ]
  }),
  computed: {
    ...mapState(['version']),
    openSidebar: {
      get() {
        return this.drawer
      },
      set(drawer) {
        this.$emit('input', drawer)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user-toplist {
  background-image: linear-gradient(hsla(0, 0%, 100%, 0) 30%, #f5eef1),
    url('../../assets/wall_profile.jpg');
  padding: 0 0px;
}

.digital-catalogs {
  background-image: url('../../assets/digital-catalogs.jpg');
  background-position: center center;
  background-size: 100%;
  padding: 0;
  max-height: 100px;
}

::v-deep .v-list-item__title.user-toplist-title,
::v-deep.v-list-item.feedback {
  padding: 0 8px;
}
.sidebar-background {
  background-color: #f5eef1 !important;
}

::v-deep .v-avatar.v-list-item__avatar.user-avatar {
  margin-right: 0px;
  margin-left: 10px;
}
</style>
