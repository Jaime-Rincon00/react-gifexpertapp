import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

import CircularProgress from '@material-ui/core/CircularProgress';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className='card-content'>
            <h3 className='category'>{category}</h3>

            {loading ? <CircularProgress /> : null}
            {
                images.map(img => {
                    return <GifGridItem
                        key={img.id}
                        {...img}
                    />
                })
            }
        </div>
    )
}