import { useLayoutEffect, useState } from 'react'

const queries = [
  '(max-width: 766px)',
  '(min-width: 767px) and (max-width:1199px)',
  '(min-width: 1200px)',
]

export const useMediaQuery = (): { [key: string]: boolean } => {
  const mediaQueryLists = queries.map((query) => matchMedia(query))

  const getValues = () => mediaQueryLists.map((mql) => mql.matches)

  const [values, setValues] = useState(getValues)

  useLayoutEffect(() => {
    const handler = () => setValues(getValues)

    mediaQueryLists.forEach((mgl) => mgl.addEventListener('change', handler))

    return () =>
      mediaQueryLists.forEach((mgl) =>
        mgl.removeEventListener('change', handler)
      )
  })

  return [`isMobile`, `isTablet`, `isDesktop`].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  )
}
