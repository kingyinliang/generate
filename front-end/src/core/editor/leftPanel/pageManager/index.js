import { mapState, mapActions } from 'vuex'
import pageList from "../pageList";

export default {
  name: 'page-manager',
  computed: {
    ...mapState('editor', {
      pages: state => state.work.pages,
    })
  },
  methods:{
    ...mapActions('editor', [
      'setEditingPage',
      'addPage'
    ]),
  },
  render(){
    return(
      <pageList name={'页面'} pages={this.pages} addPage={this.addPage} setEditingPage={this.setEditingPage}/>
    )
  }
}
