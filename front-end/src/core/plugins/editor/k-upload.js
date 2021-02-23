export default {
  name: 'k-upload',
  props: {
    value: String,
    default: '',
  },
  data: ()=>({
    fileReader: {}
  }),
  mounted(){
    this.fileReader = new FileReader();
  },
  methods: {
    httpRequest(options){
      const file = options.file;
      if (file) {
        this.fileReader.readAsDataURL(file);
      }
      this.fileReader.onload = () => {
        const base64Str = this.fileReader.result;
        options.onSuccess(base64Str.split(',')[1], file);
      };
    },
    success(res){
      res = 'data:image/gif;base64,' + res
      this.$emit('change', res)
    },
    removeFile(){
      this.$refs.imgUpload.clearFiles();
      this.$emit('change', '')
    }
  },
  render(){
    return (
      <div>
        <div v-show={this.value} class='k-upload' onClick={this.removeFile}>
          <div class='el-upload'>
            <img src={this.value} alt=""/>
            <div class="k-upload_del">
              <em class="el-icon-delete"/>
            </div>
          </div>
        </div>
        <el-upload
          v-show={!this.value}
          ref={'imgUpload'}
          class='k-upload'
          action={''}
          limit={1}
          ShowFileList={false}
          HttpRequest={options => this.httpRequest(options)}
          OnSuccess={res => this.success(res)}
        >
          <em class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </div>
    )
  }
}
