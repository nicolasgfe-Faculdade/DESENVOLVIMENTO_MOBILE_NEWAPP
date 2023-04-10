import * as dateFns from 'date-fns'

export const formatDate = (dateStr: string): string => {
    const date = dateFns.parse(dateStr, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date())
    return dateFns.format(date, 'dd/MM/yyyy HH:mm:ss')
}
