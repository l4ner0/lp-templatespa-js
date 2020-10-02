<template>
  <v-dialog
    persistent
    v-model="modalText.isModal"
    :max-width="modalText.maxWidth ? modalText.maxWidth : 450"
  >
    <v-card class="text-xs-center py-2">
      <v-card-title
        class="title-modal align-center text-uppercase font-weight-bold headline text-xs-center text__primary"
        >{{ modalText.titulo }}
      </v-card-title>
      <v-card-text
        v-if="modalText.textoDefaultCliente"
        class="headline text-xs-center font-weight-normal text__primary"
        style="font-size: 18px !important"
        v-html="modalText.textoDefaultCliente"
      ></v-card-text>
      <v-card-actions class="text-xs-center align-center justify-center">
        <v-btn
          class="font-weight-bold text-xs-center content__primary text__secondary "
          large
          @click="close"
          >Aceptar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("ui", ["modalText"])
  },
  methods: {
    close() {
      const href = this.modalText.href;
      const push = this.modalText.push;
      this.$store.dispatch("ui/resetModalText");
      if (href) {
        location.href = href;
      }
      if (push) {
        this.$router.push(push);
      }
    }
  }
};
</script>

<style></style>
