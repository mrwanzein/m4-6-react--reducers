import React from 'react';

export const BookingContext = React.createContext();

const initialState = {
    status: "idle",
    error: null,
    selectedSeatId: null,
    price: null,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'begin-booking-process': {
            return {
                ...state,
                status: action.status,
                error: action.error,
                selectedSeatId: action.selectedSeatId,
                price: action.price,
            }
        }

        default:
            throw new Error('unrecognized action');
    }
}

export const BookingProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    const receiveBookingInfoFromUser = (data) => {
        dispatch({
            type: "begin-booking-process",
            ...data,
        });
    };

    return(
        <BookingContext.Provider
            value={{
                state,
                actions: {
                    receiveBookingInfoFromUser,
                },
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}
