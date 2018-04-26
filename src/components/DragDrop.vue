<template>
	<div>
		<div class="Table-breadcrumb">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/echarts' }">
				  	<i class="el-icon-upload2"></i><span class="Table-tlite">拖拽</span>
		        </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>
			<span class="DragDrop-title">拖拽排序:</span><span>引用的是awe-dnd.js</span>
		</div>
		<div 
          class="color-item DragDrop-list" 
          v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
          :key="color.text"
      >{{color.text}}</div>
	</div>
</template>
<style>
	.DragDrop-list{
		border: 1px solid #ddd;
		margin: 10px 0;
		width: 200px;
		padding: 5px;
	}
	.DragDrop-title{
		font-size: 22px
	}
</style>
<script>
export default {
  data() {
      return {
        colors: [{
            text: "Aquamarine"
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }]
      };
    },
    mounted()  {
	    this.$dragging.$on('dragged', ({ value }) => {
	      console.log(value.item)
	      console.log(value.list)
	      // console.log(value.otherData)
	    })
	    this.$dragging.$on('dragend', () => {
		        
	    })
    }
}
</script>