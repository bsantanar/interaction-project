<template>
  <v-container style="max-width: 1200px;">
    <v-row class="text-center">
      <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                src="https://www.openglove.org/assets/images/header-glove.jpg"
                max-height="400"
              >
                <v-expand-transition>
                  <div
                    v-if="!hover"
                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    OpenGlove
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          sm="8"
          lg="8"
      >
        <div class="headline text-h4 font-weight-bold black--text mb-1 text-center">
          Haptic device that provides vibrotactile feedback
        </div>
        <div class="subtitle-1 text-subtitle-1 black--text text-center">
          OpenGlove offers a flexible design, which allows developers and users to rearrange 
          the placement of vibration motors in different areas of the hand depending on their 
          particular needs. OpenGlove is a useful resource to enhance immersion in virtual reality 
          and natural interfaces applications. In this site we provide the design and construction 
          guidelines of the hardware. We also provide the basic software tools in order to help you 
          in the construction of your own implementations of OpenGlove and software that uses this device.
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >

        <v-img
          src="https://www.openglove.org/assets/images/about-glove.jpg"
          aspect-ratio="1.7"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  Our mission is very important
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                Mission
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  Our objective is very important
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                Objective
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  Our purpose is very important
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                Purpose
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col
          cols="12"
          sm="12"
          lg="12"
      >
        <v-sheet
          rounded="lg"
          elevation="1"
        >
          <v-carousel hide-delimiters cycle>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
      <!-- <v-col
          cols="12"
          sm="12"
          lg="4"
      >
        <v-sheet
          rounded="lg"
          elevation="1"
        >
          <h1>SOCIAL MEDIA</h1>
        </v-sheet>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
      ],
      
    }),
  }
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) .v-img {
  opacity: 0.6;
 }
</style>