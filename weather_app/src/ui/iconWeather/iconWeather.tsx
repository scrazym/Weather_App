import clearDay from "./assets/day/clear-day.svg";
import cloudy from "./assets/day/cloudy.svg";
import extremeDrizleDay from "./assets/day/extreme-day-drizzle.svg";
import heavyHailDay from "./assets/day/extreme-day-hail.svg";
import heavyRainDay from "./assets/day/extreme-day-rain.svg";
import heavySleetDay from "./assets/day/extreme-day-sleet.svg";
import heavySnowDay from "./assets/day/extreme-day-snow.svg";
import fogDay from "./assets/day/fog-day.svg";
import mist from "./assets/day/mist.svg";
import overcastDay from "./assets/day/overcast-day.svg";
import partyCloudDay from "./assets/day/partly-cloudy-day.svg";
import partyDreezleDay from "./assets/day/partly-cloudy-day-drizzle.svg";
import hailDay from "./assets/day/partly-cloudy-day-hail.svg";
import partyRainDayPos from "./assets/day/partly-cloudy-day-rain.svg";
import partySleetDayPos from "./assets/day/partly-cloudy-day-sleet.svg";
import partySnowDayPos from "./assets/day/partly-cloudy-day-snow.svg";
import thunderStormDay from "./assets/day/thunderstorms-day.svg";
import heavyRainThundDay from "./assets/day/thunderstorms-day-extreme-rain.svg";
import heavySnowThundDay from "./assets/day/thunderstorms-day-extreme-snow.svg";
import lightRainThundDay from "./assets/day/thunderstorms-day-overcast-rain.svg";
import lightSnowThundDay from "./assets/day/thunderstorms-day-snow.svg";
import fog from "./assets/fog.svg";
import clearNight from "./assets/night/clear-night.svg";
import extremeDrizleNight from "./assets/night/extreme-night-drizzle.svg";
import heavyHailNight from "./assets/night/extreme-night-hail.svg";
import heavyRainNight from "./assets/night/extreme-night-rain.svg";
import heavySleetNight from "./assets/night/extreme-night-sleet.svg";
import heavySnowNight from "./assets/night/extreme-night-snow.svg";
import fogNight from "./assets/night/fog-night.svg";
import overcastNight from "./assets/night/overcast-night.svg";
import partyCloudNight from "./assets/night/partly-cloudy-night.svg";
import partyDreezleNight from "./assets/night/partly-cloudy-night-drizzle.svg";
import hailNight from "./assets/night/partly-cloudy-night-hail.svg";
import partyRainNightPos from "./assets/night/partly-cloudy-night-rain.svg";
import partySleetNightPos from "./assets/night/partly-cloudy-night-sleet.svg";
import partySnowNightPos from "./assets/night/partly-cloudy-night-snow.svg";
import thunderStormNight from "./assets/night/thunderstorms-night.svg";
import heavyRainThundNight from "./assets/night/thunderstorms-night-extreme-rain.svg";
import heavySnowThundNight from "./assets/night/thunderstorms-night-extreme-snow.svg";
import lightRainThundNight from "./assets/night/thunderstorms-night-overcast-rain.svg";
import lightSnowThundNight from "./assets/night/thunderstorms-night-snow.svg";
import lightRain from "./assets/rain.svg";
import snowflake from "./assets/snowflake.svg";

