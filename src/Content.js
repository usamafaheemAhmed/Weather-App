// import images

import Hero_person2 from "./assets/images/Hero/Umbrella-pana.svg";
import Hero_person3 from "./assets/images/Hero/Weather-amico.svg";

import split1 from "./assets/images/Splits/Lady-strome.svg";
import split2 from "./assets/images/Splits/businessMan.svg";

import search1 from "./assets/images/search/globe.svg";
import search2 from "./assets/images/search/search.svg";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import erpressjs from "./assets/images/Skills/expressjs-icon.svg";
import MongoDB from "./assets/images/Skills/mongodb-icon.svg";
import Azure from "./assets/images/Skills/microsoft_azure-icon.svg";
import AWS from "./assets/images/Skills/amazon_aws-icon.svg";
import Laravel from "./assets/images/Skills/Laravel.png";
import PHP from "./assets/images/Skills/PHP.png";
import MySQL from "./assets/images/Skills/MySQL.png";

import services_logo1 from "./assets/images/Services/cityscape.png";
import services_logo2 from "./assets/images/Services/countries.png";
import services_logo3 from "./assets/images/Services/location-pin.png";


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { TbListDetails } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#testimonials",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "../AboutUs",
      icon: TbListDetails,
      Page: true,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "../Search",
      icon: ImSearch,
      Page: true,
    },
  ],
  hero: {
    title: "Whats Your Weather Now",
    firstName: "",
    LastName: "",
    btnText: "Search",
    image: Hero_person2,
    image2: search2,
    hero_content: [
      {
        count: "1000+",
        text: "Cities we are covering",
      },
      {
        count: "20+",
        text: "Countries We are covering",
      },
    ],
  },
  heroAboutUs: {
    title: "About Us",
    firstName: "",
    LastName: "",
    btnText: "Search",
    image: Hero_person3,
    hero_content: [
      {
        count: "100+",
        text: "Clients Trust our Services ",
      },
    ],
  },
  split: [
    {
      title: "History",
      detail: "Founded five years ago, our company has revolutionized the way people access weather reports worldwide. With users in over 100 countries, we've become a trusted source for accurate and timely weather information. Our journey began with a vision to provide comprehensive forecasts tailored to individual needs. Over the years, we've expanded our services, incorporating cutting-edge technology and expert analysis to deliver reliable weather updates to millions of users worldwide.",
      image: split1,
      leftRight:false,
    },
    {
      title: "About Us",
      detail: "At Weather app, we are passionate about delivering accurate and reliable weather information to people around the globe. With over five years of experience, we have established ourselves as a leading provider of weather reports, serving users in more than 100 countries. \nOur mission is to empower individuals and businesses with the insights they need to make informed decisions based on weather conditions. Whether you're planning a trip, organizing an outdoor event, or managing operations for your business, our comprehensive forecasts and intuitive tools are here to help.",
      image: split2,
      leftRight:true,
    }
  ],
  search: {
    title: "Search",
    detail: "",
    image: search1,
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [

      {
        name: "React js",
        para: "React is Declarative UI",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Node js an async Server-Side JS",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "A Fast & Flexible API Builder",
        logo: erpressjs,
      },
      {
        name: "MongoDB",
        para: "NoSQL & Scalable DataBase",
        logo: MongoDB,
      },
      {
        name: "Azure",
        para: "Azure DevOps Pipeline",
        logo: Azure,
      },
      {
        name: "AWS",
        para: "Amazon Web Services is Serverless Deploy",
        logo: AWS,
      },
      {
        name: "Laravel",
        para: "PHP Web Framework with Elegant MVC Design",
        logo: Laravel,
      },
      {
        name: "PHP",
        para: "Open-source & Dynamic",
        logo: PHP,
      },
      {
        name: "MySQL",
        para: "Relational Database Management System",
        logo: MySQL,
      },
      {
        name: "Figma",
        para: "Prototyping Platform",
        logo: figma,
      },
      {
        name: "Adobe Photoshop",
        para: "Image Editing Powerhouse ",
        logo: ps,
      },
      // {
      //   name: "Python",
      //   para: "Data Science Powerhouse",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Search By ",
    service_content: [
      {
        title: "Country",
        para: "Instantly uncover weather conditions across the globe! Simply enter a country name, and our app will fetch real-time weather data.",
        logo: services_logo2,
      },
      {
        title: "City",
        para: "Zip through the world's weather! Enter any city, and we'll show you current conditions.",
        logo: services_logo1,
      },
      {
        title: "Area",
        para: "Pinpoint local weather! Enter your area (city, zip, etc.) for up-to-date conditions.",
        logo: services_logo3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "OUR CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Love this app! So easy to find the weather in any country before I travel. Makes planning a breeze!”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Finally, an app that tells me the weather for any country without a ton of clicks. Simple and effective!”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“This app is my go-to for checking the current weather in any city. Super accurate and saves me tons of time!”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“No more scrambling through websites! This app gives me instant weather updates for my city. Perfect for planning my day.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shaikthoufeeq@gmail.com",
        icon: GrMail,
        link: "mailto:shaikthoufeeq@gmail.com",
      },
      {
        text: "+44 20 7123 4567",
        icon: MdCall,
        link: "https://wa.me/+44 20 7123 4567.?text=I want to you to create a Web for me",
      },
      {
        text: "Shaik Thoufeeq",
        icon: BsInstagram,
        link: "https://www.instagram.com/shaikthoufeeq/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
