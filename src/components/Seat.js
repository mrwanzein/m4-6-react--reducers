import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { range } from '../utils';
import SeatAsset from '../assets/seat-available.svg';
import UnstyledButton from '../UnstyledButton';

const Seat = ({seatsPerRow, rowName, getSeatNum, state}) => {
    return(
        <>
            {range(seatsPerRow).map(seatIndex => {
                const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
                
                return(
                <SeatWrapper key={seatId} disabled={state.bookedSeats[seatId] ? true : false}>
                    {
                        !state.bookedSeats[seatId] ? 
                        <Tippy content={`Row ${rowName}, Seat ${seatIndex + 1} -- $${state.seats[seatId].price}`}>
                        <img alt="Blue venue seat" src={SeatAsset} id={seatId} style={
                            state.bookedSeats[seatId] ? {filter: "grayscale(100%)"} : null
                        }/>
                        </Tippy>
                        :
                        <img alt="Blue venue seat" src={SeatAsset} id={seatId} style={
                            state.bookedSeats[seatId] ? {filter: "grayscale(100%)"} : null
                        }/>
                    }
                </SeatWrapper>
                )
            })}
        </>
    )
}

const SeatWrapper = styled(UnstyledButton)`
  padding: 5px;
`;

export default Seat;