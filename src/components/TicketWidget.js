import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      {range(numOfRows).map(rowIndex => {
        const rowName = getRowName(rowIndex);

        return <Row key={rowIndex}>
          {range(seatsPerRow).map(seatIndex => {
            const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
            
            return(
              <SeatWrapper key={seatId}>
                <img alt="Blue venue seat" src={Seat} id={seatId}/>
              </SeatWrapper>
            )
          })}
        </Row>
      })}
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
`;

const RowLabel = styled.div`
  font-weight: bold;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
