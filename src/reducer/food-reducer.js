export default (state = [], {type, payload}) => {
    switch(type) {
        case 'FOOD_CREATE':
            return [...state, payload];
        case 'FOOD_UPDATE':
            let updateState = state.map(food => {
                if(food.id === payload.foodid){
                    food.name = payload.newName;
                }
                return food;
                }
            );
            return [...updateState];
        case 'FOOD_DELETE':
            let newState = state.filter(food => food.id !== payload);
            console.log(state, payload);
            return [...newState];
        default:
            return state;
    }
};