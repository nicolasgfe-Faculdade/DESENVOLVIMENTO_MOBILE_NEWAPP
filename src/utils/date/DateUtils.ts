import * as dateFns from "date-fns"

export const formatDate = (dataStr: string): string => {
  const date = dateFns.parse(dataStr, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date())
  return dateFns.format(date, "dd/MM/YYYY HH:mm:ss")
}
