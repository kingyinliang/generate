import ElementItem from "./element";
import {parsePx, getStyle, getPreviewData} from "@/utils";

export default {
  name: 'Preview',
  props: ['elements', 'height'],
  render(h) {
    const userAgent = navigator.userAgent;
    let isRem = false;
    if (!!userAgent.match(/AppleWebKit.*Mobile.*/)||userAgent.indexOf('iPad') > -1) {
      isRem = true
    }
    let height = '100%';
    if (this.height) {
      height = parsePx(this.height, isRem);
    }
    const pageWrapperStyle = {height: height, position: 'relative'}
    return (
      <div style={pageWrapperStyle}>
        {
          this.elements.map((el) => {
            return (
              <ElementItem element={el} style={getStyle({position: 'absolute'}, el)}>
                {h(el.name, getPreviewData({position: 'static'}, el))}
              </ElementItem>
            )
          })
        }
      </div>
    )
  }
}
