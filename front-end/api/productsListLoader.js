import { BACK_END_URL } from "../constants/api";

export const productsListLoader = ({ params }) => {
    return fetch(
        params.typeId
            ? `${BACK_END_URL}/products?type=${params.typeId}`
            : `${BACK_END_URL}/products`
    );

}