import { mapState } from 'vuex'
import PropEditor from "./prop";

export default {
  name: 'PageEditor',
  computed: {
    ...mapState('editor', [
      'editingPage'
    ])
  },
  render(){
    const bgEle = this.editingPage.elements.find(e => e.name === 'k-background')
    return (
      <div>
        <PropEditor realEditingElement={bgEle}/>
      </div>
    )
  }
}
