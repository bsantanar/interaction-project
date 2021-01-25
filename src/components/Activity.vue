<template>
  <v-card
    class="mx-auto mb-2"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{card.title}}
    </v-card-title>

    <v-card-subtitle>
      {{card.date}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="show = !show"
        color="blue darken-2"
        text
      >
        Learn More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{card.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
    name: 'Activity',
    props: ['card'],
    data: () => ({
        show: false,
    }),
}
</script>