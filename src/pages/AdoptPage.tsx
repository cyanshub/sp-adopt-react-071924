import { Album, Banner } from '../components/AdoptPage'

// 在 Page 層載入資料
import { pets } from '../../data.json'

const AdoptPage = () => {
  return (
    <>
      <Banner />
      <Album pets={pets} />
    </>
  )
}

export default AdoptPage
