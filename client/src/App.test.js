import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('searchform input is rendered', () => {
const { getByLabelText} = render(<App />);

const nameInput = getByLabelText(/Search Players/i);
});
test("searchForm submits", () => {
  const { getByLabelText, getByText, findAllByText,getByTestId } = render(<App />);

  // query for the form inputs
  const nameInput = getByLabelText(/Search Players/i);

  fireEvent.change(nameInput, {
    target: { name: "nameInput", value: "Alex" }
  });


  console.log(nameInput.value);

  // query for the submit button
  const submitButton = getByText(/search!/i);

  // // clicking the button
  fireEvent.click(submitButton);

  // // assertion
  const result = findAllByText(/alex/i);
  console.log(result)
  // expect(result).toBeInTheDocument();
  // var test = document.querySelectorAll('div[value][data-testid="testID"]:not([value=""])');
  // expect(document.querySelectorAll('div')).toBeInTheDocument()
  // let stuff = document.querySelectorAll('div')
  
});
