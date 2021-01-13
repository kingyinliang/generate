<script>
import CoreEditor from '@/core/editor.js'
export default {
  render () {
    return (
      <CoreEditor workId={this.$route.params.workId} />
    )
  }
}
</script>