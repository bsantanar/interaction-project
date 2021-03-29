<template>
    
    <v-col
        cols="12"
        sm="6"
        lg="4"
    >
        <v-card
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                    {{resource.title}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{resource.description}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                    tile
                    size="80"
                    color="secondary"
                >
                <v-img
                v-if="resource.image"
                :src="resource.image"
                ></v-img>
                <v-img
                v-else
                src="@/assets/default.jpg"
                ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
                    <v-btn 
                        outlined
                        rounded
                        text
                        :href="resource.url"
                    >
                    Link
                    </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>
<script>
export default {
    name: 'Resource',
    props: ['resource'],
}
</script>