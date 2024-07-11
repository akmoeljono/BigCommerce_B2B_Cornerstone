import { getSingleProductQuery } from './get-single-product-query';

export async function fetchGraphQLData(query) {
    const queryOptions = {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bearerToken}` },
        body: JSON.stringify({
            query,
        }),
    };

    try {
        const response = await fetch('/graphql', queryOptions);
        const result = await response.json();

        if (!result || !result.data) {
            throw new Error('Invalid GraphQL response');
        }

        return result.data;
    } catch (error) {
        console.error('GraphQL error:', error);
        throw error;
    }
};

export async function getSingleProduct(productId) {
    const query = getSingleProductQuery(productId);
    return await fetchGraphQLData(query);
};

export async function productIsInStock(productId) {
    const isInStock = await getSingleProduct(productId).then((product) => {
        if (product) {
            return product.site.product.inventory.isInStock;
        }
        return false; 
    });
    return isInStock;
}
