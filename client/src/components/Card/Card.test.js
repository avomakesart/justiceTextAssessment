import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('component/Card', () => {
  test('should render the component correctly.', () => {
    const rendered = render(
      <Card>
        <p>Children element</p>
      </Card>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
