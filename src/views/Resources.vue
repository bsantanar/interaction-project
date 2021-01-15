<template>
    <v-container>
        <h1>
            Resources
        </h1>
        <v-row>
                <Resource 
                    v-for="resource in resources"
                    :key="resource.title"
                    :resource="resource"
                />
        </v-row>
    </v-container>
</template>
<script>
import Resource from '../components/Resource.vue'
export default {
    name: 'Resources',
    components: {
        Resource
    },
    data: () => ({
      resources: [
        {
            title: 'Software Arduino', 
            description: 'Download Arduino Controller Software', 
            src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
            title: 'API C#', 
            description: 'Download API for C#', 
            src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
            title: 'API Javascript', 
            description: 'Download API for Javascript', 
            src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
            title: '3D Models', 
            description: 'Download 3D models', 
            src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
      ]
    }),
}
</script>