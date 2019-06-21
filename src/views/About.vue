<template>
  <div id="about" class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button/>
        </ion-buttons>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content id="about" padding>
      <h1>This is an about page</h1>
    </ion-content>
  </div>
</template>

<style lang="scss">
  #about {
    ion-header ion-toolbar {
      --background: var(--ion-color-secondary)
    }
  }
</style>
