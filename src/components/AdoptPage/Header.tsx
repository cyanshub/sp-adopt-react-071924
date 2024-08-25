// 1. 在 return 後面置入原本 hbs 檔案的內容
// 2. 把所有的 class 屬性改成 className 屬性
// 3. 若有 for 屬性, 則要改成 htmlFor 屬性
// 4. 把 style 屬性改成接收物件, 數值直接寫成數值, 含字串數值則加上引號
// 5. 記得屬性名與屬性值也要寫成駝峰式命名(bootstrap例外)

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            毛小孩星球
          </a>

          {/* {{!-- 漢堡排 --}} */}
          <button
            className="navbar-toggler"
            style={{ position: 'fixed', right: '0.5rem', top: '0.5rem' }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* {{!-- 頁面標題 --}} */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-md-0">
              <li className="nav-item me-1">
                <a href="#activity" className="nav-link text-container">
                  近期活動
                </a>
              </li>

              <li className="nav-item me-1">
                <a href="#album" className="nav-link text-container">
                  狗兒相片
                </a>
              </li>

              <li className="nav-item me-1">
                <a href="#adoption" className="nav-link text-container">
                  領養資訊
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
