import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MovieList from '../MovieList';

jest.mock('axios');

const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
  },
  {
    id: 2,
    title: 'Movie 2',
  },
];

describe('MovieList Component', () => {
  test('renders movie titles', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        movies: mockMovies,
      },
    });

    const onMovieClick = jest.fn();

    render(<MovieList onMovieClick={onMovieClick} />);

    expect(await screen.findByText('Movie 1')).toBeInTheDocument();
    expect(await screen.findByText('Movie 2')).toBeInTheDocument();
  });

  test('calls onMovieClick when a movie is clicked', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        movies: mockMovies,
      },
    });

    const onMovieClick = jest.fn();

    render(<MovieList onMovieClick={onMovieClick} />);

    const movie1 = await screen.findByText('Movie 1');

    fireEvent.click(movie1);

    expect(onMovieClick).toHaveBeenCalledWith(mockMovies[0]);
  });
});
