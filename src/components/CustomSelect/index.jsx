import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDevList,
  setExchangeCurrency,
} from '../../features/devs/devSlice';
import './style.scss';
const CustomSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const { developer } = useSelector(selectDevList);
  const dispatch = useDispatch();

  const selectedCurrency = JSON.parse(localStorage.getItem('Dev-Currency'));
  console.log(selectedCurrency);

  useEffect(() => {
    dispatch(
      setExchangeCurrency(selectedCurrency || developer?.currencyList[0])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index, item) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
    dispatch(setExchangeCurrency(item));
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0
            ? selectedOption - 1
            : developer?.currencyList.length - 1
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption === developer?.currencyList.length - 1
            ? 0
            : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? 'expanded' : ''}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          <span>
            <img
              src={
                selectedCurrency?.flag_url ||
                developer?.currencyList[selectedOption]?.flag_url
              }
              height={24}
              width={24}
              alt="flag"
            />
          </span>
          <span>
            {selectedCurrency?.name ||
              developer?.currencyList[selectedOption]?.name}
          </span>
        </button>
        <ul
          className={`options ${isOptionsOpen ? 'show' : ''}`}
          role="listbox"
          aria-activedescendant={developer?.currencyList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {developer?.currencyList?.map((option, index) => (
            <li
              key={option?.name}
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index, option);
              }}
            >
              <span>
                <img
                  height={24}
                  width={24}
                  src={option.flag_url}
                  alt="flag_url"
                />
              </span>
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
