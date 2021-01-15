<template>
    <v-container>
        <h1>
            Publications
        </h1>
        <v-row>
            <v-col
                cols="12"
                sm="12"
                lg="2"
            >
                <v-sheet
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
                <v-sheet
                    min-height="70vh"
                    rounded="lg"
                >
                <div
                >
                    <Publication
                    v-for="card in filterPublications"
                    :key="card.headline"
                    :card="card"
                    />
                </div>
                        
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Publication from '@/components/Publication.vue'

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
      cards: [
        {
            headline: 'OpenGlove SDK for Android Devices', 
            subtitle: 'Undergraduate Thesis. Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, Universidad de Santiago de Chile.', 
            year: 2018
        },
        {
            headline: 'OpenGlove Extensions to Capture Hand Movements Through 9-axis IMU and Flex Sensors', 
            subtitle: 'Undergraduate Thesis. Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, Universidad de Santiago de Chile.', 
            year: 2017
        },
      ]
    }),
    computed: {
        filterPublications: function(){
            if(!this.items[this.selectedItem]) return this.cards
            return this.cards.filter(c => c.year == this.items[this.selectedItem])
        }
    }
}
</script>