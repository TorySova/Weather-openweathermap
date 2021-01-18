import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { weatherTC } from '../redux/weatherReducer'
import { DataWeather } from './DataWeather'
import s from './Weather.module.css'
import search from '../common/—Pngtree—search vector icon_4017384.png'
import pngwing from '../common/pngwing.com.png'

export const Weather = () => {
    // const [date, setDate] = useState<Date>();
    // useEffect(() => {
    //     setInterval(() => {
    //         setDate(new Date())
    //     }, 1000)
    // }, [])

    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState<string>('')

    const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }

    const searchCity = () => {
        dispatch(weatherTC(searchName))
        setSearchName('')
    }
    const onKeyPressHendler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchCity()
        }
    }




    return (
        <div className={s.main}>
            <div className={s.searchWrap}>
                <div className={s.logo}>
                    <img src={pngwing} alt="logo"/>
                    <div>your weather</div>
                </div>

                <div className={s.search}>
                    <input className={s.input} value={searchName} type="text" placeholder={'Введите название города'} onChange={onChangeHendler} onKeyPress={onKeyPressHendler} />
                    <div className={s.button} onClick={searchCity}>
                        <img src={search} />
                    </div>
                </div>
            </div>

            <div className={s.contentWrap}>
                <DataWeather />
            </div>
            {/* <div>
                <div>{date && date.toLocaleTimeString() }</div>
                <div>{date && date.toLocaleDateString()}</div>
            </div> */}


        </div>
    )
}
