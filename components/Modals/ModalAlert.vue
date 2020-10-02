<template>
  <v-dialog
    v-model="modalAlert.isModal"
    :persistent="modalAlert.isPersistent"
    :max-width="modalAlert.maxWidth ? modalAlert.maxWidth : 350"
  >
    <v-card>
      <div style="padding-top: 10px;" v-if="modalAlert.imgModal">
        <template v-if="modalAlert.imgModal == 'success'">
          <img
            :src="imgSuccess"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
        <template v-else-if="modalAlert.imgModal == 'warning'">
          <img
            :src="imgWarning"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
        <template v-else-if="modalAlert.imgModal == 'error'">
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
            :src="modalAlert.imgModal"
            alt
            srcset
            max-width="24"
            style="display:block; margin:auto;"
            class="my-4"
          />
        </template>
      </div>
      <v-card-title v-if="modalAlert.tituloModal" style="padding-top: 0px">
        <v-row class="d-flex flex-row justify-center text-center title justify">
          <b
            style="word-break: break-word; font-size: 28px !important;"
            class="text__primary justify"
            v-html="modalAlert.tituloModal"
          ></b>
        </v-row>
      </v-card-title>
      <v-card-text
        v-if="modalAlert.msgModal"
        class="pb-1"
        style="text-align: center"
      >
        <p
          style="font-size: 18px !important;"
          class="text__primary"
          v-html="modalAlert.msgModal"
        ></p>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-center">
        <v-btn color="#005092" class="white--text" @click="closeModal"
          >OK</v-btn
        >
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
      imgError: require("@/assets/images/ui/fail.png")
    };
  },
  computed: {
    ...mapGetters("ui", ["modalAlert"])
  },
  methods: {
    closeModal() {
      const href = this.modalAlert.href;
      const push = this.modalAlert.push;
      this.$store.dispatch("ui/resetModalAlert");
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
