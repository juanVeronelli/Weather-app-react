
const API_KEY = import.meta.env.VITE_API_KEY
export const getApiUrl = ({ city }) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

export const getForecastUrl = ({ city }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
