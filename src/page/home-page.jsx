import React from 'react';
import ErrorBoundry from '../components/error-boundary/error-boundary';
import Hero from '../components/hero/hero';
import RowMovies from '../components/row-movies/row-movies';

function HomePage() {
	return (
		<div>
			<ErrorBoundry>
				<Hero />
			</ErrorBoundry>
			<ErrorBoundry>
				<RowMovies />
			</ErrorBoundry>
		</div>
	);
}

export default HomePage;
