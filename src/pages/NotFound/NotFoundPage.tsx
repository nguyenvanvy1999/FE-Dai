export interface NotFoundPageProps {}
import { Link } from 'react-router-dom'
import './style.css'
import { RoutePath } from '../../constants'

export default function NotFoundPage() {
  return (
    <section className="page_404">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2 text-green-500 text-lg font-bold">TAPHOAMMO</h3>

                <p className="text-grey-500 text-md font-medium">Trang bạn truy cập không có sẵn</p>

                <Link to={RoutePath.HomePage} className="link_404 font-medium">
                  Đi đến trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
