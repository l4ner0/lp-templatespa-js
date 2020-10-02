<template>
  <v-dialog
    :persistent="isPersistent"
    v-model="dialogVisible"
    :max-width="450"
  >
    <v-card class="text-xs-center py-2">
      <v-card-title
        class="title-modal align-center text-uppercase font-weight-bold headline text-xs-center text__primary"
        >{{ titulo }}
      </v-card-title>
      <v-card-text
        v-if="texto"
        class="headline text-xs-center font-weight-normal text__primary"
        style="font-size: 18px !important"
        v-html="texto"
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
  data() {
    return {
      dialogVisible: false,
      isPersistent: true,
      titulo: "Título del Modal",
      texto: "Contenido del Modal"
    }
  },
  methods: {
    /* close() {
      const HREF = this.modalText.href;
      this.$store.dispatch("ui/resetModalText");
      if (HREF) {
        location.href = HREF;
      }
    }, */
    open({ isPersistent, titulo, texto }) {
      this.dialogVisible = true;
      this.isPersistent = isPersistent;
      this.imgModal = titulo;
      this.tituloModal = texto;
    },
    close() {
      this.dialogVisible = false;
    }
  },
};
</script>

<style></style>
