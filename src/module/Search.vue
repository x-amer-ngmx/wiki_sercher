<template>
    <div class="input-group">
        <input type="text" class="form-control" v-model="query" />
        <div class="input-group-btn">
            <button type="button" class="btn btn-info" @click="search()"><i class="glyphicon glyphicon-search"></i></button>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return{query:''}
    },
    methods:{
        search(){
            this.$store.dispatch('search',this.query);
        }
    }
}
</script>

<style lang="scss">
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    @import "~bootstrap-sass/assets/stylesheets/bootstrap";



</style>