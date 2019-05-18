import React from 'react';
import Button from '@material-ui/core/Button';
import UserActionButton from '../../components/buttons/UserActionButton';

class HomePage extends React.Component {
    render() {
        return <div>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <h1>Hi, I’m a Home page component!</h1>
            <UserActionButton></UserActionButton>
        </div>;
    }
}

export default HomePage;