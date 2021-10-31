import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import ItemList from "../../components/ItemList";
import Breadcrumb from "../../components/Breadcrumb";

export function Search({ search }) {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/items?q=${search}`)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                    setItems(response.items);
                    setCategories(response.categories);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [search]);

    return isEmpty(items) ? null : (
        <>
            <Breadcrumb categories={categories} />
            <ItemList items={items} />
        </>
    );
}