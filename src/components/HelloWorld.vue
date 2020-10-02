<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/images/template/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 text__primary">
          Template para Landings
        </h1>

        <p class="subheading font-weight-regular text__primary">
          Template elaborado con vuejs
          <br />para el desarrollo ágil de proyectos en Acceso Crediticio
        </p>
        <v-btn @click="openModalText" class="mb-2 mr-1 content__primary text__secondary"
          >Modal Text
        </v-btn>
        <v-btn @click="openModalAlert" class="mb-2 ml-1 content__primary text__secondary"
          >Modal Alert
        </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3 text__primary">
          Entorno de Trabajo
        </h2>

        <v-row justify="center" class="text__primary">
          <p>{{ entorno }}</p>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3 text__primary">
          Ecosistema
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3 text__primary"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["entorno"],
  data: () => ({
    ecosystem: [
      {
        text: "vue",
        href: "https://vuejs.org/",
      },
      {
        text: "vuex",
        href: "https://vuex.vuejs.org/",
      },
      {
        text: "vuetify",
        href: "https://vuetifyjs.com/en/",
      },
      {
        text: "axios",
        href: "https://github.com/axios/axios",
      },
      {
        text: "gitlab",
        href: "http://gitlab.acr.pe/devweb360/ld-template-js.git",
      },
    ],
  }),
  methods: {
    openModalText() {
      this.$store.dispatch("ui/setModalText", {
        isModal: true,
        titulo: "Título del Modal",
        texto: "Contenido del Modal"
      });
    },
    openModalAlert() {
      this.$store.dispatch("ui/setModalAlert", {
        isModal: true,
        isPersistent: true,
        imgModal: 'success',
        tituloModal: "Título del Modal",
        msgModal: "Contenido del Modal"        
      });
    },
  },
};
</script>
<style scoped>
.color--text {
  color: white !important;
}
</style>
