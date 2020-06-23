<template>
  <v-bottom-navigation
    app
    :value="activeButton"
    grow
    color="primary"
    class="elevation-1"
  >
    <v-btn>
      <span>Categorías</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Catálogo</span>
      <v-icon>mdi-badge-account-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Carrito</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn v-if="isLogin">
      <span>Promos</span>
      <v-icon>mdi-sale</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      activeButton: 0
    }
  }
}
</script>
