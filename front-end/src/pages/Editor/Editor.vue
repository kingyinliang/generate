<script>
import CoreEditor from 'core/editor.js'
export default {
  components:{
    CoreEditor
  },
  render () {
    return (
      <CoreEditor workId={this.$route.params.workId} />
    )
  }
}
</script>
