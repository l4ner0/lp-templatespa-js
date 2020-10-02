<template>
  <div v-if="error.statusCode === 404">
    <Error404 />
  </div>
  <div v-else>
    {{ otherError }}
  </div>
</template>

<script>
import Error404 from "~/components/Utils/Error404";
export default {
  layout: "credinstanteLayout",
  components: {
    Error404
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
