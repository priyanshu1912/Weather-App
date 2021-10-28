import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Current from './Current'

import Logo from './cloudy.png'

function Form() {
    const [search,setSearch] = useState('')

    const [data,setData] = useState([])

    const [showLogo,setShowlogo] = useState(true)
    const [visible,setVisible] = useState(true)

    const [location,setLocation] = useState([])
    const [current,setCurrent] = useState([])
    const [forecast,setForecast] = useState([])
    const [alerts,setAlerts] = useState([])

    //chart data (max temp of each day)
    const [dates,setDates] = useState([])
    const [temps,setTemps] = useState([])

    //data of each day
    const [day1,setDay1] = useState([])
    const [day2,setDay2] = useState([])
    const [day3,setDay3] = useState([])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const searchData = async() =>{
        try{
            const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY1}&q=${search}`)
            setData(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        searchData()
    },[search])

    const handleSubmit = async (e) => {
        const date = []
        const temp = []

        e.preventDefault()
        try{
            const cityData = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY1}&q=${search}&days=5&aqi=yes&alerts=yes`)
            setLocation(cityData.data.location)
            setCurrent(cityData.data.current)
            setForecast(cityData.data.forecast.forecastday)
            setAlerts(cityData.data.alerts)

            for(const dataObj of cityData.data.forecast.forecastday){
                date.push(dataObj.date)
                temp.push(dataObj.day.maxtemp_c)
            }
            setDates(date)
            setTemps(temp)

            // console.log('location =>',location)
            // console.log('current =>',current)
            // console.log('forecast =>',forecast)
            // console.log('alerts =>',alerts)

            setDay1(forecast[0])
            setDay2(forecast[1])
            setDay3(forecast[2])
            // console.log('day1',day1)
            // console.log('day2',day2)
            // console.log('day3',day3)

            setData([])
            setShowlogo(false)
        }
        catch(error){
            console.log(error)
        }
        setVisible(true)
    }

    return (
        <div className="background">
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="search your region..." value={search} onChange={handleChange} className="form-input"/>
        </form>

        {
            showLogo &&
            <div style={{position:'absolute',top:'30vh',left:'0',right:'0',fontFamily: 'Kanit',letterSpacing:'0.3vw'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={Logo} alt="logo" width="120px"/>
                    <div style={{marginLeft:'1vw'}}>
                        <h1 style={{margin:'0',padding:'0'}}>youWeather</h1>
                        <p style={{margin:'0',padding:'0'}}>forecast | astro</p>
                    </div>
                </div>
            </div>
        }

        {
            data && 
            <div className="searches">
                {
                    data.map((data) => <h6 key={data.id}>{data.name}</h6>)
                }
            </div>
        }

        {
            visible && 
            (typeof location !== 'undefined') && (typeof current !== 'undefined') && (typeof current.air_quality !== 'undefined')
             && (typeof forecast !== 'undefined') && (typeof day1 !== 'undefined') && (typeof day2 !== 'undefined') &&
             (typeof day3 !== 'undefined') && (typeof day1.astro !== 'undefined') ? 
            <Current location={location} current={current} alerts={alerts} dates={dates} temps={temps}
            day1={day1} day2={day2} day3={day3} />
            : null
        }

        {
            showLogo &&
            <div style={{position:'absolute',bottom:'2vh',left:'0',right:'0'}}>
                <a href="https://priyanshubhardwaj.netlify.app/" style={{color:'grey'}}>priyanshubhardwaj.netlify.app</a>
            </div>
        }

        </div>
    )
}

export default Form
