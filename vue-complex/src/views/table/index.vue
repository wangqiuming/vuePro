<template>
  <div class="app-container">
    <el-table :data="page.content" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time | dateformat('yyyy-MM-dd HH:mm:ss')}}</span>
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
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      page: {
        "pageNum": 1,
        "pageSize": 10,
        "totalElements": 0,
        "content": [

        ]
      },
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    var requestBody={ pageNum:this.page.pageNum,pageSize:this.page.pageSize};
    this.fetchData(requestBody)
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      var requestBody={ pageNum:this.page.pageNum,pageSize:val};
      this.page.pageSize=val;
      this.fetchData(requestBody);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pageNum=val;
      var requestBody={ pageNum:val,pageSize:this.page.pageSize};
      this.fetchData(requestBody);
    },
    fetchData(param) {
      this.listLoading = true
      getList(param).then(response => {
        var page = response.data.data;
        this.page.totalElements = page.totalElements;
        this.page.content = page.content;
        this.listLoading = false
      })
    }
  }
}
</script>
