
export const createQueryStringByFilter = (filter: any) => {
  const queryString = Object.keys(filter)
    .filter((key) => {
      if (filter[key] === `` || filter[key].length === 0) {
        return false
      }
      return true
    })
    .map((key) => {
      if (Array.isArray(filter[key])) {
        return key + '=' + filter[key].join(`,`)
      }

      return key + '=' + filter[key]
    })
    .join('&')

  return queryString ? `&` + queryString : queryString
}
