import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ReserveForm from '../Components/Main/ReserveForm';
import BookedPage from '../Components/Pages/BookedPage';

const mockAvailableTimes = [
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '21:00', label: '9:00 PM' },
  { value: '22:00', label: '10:00 PM' },
];

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('2024-07-14T00:00:00Z'));
});

afterAll(() => {
  jest.useRealTimers();
});

test('Form submits and redirects', async () => {
  render(
    <MemoryRouter initialEntries={['/reserve']}>
      <Routes>
        <Route path="/reserve" element={<ReserveForm availableTimes={mockAvailableTimes} updateTimes={() => {}} />} />
        <Route path="/booked" element={<BookedPage />} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/Full Name \*/i), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(screen.getByLabelText(/Phone Number \*/i), {
    target: { value: '1234567890' },
  });
  fireEvent.change(screen.getByLabelText(/Date \*/i), {
    target: { value: '2028-07-15' }, // Set to a future date
  });
  fireEvent.change(screen.getByLabelText(/Time \*/i), {
    target: { value: '17:00' },
  });
  fireEvent.change(screen.getByLabelText(/Number of Guests \*/i), {
    target: { value: '2' },
  });

  fireEvent.submit(screen.getByRole('button', { name: /submit reservation/i }));

  const bookedHeadingElement = await screen.findByRole('heading', { name: /thank you, John Doe!/i });
  expect(bookedHeadingElement).toBeInTheDocument();
});
