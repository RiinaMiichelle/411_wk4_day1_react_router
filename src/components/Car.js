import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';



const Car = (props) => {
    let id = props.match.params.id;
    return (
        <h1>A specific car</h1>
    )
}

export default Car;