import Vue from 'vue'
import Vuex from 'vuex'
import Jsonp from 'jsonp'


Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        results:[]
    },
    getters:{
        getFiends: (state)=>{
            let res = state.results;

            return res.map(item=>{
                item.url = 'https://ru.wikipedia.org/wiki/'+item.title;
                return item;
            })
        }
    },
    mutations:{
        set:(state,{type, items})=>{
            state[type] = items
        }
    },
    actions:{
        search:({commit}, query)=>{
            let url = 'https://ru.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+query;

            Jsonp(url,(error, response)=>{
                if(error)
                {
                    console.log(error);
                    return;
                }

                const res = response.query.search;

                commit('set',{type:'results', items: res});

            });
        }
    }
});


export default store;