import { RoutePath } from '../constants'

export interface NavLink {
  title: string
  path: string
  children?: NavLink[] | null
}

export const NavLinks: NavLink[] = [
  {
    title: 'Sản phẩm',
    path: RoutePath.SanPhamPage,
    children: [
      {
        title: 'Email',
        path: RoutePath.EmailPage,
      },
      {
        title: 'Tài khoản',
        path: RoutePath.AccountPage,
      },
      {
        title: 'Phần mềm',
        path: RoutePath.SoftwarePage,
      },
      {
        title: 'Khác',
        path: '',
      },
    ],
  },
  {
    title: 'Dịch vụ',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: 'Tăng tương tác',
        path: '',
      },
      {
        title: 'Blockchain',
        path: '',
      },
      {
        title: 'Dịch vụ phần mềm',
        path: '',
      },
      {
        title: 'Dịch vụ khác',
        path: '',
      },
    ],
  },
  {
    title: 'Hỗ trợ',
    path: RoutePath.HoTroPage,
    children: null,
  },
  {
    title: 'Chia sẽ',
    path: RoutePath.ChiaSePage,
    children: null,
  },
  {
    title: 'Công cụ',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: '2FA',
        path: '',
      },
      {
        title: 'Check live FB',
        path: '',
      },
    ],
  },
  {
    title: 'FAQS',
    path: RoutePath.FAQ,
    children: null,
  },
]

export const NavLinksMobile: NavLink[] = [
  {
    title: 'Trang chủ',
    path: RoutePath.HomePage,
  },
  {
    title: 'Sản phẩm',
    path: RoutePath.SanPhamPage,
    children: [
      {
        title: 'Email',
        path: '',
      },
      {
        title: 'Tài khoản',
        path: '',
      },
      {
        title: 'Phần mềm',
        path: '',
      },
      {
        title: 'Khác',
        path: '',
      },
    ],
  },
  {
    title: 'Dịch vụ',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: 'Tăng tương tác',
        path: '',
      },
      {
        title: 'Blockchain',
        path: '',
      },
      {
        title: 'Dịch vụ phần mềm',
        path: '',
      },
      {
        title: 'Dịch vụ khác',
        path: '',
      },
    ],
  },
  {
    title: 'Hỗ trợ',
    path: RoutePath.HoTroPage,
    children: null,
  },
  {
    title: 'Chia sẽ',
    path: RoutePath.ChiaSePage,
    children: null,
  },
  {
    title: 'Công cụ',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: '2FA',
        path: '',
      },
      {
        title: 'Check live FB',
        path: '',
      },
    ],
  },
  {
    title: 'Chia sẽ kinh nghiệm MMO',
    path: RoutePath.FAQ,
    children: null,
  },
  {
    title: 'Thông tin tài khoản',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: 'Đăng nhập',
        path: '',
      },
      {
        title: 'Check live FB',
        path: '',
      },
    ],
  },
  {
    title: 'Ngôn ngữ',
    path: RoutePath.DichVuPage,
    children: [
      {
        title: 'English',
        path: '',
      },
      {
        title: 'Việt Nam',
        path: '',
      },
    ],
  },
]
