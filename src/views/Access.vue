<template>
    <b-container class="py-5">
        <b-row align-h="center">
            <b-col cols="12" md="10" lg="8">
                <b-alert 
                    :show="errors.length > 0" 
                    dismissible
                    variant="danger" 
                    v-for="(error, index) in errors" 
                    :key="index"
                >
                    {{ error }}
                </b-alert>
                <template v-if="$route.path == '/login'">
                    <b-card no-body class="overflow-hidden">
                        <b-row align-v="center" no-gutters>
                            <b-col md="4" class="d-none d-md-block">
                                <b-card-img src="@/assets/form.jpg"></b-card-img>
                            </b-col>
                            <b-col cols="12" md="8" class="px-3">
                                <b-card-body title="Login">
                                    <LoginForm :res.sync="res" :errors.sync="errors"></LoginForm>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </template>
                <template v-if="$route.path == '/register'">
                    <b-card no-body class="overflow-hidden">
                        <b-row align-v="center" no-gutters>
                            <b-col md="4" class="d-none d-md-block">
                                <b-card-img src="@/assets/form.jpg"></b-card-img>
                            </b-col>
                            <b-col cols="12" md="8" class="px-3">
                                <b-card-body title="Register">
                                    <RegisterForm :res.sync="res" :errors.sync="errors"></RegisterForm>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </template>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import LoginForm from '@/components/LoginForm.vue'
    import RegisterForm from '@/components/RegisterForm.vue'
    import { mapActions } from 'vuex'

    export default {
        name: 'Access',
        components: {
            LoginForm,
            RegisterForm
        },
        data() {
            return {
                res: null,
                errors: []
            }
        },
        methods: {
            ...mapActions(['login']),
        },
        watch: {
            res: function (nres) {
                const data = {
                    user: nres.data.user,
                    token: nres.data.token
                }
                this.login(data)
                //this.$router.push({ name: 'Profile' })
            }
        }
    }
</script>

<style scoped>

</style> 