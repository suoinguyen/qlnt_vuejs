<template>
    <div class="login">

        <card header-text="Welcome !">
            <div class="card-body card-block">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                            <input v-model="email" type="email" id="email" name="email" placeholder="Email" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                            <input v-model="pass" type="password" id="password" name="password" placeholder="Password"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="form-actions form-group">
                        <button type="submit" class="btn btn-success btn-md">Log In</button>
                        <button type="submit" class="btn btn-primary btn-md float-right">
                            <router-link class='link text-light float-right' :to="{name: 'Register'}">Create Account
                            </router-link>
                        </button>
                    </div>
                </form>
            </div>
        </card>

    </div>
</template>

<script>
    /*import Vue from 'vue';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    Vue.use(Loading)*/

    export default {
        name: 'Login',
        data: function () {
            return {
                email: '',
                pass: ''
            }
        },
        computed:{
            nextRoute () {
                return this.$route.query.redirect || '/'
            }
        },
        methods: {
            async onSubmit () {
                let loading = this.$loading.show({
                    // Optional parameters
                    container: null,
                    canCancel: true,
                    height: 100,
                    width: 100,
                    color: '#007bff',
                    opacity: 1
                });
                this.$store.dispatch('updateLoadingPage', loading);
                const auth = await this.$auth.login(this.email, this.pass)
                this.$router.replace(this.nextRoute)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-title {
        padding-left: 20px;
    }
</style>