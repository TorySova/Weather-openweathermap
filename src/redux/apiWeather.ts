import axios from "axios";

const openweathermap = {
    baseURL: 'api.openweathermap.org/data/2.5/weather'
}
const key = '1b787d6883c1ca1bb99d157ad0052edb';
const axiosInstance = axios.create(openweathermap);

export const WeatherAPI = {
    searchCity(city: string){
        return axiosInstance.get(`?q=${city}&appid=${key}&lang=ru&units=metric`)
    }
}