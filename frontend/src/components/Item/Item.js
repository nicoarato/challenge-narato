import { Link } from "react-router-dom";
import formatPrice from "../../helpers/functions/formatPrice";
import "./Item.scss";

import shipping from "../../assets/ic_shipping.png"

export function Item({ id, title, picture, price, free_shipping, condition, address }) {
    return (
        <li className={"items-list-item"}>
            <Link
                to={{
                    pathname: `/items/${id}`
                }}
            >
                <img className={".item-img"} src={picture} alt={title} />
            </Link>
            <div className={"item-data"}>
                <p className={"item-price"}>
                    {formatPrice(price)}
                    {price.decimals ? (
                        <span className={"item-price-decimals"}>{price.decimals}</span>
                    ) : null}
                    {free_shipping ? (
                        <span className={"item-free-shipping"}>
                            <img alt="Envío gratis"
                                className={"envio-logo"}
                                src={shipping} />
                        </span>
                    ) : null}
                </p>
                <Link
                    className={"item-title"}
                    to={{
                        pathname: `/items/${id}`
                    }}
                >
                    <p className={"item-title-text"}>{title}</p>
                </Link>
            </div>
            <p className={"item-address"}>
                {address}
            </p>
        </li>
    );
}
