import { BACK_END_URL } from "../constants/api";

export const productCardLoader = ({params}) => {
        return fetch(`${BACK_END_URL}/products/${params.productId}`);
}