import React from 'react';
import * as rtl from '@testing-library/react';
import DarkModeToggle from "./DarkModeToggle"

test('renders DarkModeToggle without crashing', () => {
  rtl.render(<DarkModeToggle />);
});

