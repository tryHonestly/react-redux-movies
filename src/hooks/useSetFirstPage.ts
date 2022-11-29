import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../redux/slices/PageSlice'

export const useSetFirstPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage(1))
    return () => {
      dispatch(setPage(1))
    }
  }, [])
}
