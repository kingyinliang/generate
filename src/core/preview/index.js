import {mapState} from "vuex";
import ElementItem from "./element";
import {getStyle, getPreviewData} from "@/utils";

export default {
  name: 'Preview',
  props: ['elements', 'height'],
  render(h) {
    const pageWrapperStyle = {height: this.height || '100%', position: 'relative'}
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
