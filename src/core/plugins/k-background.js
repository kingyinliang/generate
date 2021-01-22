export default {
  name: 'k-background',
  render(){
    let style = {
      width: '100%',
      height: '100%'
    }
    return (
      <div style="width: 100%;height: 100%; overflow: hidden; position: absolute; z-index: 0;">
        <div style={style}></div>
      </div>
    )
  }
}
