import axios from "axios";

const openweathermap = {
    baseURL: 'http://api.openweathermap.org/'
}
const key = '1b787d6883c1ca1bb99d157ad0052edb';
const axiosInstance = axios.create(openweathermap);

export const WeatherAPI = {
    searchCity(searchName: string){
        return axiosInstance.get(`data/2.5/weather?q=${searchName}&appid=${key}&lang=ru&units=metric`)
    }
}