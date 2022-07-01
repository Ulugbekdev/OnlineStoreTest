import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';

export const Header = () => {
    return (
        <AppBar position='static' sx={{ marginBottom: '30px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} to='/' color='inherit'>
                    Home
                </Button>
            </Toolbar>
        </AppBar>
    )
}