export class Stock {
    id: number = 0;
    type: number = 0;
    width: number = 0
    length: number = 0;
    invoiceDate: Date = new Date();
    thikness: number = 0;
    invoiceNumber:string="";
}

export class ProfileType {
    id: number = 0;
    name: string = "";
    originalValue: number = 0
    productionValue: number = 0;
}