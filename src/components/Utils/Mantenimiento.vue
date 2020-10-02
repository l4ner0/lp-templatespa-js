<template>
  <div class="contenedor fondo">
    <slot></slot>
    <div class="texto_mantenimiento">
      <p class="text__1" v-html="texto1"></p>
      <p class="text__2" v-html="texto2"></p>
      <p class="text__3" v-html="texto3"></p>
    </div>
    <div class="img_mantenimiento">
      <img src="@/assets/images/mantenimiento/Img-Rocket.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texto1: "La página estará al aire",
      texto2: "en unos minutos, <br/> disculpe los inconvenientes",
      texto3: "¡Gracias!",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,700;0,900;1,700;1,900&display=swap");
.fondo {
  background: linear-gradient(70deg, #FF7727, #f4ae1c);
  height: 100vh;
}
.contenedor {
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: center;
}
.contenedor div p {
  font-family: "Exo 2", sans-serif;
  font-style: italic;
  color: white;
  margin-bottom: 0px;
  text-align: center;
}
.text__1,
.text__3 {
  font-weight: 700;
  font-size: 1.6rem;
}
.text__2 {
  font-weight: 900;
  font-size: 2.2rem;
}

@media (min-width: 900px) {
  .contenedor {
    flex-direction: row;
  }
  .texto_mantenimiento {
    margin-right: 20px;
  }
  .img_mantenimiento {
    margin-left: 20px;
  }
  .contenedor div p {
    text-align: left;
  }
  .text__1,
  .text__3 {
    font-size: 2rem;
  }
  .text__2 {
    font-size: 2.8rem;
  }
}
</style>
