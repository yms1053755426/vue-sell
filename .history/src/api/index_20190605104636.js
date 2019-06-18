import { get } from './helps'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

export {
    getSeller,
    getGoods
}
