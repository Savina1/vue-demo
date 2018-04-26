<template>
	<div>
		<div class="Table-breadcrumb">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/echarts' }">
				  <i class="el-icon-star-on"></i><span class="Table-tlite">图表</span>
        </el-breadcrumb-item>
			  <el-breadcrumb-item>基础图表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="charts">
			<div id="myChart" :style="{width:'500px',height:'400px'}"></div>
			<div id="main" style="width: 600px;height:400px;"></div>
			<div id="main2" style="width: 600px;height:400px;"></div>
		</div>
	</div>
</template>
<style scoped>
	.charts div{
		display: inline-block;
	}
</style>
<script>
	export default{
		mounted(){
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// console.log( myChart)
			// 指定图表的配置项和数据        
	        // var option = {
	        //     title: {
	        //         text: 'ECharts 入门示例'
	        //     },
	        //     tooltip: {},
	        //     legend: {
	        //         data:['销量']
	        //     },
	        //     xAxis: {
	        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	        //     },
	        //     yAxis: {},
	        //     series: [{
	        //         name: '销量',
	        //         type: 'bar',
	        //         data: [5, 20, 36, 10, 10, 20]
	        //     }]
	        // };
			// 使用刚指定的配置项和数据显示图表。
	        // myChart.setOption(option);
	         myChart.setOption({
		        title: {
		            text: '异步数据加载示例'
		        },
		        tooltip: {},
		        legend: {
		            data:['销量']
		        },
		        xAxis: {
		            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		        },
		        yAxis: {},
		        series: [{
		            name: '销量',
		            type: 'bar',
		            data: [5, 20, 36, 10, 10, 20]
		        }]
		    });
		
	         // 绘制图表。
	        this.$echarts.init(document.getElementById('main')).setOption({
	            series: {
	                type: 'pie',
	                data: [
	                    {name: 'A', value: 1212},
	                    {name: 'B', value: 2323},
	                    {name: 'C', value: 1919}
	                ]
	            }
	        });

	         let myChart1 = this.$echarts.init(document.getElementById('main2'));

	        var option = {
			    title : {
			        text: '饼图程序调用高亮示例',
			        x: 'center'
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
			myChart1.setOption(option);
			app.currentIndex = -1;
			setInterval(function () {
			    var dataLen = option.series[0].data.length;
			    // 取消之前高亮的图形
			    myChart1.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			    app.currentIndex = (app.currentIndex + 1) % dataLen;
			    // 高亮当前图形
			    myChart1.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			    // 显示 tooltip
			    myChart1.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			}, 1000);

		}
	}
</script>