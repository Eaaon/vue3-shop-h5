export function resultPageSuccess(query: any, list: any[]) {
  const page = query.page
  const size = query.size
  let total = list.length
  const hasNext = total > page * size ? true : false
  const content = list.slice((page - 1) * size, page * size)
  return {
    content,
    hasNext,
    page,
    size,
    total
  }
}