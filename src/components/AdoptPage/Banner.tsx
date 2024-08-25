// 1. 在 return 後面置入原本 hbs 檔案的內容
// 2. 把所有的 className 屬性改成 classNameName 屬性
// 3. 若有 for 屬性, 則要改成 htmlFor 屬性
// 4. 把 style 屬性改成接收物件, 數值直接寫成數值, 含字串數值則加上引號
// 5. 記得屬性名與屬性值也要寫成駝峰式命名(bootstrap例外)

const Banner = () => {
  return (
    <section id="activity" className="activity">
      <div className="container">
        <div className="banner-wrapper">
          <div className="main-banner background-image">
            <h1 className="banner-title">帶毛小孩回家吧</h1>
            <p className="banner-description">Bring them back home</p>
            <a href="#adoption" className="action">領養去</a>
          </div>
          <div className="sub-banner sub-banner-left background-image">
            <h1 className="banner-title">捐款送玩偶</h1>
            <p className="banner-description">NTD$100</p>
            <a href="#adoption" className="action">捐款</a>
          </div>
          <div className="sub-banner sub-banner-right background-image">
            <h1 className="banner-title">捐款送狗骨頭</h1>
            <p className="banner-description">NTD$300</p>
            <a href="#adoption" className="action">捐款</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
