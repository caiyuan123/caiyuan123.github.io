<template>
    <div class="footer"> 
        <el-row>
            <el-col :span="16">
            <div class="grid-content bg-purple">
                <ul class="copyrights">
                    <li><a href="javascript:void(0)" target="_blank" title="装修网">装修网</a> | <a href="javascript:void(0)" target="_blank" title="家具图片">家具图片</a> | <a href="javascript:void(0)" target="_blank" title="家居资讯">家居资讯</a> | <a href="javascript:void(0)" target="_blank" title="生活百科">生活百科</a> | <a href="javascript:void(0)" target="_blank" title="家私导购">家私导购</a> | <a href="javascript:void(0)" target="_blank" title="品牌展厅">品牌展厅</a> | <a href="javascript:void(0)" target="_blank" title="装修论坛">装修论坛</a> | <a href="javascript:void(0)" target="_blank" title="装修效果图">装修效果图</a> | <a href="javascript:void(0)" target="_blank" title="客服中心" rel="nofollow">客服中心</a> | <a href="javascript:void(0)" target="_blank" title="网站地图">网站地图</a> | <a href="javascript:void(0)" target="_blank" title="友情链接" rel="nofollow">友情链接</a> | <a href="javascript:void(0)" target="_blank" title="更多">更多</a></li>
                    <li><span class="yen">© 2005-2018 </span><span id="JS_footer_copyright">美乐乐</span> 天津美维信息技术有限公司 版权所有，并保留所有权利。<a href="javascript:void(0)" target="_blank" class="gray" rel="nofollow">ICP备案证书号：粤ICP备08008334号</a></li>
                </ul>
            </div>
            </el-col>
            <el-col :span="8">
            <div class="grid-content bg-purple">
                <ul class="credit">
                    <li class="spec"><a id="___szfw_logo___" href="javascript:void(0)" target="_blank"><i class="icon-1"></i><span>诚信网站</span></a></li>
                    <li><a target="_blank" href="javascript:void(0)"><i class="icon-4"></i><span>认证联盟品牌官网</span></a></li>
                    <li><a target="_blank" href="javascript:void(0)"><i class="icon-2"></i><span>可信网站信用评价</span></a></li>
                    <li><i class="icon-3"></i><span>经营网站备案信息</span></li>
                </ul>
            </div>
            </el-col>
        </el-row>
    </div>
</template>


<style scoped>
    .footer{width: 100%;padding: 20px 40px 30px;background: #1f1f1f;box-sizing: border-box;}
    /* .grid-content{height: 90px;} */
    .copyrights li{line-height: 20px}
    .footer li,a,span{font-size: 12px;color: #777}
    .credit li{float: left;width: 50px;padding-left: 35px;}
    .credit li span{display: block}
    .spec span{line-height: 40px}
</style>
