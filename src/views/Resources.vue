<template>
    <v-container>
        <h1>
            {{this.$parent.$parent.$parent.language.resources}}
        </h1>
        <div class="text-center" v-if="errored">
            <h3>{{this.$parent.$parent.$parent.language.error}}</h3>
        </div>
        <div v-else>
            <div v-if="loading">
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        lg="4"
                    >
                        <v-skeleton-loader
                            class="mx-auto"
                            type="list-item-three-line"
                        ></v-skeleton-loader>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        lg="4"
                    >
                        <v-skeleton-loader
                            class="mx-auto"
                            type="list-item-three-line"
                        ></v-skeleton-loader>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        lg="4"
                    >
                        <v-skeleton-loader
                            class="mx-auto"
                            type="list-item-three-line"
                        ></v-skeleton-loader>
                    </v-col>
                </v-row>
            </div>
            <div v-else>
                <v-row>
                    <Resource 
                        v-for="resource in resources"
                        :key="resource.title"
                        :resource="resource"
                    />
                </v-row>
            </div>
        </div>
    </v-container>
</template>
<script>
import Resource from '../components/Resource.vue'
import axios from 'axios'
export default {
    name: 'Resources',
    components: {
        Resource
    },
    mounted() {
        axios
            .get(`${process.env.VUE_APP_API_URL}/resource/?projectId=${process.env.VUE_APP_PROJECT_ID}`)
            .then(res => {
                this.resources = res.data.data
                this.resources = this.resources.map( r => {
                    return {
                        ...r,
                        image: 'data:image/jpeg;base64,' + Buffer.from(r.image)
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
        resources: [],
        loading: true,
        errored: false
    }),
}
</script>