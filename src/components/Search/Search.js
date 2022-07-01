import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { ALL } from '../../redux/variables/variables';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsOfSearchThunk } from '../../redux/thunks/productThunk';

export const Search = () => {
    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState('');
    const category = useSelector(state => state.products.currentCategory);

    useEffect(() => {
        if (searchVal !== "" || category !== null) {
            dispatch(getProductsOfSearchThunk(searchVal, category));
        }
    }, [searchVal])

    return (
        <>
            <TextField
                id='outlined-basic'
                label='Search'
                variant='outlined'
                sx={{ flexGrow: 1, marginLeft: '15px' }}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />
        </>
    )
};