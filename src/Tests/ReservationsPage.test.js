import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationsPage from '../Components/Pages/ReservationsPage';

test('Renders the ReserveForm heading', () => {
  render(
    <MemoryRouter>
      <ReservationsPage />
    </MemoryRouter>
  );

  const headingElement = screen.getByRole('heading', { name: /reserve a table/i });
  expect(headingElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(/Chicago Dining Experience/i);
  expect(subtitleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Discover a captivating dining experience/i);
  expect(descriptionElement).toBeInTheDocument();
});