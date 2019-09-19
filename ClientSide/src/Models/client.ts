
export class client {
    id:                number;
    code:              string;
    name1:             string;
    name2:             string;
    name3:             string;
    patent:            string;
    adresse:           string;
    gender:            string;
    email:             string;
    rc:                string;
    clientCategorieID: number;
    contracts:         Contract[];
    clientLocationID:  number;
    clientLocation:    ClientLocation;
}

export interface ClientLocation {
    id:        number;
    name:      string;
    longitude: string;
    latitude:  string;
}

export interface Contract {
    id:          number;
    price:       string;
    startDate:   Date;
    endDate:     Date;
    paymentDate: Date;
    tax:         string;
    description: string;
    lessorID:    number;
    clientID:    number;
    bankID:      number;
    productID:   number;
}



/****************   Old interface *************************** */
export class Client {
    id: string
    code: string;
    name1: string;
    name2: string;
    name3: string;
    patent: string;
    adresse: string;
    rc: string;
    categorieId: string;
}