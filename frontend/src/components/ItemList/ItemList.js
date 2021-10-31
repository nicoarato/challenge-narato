import Item from "../Item";
import "./ItemList.scss";

export function ItemList({ items }) {
    return (
        <ol className={"items-list"}>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </ol>
    );
}
