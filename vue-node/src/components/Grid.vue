<template>
  <div class="root">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="searchbar">
          <input  name="wd" class="s_ipt"  v-model="word" v-on:keyup.enter="handleSearch"/><el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="openAdd">添加</el-button>
        </div>
      </el-col>
      <el-col :span="8" style="text-align:right">
        <logout></logout>
      </el-col>
    </el-row>


    <el-table border fit highlight-current-row
      :data="page.content"
      style="width: 100%">
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left"
        label="标题"
        width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>标题: {{ scope.row.title }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.title }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="left"
                       label="内容"
        >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>内容: {{ scope.row.content }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.content }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center"
                       label="创建日期"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createDate | dateformat('yyyy-MM-dd HH:mm:ss') }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pageNum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.totalElements">
      </el-pagination>
    </div>



   <!--编辑和保存-->

    <el-dialog title="文章" :visible.sync="dialogFormVisible">
      <el-form :model="one">
        <el-form-item label="标题" label-width="100">
          <el-input v-model="one.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" label-width="100">
          <el-input type="textarea" v-model="one.content"></el-input>
        </el-form-item>
        <el-form-item label="创建日期" label-width="100" v-if="one.isupdate">
            <el-date-picker   v-model="one.createDate" type="datetime"  format="yyyy-MM-dd HH:mm:ss" readonly>
            </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdate" v-if="one.isupdate">确 定</el-button>
        <el-button type="primary" @click="handleAdd" v-if="one.isadd">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>
<script>
  import logout from "@/components/Logout"
  export default {
    components: {'logout': logout},
    created() {
      this.handleCurrentChange(1);
    },
    methods: {
      detailUrl(list){
        return  list.filter(function (item) {
          item.detailUrl="/detail/"+item.id;
          return true;
        })
        return list.filter(function (number) {
          return number % 2 === 0
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        var requestBody={ pageNum:this.page.pageNum,pageSize:val,word:this.word};
        this.page.pageSize=val;
        this.search(requestBody);
      },
      handleCurrentChange(val) {
        console.log("执行了分页："+val);
        console.log(`当前页: ${val}`);
        this.page.pageNum=val;
        var requestBody={ pageNum:val,pageSize:this.page.pageSize,word:this.word};
        this.search(requestBody);
      },
      clearOne(){
        this.one.id="";
        this.one.title="";
        this.one.content="";
        this.one.createDate="";
      },
      openAdd() {
        this.clearOne();
        this.one.isadd=true;
        this.one.isupdate=false;
        this.dialogFormVisible=true;
      },
      handleAdd(){//修改
        var params={id:this.one.id,title:this.one.title,content:this.one.content};
        this.$http.post('api/table/add.json', params).then((response) => {
          var responseJson = response.body;
          if (responseJson.errcode == 200) {
            this.dialogFormVisible=false;
            this.handleCurrentChange(this.page.pageNum);//刷新当前页
            this.$message({
              type: 'success',
              message: '保存成功！'
            });
          }else{
            this.$message({
              type: 'info',
              message: '保存失败！'
            });
          }
        }, (response) => {
          this.$message({
            type: 'info',
            message: '保存失败！'
          });
        });
      },
      handleUpdate(){//修改
        var params={id:this.one.id,title:this.one.title,content:this.one.content};
        this.$http.post('api/table/update.json', params).then((response) => {
          var responseJson = response.body;
          if (responseJson.errcode == 200) {

            this.dialogFormVisible=false;
            this.handleCurrentChange(this.page.pageNum);//刷新当前页
            this.$message({
              type: 'success',
              message: '更新成功！'
            });
            return;
          }else{
            this.$message({
              type: 'info',
              message: '更新失败！'
            });
          }
        }, (response) => {
          this.$message({
            type: 'info',
            message: '更新失败！'
          });
        });
      },
      openEdit(index, row) {
        console.log(index, row);
        var params = row.id ;
        this.$http.post('api/table/get.json', params).then((response) => {
          var responseJson = response.body;
          if (responseJson.errcode == 200) {
             this.one = responseJson.data;
            this.one.isupdate=true;
            this.one.isadd=false;
            this.dialogFormVisible=true;
            return;
          }else{
            this.$message({
              type: 'info',
              message: '获得文章信息失败！'
            });
          }
        }, (response) => {
          this.$message({
            type: 'info',
            message: '获得文章信息失败！'
          });
        });

      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = row.id ;
          this.$http.post('api/table/delete.json', params).then((response) => {
              var responseJson = response.body;
              if (responseJson.errcode == 200) {
                console.log(JSON.stringify(this.page));
                this.handleCurrentChange(this.page.pageNum);//刷新当前页
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                return;
              }else{
                this.$message({
                  type: 'info',
                  message: '删除失败！'
                });
              }
          }, (response) => {
            this.$message({
              type: 'info',
              message: '删除失败！'
            });
          });
        }).catch(() => {
        /*  this.$message({
            type: 'info',
            message: '已取消删除'
          });*/
        });
      },
      handleSearch(){
        var requestBody={ pageNum:1,pageSize:this.page.pageSize,word:this.word};
        this.search(requestBody);
      },
      search(requestBody){
        this.$http.post('api/table/list.json', requestBody).then((response) => {
          if (response.status == 200) {
            var responseJson = response.body;
            if (responseJson.errcode == 200) {
              this.page.totalElements = responseJson.data.totalElements;
              this.page.content = responseJson.data.content;
              console.log(JSON.stringify(this.page));
              return;
            }
          }
        }, (response) => {
          console.log(response);
        });
      },
      logout(){

      }
    },
    data() {
      return {
        word:"",
        page: {
          "pageNum": 1,
          "pageSize": 10,
          "totalElements": 0,
          "content": [

          ]
        },
        dialogFormVisible:false,
        one:{
          title:"",
          content:"",
          id:"",
          createDate:""
        }
      };
    }
  }
</script>
<style>
  em {
    font-style: normal;
    color: #a94442;
  }
</style>
<style scoped>
  .s_ipt {
    width: 600px;
    height: 35px;
    font: 16px/18px arial;
    line-height: 35px;
    margin: 6px 10px 0 7px;
    padding: 0;
  }
  .searchbar{
    text-align: left;
  }

  .root {
    width: 100%;
    padding: 10px 100px;
    text-align: center;
  }


</style>
