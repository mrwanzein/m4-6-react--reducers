import React from 'react';

import GlobalStyles from './GlobalStyles';
import {SeatContext} from './SeatContext';

function App() {
  const {
      actions: { receiveSeatInfoFromServer }, state
    } = React.useContext(SeatContext);

React.useEffect(() => {
    fetch('/api/seat-availability')
      .then(res => res.json())
      .then(data => {
        receiveSeatInfoFromServer(data);
      })
      .catch(err => console.log("Error: ", err));
}, []);

  return (
    <>
      <GlobalStyles />
      TODO: write code
      {console.log(state)}
    </>
  );
}

export default App;
