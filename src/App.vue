<template>
    <div class="border">
        <header>
            <div>This is a wiki searcher</div>
            <search></search>
        </header>
        <main>
            <results></results>
        </main>
    </div>
</template>

<script>
    import Search from './module/Search.vue'
    import Results from './module/Results.vue'

    export default {
        components:{Search,Results}
    }

</script>

<style lang="scss">
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    @import "~bootstrap-sass/assets/stylesheets/bootstrap";



</style>