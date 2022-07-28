import { formatDistanceToNow } from 'date-fns'
import pl from 'date-fns/locale/pl'

import { Texts } from '../constants/texts'

export function usePostDateDistance(date: string): { distance: string } {
    const parsedDate = Date.parse(date)
    const distance = formatDistanceToNow(parsedDate, { locale: pl })

    return { distance: `${distance} ${Texts.AGO}` }
}
