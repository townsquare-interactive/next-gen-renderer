import { parseISO, format } from 'date-fns'

export default function Date(props: any) {
    const date = parseISO(props.dateString)
    return <time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
