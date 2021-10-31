import React from "react";

import formatPrice from "../../helpers/functions/formatPrice";

import "./ItemDetalle.scss";

export function ItemDetalle({ item }) {
    return (
        <article>
            <div className={"item-detail-container"}>
                <div className={"item-detail-img-container"}>
                    <img src={item.picture} alt={item.title} />
                </div>
                <div className={"item-detail-info"}>
                    <p className={"item-detail-condition-sold"}>
                        {`${item.condition === "new" ? "Nuevo" : "Usado"} - ${item.sold_quantity} vendidos`}
                    </p>
                    <p className={"item-detail-title"}>{item.title}</p>
                    <p className={"item-detail-price"}>
                        {formatPrice(item.price)}
                        {item.price.decimals ? (
                            <span className={"item-price-decimals"}>
                                {item.price.decimals}
                            </span>
                        ) : null}
                    </p>
                    <button className={"item-detail-buy"} tabIndex="4 ">
                        Comprar
                    </button>
                </div>
            </div>
            <div className={"item-detail-description"}>
                <p className={"item-detail-description-title"}>
                    Descripci&oacute;n del producto
                </p>
                <p className={"item-detail-description-text"}>{item.description}</p>
            </div>
        </article>
    );
}
