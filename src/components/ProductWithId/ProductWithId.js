import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, CardMedia } from '@mui/material';
import { getProductWithIdThunk } from '../../redux/thunks/productThunk';
import { removeProductWidthId } from '../../redux/reducers/productSlice';

export const ProductWithId = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.productWithId);

    useEffect(() => {
        dispatch(getProductWithIdThunk(id));

        return () => dispatch(removeProductWidthId());
    }, [])

    return (
        <>
            {product && <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <CardMedia
                    component={'img'}
                    src={product.thumbnail}
                    height={300}
                    sx={{ width: '45%', objectFit: 'contain', objectPosition: 'center' }}
                />
                <Box sx={{ width: '45%' }}>
                    <Typography variant='h3'>{product.title}</Typography>
                    <Typography variant='h5'>Price: {product.price}</Typography>
                    <Typography variant='h5'>DiscountPercentage: {product.discountPercentage}</Typography>
                    <Typography variant='h5'>Rating: {product.rating}</Typography>
                    <Typography variant='h5'>Stock: {product.stock}</Typography>
                    <Typography variant='h5'>Brand: {product.brand}</Typography>
                    <Typography variant='h5'>Category: {product.category}</Typography>
                    <Typography variant='h5'>Description: {product.description}</Typography>
                </Box>
            </Box>}
        </>
    )
};