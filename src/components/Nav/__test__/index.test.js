import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// 1) add the cleanup statement

afterEach(cleanup);

// 2) add the describe function to declare what this test suite will be testing:

describe('Nav component', () => {
    //baseline test
    test('renders', () => {
        render(<Nav />);
    });
    //snapshot test
    test('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //asert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', () => {
    test('inserts camera emoji into h2 element', () => {
        //Arrange
        const { getByLabelText } = render(<Nav />); 
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        //arrange
        const { getByTestId } = render(<Nav />);
        
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})