import { useState } from 'react'
import FeatureList from './FeatureList'

function Description() {
  const featureList = [
    'Check trùng sản phẩm bán ra: toàn bộ gian hàng cam kết không bán trùng, hệ thống của chúng tôi sẽ kiểm tra từng sản phẩm một, để đảm bảo hàng đến tay người dùng chưa từng được bán cho ai khác trên trang, và hàng bạn đã mua, cũng không thể bán cho ai khác nữa.',
    'Nạp tiền và thanh toán tự động: Bạn chỉ cần nạp tiền đúng cú pháp, số dư của bạn sẽ đc cập nhật sau 1-5 phút. Mọi bước thanh toán và giao hàng đều được thực hiện ngay tức thì.',
    'Giữ tiền đơn hàng 3 ngày: Sau khi bạn mua hàng, đơn hàng đó sẽ ở trạng thái Tạm giữ tiền 3 ngày, đủ thời gian để bạn kiểm tra, đổi pass sản phẩm. Nếu có vấn đề gì, hãy nhanh chóng dùng tính năng "Khiếu nại" nhé.',
    'Tính năng dành cho cộng tác viên (Reseller): Các bạn đọc thêm ở mục "FAQs - Câu hỏi thường gặp" nhé.',
  ]
  const itemList = [
    'Mua bán email: Mua bán gmail, mail outlook, domain... tất cả đều có thể được tự do mua bán trên trang.',
    'Mua bán phần mềm MMO: các phần mềm phục vụ cho kiếm tiền online, như phần mềm youtube, phần mềm chạy facebook, phần mềm PTC, PTU, phần mềm gmail....',
    'Mua bán tài khoản: mua bán facebook, mua bán twitter, mua bán zalo, mua bán instagram.',
    'Các sản phẩm số khác: VPS, key window, key diệt virus, tất cả sản phẩm số không vi phạm chính sách của chúng tôi đều được phép kinh doanh trên trang.',
    'Các dịch vụ tăng tương tác (like, comment, share...), dịch vụ phần mềm, blockchain và các dịch vụ số khác.',
  ]

  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="relative p-20">
      <div
        className={`p-2 border border-green-400 bg-gray-100 rounded-md ${
          expanded ? 'max-h-48 overflow-hidden' : ''
        }`}
      >
        <h3 className="text-center text-sm font-bold mb-2">
          Tạp hóa MMO - Chuyên trang thương mại điện tử sản phẩm số - Phục vụ cộng đồng MMO (Kiếm
          tiền online)
        </h3>
        <p className="mb-4 text-gray-700">
          Một sản phẩm từ TINSOFT, ra đời với mục đích thuận tiện và an toàn hơn trong các giao dịch
          mua bán sản phẩm số.
        </p>
        <p className={'mb-4 text-gray-700'}>
          Như các bạn đã biết, tình trạng lừ.a đảo trên mạng xã hội kéo dài bao nhiêu năm nay, mặc
          dù đã có rất nhiều giải pháp từ cộng đồng như là trung gian hay bảo hiểm, nhưng vẫn rất
          nhiều người dùng lựa chọn mua bán nhanh gọn mà bỏ qua các bước kiểmtra, hay trung gian, từ
          đó tạo cơ hội cho s.c.a.m.m.e.r hoạt động. Ở Taphoammo, bạn sẽ có 1 trải nghiệm mua hàng
          yên tâm hơn rất nhiều, chúng tôi sẽ giữ tiền người bán 3 ngày, kiểm tra toàn bộ sản phẩm
          bán ra có trùng với người khác hay không, nhắm mục đích tạo ra một nơi giao dịch mà người
          dùng có thể tin tưởng, một trang mà người bán có thể yên tâm đặt kho hàng, và cạnh tranh
          sòng phẳng.
        </p>
        <FeatureList heading="Các tính năng trên trang" list={featureList} />
        <FeatureList heading="Các mặt hàng đang kinh doanh tại Tạp Hóa MMO" list={itemList} />
      </div>
      <div className='flex justify-center'>
        <div className="flex justify-center absolute">
          {expanded ? (
            <button
              onClick={handleToggle}
              className="font-bold cursor-pointer bg-green-500 p-2 text-white text-sm rounded-sm"
            >
              Xem thêm
            </button>
          ) : (
            <button
              onClick={handleToggle}
              className="font-bold cursor-pointer bg-green-500 p-2 text-white text-sm rounded-sm"
            >
              Thu gọn
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Description
