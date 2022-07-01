import { useEffect, useState } from 'react';
import React from 'react';
import { ALL } from '../../redux/variables/variables';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk} from '../../redux/thunks/productThunk';
import { removeCategories } from '../../redux/reducers/productSlice';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

export const Category = React.memo(({selectVal, setSelectVal}) => {
    const dispatch = useDispatch();
    const [isCategories, setIsCategories] = useState(false);
    const categories = useSelector(state => state.products.categories);

    useEffect(() => {
        if (isCategories === false) {
            dispatch(getCategoriesThunk());
            setIsCategories(true);
        }

        return () => dispatch(removeCategories());
    }, []);

    const optionArray = categories && categories.map((option, index) => {
        return <MenuItem key={index} value={option} color='inherit'>{option}</MenuItem>
    })

    return (
        <>
            <FormControl
                sx={{
                    minWidth: 200,
                    marginBottom: '30px'
                }}
            >
                <InputLabel>Category</InputLabel>
                <Select
                    label='Category'
                    value={selectVal}
                    onChange={(e) => setSelectVal(e.target.value)}
                >
                    {optionArray}
                    <MenuItem value={ALL}>{ALL}</MenuItem>
                </Select>
            </FormControl>
        </>
    )
});