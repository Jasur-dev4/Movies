import { Route, Routes } from 'react-router';
import Navbar from '../navbar/navbar';
import { lazy, Suspense } from 'react';
import Spinner from '../spinner/spinner';

const PageNotFound = lazy(() => import('../../page/page-not-found'));
const HomePage = lazy(() => import('../../page/home-page'));
const TrandingPage = lazy(() => import('../../page/tranding-page'));
const PopularPage = lazy(() => import('../../page/popular-page'));
const DetailedPage = lazy(() => import('../../page/detailed-page'));

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/tranding' element={<TrandingPage />}></Route>
					<Route path='/popular' element={<PopularPage />}></Route>
					<Route path='/movie/:movieId' element={<DetailedPage />}></Route>
					<Route path='*' element={<PageNotFound />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
