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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
