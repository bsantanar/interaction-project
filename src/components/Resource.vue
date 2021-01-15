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
            color="grey"
        >
        <v-img :src="resource.src"></v-img>
        </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
                <v-btn 
                    outlined
                    rounded
                    text
                >
                Download
                </v-btn>
        </v-card-actions>
        <div class="d-flex flex-no-wrap justify-space-between">
            <!-- <v-card-title class="headline">
                {{resource.title}}
            </v-card-title>

            <v-card-subtitle>
                {{resource.description}}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn 
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                >
                Download
                </v-btn>
            </v-card-actions>
            <v-avatar
                class="ma-3"
                size="125"
                tile
            >
                <v-img :src="resource.src"></v-img>
            </v-avatar> -->
        </div>
        </v-card>
    </v-col>
</template>
<script>
export default {
    name: 'Resource',
    props: ['resource']
}
</script>