<template>
    <v-card
        class="mx-auto"
        flat
        
    >
    <v-card-subtitle class="pb-0">
        {{card.year}}
    </v-card-subtitle>
    <v-card-title>{{card.headline}}</v-card-title>
    <v-card-text class="text--primary">
        <div>{{card.subtitle}}</div>
    </v-card-text>

    <v-card-actions>
        
        <v-list-item class="grow">

            <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>
            <!-- <v-row
            align="center"
            justify="end"
            >
                <v-icon class="mr-1">
                    mdi-heart
                </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">
                    mdi-share-variant
                </v-icon>
                <span class="subheading">45</span>
            </v-row> -->
        </v-list-item>
    </v-card-actions>
<v-divider></v-divider>
    </v-card>
</template>
<script>
  export default {
    name: 'Publication',
    props: ['card'],
    data: () => ({
    }),
  }
</script>
