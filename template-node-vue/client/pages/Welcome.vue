<template>
    <div id="page-welcome">
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <h2>You call the service and increments session : {{increment}} times
            <button-click v-bind:cb="doCall"></button-click>
        </h2>

        <div>
            <a href="/second-page" v-on:click.stop.prevent="doSecondPage">
                <span class="btn-text">Second page</span> <i class="fa fa-chevron-right fa-3x"></i>
            </a>
        </div>
    </div>
</template>
<script>
    const ButtonClick = require('../Button.vue');
    let callSessionService = function (comp) {
        fetch('/api/test/session', {
            credentials: 'same-origin'
        })
            .then(r => r.json())
            .then(js => {
                comp._data.increment = js.incr;
            })
            .catch(e => console.error(e));
    };
    export default {
        name: 'welcome',
        data() {
            return {
                increment: 0,
            };
        },
        components: {
            ButtonClick
        },
        methods: {
            doCall(){
                callSessionService(this);
            },
            doSecondPage(){
                this.$router.push('/second-page');
            }
        },
        beforeMount(){
            callSessionService(this);
        }

    };
</script>
<style scoped>

    #page-welcome > ul {
        list-style-type: none;
        padding: 0;
    }

    #page-welcome > ul > li {
        display: inline-block;
        margin: 0 10px;
    }

    #page-welcome a {
        color: #42b983;
    }

    #page-welcome .btn-text {
        font-size: 3em;
    }

</style>
