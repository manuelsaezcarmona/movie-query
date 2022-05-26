import { fireEvent } from '@testing-library/react';
import React from 'react';

import { render, screen } from '../../test.utils';
import SearchForm from './SearchForm';

const handleSubmit = jest.fn();

describe('Given the SearchForm', () => {
  beforeEach(() => {
    render(<SearchForm />);
  });
  test('The component is rendered', () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment(<SearchForm />)).toMatchSnapshot();
  });
  describe('Given the Search Button', () => {
    test('The button must called to handleSubmit', () => {
      const button = screen.getByRole('button', { options: { name: 'searchButton' } });

      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
