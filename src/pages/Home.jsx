import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import { createClient } from "contentful"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HashNavigation, Navigation } from "swiper";
import 'swiper/css'
const Home = () => {
    const client = createClient({ space: "1pr27ff1ja2t", accessToken: "qqTGnGuvdBUG3sAfoZzYH0UPJu2jgtFneTBr9KUtTEE" });
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getAssets().then((data) => {
                    console.log(data);
                    setSkills(data)
                })
            } catch (error) {
                console.log("error");
            }
        }
        getAllEntries();
    }, [])
    return (
        <div>
            <div className='Home'>
                <div className='pres'>
                    <h1>Hi,<br />I'am <span>Oussama</span> <br />Web Developer</h1>
                    <Link to={'/about'}><button>About Me</button></Link>
                </div>
                <div className='avatar'>
                    <img src="/images/avatar.png" alt="" />
                </div>

            </div>
            <div className='socialMedia'>
                <Link to={"https://github.com/OussamaGhounane"}><img src="/images/github.png" alt="" /></Link>
                <Link to={"/contact"}><img src="/images/mail.png" alt="" className='mail' /></Link>
                <Link to={"https://www.linkedin.com/in/ghounane-oussama-946586230/"}><img src="/images/linkedin.png" alt="" /></Link>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <div className='list'>
                    <li>
                        <h2>Front-end</h2>


                        <Swiper
                            slidesPerView={1}
                            spaceBetween={90}
                            hashNavigation={{
                                watchState: true,
                            }}
                            navigation={true}
                            modules={[Navigation, HashNavigation]}

                        >
                            {skills?.items?.slice(0, 7).map((f) => {
                                return (
                                    <SwiperSlide key={f.sys.id}>
                                        <img src={f.fields.file.url} alt="" />
                                    </SwiperSlide>
                                )
                            })}


                        </Swiper>


                    </li>

                    <li className='item'>
                        <h2>Back-end</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={90}
                            hashNavigation={{
                                watchState: true,
                            }}
                            navigation={true}
                            modules={[Navigation, HashNavigation]}

                        >
                            {skills?.items?.slice(7, 11).map((f) => {
                                return (
                                    <SwiperSlide key={f.sys.id}>
                                        <img src={f.fields.file.url} alt="" />
                                    </SwiperSlide>
                                )
                            })}


                        </Swiper>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={90}
                            hashNavigation={{
                                watchState: true,
                            }}
                            navigation={true}
                            modules={[Navigation, HashNavigation]}

                        >
                            {skills?.items?.slice(11, 15).map((f) => {
                                return (
                                    <SwiperSlide key={f.sys.id}>
                                        <img src={f.fields.file.url} alt="" />
                                    </SwiperSlide>
                                )
                            })}


                        </Swiper>
                    </li>
                </div>
            </div>
        </div>

    )
}

export default Home