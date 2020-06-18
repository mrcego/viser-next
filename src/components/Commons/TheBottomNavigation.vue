<template>
  <v-bottom-navigation
    app
    :value="activeBtn"
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
    <v-btn>
      <span>Promos</span>
      <v-icon>mdi-sale</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 0
    }
  }
}
</script>
