 
    export class InvoiceDetail {
        id: string;
        pCode: string;
        pName: string;
        qte: string;
        prix: string;
        invoiceHeaderID:string;
    }

    export class InvoiceHeader { 
        id:string;
        code: string;
        date: Date;
        invoiceDetails: InvoiceDetail[];
    }