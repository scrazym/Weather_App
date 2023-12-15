// import { Component } from "react";
import Slider from "react-slick";
import { useAppSelector } from "hooks/reduxHooks";

import Card from "components/card/Card";
import Spinner from "components/spinner/Spinner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.scss";

export const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const hours = useAppSelector((state) => state.weather);
  const { loading, CurrentHoursWeather } = hours;
  const items = CurrentHoursWeather.length
    ? CurrentHoursWeather.map((hour, i) => {
        return (
          <Card key={i} src={hour.icon} time={hour.time} temp={hour.temp_C} />
        );
      })
    : null;
  const cards = loading ? <Spinner /> : items;
  return (
    <div className="slider">
      <Slider {...settings}>{cards}</Slider>
    </div>
  );
};
