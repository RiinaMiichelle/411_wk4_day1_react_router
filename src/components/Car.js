import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


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

    const carPropertyChips = Object.keys(car).map(carProperty => {
        return <Chip label={`${carProperty}: ${car[carProperty]}`}/>
    })



    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
                <h1>Car Type</h1>
                {carPropertyChips}
            </Paper>
        </Container>
    );
}


export default Car;