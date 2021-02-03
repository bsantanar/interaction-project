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
                    cols="12"
                    sm="12"
                    lg="8"
                >
                    <v-form
                        class="ml-2"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="name"
                                    :error-messages="nameErrors"
                                    :counter="10"
                                    label="Name"
                                    required
                                    outlined
                                    @input="$v.name.$touch()"
                                    @blur="$v.name.$touch()"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                lg="6"
                            >
                                <v-text-field
                                    v-model="email"
                                    :error-messages="emailErrors"
                                    label="Email"
                                    required
                                    outlined
                                    @input="$v.email.$touch()"
                                    @blur="$v.email.$touch()"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-text-field
                                    v-model="subject"
                                    :error-messages="subjectErrors"
                                    :counter="15"
                                    label="Subject"
                                    required
                                    outlined
                                    @input="$v.subject.$touch()"
                                    @blur="$v.subject.$touch()"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-textarea
                                    v-model="commentary"
                                    :error-messages="commentaryErrors"
                                    :counter="100"
                                    label="Commentary"
                                    required
                                    outlined
                                    @input="$v.commentary.$touch()"
                                    @blur="$v.commentary.$touch()"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    <v-btn
                    class="mr-4"
                    @click="submit"
                    >
                    submit
                    </v-btn>
                </v-form>
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
                        mdi-map-marker
                    </v-icon>
                    <p>Universidad de Santiago de Chile</p>
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-phone
                    </v-icon>
                    <p>+56 9 1234 56789</p>
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations: {
      name: { required, minLength: minLength(4), maxLength: maxLength(12) },
      email: { required, email },
      subject: {required, maxLength: maxLength(15)},
      commentary: {required, maxLength: maxLength(200), minLength: minLength(10)}
    },

    data: () => ({
      name: '',
      email: '',
      subject: '',
      commentary: ''
    }),

    computed: {
        commentaryErrors () {
            const errors = []
            if (!this.$v.commentary.$dirty) return errors
            !this.$v.commentary.minLength && errors.push('Commentary must be at most 10 characters long')
            !this.$v.commentary.maxLength && errors.push('Commentary must be at most 100 characters long')
            !this.$v.commentary.required && errors.push('Commentary is required.')
            return errors
        },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.minLength && errors.push('Name must be at most 4 characters long')
            !this.$v.name.maxLength && errors.push('Name must be at most 12 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        subjectErrors () {
            const errors = []
            if (!this.$v.subject.$dirty) return errors
            !this.$v.subject.maxLength && errors.push('Subject must be at most 15 characters long')
            !this.$v.subject.required && errors.push('Subject is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
    //   clear () {
    //     this.$v.$reset()
    //     this.name = ''
    //     this.email = ''
    //     this.select = null
    //     this.checkbox = false
    //   },
    },
}
</script>