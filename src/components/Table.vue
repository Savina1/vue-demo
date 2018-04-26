<template>
	<div>
		<div class="Table-breadcrumb">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/table' }">
				  <i class="el-icon-menu"></i><span class="Table-tlite">首页</span>
        </el-breadcrumb-item>
			  <el-breadcrumb-item>基础表格</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
    <div class="handle-box">
        <el-button type="primary" icon="el-icon-delete" @click="delGroup">批量删除</el-button>
        <el-input  class="handle-input" placeholder="筛选关键字" v-model="input10" clearable @input="inputSearch"> </el-input>
    </div>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" border @selection-change="handleSelectionChange"
	    :default-sort = "{prop: 'date', order: 'descending'}">
		    <el-table-column type="selection" width="55"> </el-table-column>
		    <el-table-column prop="date" label="日期" sortable width="180">
		    </el-table-column>
		    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
		    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
		  :page-sizes="[10, 20, 30, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
		  :total="tableData.length">
		</el-pagination>
	</div>

</template>
<style>
	.Table-tlite{
		margin-left: 5px;
	}
	.handle-input{
		width: 250px;
	}
  .handle-box{
      margin-bottom: 15px;
    }
</style>

<script>
import {setCookie, getCookie,delCookie} from '../../static/js/cookie.js'
export default {
  data () {
    return {
      pagesize: 10,
      currentPage: 1,
      input10: '',
      searchVal: '', // 搜索后的数据
      tableData: []
    }
  },
  mounted () {
      delCookie('tableLists');
      var that = this;
     	that.$http({
        method: 'post',
        url: '/static/model/data.json',
      })
		  .then(function (response) {
        that.tableData = response.data;
        setCookie('tableLists', JSON.stringify(that.tableData), 6)
		  })
		  .catch(function (response) {
		    console.log(response)
		  })
  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    handleEdit (index, row) {

      console.log(index, row)
    },
    handleDelete (index, row) {
       // 删除单个
       var that = this;
       this.$confirm('是否确定删除这条数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // delCookie('tableLists');
          console.log(getCookie('tableLists'),"1111");
          var indexItem = that.tableData.indexOf(row);
          if (indexItem > -1) {
              that.tableData.splice(indexItem, 1);
          }
          that.tableData = that.tableData;
          console.log(getCookie('tableLists'),"2222");
          console.log(that.tableData)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      // console.log(index, row)
    },
    //批量删除
    delGroup () {
      var that = this;
      console.log(this.multipleSelection)
       this.$confirm('是否确定删除这条数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var multipleSelection = this.multipleSelection;
          for (var i = 0; i < multipleSelection.length; i++) {
            var indexItem = that.tableData.indexOf(multipleSelection[i]);
            if (indexItem > -1) {
              that.tableData.splice(indexItem, 1);
            }
          };
          that.tableData = that.tableData;
          console.log(that.tableData)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      // var ids = this.sels.map(item => item.id).join()// 获取所有选中行的id组成的字符串，以逗号分隔
    },
    handleSizeChange (val) {
      this.pagesize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },
    handleSelectionChange (val) {
      	// console.log(val,'2222')
      this.multipleSelection = val
    },
    inputSearch (val) {
      // input搜索筛选
      var search = this.input10
      this.tableData = JSON.parse(getCookie('tableLists'))
      console.log(JSON.parse(getCookie('tableLists')),"JSON.parse(getCookie('tableLists'))")
	    if (search) {
        this.tableData = this.tableData.filter(function (product) {
          return Object.keys(product).some(function (key) { // 搜索所有的内容
            return String(product[key]).toLowerCase().indexOf(search) > -1
          })
        })
        console.log(this.tableData,'this.tableData')
      }
    }
  }
}
</script>
