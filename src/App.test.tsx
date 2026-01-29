import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders Hello Narendra', () => {
        render(<App />);
        expect(screen.getByText('Hello Narendra')).toBeInTheDocument();
    });
});
