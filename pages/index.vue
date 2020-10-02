<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <component :is="currentComponent" :entorno="entorno" />
      <ModalText />
      <ModalAlert />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import Template from "~/components/Template.vue";

/* Función para renderizar de manera asíncrona componentes principales */
function lazyComponent(name) {
  return () => ({
    component: import(`~/components/${name}`),
  });
}

export default {
  layout: "credinstanteLayout",
  components: {
    Template,
    ModalText: () => import("~/components/Modals/ModalText"),
    ModalAlert: () => import("~/components/Modals/ModalAlert"),
  },
  computed: {
    ...mapGetters("ui", ["step"]),

    /* Propiedad computada para cargar dinámicamente componentes */
    currentComponent() {
      let name = null;
      switch (this.step) {
        case 1:
          name = "Template";
          break;
      }
      return name;
    },
  },
  data() {
    return {
      entorno: process.env.NUXT_ENTORNO,
    };
  },
};
</script>
