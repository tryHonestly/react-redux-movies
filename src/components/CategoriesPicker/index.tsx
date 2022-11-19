import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RoutesEnum } from '../../constants/routes'
import { setCategory } from '../../redux/slices/CategorySlice'
import { CategoryType } from '../../types'
import { setPage } from '../../redux/slices/PageSlice'
import { selectCategory } from '../../redux/selectors'
import { MobileCategoriesPicker } from './MobileCategoriesPicker'


type PropsType = {
  isMobile?: boolean
}

const CategoriesPicker: React.FC<PropsType> = React.memo(({ isMobile }) => {
  const category = useSelector(selectCategory)
  const dispatch = useDispatch()

  const [alignment, setAlignment] = React.useState<CategoryType>(category)
  const navigate = useNavigate()

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: CategoryType
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment)
      dispatch(setCategory(newAlignment))
      dispatch(setPage(1))
    }
  }

  if (isMobile) {
    return <MobileCategoriesPicker />
  }

  return (
    <ToggleButtonGroup
      hidden={isMobile}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      size="large"
      fullWidth={true}
    >
      <ToggleButton value="popular">Popular</ToggleButton>
      <ToggleButton value="top_rated">Top Rated</ToggleButton>
      <ToggleButton value="upcoming">Upcomming</ToggleButton>

      <Button onClick={() => navigate(RoutesEnum.Catalog)} variant="contained">
        Catalog
      </Button>
    </ToggleButtonGroup>
  )
})

export default CategoriesPicker
