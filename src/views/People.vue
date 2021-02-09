<template>
  <div>
    <div class="text-center" v-if="errored">
        <h3>{{this.$parent.$parent.$parent.language.error}}</h3>
    </div>
    <div v-else>
      <div 
        v-if="loading"
        class="text-center mt-5"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <section v-else>
        <HoneyComb 
          v-for="person in people"
          :key="person.name"
          :person="person"
        />
      </section>
    </div>
  </div>
  
</template>
<script>
import HoneyComb from "../components/HoneyComb.vue";
import axios from 'axios'

export default {
    name: "People",
    components: {
      HoneyComb
    },
    // updated: function () {
    // },
    mounted() {
      axios
          .get(`${process.env.VUE_APP_API_URL}/member/?projectId=${process.env.VUE_APP_PROJECT_ID}`)
          .then(res => {
            this.people = res.data.data
            this.people = this.people.map( r => {
                  return {
                      ...r,
                      image: r.image ? 'data:image/jpeg;base64,' + Buffer.from(r.image) : 'null'
                  }
              });
          })
          .catch(err => {
              console.error("axios err", err)
              this.errored = true
          })
          .finally(() => this.loading = false)
    },
    data: () => ({
      root: null,
      loading: true,
      errored: false,
      people: []
    }),

}
</script>

<style>
*, *:after, *:before {box-sizing: inherit;}
* {position: relative;}
:root {
	--sinSerif: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	--Nhexa: 4;
	--gap: 1vw;
	--size: calc(calc(90vw / var(--Nhexa)) - var(--gap));
}
@media only screen and (min-width: 1100px) {
  :root {--Nhexa: 6;}
  section {margin: calc(var(--size) * .6) calc(var(--size) * .75) 0;}
}
@media only screen and (max-width: 1100px) {
	:root {--Nhexa: 4;}
  section {margin: calc(var(--size) * .6) calc(var(--size) * .55) 0;}
}
@media only screen and (max-width: 600px) {
	:root {--Nhexa: 2;}
  section {margin: calc(var(--size) * .6) calc(var(--size) * .15) 0;}
}
html {
	background: #e9e9e7;
  box-sizing: border-box;
	font-family: var(--sinSerif);
	font-size: 1rem;
}
body {
	overflow-X: hidden;
	hyphens: auto;
}
section {
  width: calc(var(--size) * calc(var(--Nhexa) - 1));
	display: grid;
	grid-template-columns: repeat(var(--Nhexa), 1fr);
	grid-gap: var(--gap);
}
body > p {
	font-size: 1.5rem;
	margin: 2rem 0 1rem calc(var(--size) * .5);
	font-weight: 200;
}
</style>