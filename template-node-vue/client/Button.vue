<template>
    <button class="btn-click" v-on:click="doClick"><i class="fa fa-plus"></i></button>
</template>
<script>
    export default {
        props: ['cb'],
        methods: {
            doClick: function () {
                this._props.cb()
            }
        }
    };
</script>
<style>
    .btn-click {
        color:white;
        background-color: #cc2a5a;
        border-color: #a2234f;
        cursor: pointer;
    }
</style>