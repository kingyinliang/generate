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
          <div slot="header" class="flex-center" style="height: 330px;padding: 0;background: white;overflow: hidden;">
            <pageView :page="item.pages[0]"/>
          </div>
          <div class="flex-center">
            <div class="cardText" @click="goEditor(item)">
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
  import elementUi from 'element-ui'
  import pageView from "core/editor/leftPanel/pageView"
  import LoadPluginsMixin from 'core/plugins'

  export default {
    name: "list",
    mixins: [LoadPluginsMixin],
    components:{
      pageView
    },
    data() {
      return {
        worklist: []
      }
    },
    mounted() {
      console.log(elementUi.install);
      getWork().then(({ data }) => {
        this.worklist = data.data.works
      })
    },
    methods: {
      goEditor(work){
        this.$router.push({ name: 'editor',params: {workId: work.id} });
      },
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
