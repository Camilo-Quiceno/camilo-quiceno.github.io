import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders Hero component', () => {
    render(<Hero />);
  });
}); 