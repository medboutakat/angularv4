 
    export class InvoiceDetail {
        id: string;
        no: number;
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