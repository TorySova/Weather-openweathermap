import { WeatherAPI } from './apiWeather';
import { Dispatch } from "redux";

export type weatherType = {
    id: number|null
    main: string
    description: string
    icon: string
}[]
export type mainType = {
    temp: number|null
    feels_like: number|null
    temp_min: number|null
    temp_max: number|null
    pressure: number|null
    humidity: number|null
}
export type windType = {
    speed: number|null
    deg: number|null
}
export type cloudsType = {
    all: number|null
}
export type sysType = {
    type: number|null
    id: number|null
    country: string,
    sunrise: number|null
    sunset: number|null
}

export type dataStateType = {
    weather: weatherType
    main: mainType
    wind: windType
    clouds: cloudsType
    dt: number|null
    sys: sysType
    timezone: number|null
    id: number|null
    name: string
    cod: number|null
}
export type initStateType = {
    data: dataStateType
    error: string
}

const initState: initStateType = {
    data: {
        weather: [],
        main: {
            temp: null,
            feels_like: null,
            temp_min: null,
            temp_max: null,
            pressure: null,
            humidity: null,
        },
        wind: {
            speed: null,
            deg: null
        },
        clouds: {
            all: null
        },
        dt: null,
        sys: {
            type: null,
            id: null,
            country: '',
            sunrise: null,
            sunset: null,
        },
        timezone: null,
        id: null,
        name: '',
        cod: null
    },
    error: ''


};

export const weatherReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "SET_CITY_NAME": {
            return {
                ...state,
                data: action.newData
            }
        }
        case 'SEARCH/ERROR': {
            return {
                ...state,
                error: action.error
            }

        }
        default: return state;
    }
};

export type actionType = ReturnType<typeof weatherAC> | ReturnType<typeof errorAC>

export const weatherAC = (newData: any) => ({
    type: 'SET_CITY_NAME',
    newData
} as const);
export const errorAC = (error: string) => ({
    type: 'SEARCH/ERROR',
    error
} as const);

export const weatherTC = (searchName: string) => (dispatch: Dispatch) => {
    return WeatherAPI.searchCity(searchName)
        .then((res) => {
            dispatch(weatherAC(res.data))
            dispatch(errorAC(''))
        })
        .catch(() => {
            dispatch(errorAC('Ой! Похоже ты ввел неправильное название города'));
            
        })

}