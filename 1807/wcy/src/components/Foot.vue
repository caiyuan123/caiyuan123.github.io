<template>
    <footer>
        <div v-for="(foot,index) in foots" :key="index">
            <router-link :to={name:foot.name}>
                <i :class="'iconfont ' + foot.icon"  >

                </i>
                <span>
                    {{foot.txt}}
                </span>
            </router-link>
        </div>
    </footer>
</template>


<script>
export default {
    data(){
        return {
            foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"icon-home"},
                {txt:"商品",path:"/app/goods",name:"goods",icon:"icon-goodsfill"},
                {txt:"购物车",path:"/app/car",name:"car",icon:"icon-shop_car"},
                {txt:"我",path:"/app/my",name:"my",icon:"icon-my"},
            ],
        }
    }
}
</script>


<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:.90rem;
	left:0;
	bottom:0;
	background:#fff;
	display:flex;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:.90rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:.45rem;
			font-size:.42rem !important;
			}
			span{
				width:100%;
				height:.35rem;
				line-height:.35rem;
				font-size:.26rem;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
				width:.5rem;
			}
		}
		.router-link-exact-active{
			color:#0dc441;
		    border-color:#0dc441;
		}

	}
}
</style>
