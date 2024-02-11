<template>
    <v-toolbar>
        <v-toolbar-title>
            <img id="logo" src="../../../assets/img/logo.png" alt="BitCoin" title="BitCoin">
        </v-toolbar-title>
    </v-toolbar>    
</template>

<script>
export default {
    name: 'NavbarComponent',
}
</script>

<style>
    .v-toolbar{
        background-image: linear-gradient(15deg, #09a330 0%, #a0d080 100%) !important;
        padding: 0.5rem !important;
    }
</style>