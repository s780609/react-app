/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';

// pass store to children component
import { Provider } from 'react-redux';

// using api hooks to connect redux-store
import store from "../../../app/store";

//import renderer, { act } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

import Button from '../Button.js';

describe("button test", () => {
    test('Button handleClick prop can be revoke', () => {
        const mockFunc = jest.fn();
        render(<Provider store={store}>
            <Button handleClick={mockFunc}></Button>
        </Provider>);
        const buttons = screen.getAllByTestId("button");
        const button = buttons[0];

        userEvent.click(button);
        expect(mockFunc).toBeCalledTimes(1);

        userEvent.click(button);
        expect(mockFunc).toBeCalledTimes(2);
    });

    test("test click function and text changing runs correctly", () => {
        render(<Provider store={store}>
            <Button></Button>
        </Provider>);
        const buttons = screen.getAllByTestId("button");
        const button = buttons[0];

        userEvent.click(button);
        expect(button).toHaveTextContent("hello taiwan");

        userEvent.click(button);
        expect(button).toHaveTextContent("hello world");
    })
})