import {DiscountOffers} from 'src/app/view_models/discount-offers'

export interface IProduct {
    id: number,
    Name: string,
    quantity: number,
    Price: number
    img: string,
    categoryID: number,
  discount: DiscountOffers
}
