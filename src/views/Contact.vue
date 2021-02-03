<template>
    <v-container style="max-width: 1200px;">
        <h1>
            Contact Us
        </h1>
        <v-sheet
            elevation="1"
            rounded="lg"
        >
            <v-row>
                <v-col 
                    class="text-center">
                <p>

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae nulla, quod autem hic dolorem est sunt aliquid quas animi similique nesciunt, nobis quis officia numquam eveniet quasi fugit quam.
                </p>

                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-map-marker
                    </v-icon>
                    <p>Universidad de Santiago de Chile</p>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-phone
                    </v-icon>
                    <p>+56 9 1234 56789</p>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-email
                    </v-icon>
                    <p>neurone@usach.cl</p>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>
<script>
export default {

    data: () => ({
    }),
}
</script>