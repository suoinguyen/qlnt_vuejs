<template>
    <div id="app">
        <!--<loading :active.sync="isLoading"
                 :can-cancel="true"
                 :is-full-page="true"
                 :loader="'spinner'"
                 :color="'#007bff'"
                 :width="100"
                 :height="100"
                 :opacity=1>
        </loading>-->
        <auth-layout v-if="userLogged === null"></auth-layout>
        <div class="admin-container" v-else-if="userLogged !== false">
            <Sidebar :navItems="nav"/>
            <div id="right-panel" class="right-panel">
                <Header/>
                <div class="content pb-0">
                    <transition enter-active-class="animated fadeIn">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import nav from './nav'
    import Header from './components/Header.vue'
    import Sidebar from './components/Sidebar.vue'
    import AuthLayout from './layouts/AuthLayout.vue';
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'

    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        data() {
            return {
                nav: nav.items,
                isLoading: true,
            }
        },
        components: {
            AuthLayout,
            Header,
            Sidebar,
            Loading
        },
        methods: {
            ...mapActions([
                'updateUser'
            ]),
        },
        computed: {
            ...mapState({
                userLogged: function (state) {
                    setTimeout(() => {
                        this.isLoading = false
                    }, 1000)
                    return state.userLogged
                }
            })
        },
        mounted() {

        },
    }
</script>

<style lang="scss">
    @import url('./assets/css/font-awesome.min.css');
    @import url('./assets/css/themify-icons.css');
    @import url('./assets/css/pe-icon-7-filled.css');
    @import url('./assets/css/flag-icon.min.css');
    @import url('./assets/css/cs-skin-elastic.css');
    @import "./assets/scss/style";

    button {
        cursor: pointer;
    }
</style>
