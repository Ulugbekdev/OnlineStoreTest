import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Category } from '../Category/Category';
import { ALL } from '../../redux/variables/variables';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentCategory, removeDataProducts } from '../../redux/reducers/productSlice';
import { getPageOfProductsThunk, getProductsThunk } from '../../redux/thunks/productThunk';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
    Pagination
} from '@mui/material';

export const Products = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [selectVal, setSelectVal] = useState(ALL);
    const count = useSelector((state) => state.products.count);
    const products = useSelector((state) => state.products.arrayProducts);
    const category = useSelector((state) => state.products.currentCategory);

    useEffect(() => {
        dispatch(getProductsThunk(selectVal));
        dispatch(getCurrentCategory(selectVal));

        return () => dispatch(removeDataProducts());
    }, [selectVal]);

    const paginationChange = (e, value) => {
        setPage(value);
        dispatch(getPageOfProductsThunk(value, category));
    }

    const arrayProducts = products && products.map((product) => {
        return (
            <Box key={product.id} sx={{ width: '25%', marginX: '8px' }}>
                <Card sx={{ width: '100%' }}>
                    <CardMedia
                        component='img'
                        height='200'
                        image={product.thumbnail}
                        alt={product.title}
                    />
                    <CardContent sx={{ minHeight: 100 }}>
                        <Typography variant='h5' component='div'>
                            {product.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' component={Link} to={`/product/${product.id}`}>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        )
    });

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Category selectVal={selectVal} setSelectVal={setSelectVal}/>
                <Search />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    marginX: '-8px'
                }}
            >
                {arrayProducts}
            </Box>
            {count && <Pagination
                count={Math.ceil(count / 4)}
                color='primary'
                page={page}
                onChange={paginationChange}
                sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
            />}
        </>
    )
};