import { Container } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';
import { ProductWithId } from './components/ProductWithId/ProductWithId';

export const App = () => {
	const element = useRoutes([
		{
			path: '/',
			element: <Products/>
		}, 
		{
			path: '/product/:id',
			element: <ProductWithId/>
		}
	])

	return (
		<Container width='sm'>
            <Header />
			{element}
		</Container>
	);
};
