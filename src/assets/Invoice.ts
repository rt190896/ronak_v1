export class Invoice {
    id: number = 0;
    invoiceDate: Date = new Date();
    invoiceNumber: string = '';
    partyName?:string;
    productionSlipNumber: string = "";
    productionSlipDate: Date = new Date();
    details: InvoiceDetail[] = [];
    basePlateDetail: BasePlateDetail[] = [];
}

export class InvoiceDetail {
    id: number = 0;
    thikness: number = 0;
    length: number = 0;
    type: number = 0;
    profileType: number = 0;
    qty: number = 0;
    productionValue: number = 0;
    originalValue: number = 0;
    profileTypeName?:string;
}

export class BasePlateDetail {
    invoiceId: number = 0
    type: number = 0
    thikness: number = 0
    qty: number = 0;
    profileTypeName?: string;
}