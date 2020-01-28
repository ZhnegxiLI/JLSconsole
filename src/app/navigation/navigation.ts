import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id        : 'products',
                title     : 'Products',
                translate: 'NAV.PRODUCTS',
                type      : 'item',
                icon     : 'dashboard',
                url       : '/apps/e-commerce/products',
                exactMatch: true
            },
            {
                id        : 'productDetail',
                title     : 'Product Detail',
                translate: 'NAV.PRODUCT_DETAIL',
                type      : 'item',
                icon    : 'receipt',
                url       : '/apps/e-commerce/products/1/printed-dress',
                exactMatch: true
            },
            {
                id        : 'orders',
                title     : 'Orders',
                translate: 'NAV.ORDERS',
                type      : 'item',
                icon     : 'dashboard',
                url       : '/apps/e-commerce/orders',
                exactMatch: true
            },
            {
                id        : 'orderDetail',
                title     : 'Order Detail',
                translate: 'NAV.ORDER_DETAIL',
                icon    : 'receipt',
                type      : 'item',
                url       : '/apps/e-commerce/orders/1',
                exactMatch: true
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }      
        ]
    }
];
