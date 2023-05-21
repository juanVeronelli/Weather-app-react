
const API_KEY = process.env.API_KEY;

export const getApiUrl = ({ city }) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

export const getForecastUrl = ({ city }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
