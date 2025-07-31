import { describe, it, expect } from 'vitest';
import { render, screen } from './utils/test-utils';
import { Button } from '../components/ui/button';

describe('Example Test', () => {
  it('renders button component', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });

  it('basic math works', () => {
    expect(2 + 2).toBe(4);
  });
});