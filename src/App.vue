<template>
    <v-app>
        <v-content>
            <playground />
        </v-content>
    </v-app>
</template>

<script>
    import Playground from './pages/Playground'

    export default {
        name: 'App',
        components: { Playground }
    }
</script>
