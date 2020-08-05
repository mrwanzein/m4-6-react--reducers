import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {SeatContext} from './SeatContext';
import { getRowName, getSeatNum } from '../helpers';
import { range } from '../utils';
import Seat from '../assets/seat-available.svg';


const TicketWidget = () => {
  // TODO: use values from Context
  const {
    state
  } = React.useContext(SeatContext);
  
  const numOfRows = state.numOfRows;
  const seatsPerRow = state.seatsPerRow;

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag
  console.log(state)

  return (
    <Wrapper>
      {
        !state.hasLoaded ? <CircularWrapper><CircularProgress /></CircularWrapper> : 
      <>
        {range(numOfRows).map(rowIndex => {
          const rowName = getRowName(rowIndex);
          
          return <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>
            {range(seatsPerRow).map(seatIndex => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
              
              return(
                <SeatWrapper key={seatId}>
                  <Tippy content={`Row ${rowName}, Seat ${seatIndex + 1} -- $${state.seats[seatId].price}`}>
                    <img alt="Blue venue seat" src={Seat} id={seatId} style={
                      state.bookedSeats[seatId] ? {filter: "grayscale(100%)"} : null
                    }/>
                  </Tippy>
                  </SeatWrapper>
              )
            })}
          </Row>
        })}
      </>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  margin: 100px auto 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const RowLabel = styled.div`
  position: absolute;
  font-weight: bold;
  margin-left: -80px;
  margin-top: 20px;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

const CircularWrapper = styled.div`
  height: 522px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TicketWidget;
