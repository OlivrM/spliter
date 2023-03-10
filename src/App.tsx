import { useEffect, useState } from 'react';
import './App.scss';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNomberOfPeople] = useState(1);
  const [bill, setBill] = useState('');

  const reset = () => {
    setTipPercentage(0);
    setNomberOfPeople(1);
    setBill('');
    setTotal(0);
    setAmount(0);
  };

  useEffect(() => {
    if (numberOfPeople > 0 && +bill > 0) {
      const tiptotal = (+bill * tipPercentage) / 100;
      setAmount(tiptotal / numberOfPeople);
      setTotal(+bill / numberOfPeople + tiptotal / numberOfPeople);
    }
  }, [numberOfPeople, bill, tipPercentage]);

  return (
    <main className="App">
      <img src="/images/logo.svg" />
      <div className="container">
        <Form
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          numberOfPeople={numberOfPeople}
          setNomberOfPeople={setNomberOfPeople}
          bill={bill}
          setBill={setBill}
        />
        <Display amount={amount} total={total} reset={reset} />
      </div>
    </main>
  );
}

export default App;
