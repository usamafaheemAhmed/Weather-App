import React, { useState } from 'react'
import { content } from "../../Content";
import { ImSearch } from "react-icons/im";
import axios from 'axios';

const Search = () => {

    let search = content.search;

    let [searchValue, setSearchValue] = useState();
    let [searchedValue, setSearchedValue] = useState([]);

    let searchWeather = async (e) => {
        console.log(e);
        axios.get(`https://api.weatherapi.com/v1/current.json?key=97931f93e474486b984173037242904&q=${e}&aqi=no`)
            .then((res) => {
                console.log(JSON.stringify(res));
                setSearchedValue([res.data]);
            }).catch((error) => {
                console.log(error);
                alert('City not found or we don\'t cover it');
            })


    }
    let searchWeatherEnter = async (e) => {
        if (e.code === "Enter") {
            searchWeather(e.target.value);
        }
    }

    return (
        <section className="overflow-hidden">
            <div className={`min-h-screen relative flex md:flex-row flex-col-reverse justify-around items-center`}>

                <div
                    data-aos="slide-left"
                    data-aos-delay="500"
                    className={`absolute w-8/12 right-0 top-[50%] bottom-0 md:w-6/12 bg-primaryLinear -z-10`}
                >
                    <h1 className="rotate-90 absolute top-[25%] md:top-[40%] right-[-39%] md:right-[-15%] text-[#EAF2FA]">
                        <span className="text-dark_primary"></span>
                    </h1>
                </div>

                {/* first col */}
                <div className=" pb-16 px-6 pt-5 w-5/12" data-aos="fade-down">
                    <h2>{search.title}</h2>
                    <br />
                    <div className="flex flex-col gap-1 mt-5">
                        <div class="relative rounded-full overflow-hidden border border-neutral-800">
                            <input onKeyUp={searchWeatherEnter} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" class="w-full rounded-full pl-4 pr-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" placeholder="Search City..." />
                            <ImSearch onClick={() => searchWeather(searchValue)} className="absolute top-1 right-0 h-5 w-5 mt-1 mr-3 text-gray-400 hover:text-primary-500" />
                        </div>

                        {searchedValue.map((elem, index) => {
                            return (<div data-aos="slide-up" className='mt-5'>
                                <div className='flex flex-row justify-between items-center '>
                                    <h4>{elem.current.condition.text}</h4>
                                    <img
                                        src={elem.current.condition.icon}
                                        alt="..."
                                        className="h-full object-cover"
                                    />
                                </div>
                                <p>Temperature: <span className='float-right'>{elem.current.temp_c}<sup>o</sup>C </span>  </p>
                                {elem.current.temp_c !== elem.current.feelslike_c && <p>Feels like : <span className='float-right'>{elem.current.feelslike_c}<sup>o</sup>C</span></p>}
                                <p>Wind Speed: <span className='float-right'>{elem.current.wind_kph} k/h</span></p>
                                <p>Wind Direction: <span className='float-right'>{elem.current.wind_dir} </span></p>
                                <p>Humidity: <span className='float-right'>{elem.current.humidity} </span></p>
                                {elem.current.cloud !== 0 && <p> Clouds: <span className='float-right'>{elem.current.cloud}% </span></p>}
                                
                                {(elem.location) && <p>({elem.location.name}) is a City of {elem.location.country}. it's region is {elem.location.region}. </p>}

                            </div>)
                        })}

                    </div>
                </div>

                {/* sec col */}
                <div className="md:h-[25rem] h-50">
                    <img
                        src={search.image}
                        data-aos="slide-up"
                        alt="..."
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Search
