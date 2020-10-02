<template>
  <div class="container-principal">
    <v-container>
      <v-row>
        <v-col cols="5" class="container-imgPersona">
          <img :src="imgPersona" alt="" />
        </v-col>
        <v-col
          cols="7"
          class="d-flex flex-column justify-center container-mensaje text__primary"
        >
          <h1>404</h1>
          <h3 class="mb-1">¡Rayos!</h3>
          <p>No pudimos encontrar la página que buscas.</p>
        </v-col>
      </v-row>
      <v-row class="container_row__2">
        <v-col cols="12" class="container-speech" sm="6">
          <p class="mb-0 text__primary">
            Tranquilo no has sido el único que se ha perdido alguna vez...
          </p>
        </v-col>
        <v-col class="container-btn-home d-flex justify-center" cols="12" sm="6">
            
          <v-btn to="/" class="content__primary text__secondary">
            Volver a la <br />
            página de inicio<v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pr-1">
          <v-card
            max-width="216"
            height="210"
            outlined
            class="container-evaluame"
          >
            <v-card-text class="d-flex flex-column container-card__text">
              <div
                class="container-evaluame__titulo content__primary text__secondary"
              >
                ¿También quieres explorar los placeres de tener tu auto propio?
              </div>
              <div
                class="container-evaluame__imagen d-flex flex-column justify-center"
              >
                <img :src="imgCarro" alt="" />
              </div>
              <div class="d-flex justify-center align-center">
                <v-btn small class="content__primary text__secondary">
                  Evaluame
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" class="pl-1">
          <v-card
            max-width="216"
            height="210"
            outlined
            class="container-depositame"
          >
            <v-card-text class="d-flex flex-column container-card__text">
              <div
                class="container-depositame__titulo content__blue text__secondary"
              >
                ¿Te quedaste corto para lo que deseabas comprar?
              </div>
              <div
                class="container-depositame__imagen d-flex flex-column justify-center"
              >
                <img :src="imgDinero" alt="" />
              </div>
              <div class="d-flex justify-center align-center">
                <v-btn small class="content__blue text__secondary">
                  Deposítame
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPersona: require("~/assets/images/ui/persona.png"),
      imgCarro: require("~/assets/images/ui/carro.png"),
      imgDinero: require("~/assets/images/ui/dinero.png")
    };
  }
};
</script>

<style scoped>
.container-principal {
  max-width: 500px;
  margin: auto;
}
.container-imgPersona {
    max-height: 310px;
}
.container-imgPersona img {
  width: 100%;
}
.container-mensaje {
  font-size: 18px;
}

.container-speech p {
  font-size: 13px;
}
.container-btn-home .v-btn {
  font-size: 10px;
}
.container-evaluame {
  background-color: #dcdcdc !important;
  border: 1px solid #ff7732 !important;
}
.container-depositame {
  background-color: #dcdcdc !important;
  border: 1px solid #005092 !important;
}
.container-card__text {
  height: 100%;
  padding: 0;
}
.container-evaluame__titulo,
.container-depositame__titulo {
  font-size: 11px;
  line-height: initial;
  text-align: center;
  height: 50px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
}
.container-evaluame__imagen,
.container-depositame__imagen {
  height: 120px;
}
.container-evaluame__imagen img,
.container-depositame__imagen img {
  width: 120px;
  max-height: 120px;
  margin: auto;
}
</style>
