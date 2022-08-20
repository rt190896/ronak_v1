export class planSheet {
    id: number = 0;
    type: number = 0;
    thikness: number = 0;
    qty: number = 0;
    invoiceNumber: string = "";
    invoiceDate: Date = new Date();
}

export class pdfTest {
    html?: string;
}

export class ResponseModel {
    statusCode?: number;
    message?: string;
}
