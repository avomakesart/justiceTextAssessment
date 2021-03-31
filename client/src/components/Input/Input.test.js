import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('component/Input', () => {
  test('should render the component correctly.', () => {
    const props = {
      type: 'text',
      showIcon: true,
      placeholder: 'Demo placeholde',
      onChange: () => console.log('Demo'),
      value: 'string',
    };

    const rendered = render(<Input {...props} />);

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
