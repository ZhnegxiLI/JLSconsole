import { FuseUtils } from '@fuse/utils';

export class Order
{
    id: string;
    orderReferenceCode: string;
    contactTelephone: string;
    paymentInfo: string;
    clienRemark: string;
    adminRemark: string;
    date: string;
    totalPrice: number;
    products: any[];
    statusReferenceItem : any
    taxRate: number;
    adresse: Adresse;
    user : User;

    /**
     * Constructor
     *
     * @param order
     */
    constructor(order?)
    {
        order = order || {};
        this.id = order.id || FuseUtils.generateGUID();
        this.orderReferenceCode = order.orderReferenceCode || FuseUtils.generateGUID();
        this.contactTelephone = order.contactTelephone || "";
        this.paymentInfo = order.paymentInfo || "";
        this.clienRemark = order.ClienRemark || "";
        this.adminRemark = order.AdminRemark || 0;
        this.date = order.date || '';
        this.statusReferenceItem = order.statusReferenceItem || {};
        this.products = order.products || [];
        this.taxRate = order.taxRate || 0;
        this.totalPrice = order.totalPrice || 0;
        this.adresse = new Adresse(order.adresse) || new Adresse({});
        this.user = new User(order.user) || new User({});
    }
}

export class User{
    id : number;
    entrepriseName : string;
    name : string;
    email : string;


    constructor(user?)
    {
        user = user || {};
        this.id = user.id || FuseUtils.generateGUID();
        this.entrepriseName = user.entrepriseName || "";
        this.name = user.name || "";
        this.email = user.email || "";
    }
}

export class Adresse{
    id : number;
    detail : string;

    constructor(adresse?){
        adresse = adresse || {};
        this.id = adresse.id || FuseUtils.generateGUID();
        this.detail = adresse.detail || "";
    }
}
