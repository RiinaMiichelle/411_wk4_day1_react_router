import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const carsById = {};
cars.forEach(car => {
    carsById[car.id] = car;
});


const Car = (props) => {
    const id = props.match.params.id;
    const car = carsById[id];

    if (!car) {
        return null;
    }


    return (
        <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '35vh' }} />
            
        </Container>
    )
}

export default Car;