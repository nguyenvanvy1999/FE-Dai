export interface CategoryOption {
  value: string
  label: string
}

export const categoryOptions: CategoryOption[] = [
  { value: '', label: 'Tùy chọn tìm kiếm' },
  { value: 'ten-nguoi-ban', label: 'Tên người bán' },
  { value: 'email', label: 'Email' },
  { value: 'pm', label: 'Phần mềm' },
  { value: 'account', label: 'Tài khoản' },
  { value: 'incre', label: 'Tăng tương tác' },
  { value: 'pm', label: 'Dịch vụ phần mềm' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'other', label: 'Dịch vụ khác' },
]
