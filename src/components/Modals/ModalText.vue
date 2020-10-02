<template>
  <v-dialog
    :persistent="modalText.isPersistent"
    v-model="modalText.isModal"
    :max-width="modalText.sizeModal ? modalText.sizeModal : 450"
  >
    <v-card class="text-xs-center py-2">
      <v-card-title
        class="title-modal align-center text-uppercase font-weight-bold headline text-xs-center text__primary"
        >{{ modalText.titulo }}
      </v-card-title>
      <v-card-text
        v-if="modalText.texto"
        class="headline text-xs-center font-weight-normal text__primary"
        style="font-size: 18px !important"
        v-html="modalText.texto"
      ></v-card-text>
      <v-card-actions class="text-xs-center align-center justify-center">
        <v-btn
          color="#34495E"
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
    ...mapGetters("ui", ["modalText"]),
  },
  methods: {
    close() {
      const HREF = this.modalText.href;
      this.$store.dispatch("ui/resetModalText");
      if (HREF) {
        location.href = HREF;
      }
    },
  },
};
</script>

<style></style>
