<template>
  <div class="works-wrapper">
    <el-row :gutter="12">
      <el-col :span="6" style="margin-bottom: 10px">
        <el-card class="addCard" @click.native="addWork">
          <div slot="header" class="flex-center" style="height: 330px;padding: 0;background: white;">
            <em class="el-icon-plus"/>
          </div>
          <div class="cardText">{{$t('workCard.createNewWork')}}</div>
        </el-card>
      </el-col>
      <el-col v-for="(item, index) in worklist" :key="index" :span="6" style="margin-bottom: 10px">
        <el-card>
          <div slot="header" class="flex-center" style="height: 330px;padding: 0;background: white;">
          </div>
          <div class="flex-center">
            <div class="cardText">
              <em class="el-icon-edit" />
            </div>
            <div class="cardText">
              <em class="el-icon-view" />
            </div>
            <div class="cardText">
              <em class="el-icon-s-grid" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/jsx">
  import { createWork, getWork } from '@/utils/api'

  export default {
    name: "list",
    components:{
    },
    data() {
      return {
        worklist: []
      }
    },
    mounted() {
      getWork().then(({ data }) => {
        this.worklist = data.data.works
      })
    },
    methods: {
      addWork() {
        createWork()
      }
    }
  }
</script>

<style scoped lang="scss">
  .addCard{
    cursor: pointer;
  }
  .cardText{
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
</style>
