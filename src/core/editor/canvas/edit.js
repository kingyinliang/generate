import { mapState } from 'vuex'
export default {
  name: 'edit',
  computed: {
    ...mapState('editor', {
      elements: state => state.editingPage.elements,
    })
  },
  render(h) {
    console.log(this.elements);
    return (
      <div style='width:100%;height:100%;position: relative'>
        {
          this.elements.map(element => {
            return (
              <div style={element.commonStyle}>{h(element.name)}</div>
            )
          })
        }
      </div>
    )
  }
}
