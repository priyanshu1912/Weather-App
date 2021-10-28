import React,{useState,useEffect} from 'react'
import {Bar,Doughnut,Line} from 'react-chartjs-2'

import {HiLocationMarker,RiRadioButtonLine,RiSunFill,BsMoon} from 'react-icons/all'

function Current(props) { 
    const {location,current,dates,temps,day1,day2,day3} = props

    const [day1timedata,setDay1timedata] = useState([])
    const [day1tempdata,setDay1tempdata] = useState([])
    const [day2tempdata,setDay2tempdata] = useState([])
    const [day3tempdata,setDay3tempdata] = useState([])

    useEffect(()=>{
        const day1time = []
        const day1temp = []
        const day2temp = []
        const day3temp = []

        async function sort(){
            
            for(const data of day1.hour){
                day1time.push(data.time)
                day1temp.push(data.temp_c)
            }
            setDay1timedata(day1time)
            setDay1tempdata(day1temp)

            for(const data of day2.hour){
                day2temp.push(data.temp_c)
            }
            setDay2tempdata(day2temp)

            for(const data of day3.hour){
                day3temp.push(data.temp_c)
            }
            setDay3tempdata(day3temp)
            
        }
        sort()

    },[])

    const co = `${current.air_quality.co}`
    const no2 = `${current.air_quality.no2}`
    const o3 = `${current.air_quality.o3}`
    const pm2_5 = `${current.air_quality.pm2_5}`
    const pm10 = `${current.air_quality.pm10}`
    const so2 = `${current.air_quality.so2}`

    const date1 = `${day1.date}`
    const date2 = `${day2.date}`
    const date3 = `${day3.date}`
    
    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Maximum Temperatures (C)',
                data: temps,
                fill: true,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Max of 3 days',
                font: {
                    family: 'Kanit',
                    size: 14
                }
            },
            legend: {
                labels: {
                    font: {
                        family: 'Kanit'
                    },
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        family: 'Kanit'
                    },
                }
            },
            y: {
                min: 0,
                max: 50,
                ticks: {
                    stepSize: 1,
                    font: {
                        family: 'Kanit'
                    },
                }
            }
        }
    }

    const data2 = {
        labels: day1timedata,
        datasets: [
            {
                label: date1,
                data: day1tempdata,
                fill:true,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: date2,
                data: day2tempdata,
                fill:true,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: date3,
                data: day3tempdata,
                fill:true,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }

    const dataoptions = {
        plugins: {
            title: {
                display: true,
                text: 'Hourly Data',
                font: {
                    family: 'Kanit',
                    size: 14
                }
            },
            legend: {
                labels: {
                    font: {
                        family: 'Kanit'
                    },
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        family: 'Kanit'
                    },
                }
            },
            y: {
                min: 0,
                max: 50,
                ticks: {
                    stepSize:1,
                    font: {
                        family: 'Kanit'
                    }
                }
            }
        }
    }

    const airData = {
        labels: ['co','no2','o3','pm2_5','pm10','so2'],
        datasets: [{
            label: 'My First Dataset',
            data: [co,no2,o3,pm2_5,pm10,so2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const airOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Air Composition',
                font: {
                    family: 'Kanit',
                    size: 14,
                }
            },
            legend: {
                labels: {
                    font: {
                        family: 'Kanit'
                    },
                }
            }
        }
    }

    return (
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="current-temp">

                <div>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <RiRadioButtonLine style={{color:'red',marginRight:'0.5vw'}}/>
                        <p style={{margin:'0',padding:'0'}}>last updated - {current.last_updated}</p>
                    </div>

                    <div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={current.condition.icon} alt="weather" style={{marginRight:'1vw'}}/>
                            <div>
                                <h1 style={{margin:'0',padding:'0'}}>{current.temp_c} &deg;C or {current.temp_f} &deg;F</h1>
                                <p style={{margin:'0',padding:'0'}}>{current.condition.text}</p>
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div>
                                <h3 style={{margin:'0',padding:'0'}}>feelslike - {current.feelslike_c} &deg;C or {current.feelslike_f} &deg;F</h3>
                                <h3 style={{margin:'0',padding:'0'}}>humidity - {current.humidity}%</h3>
                                <h3 style={{margin:'0',padding:'0'}}>pressure - {current.pressure_in}in</h3>
                            </div>
                            <div style={{marginLeft:'2vw'}}>
                                <p style={{margin:'0',padding:'0'}}>wind - {current.wind_mph}mph</p>
                                <p style={{margin:'0',padding:'0'}}>precip - {current.precip_in}in</p>
                                <p style={{margin:'0',padding:'0'}}>uv - {current.uv}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

            <div className="current-location">
                <HiLocationMarker style={{fontSize:'6vh',marginRight:'1vw',color:'red'}}/>
                <div>
                    <h4 style={{margin:'0',padding:'0'}}>{location.name}</h4>
                    <h4 style={{margin:'0',padding:'0'}}>{location.country}</h4>
                    <p style={{margin:'0',padding:'0'}}>{location.region}</p>
                    <p style={{margin:'0',padding:'0'}}>{location.localtime}</p>
                </div>
            </div>

            <div className="current-astro">
                <h3 style={{margin:'0',padding:'0'}}>Astrology</h3>

                <div style={{display:'flex',alignItems:'center',marginTop:'1vh'}}>
                    <RiSunFill style={{fontSize:'6vh',marginRight:'1vw',color:'orange'}}/>
                    <div>
                        <p style={{margin:'0',padding:'0'}}>sunrise - {day1.astro.sunrise}</p>
                        <p style={{margin:'0',padding:'0'}}>sunset - {day1.astro.sunset}</p>
                    </div>
                </div>

                <div style={{display:'flex',alignItems:'center',marginTop:'1vh'}}>
                    <BsMoon style={{fontSize:'6vh',marginRight:'1vw',color:'yellow'}}/>
                    <div>
                        <p style={{margin:'0',padding:'0'}}>moonrise - {day1.astro.moonrise}</p>
                        <p style={{margin:'0',padding:'0'}}>moonset - {day1.astro.moonset}</p>
                        <p style={{margin:'0',padding:'0'}}>moon-phase - {day1.astro.moon_phase}</p>  
                        <p style={{margin:'0',padding:'0'}}>moon-illumination - {day1.astro.moon_illumination}%</p>   
                    </div>
                </div>     

            </div>
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'2vh'}}>
            <div className="barChart">
                <Bar data={data} options={options}/>
            </div>

            <div className="doughnut">
                <Doughnut data={airData} options={airOptions}/>
            </div>

            <div className="hour-chart">
                <Line data={data2} options={dataoptions}/>
            </div>
        </div>
        </>
    )
}

export default Current
