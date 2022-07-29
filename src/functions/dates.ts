import { format, formatDistanceToNow } from 'date-fns'
import pl from 'date-fns/locale/pl'

import { Texts } from '../constants/texts'

export function getPostDateDistance(date: string): string {
    const parsedDate = Date.parse(date)
    const distance = formatDistanceToNow(parsedDate, { locale: pl })

    return `${distance} ${Texts.AGO}`
}

export function getPostDate(date: string): string {
    const parsedDate = Date.parse(date)

    return format(parsedDate, 'd MMMM yyyy', { locale: pl })
}