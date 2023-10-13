import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonalAccountPage from './PersonalAccountPage';

test('renders learn react link', () => {
    render(<PersonalAccountPage />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
