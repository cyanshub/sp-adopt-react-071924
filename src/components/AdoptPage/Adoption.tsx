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

const Adoption = () => {
  return (
    <section id="adoption">
      <div className="container">
        <div className="adoption-wrapper">
          <img 
            src="images/information/info-photo-1.avif" alt="" className="adoption-image"
          />

          <div className="adoption-info">
            <h3 className="adoption-title">領養毛小孩</h3>
            <p className="adoption-description">用領養代替購買, 帶毛小孩一起回家吧!</p>
            <a href="javascript:void(0)" className="action">領養去</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Adoption