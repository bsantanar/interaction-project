<template>
    <v-container style="max-width: 1200px;">
        <h1>
            Activities
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
                    <div
                    >
                        <Activity
                        v-for="card in filterPublications"
                        :key="card.headline"
                        :card="card"
                        />
                    </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Activity from '@/components/Activity.vue'
import moment from 'moment';

export default {
    name: "Activities",
    components: {
        Activity
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
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices hendrerit, sociosqu mauris suspendisse facilisi donec blandit nisl lobortis pretium, risus cursus convallis est fermentum natoque magna phasellus. Facilisi varius metus lectus sodales pretium morbi ornare volutpat sollicitudin, imperdiet magna class est aptent mi semper faucibus pharetra, dignissim nunc mus tempus vitae congue quisque cras. Torquent erat laoreet fermentum mattis est risus fringilla volutpat eget cubilia donec ligula nec lobortis, hendrerit fames dis ultrices sagittis nostra integer phasellus luctus cum malesuada facilisis tempus.', 
            date: moment().format("DD-MM-YYYY")
        },
        {
            headline: 'OpenGlove Extensions to Capture Hand Movements Through 9-axis IMU and Flex Sensors', 
            text: 'Undergraduate Thesis. Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, Universidad de Santiago de Chile.', 
            date: moment(new Date(2017,11,20)).format("DD-MM-YYYY")
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