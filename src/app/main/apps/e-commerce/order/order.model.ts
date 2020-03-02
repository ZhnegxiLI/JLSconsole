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
    products: Product[];
    statusReferenceItem : any;
    statusLabel : string;
    taxRate: number;
    shippingAdresse: Adresse;
    facturationAdress : Adresse;
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
        this.adminRemark = order.AdminRemark || "";
        this.date = order.date || '';
        this.statusReferenceItem = order.statusReferenceItem || {};
        this.products = order.products || [];
        this.taxRate = order.taxRate || 0;
        this.totalPrice = order.totalPrice || 0;
        this.shippingAdresse = new Adresse(order.shippingAdresse) || new Adresse({});
        this.facturationAdress = new Adresse(order.facturationAdress) || new Adresse({});
        this.user = new User(order.user) || new User({});
        this.statusLabel = order.statusLabel || "";
    }
}

class User{
    id : number;
    entrepriseName : string;
    name : string;
    email : string;
    telephone : string;


    constructor(user?)
    {
        user = user || {};
        this.id = user.id || 0;
        this.entrepriseName = user.entrepriseName || "";
        this.name = user.name || "";
        this.email = user.email || "";
        this.telephone = user.telephone || "";
    }
}

class Adresse{
    id : number;
    adressDetail : string;
    contactTelephone : string;
    contactFax : string;
    contactLastName : string;
    contactFirstName : string;
    postCode : string;
    streeName : string;
    city : string;
    provence : string;
    genter : string;
    country : string;


    constructor(adresse?){
        adresse = adresse || {};
        this.id = adresse.id || 0;
        this.adressDetail = adresse.SecondLineAddress || "";
        this.contactFax = adresse.contactFax || "";
        this.contactTelephone = adresse.contactTelephone || "";
        this.contactFirstName = adresse.contactFirstName || "";
        this.contactLastName = adresse.contactLastName || "";
        this.streeName = adresse.FirstLineAddress || "";
        this.city = adresse.city || "";
        this.provence = adresse.provence || "";
        this.genter = adresse.genter || "";
        this.country = adresse.country || "";
    }
}

export class Product{
    id : number;
    image : string;
    name : string;
    price : number;
    quantity : number;
    referenceCode : string;

    constructor(product?){
        product = product || {};
        this.id = product.id;
        this.image = product.image;
        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.referenceCode = product.referenceCode;
    }
}
