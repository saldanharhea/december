import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import CardContainer from "./CardContainer";

const CardList = (props) => {
    const {title, movieList} = props;
    return (
        <div>
            <h1>{title}</h1>
            <div style={{display: 'inline-flex', gap: '12px'}}>
                {movieList && movieList.data ?
                    movieList.data.map((movie, index) => {
                        return <CardContainer id={index + 1} key={index} movieItem={movie}/>
                    })
                    : null}
            </div>

        </div>

    )
}


CardList.propType =
    {
        title: PropTypes.string,
        movieList: PropTypes.array,
    }

CardList.defaultProps =
    {
        title: '',
        movieList: [],
    }

export default CardList