interface DisplayProps {
  amount: number;
  total: number;
  reset: () => void;
}

const Display = ({ amount, total, reset }: DisplayProps) => {
  return (
    <section className="container-display">
      <div className="resume">
        <div>
          Tip Amount
          <span>/ person</span>
        </div>
        <p>${amount.toFixed(2)}</p>
      </div>
      <div className="resume">
        <div>
          Total
          <span>/ person</span>
        </div>
        <p>${total.toFixed(2)}</p>
      </div>
      <button className="resetButton" onClick={reset}>
        reset
      </button>
    </section>
  );
};

export default Display;
