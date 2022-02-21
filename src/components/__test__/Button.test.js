/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import renderer, { act } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

import Button from '../Button.js';

describe("button test", () => {
    test('Button handleClick prop can be revoke', () => {
        const mockFunc = jest.fn();
        render(<Button handleClick={mockFunc}></Button>);
        const buttons = screen.getAllByTestId("button");
        const button = buttons[0];

        userEvent.click(button);
        expect(mockFunc).toBeCalledTimes(1);

        userEvent.click(button);
        expect(mockFunc).toBeCalledTimes(2);
    });

    test("test click function and text changing runs correctly", () => {
        render(<Button></Button>);
        const buttons = screen.getAllByTestId("button");
        const button = buttons[0];

        userEvent.click(button);
        expect(button).toHaveTextContent("hello taiwan");

        userEvent.click(button);
        expect(button).toHaveTextContent("hello world");
    })
})