import { Link } from "react-router-dom"

export interface ListItem {
    item: any,
    id: number,
    url: string
    className?: string
}

const ListItem = (props: ListItem) => 
{
    let count = 1;
    return (
        <ul className={props.className}>
            {props.item.map((result: any) => (
                <li><Link key={props.id} to={`${props.url}/${count++}`}>{result.name}</Link></li>
            ))}
        </ul>
    )
}

export default ListItem;
