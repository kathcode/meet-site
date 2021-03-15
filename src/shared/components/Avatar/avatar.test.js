import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

test('should render the label sended in the props', () => {
  render(<Avatar label="label" />);
  const label = screen.getByText(/label/i);
  expect(label).toBeInTheDocument();
});

test('should render an image if receives the urlImage props', () => {
  render(<Avatar label="label" imageUrl="url" />);
  const altImage = screen.getByAltText(/image/i);
  expect(altImage).toBeInTheDocument();
});
