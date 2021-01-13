import React from 'react';
import Link from 'next/link'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: 260,
        flexBasis: 264,
        height: 450,
        padding: 10,
    },
    media: {
        height: 300,
        width: '100%',
    },
    body: {
        height: '7em',
        overflow: 'hidden'
    },
    footer: {
        display: "flex"
    },
    footerItem: {
        flexGrow: 1,
    },
    rightAlign: {
        textAlign: "end",
    },
    link: {
        color: '#007bff',
        cursor: 'pointer'
    }
});

const CardContainer = (props) => {
    const {id, title, vote, poster} = props.movieItem;

    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={poster}
                />
                <CardContent className={classes.body}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className={classes.footer}>
                <div className={classes.footerItem}>
                    {vote}
                </div>
                <div className={`${classes.footerItem} ${classes.rightAlign}`}>
                    <Link href="/movie/[id]" as={`/movie/${id}`}>
                        <a className={classes.link}> Show More </a>
                    </Link>
                </div>
            </div>
        </Card>
    );
}


CardContainer.propType = {
    movieItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        vote: PropTypes.number.isRequired,
        poster: PropTypes.string.isRequired,
    }).isRequired,
}


export default CardContainer;