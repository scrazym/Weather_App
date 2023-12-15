import { SingleValue } from "react-select";
import AsyncSelect from "react-select/async";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { StateOption } from "redux/searchSlice";
import { changeCityName } from "redux/weatherSlice";

import { fetchSearchRes } from "./getSearchRes";

import "./select.scss";

export const Selectw = () => {
  const stateOptions = useAppSelector(
    (state) => state.searchResult.searchResult
  );
  const filterCity = (inputValue: string) => {
    console.log(inputValue, "Filter");

    return stateOptions.filter(
      (i) => i.label?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<StateOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterCity(inputValue));
      }, 1000);
    });
  const dispatch = useAppDispatch();
  const handleKeyDown = (inputValue: string) => {
    console.log(inputValue);
    if (inputValue.length) {
      console.log(inputValue);

      dispatch(fetchSearchRes(inputValue));
    }
  };

  const changeCity = (inputValue: SingleValue<StateOption>) => {
    if (inputValue) {
      dispatch(changeCityName(inputValue.name));
    }
  };

  return (
    <div className="select">
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onInputChange={handleKeyDown}
        onChange={changeCity}
      />
    </div>
  );
};
