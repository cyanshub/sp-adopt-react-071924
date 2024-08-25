// 1. 在 return 後面置入原本 hbs 檔案的內容
// 2. 把所有的 class 屬性改成 className 屬性
// 3. 若有 for 屬性, 則要改成 htmlFor 屬性
// 4. 把 style 屬性改成接收物件, 數值直接寫成數值, 含字串數值則加上引號
// 5. 記得屬性名與屬性值也要寫成駝峰式命名(bootstrap例外)

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="text-center" style={{ lineHeight: 1 }}>
        <span className="">Pet Adoption Website © since 2024</span>
      </div>
    </footer>
  )
}

export default Footer
