<template>
    <v-container style="max-width: 1200px;">
        <h1>
            Publications
        </h1>
        <div class="text-center" v-if="errored">
            <h3>We're sorry, we're not able to retrieve this information at the moment, please try back later</h3>
        </div>
        <div v-else>
            <div>
                <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                        lg="2"
                    >
                        <div v-if="loading">
                            <v-skeleton-loader
                                class="mx-auto"
                                max-width="300"
                                type="list-item"
                            ></v-skeleton-loader>
                        </div>
                        <v-sheet v-else
                            rounded="lg"
                            elevation="1"
                        >
                            <v-list color="transparent"
                            >
                                <v-subheader>Filter by year</v-subheader>
                                <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                    class="text-center"
                                    >
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                    >
                                        <!-- <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon> -->

                                        <v-list-item-content>
                                        <v-list-item-title v-text="item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-sheet>
                    </v-col>
                    <v-col
                        cols="12"
                        lg="10"
                        sm="12"
                    >
                        <div v-if="loading">
                            <v-skeleton-loader
                                class="mx-auto"
                                type="list-item-avatar-three-line"
                            ></v-skeleton-loader>
                        </div>
                        <v-sheet v-else
                            min-height="70vh"
                            rounded="lg"
                        >
                        <div
                        >
                            <Publication
                            v-for="card in filterPublications"
                            :key="card.title"
                            :card="card"
                            />
                        </div>
                                
                        </v-sheet>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
import Publication from '@/components/Publication.vue'
import axios from 'axios'

export default {
    name: "Publications",
    components: {
        Publication
    },
    data: () => ({
      selectedItem: null,
      items: [
          2017,
          2018
      ],
      cards: [],
      loading: true,
      errored: false
    }),
    mounted() {
        setTimeout(() => {
            axios
                .get('http://localhost:3000/api/publication/?projectId=600c3c79245fa93878cf4955')
                .then(res => this.cards = res.data.data)
                .catch(err => {
                    console.error("axios err", err)
                    this.errored = true
                })
                .finally(() => this.loading = false)

        }, 2000)
    },
    computed: {
        filterPublications: function(){
            if(!this.items[this.selectedItem]) return this.cards
            return this.cards.filter(c => c.year == this.items[this.selectedItem])
        }
    }
}
</script>