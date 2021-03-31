import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('component/Header', () => {
  test('should render the component correctly.', () => {
    const rendered = render(
      <Header title='Demo title'>
        <p>Children element</p>
      </Header>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
