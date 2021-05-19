import React from 'react'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../redux/store'
import s from './DataWeather.module.css'

export const DataWeather = () => {
    const cityName = useSelector<AppStoreType, string>(store => store.weather.data.name)
    const error = useSelector<AppStoreType, string>(store => store.weather.error)
    const temp = useSelector<AppStoreType, number | null>(store => store.weather.data.main.temp)
    const feels_like = useSelector<AppStoreType, number | null>(store => store.weather.data.main.feels_like)
    const description = useSelector<AppStoreType, string[]>(store => store.weather.data.weather.map(it => it.description))
    return (
        <div className={s.weatherWrap}>
            {!cityName && !error ? <div className={s.cityName}>Узнай погоду в твоем городе!</div>: null}
            
            {error ? <div className={s.error}>{error}</div>  : <div>
                <div className={s.cityName}>{cityName}</div>
                <div className={s.description}>{description}</div>
                <div className={s.temp}>{temp && Math.round(temp) + '°'}</div>
                {
                    feels_like ? <div className={s.feels_like}>Ощущается как {feels_like && Math.round(feels_like) + '°'}</div> : ''
                }
            </div>
            }

            {/* <div className={s.feels_like}>Ощущается как {feels_like}</div> */}
            {/* <div>{new Date().toLocaleTimeString()}</div> */}
        </div>
    )
}
