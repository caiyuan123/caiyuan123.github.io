<template>
    <div>
        <meilele-search></meilele-search>
        <meilele-lunbotu></meilele-lunbotu>
       
        <meilele-content></meilele-content>
        <meilele-fenye></meilele-fenye>
    </div>
</template>


<script>
    import axios from "axios";
    axios.defaults.baseURL = "http://60.205.210.6:1314";
    import {mapActions ,mapState,mapMutations,mapGetters} from "vuex";
    import Search from "../components/search.vue";
    import lunbotu from "../components/lunbotu.vue";
    import content from "../components/content.vue"
    import fenye from "../components/fenye.vue";

    export default {
        components:{
            "meilele-search":Search,
            "meilele-lunbotu":lunbotu,
            "meilele-fenye":fenye,
            "meilele-content":content
        },
        computed: {
            ...mapState([
                'username','status','allgoods','shangping','danye','count','goodstype'
            ])
        },
        methods: {
            ...mapActions([
                'getAllGoods','setmeilelepage','getgoods'
            ])
           
        },
        created(){
            // this.getAllGoods()
            var that=this;
            this.setmeilelepage({meilelepage:'zhuoyizuhe',goodstype:'2'})
            // this.$nextTick(()=>{
            //     this.getgoods(1)
            // })
            setTimeout(function(){
                   that.getgoods({num:1,type:'2'})
               },500)
            
        },
        updated() {
            
        },
        
    }
</script>



