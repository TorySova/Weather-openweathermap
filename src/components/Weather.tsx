import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../redux/store'
import { weatherTC } from '../redux/weatherReducer'
import { DataWeather } from './DataWeather'
import s from './Weather.module.css'

export const Weather = () => {
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState<string>('')

    const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }

    const searchCity = () => {     
        dispatch(weatherTC(searchName))
        
    }

    return (
        <div className={s.main}>
            <div className={s.searchWrap}>
                <div className={s.search}>
                    <input className={s.input} type="text" placeholder={'Введите название города'} onChange={onChangeHendler}/>
                    <div className={s.button} onClick={searchCity}>
                        <img src={'https://i.pinimg.com/736x/8d/36/af/8d36af8367319b5472f0dd0e857cace3.jpg'} />
                    </div>
                </div>
            </div>

            <div className={s.contentWrap}>
                <DataWeather />
            </div>
        </div>
    )
}
