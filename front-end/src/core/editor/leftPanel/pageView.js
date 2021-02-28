import PreviewCanvas from 'core/preview'

export default {
  name: 'pageView',
  props: ['page'],
  render(){
    return(
      <div class='page_view' style={{height: this.page.height * 0.5 + 'px'}}>
        <div class='page_view_main' style={{height: this.page.height + 'px', top: -this.page.height * 0.25 + 'px',}}>
          <PreviewCanvas elements={this.page.elements}/>
        </div>
        <div class='page_view_main' style={{height: this.page.height + 'px', top: -this.page.height * 0.25 + 'px',}}/>
      </div>
    )
  }
}
