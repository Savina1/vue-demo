webpackJsonp([1],{"3gB9":function(e,t){},BdjI:function(e,t){},Erzt:function(e,t,a){e.exports=a.p+"static/img/1.22a79ed.jpg"},"IW/R":function(e,t){},KqTJ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},i,!1,function(e){a("VVla")},null,null).exports,s=a("NYxO"),o=a("zL8q"),r=a.n(o),c=(a("tvR6"),a("XLwt")),u=a.n(c),d=a("/ocq");function p(e,t,a){var l=new Date;l.setTime(l.getTime()+24*a*60*60*1e3);var i="expires="+l.toUTCString();document.cookie=e+"="+t+";"+i}function v(e){if(document.cookie.length>0){let t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;let a=document.cookie.indexOf(";",t);return-1==a&&(a=document.cookie.length),unescape(document.cookie.substring(t,a))}}return""}function m(e){var t=new Date;t.setTime(t.getTime()-1),null!=v(e)&&(document.cookie=e+"=;expires="+t.toGMTString())}var h={data:function(){return{username:"",password:""}},mounthed:{},methods:{login:function(){p("username",this.username,1),p("password",this.password,1),""!=this.username&&""!=this.password?this.$router.push({path:"/index"}):alert("用户名和密码不能为空！")}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loginBox"},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"login-title"},[e._v("后台管理系统")]),e._v(" "),a("div",{staticClass:"login-content-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(t){e.login()}}},[e._v("登录")]),e._v(" "),a("div",{staticClass:"login-txt"},[e._v("账号密码请随意输入")])])])])},staticRenderFns:[]};var f=a("VU/8")(h,b,!1,function(e){a("QQoy")},"data-v-48cf1920",null).exports,g={data:function(){return{username:""}},mounted:function(){v("username")?this.username=v("username"):this.$router.push({path:"/login"})},methods:{handleCommand:function(e){m("username"),m("password"),m("tableLists"),this.$router.push({path:"/login"})}}},_={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"HeaderBox"},[l("div",{staticClass:"Header-title"},[e._v("后台管理中心")]),e._v(" "),l("div",{staticClass:"headerBox_user"},[l("el-dropdown",{on:{command:e.handleCommand}},[l("span",{staticClass:"el-dropdown-link HeaderBox-username"},[e._v("\n\t\t    "+e._s(e.username)),l("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("el-dropdown-item",{attrs:{command:"a"}},[e._v("退出")])],1)],1),e._v(" "),l("img",{staticClass:"Header-img",attrs:{src:a("Erzt")}})],1)])},staticRenderFns:[]};var x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AsideBox"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#324157","text-color":"#fff","active-text-color":"#20a0ff"}},[a("router-link",{attrs:{tag:"li",to:"/index"}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-setting"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("自述")])])],1),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",[e._v("表格")])]),e._v(" "),a("router-link",{attrs:{tag:"li",to:"/table"}},[a("el-menu-item",{staticClass:"AsideActive",attrs:{index:"1-3"}},[e._v("基础表格")])],1)],2),e._v(" "),a("router-link",{attrs:{tag:"li",to:"/from"}},[a("el-menu-item",{attrs:{index:"3"}},[a("i",{staticClass:"el-icon-date"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("表单")])])],1),e._v(" "),a("router-link",{attrs:{tag:"li",to:"/echarts"}},[a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-star-on"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("图表")])])],1),e._v(" "),a("router-link",{attrs:{tag:"li",to:"/upload"}},[a("el-menu-item",{attrs:{index:"5"}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("上传")])])],1),e._v(" "),a("router-link",{attrs:{tag:"li",to:"/dragdrop"}},[a("el-menu-item",{attrs:{index:"6"}},[a("i",{staticClass:"el-icon-upload2"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("拖拽")])])],1)],1)],1)},staticRenderFns:[]};var k={components:{HeaderView:a("VU/8")(g,_,!1,function(e){a("vYKm")},null,null).exports,AsideView:a("VU/8")(null,x,!1,function(e){a("KqTJ")},null,null).exports}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"homeBox"},[t("HeaderView"),this._v(" "),t("el-container",[t("el-aside",[t("AsideView")],1),this._v(" "),t("el-main",[t("keep-alive",[t("router-view",{staticClass:"router-view"})],1)],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(k,C,!1,function(e){a("izD1")},null,null).exports,w=a("fZjL"),$=a.n(w),D=a("mvHQ"),L=a.n(D),T={data:function(){return{pagesize:10,currentPage:1,input10:"",searchVal:"",tableData:[]}},mounted:function(){m("tableLists");var e=this;e.$http({method:"post",url:"/static/model/data.json"}).then(function(t){e.tableData=t.data,p("tableLists",L()(e.tableData),6)}).catch(function(e){console.log(e)})},methods:{formatter:function(e,t){return e.address},handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){var a=this,l=this;this.$confirm("是否确定删除这条数据？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(v("tableLists"),"1111");var e=l.tableData.indexOf(t);e>-1&&l.tableData.splice(e,1),l.tableData=l.tableData,console.log(v("tableLists"),"2222"),console.log(l.tableData),a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},delGroup:function(){var e=this,t=this;console.log(this.multipleSelection),this.$confirm("是否确定删除这条数据？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){for(var a=e.multipleSelection,l=0;l<a.length;l++){var i=t.tableData.indexOf(a[l]);i>-1&&t.tableData.splice(i,1)}t.tableData=t.tableData,console.log(t.tableData),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},handleSelectionChange:function(e){this.multipleSelection=e},inputSearch:function(e){var t=this.input10;this.tableData=JSON.parse(v("tableLists")),console.log(JSON.parse(v("tableLists")),"JSON.parse(getCookie('tableLists'))"),t&&(this.tableData=this.tableData.filter(function(e){return $()(e).some(function(a){return String(e[a]).toLowerCase().indexOf(t)>-1})}),console.log(this.tableData,"this.tableData"))}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"Table-breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/table"}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{staticClass:"Table-tlite"},[e._v("首页")])]),e._v(" "),a("el-breadcrumb-item",[e._v("基础表格")])],1)],1),e._v(" "),a("div",{staticClass:"handle-box"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.delGroup}},[e._v("批量删除")]),e._v(" "),a("el-input",{staticClass:"handle-input",attrs:{placeholder:"筛选关键字",clearable:""},on:{input:e.inputSearch},model:{value:e.input10,callback:function(t){e.input10=t},expression:"input10"}})],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:"","default-sort":{prop:"date",order:"descending"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",formatter:e.formatter}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var B=a("VU/8")(T,S,!1,function(e){a("veno")},null,null).exports,I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"Table-breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),a("span",{staticClass:"Table-tlite"},[e._v("自述")])])],1)],1),e._v(" "),a("div",{staticClass:"describeBox"},[a("div",[a("h3",{staticClass:"describe_title"},[e._v("功能")]),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"element-ui",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"登录",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"表格",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"表单",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"图表",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"上传",disabled:""}})],1),e._v(" "),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("el-checkbox",{staticClass:"describe_check",attrs:{label:"列表拖拽",disabled:""}})],1)],1)])])},staticRenderFns:[]};var z=a("VU/8")({data:function(){return{checkList:["element-ui","登录","表格","表单","图表","上传","列表拖拽"]}}},I,!1,function(e){a("3gB9")},null,null).exports,A={mounted:function(){this.$echarts.init(document.getElementById("myChart")).setOption({title:{text:"异步数据加载示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]}),this.$echarts.init(document.getElementById("main")).setOption({series:{type:"pie",data:[{name:"A",value:1212},{name:"B",value:2323},{name:"C",value:1919}]}});var e=this.$echarts.init(document.getElementById("main2")),t={title:{text:"饼图程序调用高亮示例",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t),app.currentIndex=-1,setInterval(function(){var a=t.series[0].data.length;e.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:app.currentIndex}),app.currentIndex=(app.currentIndex+1)%a,e.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:app.currentIndex}),e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:app.currentIndex})},1e3)}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"Table-breadcrumb"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/echarts"}}},[t("i",{staticClass:"el-icon-star-on"}),t("span",{staticClass:"Table-tlite"},[this._v("图表")])]),this._v(" "),t("el-breadcrumb-item",[this._v("基础图表")])],1)],1),this._v(" "),t("div",{staticClass:"charts"},[t("div",{style:{width:"500px",height:"400px"},attrs:{id:"myChart"}}),this._v(" "),t("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}}),this._v(" "),t("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main2"}})])])},staticRenderFns:[]};var V={data:function(){return{fileList:[{name:"food.jpeg",url:""},{name:"food2.jpeg",url:""}]}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])]),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{"margin-top":"20px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},staticRenderFns:[]};var j={data:function(){return{colors:[{text:"Aquamarine"},{text:"Hotpink"},{text:"Gold"},{text:"Crimson"},{text:"Blueviolet"},{text:"Lightblue"},{text:"Cornflowerblue"},{text:"Skyblue"},{text:"Burlywood"}]}},mounted:function(){this.$dragging.$on("dragged",function(e){var t=e.value;console.log(t.item),console.log(t.list)}),this.$dragging.$on("dragend",function(){})}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"Table-breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/echarts"}}},[a("i",{staticClass:"el-icon-upload2"}),a("span",{staticClass:"Table-tlite"},[e._v("拖拽")])])],1)],1),e._v(" "),e._m(0),e._v(" "),e._l(e.colors,function(t){return a("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{item:t,list:e.colors,group:"color"},expression:"{ item: color, list: colors, group: 'color' }"}],key:t.text,staticClass:"color-item DragDrop-list"},[e._v(e._s(t.text))])})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"DragDrop-title"},[this._v("拖拽排序:")]),t("span",[this._v("引用的是awe-dnd.js")])])}]};var P=["上海","北京","广州","深圳"],U={data:function(){return{checkAll:!1,checkedCities:["上海","北京"],cities:P,isIndeterminate:!0,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value8:"",pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},options1:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?P:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.cities.length,this.isIndeterminate=t>0&&t<this.cities.length},onSubmit:function(){console.log("submit!")}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"Table-breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/from"}}},[a("i",{staticClass:"el-icon-date"}),a("span",{staticClass:"Table-tlite"},[e._v("表单")])]),e._v(" "),a("el-breadcrumb-item",[e._v("基础表单")])],1)],1),e._v(" "),a("div",{staticClass:"block"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.cities,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"block"}),e._v(" "),a("el-form",{ref:"form",style:{width:"50%"},attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"表单输入"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择器"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-cascader",{attrs:{placeholder:"试试搜索：指南",options:e.options1,filterable:"","change-on-select":""}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间选择器"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"开关"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"多选框"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"单选框"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"文本框"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var F=[{path:"/login",component:f},{path:"/home",component:y,children:[{path:"*",component:z},{path:"/",component:y},{path:"/index",component:z},{path:"/table",component:B},{path:"/echarts",component:a("VU/8")(A,R,!1,function(e){a("issr")},"data-v-28fddf77",null).exports},{path:"/upload",component:a("VU/8")(V,E,!1,function(e){a("BdjI")},"data-v-08849a40",null).exports},{path:"/dragdrop",component:a("VU/8")(j,O,!1,function(e){a("IW/R")},null,null).exports},{path:"/from",component:a("VU/8")(U,N,!1,function(e){a("uBuq")},null,null).exports}]},{path:"/",redirect:"login"},{path:"*",redirect:"login"}],H=a("mtWM"),q=a.n(H),J=a("7S1C"),M=a.n(J);l.default.use(d.a),l.default.use(r.a),l.default.use(s.a),l.default.use(M.a),l.default.config.productionTip=!1,q.a.defaults.baseURL="/vuesf/dist",q.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",l.default.prototype.$http=q.a,q.a.defaults.withCredentials=!0,l.default.prototype.$echarts=u.a;var Q=new d.a({mode:"history",base:"/vuesf/dist/",scrollBehavior:function(){return{y:0}},routes:F});new l.default({el:"#app",router:Q,components:{App:n},template:"<App/>",render:function(e){return e(n)}})},QQoy:function(e,t){},VVla:function(e,t){},issr:function(e,t){},izD1:function(e,t){},tvR6:function(e,t){},uBuq:function(e,t){},vYKm:function(e,t){},veno:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.33bfd7b03b005b6f486c.js.map