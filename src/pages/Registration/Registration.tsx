import Button from "../../components/Button"
import CheckboxV1 from "../../components/Input/CheckboxV1"
import InputV1 from "../../components/Input/InputV1"

function Registration() {
    return (
        <div className="container mx-auto px-14">
            <div className="grid gap-10 mb-6 md:grid-cols-3">
                <div className="container border-solid border rounded-lg border-gray-200 p-5">
                    <p className="text-left font-semibold text-xl">Đăng nhập</p>
                    <hr className="bg-gray-500 mt-5" />
                    <InputV1 label="Tài khoản" placeHolder="" />
                    <InputV1 label="Mật khẩu" placeHolder="" type="password"
                        postNode={
                            <div className="mt-1">
                                <p className="text-green-600 cursor-pointer">Quên mật khẩu</p>
                            </div>
                        }
                    />
                    <CheckboxV1 label="Ghi nhớ đăng nhập" />
                    <Button variant="primary" className="w-32 mt-5 text-center">
                        <span className="text-white">Đăng nhập</span>
                    </Button>
                    {/* 
                        Login google
                     */}
                </div>
                <div className="container col-span-2 border-solid border rounded-lg border-gray-200 p-5">
                    <p className="text-left font-semibold text-xl">Đăng ký</p>
                    <p className="text-green-600 mt-5">
                        Chú ý: Nếu bạn sử dụng các chương trình <span className="text-red-500">Bypass Captcha</span> có thể không đăng ký tài khoản được.
                    </p>
                    <hr className="bg-gray-500 mt-5" />
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <InputV1 label="Tài khoản" placeHolder="" />
                            <InputV1 label="Mật khẩu" placeHolder="" type="password" />
                        </div>
                        <div>
                            <InputV1 label="Email" placeHolder="" />
                            <InputV1 label="Nhập lại mật khẩu" placeHolder="" type="password" />
                        </div>
                    </div>
                    <CheckboxV1 label={<span>Tôi đã đọc và đồng ý với<span className="text-green-600 cursor-pointer ml-2">Điều khoản sử dụng Tạp Hóa MMO</span></span>} />
                    <Button variant="primary" className="w-32 mt-14 text-center">
                        <span className="text-white">Đăng ký</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Registration
