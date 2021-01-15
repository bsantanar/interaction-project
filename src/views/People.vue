<template>
  <section>
    <HoneyComb 
      v-for="person in people"
      :key="person.name"
      :person="person"
    />
  </section>
  
</template>
<script>
import HoneyComb from "../components/HoneyComb.vue";

export default {
    name: "People",
    components: {
      HoneyComb
    },
    data: () => ({
      people: [
        {name: "John Smith", image: "https://source.unsplash.com/random/1"},
        {name: "Stephen Hawkins", image: "https://source.unsplash.com/random/2"},
        {name: "Stephen Hawk1ns", image: "https://source.unsplash.com/random/2"},
        {name: "Stephen Hawk2ns", image: "https://source.unsplash.com/random/2"},
        {name: "Stephen Hawk4ns", image: "https://source.unsplash.com/random/2"},
        {name: "Stephen Hawk9ns", image: "https://source.unsplash.com/random/5"},
        {name: "Stephen Hawk5ns", image: "https://source.unsplash.com/random/4"},
        {name: "Stephen Hawk6ns", image: "https://source.unsplash.com/random/3"},
        {name: "Stephen Hawk7ns", image: "https://source.unsplash.com/random/2"},
        {name: "Stephen Hawk3ns", image: "https://source.unsplash.com/random/2"}
      ]
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