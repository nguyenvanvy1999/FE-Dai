import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slice/counterSlice'
import { Button } from 'antd'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button type="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <span>{count}</span>
        <Button type="primary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  )
}
