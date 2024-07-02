export function getProductsQuery(productIds) {
    return `query ExtendedProductsById{
                   site {
                     products(entityIds: [${productIds.join(',')}], first: 50) {
                    edges {
                        node {
                          name
                          inventory {
                            isInStock
                          }
                          customFields {
                            edges {
                              node {
                                name
                                value
                              }
                            }
                          }
                          variants {
                            edges {
                              node {
                                prices {
                                  basePrice {
                                    value
                                  }
                                }
                                id
                                entityId
                                sku
                                isPurchasable
                                inventory {
                                  isInStock
                                }
                                options {
                                  edges {
                                    node {
                                      displayName
                                      entityId
                                      values {
                                        edges {
                                          node {
                                            entityId
                                            label
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          entityId
                        }
                      }
                     }
                   }
                 }`;
}
