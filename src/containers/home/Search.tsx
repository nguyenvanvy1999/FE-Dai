import { ChangeEvent, useState } from 'react'
import Finder from '../../assets/images/finder.jpg'
import InputV1 from '../../components/Input/InputV1'
import { CategoryOption, categoryOptions } from '../../models'

export interface SearchProps {}
import AsyncSelect from 'react-select/async'
import Button from '../../components/Button'

export default function Search() {
  const [value, setValue] = useState<string>('')
  const filterCategories = (inputValue: string) => {
    return categoryOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const loadOptions = (inputValue: string, callback: (options: CategoryOption[]) => void) => {
    setTimeout(() => {
      callback(filterCategories(inputValue))
    }, 1000)
  }
  return (
    <div
      style={{
        background: `url(${Finder})`,
      }}
      className="h-300px"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-4 px-52px py-52px text-black-light h-300px">
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
        <InputV1
          className="md:col-span-3"
          placeHolder="Tìm gian hàng hoặc người bán"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
        <Button
          variant="primary"
          className="flex items-center justify-center mx-auto md:col-span-3 h-43px px-11"
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  )
}
