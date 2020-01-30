import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Product
{
    id: string;
    name: string;
    handle: string;
    reference : string;
    description: string;
    category: string;
    image: string;
    price : number;
    taxRate: number;
    size: string;
    color: string;
    material: string;
    quantityPerBox: number;
    minQuantity: number;
    active: boolean;

    /**
     * Constructor
     *
     * @param product
     */
    constructor(product?)
    {
        product = product || {};
        this.id = product.id || FuseUtils.generateGUID();
        this.name = product.name || '';
        this.reference = product.reference || '';
        this.handle = product.handle || FuseUtils.handleize(this.name);
        this.description = product.description || '';
        this.category = product.category || '';
        this.image = product.image || '';
        this.taxRate = product.taxRate || 0;      
        this.size = product.size || 0;
        this.color = product.color || '';
        this.material = product.material || '';
        this.quantityPerBox = product.quantityPerBox || 0;
        this.minQuantity = product.minQuantity || 0;
        this.active = product.active || true;
        this.price = product.price || 0;
    }
}
