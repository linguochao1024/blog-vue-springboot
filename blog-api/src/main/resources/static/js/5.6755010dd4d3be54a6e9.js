webpackJsonp([5],{"4fko":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("dLd/"),c=a.n(s),i=a("s8Ph"),n=a("iNxE"),l={name:"BlogAllCategoryTag",created:function(){this.getCategorys(),this.getTags()},data:function(){return{defaultAvatar:c.a,categorys:[],tags:[],currentActiveName:"category"}},computed:{activeName:{get:function(){return this.currentActiveName=this.$route.params.type},set:function(t){this.currentActiveName=t}},categoryTagTitle:function(){return"category"==this.currentActiveName?"文章分类 - Gou Dan":(console.info("dddd"),"标签 - Gou Dan")}},methods:{view:function(t){this.$router.push({path:"/"+this.currentActiveName+"/"+t})},getCategorys:function(){var t=this;Object(i.b)().then(function(e){t.categorys=e.data}).catch(function(e){"error"!==e&&t.$message({type:"error",message:"文章分类加载失败",showClose:!0})})},getTags:function(){var t=this;Object(n.b)().then(function(e){t.tags=e.data}).catch(function(e){"error"!==e&&t.$message({type:"error",message:"标签加载失败",showClose:!0})})}},beforeRouteEnter:function(t,e,a){window.document.body.style.backgroundColor="#fff",a()},beforeRouteLeave:function(t,e,a){window.document.body.style.backgroundColor="#f5f5f5",a()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"me-allct-body",attrs:{"data-title":t.categoryTagTitle}},[a("el-container",{staticClass:"me-allct-container"},[a("el-main",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"文章分类",name:"category"}},[a("ul",{staticClass:"me-allct-items"},t._l(t.categorys,function(e){return a("li",{key:e.id,staticClass:"me-allct-item",on:{click:function(a){t.view(e.id)}}},[a("div",{staticClass:"me-allct-content"},[a("a",{staticClass:"me-allct-info"},[a("img",{staticClass:"me-allct-img",attrs:{src:e.avatar?e.avatar:t.defaultAvatar}}),t._v(" "),a("h4",{staticClass:"me-allct-name"},[t._v(t._s(e.categoryname))]),t._v(" "),a("p",{staticClass:"me-allct-description"},[t._v(t._s(e.description))])]),t._v(" "),a("div",{staticClass:"me-allct-meta"},[a("span",[t._v(t._s(e.articles)+" 文章")])])])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"标签",name:"tag"}},[a("ul",{staticClass:"me-allct-items"},t._l(t.tags,function(e){return a("li",{key:e.id,staticClass:"me-allct-item",on:{click:function(a){t.view(e.id)}}},[a("div",{staticClass:"me-allct-content"},[a("a",{staticClass:"me-allct-info"},[a("img",{staticClass:"me-allct-img",attrs:{src:e.avatar?e.avatar:t.defaultAvatar}}),t._v(" "),a("h4",{staticClass:"me-allct-name"},[t._v(t._s(e.tagname))])]),t._v(" "),a("div",{staticClass:"me-allct-meta"},[a("span",[t._v(t._s(e.articles)+"  文章")])])])])}))])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("Z0/y")(l,r,!1,function(t){a("zmYE")},null,null);e.default=o.exports},zmYE:function(t,e){}});
//# sourceMappingURL=5.6755010dd4d3be54a6e9.js.map