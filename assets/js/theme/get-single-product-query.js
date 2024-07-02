export function getSingleProductQuery(productId) {
    return `query ProductById{
               site {
                 product(entityId: ${productId}) {
                      name
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
             }`;
}
