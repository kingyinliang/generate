import ElementItem from "./element";
import {getStyle, getPreviewData} from "@/utils";

export default {
  name: 'DialogCanvas',
  props: ['dialogs'],
  methods:{
    closeDialog(e){
      e.currentTarget.parentElement.style.display = "none";
    }
  },
  render(h){
    return(
      <div>
        {
          this.dialogs.map((dialog) => {
            return(
              <div class="k-dialog">
                <em class="k-dialog__close iconfont Kguanbi" onClick={(e) => this.closeDialog(e)}/>
                {
                  dialog.elements.map((el) => {
                    return (
                      <ElementItem element={el} style={getStyle({position: 'absolute'}, el)}>
                        {h(el.name, getPreviewData({position: 'static'}, el))}
                      </ElementItem>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
