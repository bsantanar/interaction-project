<template>
  <v-app> 
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon 
      v-if="$vuetify.breakpoint.width <= 950" 
      @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Project title</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.width > 950">
        <v-btn
          to="/"
          text
        >
          <span class="mr-2">Home</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/publications"
          text
        >
          <span class="mr-2">Publications</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/people"
          text
        >
          <span class="mr-2">People</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/resources"
          text
        >
          <span class="mr-2">Resources</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/activities"
          text
        >
          <span class="mr-2">Activities</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/contact"
          text
        >
          <span class="mr-2">Contact</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </div>
    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="primary text--lighten-1"
          >
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/publications">
              <v-list-item-title>Publications</v-list-item-title>
            </v-list-item>

            <v-list-item to="/people">
              <v-list-item-title>People</v-list-item-title>
            </v-list-item>

            <v-list-item to="/resources">
              <v-list-item-title>Resources</v-list-item-title>
            </v-list-item>

            <v-list-item to="/activities">
              <v-list-item-title>Activities</v-list-item-title>
            </v-list-item>

            <v-list-item to="/contact">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
    group: null,
    //
  }),
};
</script>
