<template>
    <div id="second-page">
        <h1>Une seconde page</h1>
        <a href="/" v-on:click.stop.prevent="doBack"><i class="fa fa-backward fa-3x"></i></a>
    </div>
</template>
<script>
    export default {
        name: 'second-page',
        methods: {
            doBack(){
                this.$router.push('/');
                return false;
            }
        }

    }
</script>
