import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { ContactList, InformationList, NotificationType, SocialNetworks } from '../../models'
import Button from '../Button'
import useAuth from '../../hooks/useAuth'
import useAntdNotification from '../../hooks/useAntdNotification'

export function Footer() {
  const { user } = useAuth()
  const { showNotification } = useAntdNotification()
  return (
    <div className="border-t-grey-100 border-t">
      <div className="container mx-auto px-15px">
        <div className="grid xl:grid-cols-3 pt-12 pb-54px md:grid-cols-2 grid-cols-1">
          <div className="px-15px">
            <h5 className="text-xl mb-25px font-bold">Liên hệ</h5>
            <div className="text-sm pr-5 text-black-light font-normal">
              Liên hệ ngay nếu bạn có khó khăn khi sử dụng dịch vụ hoặc cần hợp tác.
            </div>
            <ul className="mt-4">
              {ContactList.map((contact) => (
                <li key={contact.title} className="px-1">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-sm text-black-light font-normal"
                  >
                    {createElement(contact.icon, { className: contact.iconClassName })}
                    {contact.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-15px">
            <h5 className="text-xl mb-25px font-bold">Thông tin</h5>
            <ul className="mt-4">
              {InformationList.map((info) => (
                <li key={info.content} className="px-1">
                  {info.path ? (
                    <Link
                      to={info.path}
                      className="flex items-center gap-2 text-sm text-black-light font-normal"
                    >
                      {info.content}
                    </Link>
                  ) : (
                    <span className=" text-sm text-black-light font-normal">{info.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-15px">
            <h5 className="text-xl mb-25px font-bold">Đăng ký bán hàng</h5>
            <div className="text-sm pr-5 text-black-light font-normal mb-14px">
              Tạo một gian hàng của bạn trên trang của chúng tôi. Đội ngũ hỗ trợ sẽ liên lạc để giúp
              bạn tối ưu khả năng bán hàng.
            </div>
            {!user && (
              <Button
                variant="primary"
                className="w-28"
                onClick={() =>
                  showNotification(
                    NotificationType.Warning,
                    'Vui lòng đăng nhập để thực hiện chức năng này'
                  )
                }
              >
                Tham gia
              </Button>
            )}

            <div className="mt-5 text-sm">
              Theo dõi chúng tôi trên mạng xã hội
              <div className="flex gap-2 mt-2">
                {SocialNetworks.map((social, index) => (
                  <div
                    className={`w-34px h-34px  rounded-full flex items-center justify-center ${social.background}`}
                    key={index}
                  >
                    <Link to="/">
                      {createElement(social.icon, { className: social.iconClassName })}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-grey-100 border-t flex">
          <Link to="" className="text-green-600 font-medium mt-3 mb-12">
            TINSOFT - 2012
          </Link>
        </div>
      </div>
    </div>
  )
}
