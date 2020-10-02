<template>
  <v-dialog
    v-model="dialogVisible"
    :persistent="isPersistent"
    :max-width="350"
  >
    <v-card>
      <div style="padding-top: 10px;" v-if="imgModal">
        <template v-if="imgModal == 'success'">
          <img
            :src="imgSuccess"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
        <template v-else-if="imgModal == 'warning'">
          <img
            :src="imgWarning"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
        <template v-else-if="imgModal == 'error'">
          <img
            :src="imgError"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
        <template v-else>
          <img
            :src="imgModal"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
      </div>
      <v-card-title v-if="tituloModal" style="padding-top: 0px">
        <v-row class="d-flex flex-row justify-center text-center title justify">
          <b
            style="word-break: break-word; font-size: 28px !important;"
            class="text__primary justify"
            v-html="tituloModal"
          ></b>
        </v-row>
      </v-card-title>
      <v-card-text
        v-if="msgModal"
        class="pb-1"
        style="text-align: center"
      >
        <p
          style="font-size: 18px !important;"
          class="text__primary"
          v-html="msgModal"
        ></p>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-center">
        <v-btn color="#005092" class="white--text" @click="close">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      imgSuccess: require("@/assets/images/ui/success.png"),
      imgWarning: require("@/assets/images/ui/warning.png"),
      imgError: require("@/assets/images/ui/fail.png"),
      ///////////////////////////
      dialogVisible: false,
      isPersistent: false,
      imgModal: '',
      tituloModal: "",
      msgModal: ""
    };
  },
  computed: {
    ...mapGetters("ui", ["modalAlert"]),
  },
  methods: {
    /* closeModal() {
      const HREF = this.modalAlert.href;
      this.$store.dispatch("ui/resetModalAlert");
      if (HREF) {
        location.href = HREF;
      }
    }, */
    open({ isPersistent, imgModal, tituloModal, msgModal }) {
      this.dialogVisible = true;
      this.isPersistent = isPersistent;
      this.imgModal = imgModal;
      this.tituloModal = tituloModal;
      this.msgModal = msgModal;
    },
    close() {
      this.dialogVisible = false;
    }
  },
};
</script>
<style></style>
