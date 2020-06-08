import React from 'react';
import Styles from './Cards.module.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data : {confirmed,deaths,recovered,lastUpdate}}) => {

    if(!confirmed){
        return 'Loading';
    }
    return (
        <div className = {Styles.container}>
            <Grid container spacing ={3} justify-content ="center">
                <Grid item component={Card} xs={12} md={3} component={Card} className={cx(Styles.card, Styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp start ={0} end = {confirmed.value} separator = "," duration = {2.5} />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} component={Card} className={cx(Styles.card, Styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant = "h5">
                        <CountUp start ={0} end = {recovered.value} separator = "," duration = {2.5} />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of Recoveries</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} component={Card} className={cx(Styles.card, Styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5">
                        <CountUp start ={0} end = {deaths.value} separator = "," duration = {2.5} />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of Deaths caused due to covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
           
        </div>
    );
};


export default Cards;