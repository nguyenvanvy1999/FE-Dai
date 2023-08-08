
import Description from './Description/Description'; 
import Shortcuts from '../../components/Slider/Slider';
import { MainLayout } from '../../components/Layout'
import CategoryList from '../../containers/home/CategoryList'
import Search from '../../containers/home/Search'

function HomePage() {
  const categoryProducts = [
    {
      title: 'Email',
      imageSrc: 'https://taphoammo.net/images/categories/mail.png',
      description: 'Gmail, yahoo mail, hot mail... và nhiều hơn thế nữa',
    },
    {
      title: 'Phần mềm',
      imageSrc: 'https://taphoammo.net/images/categories/soft2.png',
      description: 'Các phần mềm chuyên dụng cho kiếm tiền online từ những coder uy tín',
    },
    {
      title: 'Tài khoản',
      imageSrc: 'https://taphoammo.net/images/categories/account.png',
      description: 'Fb, BM, key window, kaspersky....',
    },
    {
      title: 'Khác',
      imageSrc: 'https://taphoammo.net/images/categories/more.png',
      description: 'Các sản phẩm số khác',
    },
  ]

  const categoryServices = [
    {
      title: 'Tăng tương tác',
      imageSrc: 'https://taphoammo.net/images/categories/boost2.png',
      description: 'Tăng like, view.share, comment... cho sản phẩm của bạn',
    },
    {
      title: 'Dịch vụ phần mềm',
      imageSrc: 'https://taphoammo.net/images/categories/soft-service.png',
      description: 'Dịch vụ code tool MMO, đồ họa, video... và các dịch vụ liên quan',
    },
    {
      title: 'Blockchain',
      imageSrc: 'https://taphoammo.net/images/categories/block2.png',
      description: 'Dịch vụ tiền ảo, NFT, coinlist... và các dịch vụ blockchain khác',
    },
    {
      title: 'Dịch vụ khác',
      imageSrc: 'https://taphoammo.net/images/categories/more-service.png',
      description: 'Các dịch vụ MMO phổ biến khác hiện nay',
    },
  ]

  return (
    <MainLayout>
      <Search />
      <div className="h-108">
        <CategoryList heading="-- DANH SÁCH SẢN PHẨM --" items={categoryProducts} />
        <CategoryList heading="-- DANH SÁCH DỊCH VỤ  --" items={categoryServices} />   
        <Shortcuts heading='Lôi tắt'/>
        <Description />
      </div>
    </MainLayout>
  )
}

export default HomePage
