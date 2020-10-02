<template>
  <v-app>
    <v-app-bar app fixed hide-on-scroll>
      <section class="mainToolbar">
        <img src="../assets/images/ui/logo_header.svg" class="imageToolbar" />
        <v-spacer />
      </section>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.imageToolbar {
  height: 40px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-bar {
  width: 100%;
}
.v-main {
  background-color: #dcdcdc;
}
.environment {
  margin: 20px;
  color: #005199;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
}
.v-toolbar__content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.containerPrincipal {
  max-width: 450px;
}

.text__primary {
  color: #005199 !important;
}

.text__secondary {
  color: white !important;
}

.content__primary {
  background-color: #ff7729 !important;
}

.content__secondary {
  background-color: #7d7d7d !important;
}

.content__blue {
  background-color: #005199 !important;
}
@media (min-width: 768px) {
  .imageToolbar {
    height: 56px;
    width: auto;
    display: flex;
    align-items: center;
  }
  .v-toolbar {
    background: rgba(0, 0, 0, 0) !important;
    height: 0px !important;
  }
  .mainToolbar {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    padding: 24px;
    max-width: 1024px !important;
  }
  .v-toolbar__content {
    width: 100%;
    color: #555555;
    border: 0;
    z-index: 1029;
    position: fixed;
    transition: all 150ms ease 0s;
    box-shadow: none;
    padding-top: 0px;
    margin-bottom: 0;
    border-bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom 1px center;
    background-image: url("../assets/images/ui/header-oficinavirtual-main.svg") !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>
