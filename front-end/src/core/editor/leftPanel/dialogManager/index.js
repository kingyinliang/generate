import {mapActions, mapState} from "vuex";
import pageList from "../pageList";

export default {
  name: 'dialogManager',
  computed: {
    ...mapState('editor', {
      dialog: state => state.work.dialog,
    })
  },
  methods:{
    ...mapActions('editor', [
      'setEditingDialog',
      'addDialog'
    ]),
  },
  render(){
    return(
      <pageList name={'弹窗'} pages={this.dialog} addPage={this.addDialog} setEditingPage={this.setEditingDialog}/>
    )
  }
}
