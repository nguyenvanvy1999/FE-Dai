import { Link } from 'react-router-dom'
import { MainLayout } from '../../Layout'
import RegulationItem from './RegulationItem'

function Regulation() {
  return (
    <MainLayout>
      <h2 className="text-lg font-bold">Điều khoản sử dụng trang</h2>
      <div className="mb-1">
        <Link className="text-sm text-green-600 " target="_blank" to="/cau-hoi-thuong-gap">
          Xem thêm &gt;&gt; Câu hỏi thường gặp
        </Link>
        <RegulationItem
          heading="Các mặt hàng bị cấm (hạn chế) kinh doanh trên trang"
          desc="Mỗi khi đăng bán sản phẩm, Người bán có trách nhiệm đảm bảo hàng hóa của mình tuân thủ Luật pháp hiện hành đồng thời không vi phạm các Điều khoản sử dụng và Chính sách của TapHoaMMO. Vui lòng đọc kỹ các hướng dẫn dưới đây về Danh sách sản phẩm bị cấm/hạn chế mua bán. Danh sách có thể sẽ thay đổi dựa theo tình hình thực tế, vui lòng cập nhật thường xuyên để đảm bảo hàng hóa của bạn không vi phạm quy định của chúng tôi. Sau đây là danh sách mặt hàng hạn chế (cấm)"
          list={[
            'Thẻ ngân hàng (Thẻ tín dụng và thẻ ghi nợ...): tất cả các loại thẻ nội địa, quốc tế, các loại tài khoản ngân hàng, tài khoản để tạo thẻ ảo...',
            'Thông tin cá nhân: thông tin cá nhân của người dùng thật, các loại giấy tờ tùy thân, tài khoản thư điện tử và mạng xã hội có được từ hành vi hack, phishing, via...',
            'Sản phẩm có được từ hành vi sử dụng tài khoản ngân hàng của người khác: VPS, key các loại... có được bằng cách đánh cắp hoặc hành vi bất hợp pháp.',
            'Phần mềm c.rack hoặc có mã độc: Xin hãy tôn trọng công sức của các coder MMO chân chính.',
            'Sim (số) điện thoại: từ tất cả nhà mạng, số thật, số ảo.',
            'Tài liệu số, sách báo điện tử vi phạm pháp luật.',
          ]}
        />
        <RegulationItem
          heading="Quy định về gian hàng, bán hàng - (dành cho chủ shop)"
          desc=""
          list={[
            'Không sử dụng ngôn ngữ thô tục, gây thù địch, hay ảnh hưởng đến các gian hàng khác.',
            'Không đăng thông tin cá nhân hoặc tất cả các hình thức liên hệ nào khác ngoài taphoammo.',
            'Không sử dụng hình ảnh phản cảm, gây war, hoặc ảnh hưởng đến tổ chức cá nhân.',
            'Không sử dụng hình ảnh người nổi tiếng khi chưa được cho phép.',
            'Nếu không xử lý cho đơn hàng hoàn tiền của khách trong 3 ngày, chúng tôi sẽ thay mặt xử lý hoàn tiền cho khách.',
            'Sử dụng tính năng bảo hành trực tiếp trên sàn, tuyệt đối không bảo hành qua bất kỳ kênh nào khác.',
          ]}
        />
        <RegulationItem
          heading="Quy định chung cho tất cả người dùng"
          desc=""
          list={[
            'Không sử dụng bug dưới mọi hình thức',
            'Không thực hiện hành vi phá hoại trang, gian hàng, hoặc người dùng khác trên trang.',
          ]}
        />
        <RegulationItem
          heading="Điều khoản vi phạm"
          desc="Vi phạm các điều khoản của Tạp Hóa MMO có thể dẫn đến ít nhất một trong những hình phạt sau đây:"
          list={[
            'Gian hàng bị xóa',
            'Tài khoản bị giới hạn quyền',
            'Tài khoản bị đình chỉ hoạt động hoặc bị xóa',
            'Yêu cầu bồi thường tổn thất',
          ]}
        />
        <RegulationItem
          heading=""
          desc="Đối với chủ shop: Mỗi vi phạm sẽ nhận một vé phạt. Vé phạt sẽ có các giá trị tăng dần."
          list={[
            'Lần 1: Cảnh cáo',
            'Lần 2: Cảnh cáo.',
            'Lần 3: +5% phí cho tất cả gian hàng.',
            'Lần 4: Tiếp tục +5% phí cho tất cả gian hàng.',
            'Lần 5: Đóng mọi gian hàng và ngưng hợp tác.',
          ]}
        />
      </div>
    </MainLayout>
  )
}

export default Regulation
