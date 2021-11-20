const initialState = {
    items : [],
    totalPrice: 0,
    totalCount: 0,
    };

const getTotalPrice = arr=>arr.reduce((sum, obj)=> obj.price+sum, 0);

    const cart = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_PIZZA_CART':
                {
                    const currentPizzaItems = !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id].items, action.payload]
                    const newItems = {
                        ...state.items,
                        [action.payload.id]
                        : {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems),
                        totalCount: currentPizzaItems.length,
                        },
                    };
                    const totalCount = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalCount + sum, 0,);
                    const totalPrice = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalPrice + sum, 0,);
                    return {
                        ...state,
                        items: newItems,
                        totalCount,
                        totalPrice,

                    };

                }
                case 'CLEAR_CART':
                    return {
                        ...state,
                        items:{},
                        totalPrice: 0,
                        totalCount: 0,
                    }
                case 'REMOVE_CART_ITEM':{
                    const newItem = {
                        ...state.items,
                    };
                    const currentTotalPrice = newItem[action.payload].totalPrice;
                    const currentTotalCount = newItem[action.payload].items.length;
                    delete newItem[action.payload];
                    return {
                        ...state,
                        items: newItem,
                        totalPrice: state.totalPrice - currentTotalPrice,
                        totalCount: state.totalCount - currentTotalCount,
                    }
                }
                case 'PLUS_CART_ITEM':
                    {
                        const newObjItems = [
                        ...state.items[action.payload].items,
                        state.items[action.payload].items[0]
                    ];

                    const newItems = {
                        ...state.items,
                        [action.payload]
                        : {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                        totalCount: newObjItems.length,
                        },
                    };

                    const totalCount = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalCount + sum, 0,);
                    const totalPrice = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalPrice + sum, 0,);


                    return {
                        ...state,
                        items:newItems,
                        totalCount,
                        totalPrice,
                    };
                };

                    case 'MINUS_CART_ITEM':
                        {
                            const oldItems =state.items[action.payload].items;
                            const newObjItems = oldItems.length>1 ? state.items[action.payload].items.slice(1) : oldItems;
                            const newItems ={
                                ...state.items,
                                [action.payload]
                                : {
                                items: newObjItems,
                                totalPrice: getTotalPrice(newObjItems),
                                totalCount: newObjItems.length,
                                },
                            }

                            const totalCount = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalCount + sum, 0,);
                            const totalPrice = Object.keys(newItems).reduce((sum, key)=> newItems[key].totalPrice + sum, 0,);

                        return {
                            ...state,
                            items:newItems,
                            totalCount,
                            totalPrice,

                        };};



            default:
                return state;
        }


    };

    export default cart;