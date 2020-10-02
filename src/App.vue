<template>
  <div>
    <template v-if="!isMantenimiento">
      <credinstanteLayout>
        <component :is="currentComponent" :entorno="entorno" />
      </credinstanteLayout>
      <ModalText />
      <ModalAlert />
    </template>
    <template v-else>
      <Mantenimiento>
        <p class="environment">{{ entorno }}</p>
      </Mantenimiento>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import credinstanteLayout from "@/layouts/credinstanteLayout";
import HelloWorld from "@/components/HelloWorld";

/* Función para renderizar de manera asíncrona componentes principales */
function lazyComponent(name) {
  return () => ({
    component: import(`@/components/${name}`),
  });
}

export default {
  name: "App",
  components: {
    credinstanteLayout,
    HelloWorld,
    ModalText: () => import("@/components/Modals/ModalText"),
    ModalAlert: () => import("@/components/Modals/ModalAlert"),
    Mantenimiento: () => import("@/components/Utils/Mantenimiento"),
  },
  computed: {
    ...mapGetters("ui", ["step"]),

    /* Propiedad computada para cargar dinámicamente componentes */
    currentComponent() {
      let name = null;
      switch (this.step) {
        case 1:
          name = "HelloWorld";
          break;
      }
      return name;
    },
  },
  data: () => ({
    isMantenimiento: false,
    entorno: `${process.env.VUE_APP_ENTORNO} ${process.env.VUE_APP_VERSION}`,
  }),
};
</script>
<style scoped>

</style>
