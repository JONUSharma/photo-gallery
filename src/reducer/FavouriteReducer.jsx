export const initalState = {
    favourite : JSON.parse(localStorage.getItem("favourite")) || []
}

// Favourite Reducer used to toggle favourite
export  const favouriteReducer = (state = initalState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVOURITE":
            let updated;
            if(state.favourite.includes(action.payload)){
                updated = state.favourite.filter((id) => id !== action.payload);
            }else{
                updated = [...state.favourite, action.payload];
            }
            // save to local storage
            localStorage.setItem("favourite", JSON.stringify(updated));
            return {...state, favourite: updated};
        default:
            return state;
    }
}

