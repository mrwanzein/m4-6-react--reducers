import React from 'react';

export const SeatContext = React.createContext();

const initialState = {
    hasLoaded: false,
    seats: null,
    numOfRows: 0,
    seatsPerRow: 0,
};

function reducer(state, action) {
    switch(action.type){
        case 'receive-seat-info-from-server': {
            return {
                ...state,
                hasLoaded: true,
                seats: action.seats,
                numOfRows: action.numOfRows,
                seatsPerRow: action.seatsPerRow,
                bookedSeats: action.bookedSeats
            }
        }

        default:
            throw new Error('unrecognized action');
    }
}

export const SeatProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const receiveSeatInfoFromServer = (data) => {
        dispatch({
            type: "receive-seat-info-from-server",
            ...data,
        });
    };

    return(
        <SeatContext.Provider
            value={{
                state,
                actions: {
                receiveSeatInfoFromServer,
                },
            }}
        >
            {children}
        </SeatContext.Provider>
    )
}