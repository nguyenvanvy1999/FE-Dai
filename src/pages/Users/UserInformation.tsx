import Button from "../../components/Button";
import { MainLayout } from "../../components/Layout";
import ProgressBar from "../../components/ProgressBar";

function LogSignin() {
  return (
    <div className="w-full text-center">
      <span>--</span>
      <div className="flex justify-center">
        <span className="px-1 bg-yellow-400 text-min">07-08-2022</span>
        <span className="ml-2 px-1 bg-green-300 text-min">IP: 14.234.178.5</span>
      </div>
      <div className="text-min">
        Device: Chrome 115 on OS X
      </div>
    </div>
  )
}

function Section() {
  return (
    <>
      <div>
        <hr className="bg-gray-400 mx-20 mt-10" />
        <div className="grid grid-cols-2 mt-5">
          <div className="font-semibold text-center">Tài khoản</div>
          <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
        </div>
      </div>

      <div>
      <hr className="bg-gray-400 mx-20 mt-10" />
      <div className="grid grid-cols-2 mt-5">
        <div className="font-semibold text-center">Tài khoản</div>
        <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
      </div>
    </div>

    <div>
      <hr className="bg-gray-400 mx-20 mt-10" />
      <div className="grid grid-cols-2 mt-5">
        <div className="font-semibold text-center">Tài khoản</div>
        <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
      </div>
    </div>

    <div>
      <hr className="bg-gray-400 mx-20 mt-10" />
      <div className="grid grid-cols-2 mt-5">
        <div className="font-semibold text-center">Tài khoản</div>
        <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
      </div>
    </div>

    <div>
      <hr className="bg-gray-400 mx-20 mt-10" />
      <div className="grid grid-cols-2 mt-5">
        <div className="font-semibold text-center">Tài khoản</div>
        <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
      </div>
    </div>

    <div>
      <hr className="bg-gray-400 mx-20 mt-10" />
      <div className="grid grid-cols-2 mt-5">
        <div className="font-semibold text-center">Tài khoản</div>
        <div className="text-gray-400 text-center">@bentlee_upjwuq</div>
      </div>
    </div>
    </>
    
  )
}

function UserInformation() {
  return (
    <MainLayout>
      <div className="grid grid-cols-4 mb-10 gap-5">
        <div className="col-span-3 rounded-lg border border-gray-300 py-10 text-center">
          <div className="w-full flex items-center px-5">
            <div className="rounded-full bg-blue-500 w-20 h-20 flex justify-center items-center text-white">
              LV-01
            </div>
            <div className="w-full px-5 text-center">
              <ProgressBar percent={50} />
              <div className="text-red-500 mt-1">Hãy mua/bán thêm 100.000đ để đạt level tiếp theo.</div>
            </div>
          </div>
          <Section />
          <Button variant="primary" className="text-white mt-20">
            Chỉnh sửa
          </Button>
        </div>

        <div className="rounded-lg">
          <div className="border border-gray-300 text-center flex flex-col items-center rounded-lg py-5">
            <img src="https://taphoammo.net/images/avatars/user.svg" className="rounded-full w-48 h-48"  />
            <div className="text-lg text-gray-400 mt-7">@bentlee_upjwuq</div>
            <div className="text-min text-gray-400">Online 1 phút trước.</div>
          </div>
          <div className="border border-gray-300 text-center mt-2 rounded-lg py-5">
            <div>Lịch sử đăng nhập</div>
            <LogSignin />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default UserInformation;