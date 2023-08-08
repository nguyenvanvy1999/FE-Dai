import { MainLayout } from '../../components/Layout'
import FAQItem from './FAQItem'

const faqCustomer = [
  {
    title: 'Làm sao để mua sản phẩm?',
    content:
      'Nạp tiền vào tài khoản của bạn, sau đó sử dụng số dư thanh toán cho các đơn hàng của bạn. Lưu ý quá trình nạp tiền và giao trả hàng hoàn toàn tự động, có thể bạn sẽ phải chờ 1 chút để cho hệ thống xử lý.',
  },
  {
    title: 'Email không trùng lặp là gì?',
    content:
      'Vấn đề mua bán tài khoản trên các group tiềm ẩn rất nhiều nguy cơ, đặc biệt là người bán không uy tín, sau khi bán cho bạn sẽ đem bán cho những người khác nữa. Trên trang chúng tôi sẽ có cơ chế kiểm tra trùng lặp ở tất cả tài khoản bán ra (gian hàng có cam kết không trùng lặp), nhằm ngăn chặn nguy cơ đó, để đảm bảo tài khoản bạn mua chưa từng được bán cho ai khác trên hệ thống.',
  },
  {
    title: 'Làm sao để nạp tiền?',
    content:
      'Chọn phần "Nạp tiền" trên thanh menu, sau đó tiến hành theo hướng dẫn, chuyển khoản đúng nội dung thì tiền sẽ tự động vào tài khoản của bạn, bạn có thể nạp bất kỳ số tiền nào ( từ 1đ)',
  },
  {
    title: 'Tôi có thể trả hàng hay không?',
    content:
      'Sau khi một giao dịch thành công, chúng tôi sẽ giữ tiền của người bán 3 ngày, trong khoản thời gian đó, bạn cần kiểm tra kỹ chất lượng hàng hóa, nếu có gì đó không đúng, hãy vào mục lịch sử đơn hàng và chọn vào "Khiếu nại", chúng tôi sẽ tiến hành giữ tiền đơn hàng đó và mở tranh chấp cho 2 bên.',
  },
  {
    title: 'Tôi nạp tiền bị lỗi?',
    content:
      'Đôi lúc do lỗi của hệ thống, lỗi bên ngân hàng hoặc lỗi chủ quan của người dùng nạp tiền không đúng cú pháp, thì số dư của bạn sẽ không được cập nhật, hãy yên tâm và liên hệ ngay với hỗ trợ để được cập nhật lại.',
  },
  {
    title: 'Tôi chuyển nhầm tiền?',
    content:
      'Chúng tôi đã gặp trường hợp này rất nhiều, vui lòng kiểm tra thật kỹ khi nạp tiền, nếu trường hợp bạn chuyển tiền nhầm, xin thông báo ngay với hỗ trợ trên fb, chúng tôi sẽ kiểm tra và trả lại tiền. Lưu ý: Tiền chỉ được trả lại cho đúng người chuyển đến, để tránh trường hợp scam ABC.',
  },
  {
    title: 'Làm sao tôi có thể tin tưởng nạp tiền vào trang các bạn?',
    content:
      'Tinsoft hoạt động trong mảng MMO đã hơn 10 năm, có thể sản phẩm của chúng tôi chưa thực sự hoàn hảo, nhưng uy tín xây dựng mới là cốt lõi. Ngoài ra, với mức bảo hiểm $500 trên diễn đàn MMO4Me.com giúp các bạn có thể yên tâm giao dịch.',
  },
  {
    title: 'Tôi có cần thuê trung gian không?',
    content:
      'Chính sách của chúng tôi sẽ giữ tiền của người bán 3 ngày, như vậy taphoammo đã gần như trở thành trung gian cho các bạn yên tâm giao dịch. Lưu ý, chúng tôi chỉ hổ trợ với những đơn hàng được mua trực tiếp trên trang, vì vậy để đảm bảo quyền lợi của mình cũng như hạn chế tình trạng lừa đảo tràn lan trên mạng xã hội hiện nay các bạn hãy đưa ra lựa chọn đúng đắn của mình nhé.',
  },
] 
const faqSeller = [
    {
      title: 'Làm sao để đăng ký bán hàng?',
      content:
        'Hãy đăng nhập trước, sau đó chọn vào "Đăng ký bán hàng", nhập đầy đủ các thông tin để xác thực. Chúng mình sẽ duyệt qua để bạn có thể bán hàng trên trang.',
    },
    {
      title: 'Làm sao để tạo một gian hàng?',
      content:
        'Đầu tiên hãy đăng ký để trở thành người bán hàng, vào mục "Quản lý gian hàng" để tạo một gian hàng mới, lưu ý chọn đúng danh mục hàng hóa.',
    },
    {
      title: 'Làm sao để tối ưu gian hàng?',
      content:
        'Các bạn nên đầu tư vào hình ảnh gian hàng, các từ khóa tìm kiếm, tiêu đề, chú thích phải rõ ràng. Bước tiếp theo, để cho một kế hoạch lâu dài, hãy đảm bảo chất lượng hàng hóa. Chúng tôi đã tối ưu để cho gian hàng của bạn trở nên đẹp nhất khi được đưa lên các trang mạng xã hội, hãy tận dụng nó. Ngoài ra, thứ tự xếp hạng gian hàng sẽ được cập nhật hàng tuần dựa vào kết quả bán hàng của bạn.',
    },
    {
      title: 'Làm sao gian hàng của tôi lên đầu trang?',
      content:
        'Tất cả sẽ dựa vào kết quả kinh doanh của bạn và đánh giá từ khách hàng. Xếp hạng sẽ được cập nhật mới vào mỗi tuần.',
    },
    {
      title: 'Tiền tôi bán được sẽ giải quyết như thế nào?',
      content:
        'Trên mỗi đơn hàng thành công, tiền đó sẽ ở trạng thái "Pending" trong 3 ngày, nếu không có tranh chấp gì từ người mua, bạn có thể rút ngay số tiền đó về. Giới hạn rút các bạn vui lòng theo dõi trên trang.',
    },
    {
      title: 'Mặt hàng nào bị cấm?',
      content:
        'Danh sách các mặt hàng không được bán trên trang sẽ liên tục được cập nhật trên trang, các bạn chú ý theo dõi. Chủ yếu các sản phẩm liên quan tới đánh cắp tài khoản người dùng ví dụ như các loại tài khoản ngân hàng, tài khoản fb, email có được nhờ các hành vi h.a.c.k, các hoạt động liên quan tới chính trị, tôn giáo...',
    },
    {
      title: 'Chiết khấu cho đơn hàng như thế nào?',
      content:
        'Chúng tôi sẽ lấy chiết khấu trên mỗi đơn hàng bán được, mong các bạn hiểu cho mối quan hệ của 2 bên là cùng nhau phát triển. Ngoài ra, cơ chế reseller là một tùy chọn để các bạn có thể đẩy mạnh khả năng bán hàng, tất nhiên là bạn phải có chiết khấu cho bạn reseller đó.',
    },
    {
      title: 'Làm sao để rút tiền?',
      content: 'Đối với số dư đã được duyệt, bạn có thể tùy chọn rút về tài khoản.',
    },
    {
      title: 'Làm sao tôi tin tưởng để hàngtrên trang của bạn?',
      content:
        'Bạn có 1 lựa chọn khác là tự tạo server để hàng hóa riêng và cung cấp API cho bên mình, đội ngũ kỹ thuật sẽ liên hệ để 2 bên map được với nhau. Tuy nhiên, vì mục đích phát triển lâu dài các bạn có thể thử lựa chọn tin tưởng.',
    },
    {
      title: 'Làm sao tôi đổi hàng cho khách?',
      content:
        'Nếu đơn hàng của bạn có sản phẩm bị lỗi, hãy vào phần đơn hàng đã bán, đến mục đơn hàng cần bảo hành, chọn vào thao tác Bảo Hành -> nhập số lượng bảo hành. Hệ thống sẽ tự động tạo 1 mã giảm giá đúng với số lượng cần BH và gởi cho khách.',
    },
]; 
const faqCollaborators = [
    {
      title: 'Làm sao để trở thành reseller?',
      content:
        'Thành viên đã đăng ký thành công và cập nhật đầy đủ các thông tin cá nhân (tên, trang mạng xã hội, tài khoản ngân hàng - dùng để rút tiền...) đều có thể trở thành reseller trên trang. Hãy liên hệ với chủ shop và chủ động đề xuất phương án phân chia % phù hợp. Sau khi chủ shop duyệt và đồng ý, bạn sẽ nhận được link ref riêng để giới thiệu cho khách hàng.',
    },
    {
      title: 'Làm sao tôi có thể bán hàng được?',
      content:
        'Đầu tiên, hãy xem danh sách các gian hàng. Những gian hàng cho phép resell sẽ có nút bấm cho reseller. Bạn cần chủ động thương lượng % phân chia lợi nhuận với chủ shop và đừng quên giới thiệu về bản thân. Sau khi chủ shop duyệt và đồng ý, bạn sẽ nhận được link ref riêng. Hãy giới thiệu link này cho khách hàng của bạn, và chiết khấu sẽ được chia tự động sau khi khách hàng hoàn tất mua 1 đơn hàng.',
    },
    {
      title: 'Tôi có thể rút tiền bán được không?',
      content:
        'Có. Tương tự như chủ shop, tiền chiết khấu từ đơn hàng sẽ bị giữ trong 3 ngày trên trang. Sau đó, bạn hoàn toàn có khả năng yêu cầu rút số tiền đó về nếu không có tranh chấp gì từ đơn hàng.',
    },
    {
      title: 'Tôi có được thưởng thêm không?',
      content:
        'Có. Sau mỗi tháng, dựa vào doanh thu bán hàng của bạn, chúng tôi sẽ thưởng thêm % nếu doanh thu đó đạt các mốc đã được đề ra. Chi tiết về mốc thưởng sẽ được cung cấp cho bạn.',
    },
  ];

function FAQ() {
  return (
    <MainLayout>
      <h2 className="text-lg font-bold">Câu hỏi thường gặp</h2>
      <div className="mb-1">
        <a className="text-sm text-green-600 " target="_blank" href="/quy-dinh.html">
          Xem thêm &gt;&gt; Điều khoản sử dụng
        </a>
      </div>
      <FAQItem heading="Người mua" faqList={faqCustomer} />
      <FAQItem heading="Người bán" faqList={faqSeller} />
      <FAQItem heading="Cộng tác viên(Reseller)" faqList={faqCollaborators} />
    </MainLayout>
  )
}

export default FAQ