import "./iconWeather.scss";
interface IIconWeatherProps {
  className: string;
  condition: string;
  time: string;
}
const IconWeather = ({ className, condition, time }: IIconWeatherProps) => {
  const getIcon = () => {
    switch (time) {
      case "08":
      case "09":
      case "10":
      case "11":
      case "12":
      case "13":
      case "14":
      case "15":
      case "16":
      case "17":
      case "18":
      case "19":
      case "20":
        switch (condition) {
          case "Sunny":
          case "Clear":
            return clearDay;
          case "Partly cloudy":
            return partyCloudDay;
          case " Cloudy":
            return cloudy;
          case "Overcast":
            return overcastDay;
          case "Mist":
            return mist;
          case "Patchy rain possible":
          case "Patchy light rain":
          case "Light freezing rain":
          case "Light rain shower":
            return partyRainDayPos;
          case "Patchy snow possibles":
          case "Patchy light snow":
          case "Light snow":
          case "Moderate snow":
          case "Light snow showers":
          case "Patchy moderate snow":
            return partySnowDayPos;
          case "Patchy sleet possible":
          case "Light sleet":
          case "Light sleet showers":
            return partySleetDayPos;
          case "Patchy freezing drizzle possible":
          case "Patchy light drizzle":
          case "Light drizzle":
          case "Freezing drizzle":
            return partyDreezleDay;
          case "Thundery outbreaks possible":
            return thunderStormDay;
          case "Blowing snow":
          case "Blizzard":
            return snowflake;
          case "Fog":
            return fog;
          case "Freezing fog":
            return fogNight;
          case "Heavy freezing drizzle":
            return extremeDrizleDay;
          case "Light rain":
          case "Moderate rain at times":
          case "Moderate rain":
            return lightRain;
          case "Heavy rain at times":
          case "Heavy rain":
          case "Moderate or heavy freezing rain":
          case "Moderate or heavy rain shower":
          case "Torrential rain shower":
            return heavyRainDay;
          case "Moderate or heavy sleet":
          case "Moderate or heavy sleet showers":
            return heavySleetDay;
          case "Patchy heavy snow":
          case "Heavy snow":
          case "Moderate or heavy snow showers":
            return heavySnowDay;
          case "Ice pellets":
          case "Light showers of ice pellets":
            return hailDay;
          case "Moderate or heavy showers of ice pellets":
            return heavyHailDay;
          case "Patchy light rain with thunder":
            return lightRainThundDay;
          case "Moderate or heavy rain with thunder":
            return heavyRainThundDay;
          case "Patchy light snow with thunder":
            return lightSnowThundDay;
          case "Moderate or heavy snow with thunder":
            return heavySnowThundDay;

          default:
            return "../";
        }
      case "21":
      case "22":
      case "23":
      case "00":
      case "01":
      case "02":
      case "03":
      case "04":
      case "05":
      case "06":
      case "07":
        switch (condition) {
          case "Clear":
            return clearNight;
          case "Partly cloudy":
            return partyCloudNight;
          case "Cloudy":
            return cloudy;
          case "Overcast":
            return overcastNight;
          case "Mist":
            return mist;
          case "Patchy rain possible":
          case "Patchy light rain":
          case "Light freezing rain":
          case "Light rain shower":
            return partyRainNightPos;
          case "Patchy snow possibles":
          case "Patchy light snow":
          case "Light snow":
          case "Moderate snow":
          case "Light snow showers":
          case "Patchy moderate snow":
            return partySnowNightPos;
          case "Patchy sleet possible":
          case "Light sleet":
          case "Light sleet showers":
            return partySleetNightPos;
          case "Patchy freezing drizzle possible":
          case "Patchy light drizzle":
          case "Light drizzle":
          case "Freezing drizzle":
            return partyDreezleNight;
          case "Thundery outbreaks possible":
            return thunderStormNight;
          case "Blowing snow":
          case "Blizzard":
            return snowflake;
          case "Fog":
            return fog;
          case "Freezing fog":
            return fogDay;
          case "Heavy freezing drizzle":
            return extremeDrizleNight;
          case "Light rain":
          case "Moderate rain at times":
          case "Moderate rain":
            return lightRain;
          case "Heavy rain at times":
          case "Heavy rain":
          case "Moderate or heavy freezing rain":
          case "Moderate or heavy rain shower":
          case "Torrential rain shower":
            return heavyRainNight;
          case "Moderate or heavy sleet":
          case "Moderate or heavy sleet showers":
            return heavySleetNight;
          case "Patchy heavy snow":
          case "Heavy snow":
          case "Moderate or heavy snow showers":
            return heavySnowNight;
          case "Ice pellets":
          case "Light showers of ice pellets":
            return hailNight;
          case "Moderate or heavy showers of ice pellets":
            return heavyHailNight;
          case "Patchy light rain with thunder":
            return lightRainThundNight;
          case "Moderate or heavy rain with thunder":
            return heavyRainThundNight;
          case "Patchy light snow with thunder":
            return lightSnowThundNight;
          case "Moderate or heavy snow with thunder":
            return heavySnowThundNight;

          default:
            return "../";
        }
    }
  };
  return (
    <div className={className}>
      <img src={getIcon()} alt={condition} />
    </div>
  );
};

export default IconWeather;
