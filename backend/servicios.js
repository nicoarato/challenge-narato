const client = require('./cliente');

exports.getCategoria = idCategory => {
    return client.getCategory(idCategory).then(response => {
        const categories = response.path_from_root;
        return {
            categories
        }
    });
}

exports.getItems = query => {

    return client.search(query).then(response => {
        const author = {
            name: 'Nicolas',
            lastname: 'Arato'
        };
        let q = query ? query : 'cualquier cosa ;)'
        console.log(`Deseas encontrar ${q}...`)
        // console.log(response.available_filters)
        const categories = response.available_filters[0].values.map(category => category.name);

        const items = response.results
            .map(item => {
                const [amount, decimals] = item.price.toString().split('.');
                let decimal = (decimals) ? decimals : 0;
                return {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: parseInt(amount),
                        decimals: parseInt(decimal)
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping,
                    address: item.address.city_name

                };
            });

        return {
            author,
            categories,
            items
        };
    });
};

exports.getItemDetail = query => {
    console.log(`Consultando el item ${query}...`);
    return client.getItemData(query).then(responses => {
        // const categories = response.available_filters[0].values.map(category => category.name);
        const [item, description] = responses;
        const [amount, decimals] = item.price.toString().split('.');
        let decimal = (decimals) ? decimals : 0;
        return {
            author: {
                name: 'Nicolas',
                lastname: 'Arato'
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: parseInt(amount),
                    decimals: parseInt(decimal)
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: description.plain_text,
            }
        };
    });
};


