import { BACK_END_URL } from "../constants/api"

export const commentsLoader = ({ params }) => {
    return fetch(
      `${BACK_END_URL}/comments?productId=${params.productId}`
    )
}