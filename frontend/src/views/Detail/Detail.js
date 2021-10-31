import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import ItemDetalle from "../../components/ItemDetalle";
import Breadcrumb from "../../components/Breadcrumb";

export function Detail({ match }) {
    const id = match.params.id;
    const [item, setItem] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${id}`)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                    setItem(response.item);
                    setCategories(response.categories);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return isEmpty(item) ? null : (
        <div className="detail-view">
            <Breadcrumb categories={categories} />
            <ItemDetalle item={item} />
        </div>
    );
}