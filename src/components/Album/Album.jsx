// 1. 在 return 後面置入原本 hbs 檔案的內容
// 2. 把所有的 class 屬性改成 className 屬性
// 3. 若有 for 屬性, 則要改成 htmlFor 屬性
// 4. 把 style 屬性改成接收物件, 數值直接寫成數值, 含字串數值則加上引號
// 5. 記得屬性名與屬性值也要寫成駝峰式命名(bootstrap例外)
// 6. 注意單標籤要閉合, 例如 img 元素
// 7. 記得 {{#each 陣列資料}} 的寫法要改成在單花括JS表達式使用陣列資料.map
// 8. 使用陣列方法時, this 是 JavaScript 保留字, 要避免使用
// 9. 因應 React, 使用陣列時, 陣列中的每個物件, 至少在最外層容器要加上 key 屬性 
// 10. 使用變數的方式要改成單花括, 若遇到字串要避免引號在單花括外面
// 11. 注意靜態檔案資源的載入位置已改成自己指定, 元素引用時要注意

// 載入環境變數
const publicURL = import.meta.env.VITE_PUBLIC_URL

// 載入資料
import { pets } from '../../../data.json'

export default function Album() {
  return (
      <section id="album">
        <div className="container">
          <div className="album-wrapper" id="data-panel-petlist">
         
            {/* 將陣列資料 each 出來 */}
            { pets.map( item => { 
              return (
                <div className="card" key={pets.id}>
                  <img
                    src={publicURL + "/" + item.image}
                    alt={item.name} className="card-img" />
                  <div className="card-text">
                    <h3 className="card-title">{ item.name }</h3>
                    <p className="card-description">{ item.age }</p>
                  </div>
                </div>
              )
             })  }

          </div>
        </div>
      </section>
  )
}