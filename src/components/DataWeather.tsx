import React from 'react'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../redux/store'

export const DataWeather = () => {
    const cityName = useSelector<AppStoreType, string>(store => store.weather.data.name)
    const temp = useSelector<AppStoreType, number|null>(store => store.weather.data.main.temp)
    
    const description = useSelector<AppStoreType, string[]>(store => store.weather.data.weather.map(it => it.description))
    return (
        <div>
            <div>{cityName}</div>
            <div>{temp && Math.round(temp) + '°'}</div>
            <div>{description}</div>
           
        </div>
    )
}
