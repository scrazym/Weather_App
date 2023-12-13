// import { ChangeEvent } from "react";
import { SingleValue } from "react-select";
import AsyncSelect from "react-select/async";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { changeCityName } from "redux/weatherSlice";

import { StateOption } from "./data";
// import { fetchSearchRes } from "./getSearchRes";

export const Select = () => {
  const stateOptions = useAppSelector(
    (state) => state.searchResult.searchResult
  );
  console.log(stateOptions, "Options");
  const filterCity = (inputValue: string) => {
    return stateOptions.filter(
      (i) => i.label?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<StateOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterCity(inputValue));
      }, 100);
    });
  const dispatch = useAppDispatch();
  //   const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     if (event.target.value) {
  //       dispatch(fetchSearchRes(event.target.value));
  //     }
  //   };
  const changeCity = (props: SingleValue<StateOption>) => {
    if (props) {
      dispatch(changeCityName(props.value));
    }
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      //   onKeyDown={handleClick}
      onChange={changeCity}
    />
  );
};
