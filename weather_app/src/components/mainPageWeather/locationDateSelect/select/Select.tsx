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
  const handleClick = (inputValue: string) => {
    console.log(inputValue);
    if (inputValue.length > 1) {
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
        onInputChange={handleClick}
        onChange={changeCity}
      />
    </div>
  );
};

// export const Reselect = () => {
//   const dispatch = useAppDispatch();
//   const options = useAppSelector((state) => state.searchResult.searchResult);
//   console.log(options);
//   const changeCity = (event: ChangeEvent<HTMLSelectElement>) => {
//     const { value } = event.target;
//     console.log(value, "Name");

//     if (value) {
//       dispatch(changeCityName(value));
//     }
//   };
//   const handleClick = (event: KeyboardEvent<HTMLInputElement>) => {
//     const { target } = event;
//     const { value } = target;
//     if (value) {
//       dispatch(fetchSearchRes(value));
//     }
//   };
//   const opt = options.map((item, i) => {
//     return (
//       <option key={i} value={item.value}>
//         {item.name}
//       </option>
//     );
//   });
//   return (
//     <div>
//       <select onKeyDown={() => console.log("DOWN")} onChange={changeCity}>
//         {opt}
//       </select>
//       <form>
//         <input list="browsers" onKeyDown={handleClick} onChange={changeCity} />
//         <datalist id="browsers">{opt}</datalist>
//       </form>
//     </div>
//   );
// };
