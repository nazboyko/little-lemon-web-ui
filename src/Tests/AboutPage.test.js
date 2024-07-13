import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from '../Components/Pages/AboutPage';
import HeroLeft from '../Components/Main/HeroLeft';

const mockProps = {
  title: 'Discover',
  subtitle: 'the Flavors of Mediterranean Chicago',
  description: 'Indulge in a culinary journey through vibrant Mediterranean dishes crafted with passion and authenticity at Little Lemon, nestled in the heart of Chicago.',
  buttonText: 'Reserve a Table',
  buttonLink: '/reserve',
  image: 'mock-image-url',
  imageAlt: 'Reserve a Table',
};

test('renders AboutPage content', () => {
  render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );

  expect(screen.getByText(/Discover/i)).toBeInTheDocument();
  expect(screen.getByText(/the Flavors of Mediterranean Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/Indulge in a culinary journey/i)).toBeInTheDocument();
  expect(screen.getByText(/Nestled in the heart of Chicago/i)).toBeInTheDocument();
});

test('renders HeroLeft with title, subtitle, description, and button', () => {
  render(
    <MemoryRouter>
      <HeroLeft {...mockProps} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Discover/i)).toBeInTheDocument();
  expect(screen.getByText(/the Flavors of Mediterranean Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/Indulge in a culinary journey/i)).toBeInTheDocument();
  expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
});

test('renders HeroLeft image with alt text', () => {
  render(
    <MemoryRouter>
      <HeroLeft {...mockProps} />
    </MemoryRouter>
  );

  const imageElement = screen.getByAltText('Reserve a Table');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'mock-image-url');
});

