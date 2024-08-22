export function getProductsQuery(productIds) {
    const IDs = productIds.join(',');
    return `query ExtendedProductsById{
                   site {
                     products(entityIds: [${IDs}], first: 48) {
                    edges {
                        node {
                          name
                          sku
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
