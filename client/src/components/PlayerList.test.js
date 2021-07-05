import React from 'react';
import * as rtl from '@testing-library/react';
import PlayerList from "./PlayerList"


test('renders PlayerList without crashing', () => {
  rtl.render(<PlayerList />);
});
