import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("searchForm", () => {
  const { getByLabelText, getByText, findAllByText,getByTestId } = render(<App />);

  // query for the form inputs
  const nameInput = getByLabelText(/Search Players/i);

  fireEvent.change(nameInput, {
    target: { name: "nameInput", value: "Mart" }
  });


  console.log(nameInput.value);

  // query for the submit button
  const submitButton = getByText(/search!/i);

  // // clicking the button
  fireEvent.click(submitButton);

  // // assertion
  const result = getByTestId(/Marta/i);
  expect(result).toBeInTheDocument();
  console.log(result)
});
