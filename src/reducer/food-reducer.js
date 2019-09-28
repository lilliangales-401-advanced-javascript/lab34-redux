export default (state = [], {type, payload}) => {
    switch(type) {
        case 'FOOD_CREATE':
            return [...state, payload];
        case 'FOOD_UPDATE':
            return [...state, payload];
        case 'FOOD_DELETE':
            return [...state, payload];
        default:
            return state;
    }
};