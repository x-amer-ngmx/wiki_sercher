<template>
    <div>
        <div class="container div-border"  v-for="item in res">
            <a :href="item.url" target="_blank">{{item.title}}</a>
            <div class="panel-info">{{ item.url }}</div>
            <div class=" alert alert-info" v-html="item.snippet"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        res(){
            return this.$store.getters.getFiends
        }
    }
}
</script>
<style lang="scss">
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    @import "~bootstrap-sass/assets/stylesheets/bootstrap";

    .div-border{
        margin-bottom: 10px;
        border-bottom: $pre-border-color solid 1px;
    }


</style>