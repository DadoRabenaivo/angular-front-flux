export interface ProdProcess {
    Id: number,
    Name: string,
    InStock: number,
    Equipments: Array<any>,
    Quantity: number,
    QuantitySMA: number
}