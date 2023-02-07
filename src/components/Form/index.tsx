import React, { SetStateAction } from 'react';

interface FormProps {
  tipPercentage: number;
  setTipPercentage: React.Dispatch<SetStateAction<number>>;
  numberOfPeople: number;
  setNomberOfPeople: React.Dispatch<SetStateAction<number>>;
  bill: string;
  setBill: React.Dispatch<SetStateAction<string>>;
}

const percentageList = [5, 10, 15, 20, 30];

const Form = ({
  tipPercentage,
  setTipPercentage,
  bill,
  setBill,
  numberOfPeople,
  setNomberOfPeople,
}: FormProps) => {
  const handleSetTipPercentage = (value: number) => {
    if (value && value >= 0 && value <= 100) {
      setTipPercentage(value);
    } else {
      setTipPercentage(0);
    }
  };
  const handleSetBill: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setBill(e.target.value);
  };
  const handleNumberOfPeople = (value: number) => {
    if (value && value >= 0) {
      setNomberOfPeople(value);
    } else {
      setNomberOfPeople(1);
    }
  };

  return (
    <section className="container-form">
      <div>
        <label htmlFor="bill">Bill</label>
        <Input
          id="bill"
          name="bill"
          icon="/images/icon-dollar.svg"
          value={bill}
          onChange={handleSetBill}
          placeholder="0"
        />
      </div>
      <div>
        <label htmlFor="percent">Select Tip % </label>
        <div className="percentTip">
          {percentageList.map((percentageOption) => (
            <PercentageButton
              key={percentageOption}
              value={percentageOption}
              current={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          ))}

          <Input
            placeholder="Custom"
            onChange={(e) =>
              handleSetTipPercentage(parseInt(e.target.value, 10))
            }
          />
        </div>
      </div>
      <div>
        <label htmlFor="numberOfPeople">Number of People</label>
        <Input
          name="numberOfPeople"
          icon="/images/icon-person.svg"
          id="Number of People"
          value={numberOfPeople}
          type="number"
          step={1}
          onChange={(e) => handleNumberOfPeople(parseInt(e.target.value, 10))}
        />
      </div>
    </section>
  );
};

export default Form;

interface PercentageButtonProps {
  value: number;
  current: number;
  setTipPercentage: React.Dispatch<SetStateAction<number>>;
}
const PercentageButton = ({
  value,
  current,
  setTipPercentage,
}: PercentageButtonProps) => {
  return (
    <button
      className={value === current ? 'active' : ''}
      onClick={() => setTipPercentage(value)}
    >
      {value}%
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const Input = ({ icon = '', ...options }: InputProps) => {
  return (
    <div className="input">
      {icon && <img src={icon} alt="dollars icon" />}

      <input {...options} />
    </div>
  );
};
