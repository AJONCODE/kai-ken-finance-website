import { useEffect, useState } from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p className='text-wordings-white'>{value}</p>
        <span className='text-wordings-white'>{type}</span>
      </div>
    );
  };

export default function Countdown({ customDate }) {

  const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = useCountdown(customDate);

  if (days + hours + minutes + seconds <= 0) {
    return <></>;
  } else {
    return (
      <div className='countdown'>
        <div className="show-counter bg-gradient-to-r from-primary-red to-comp-orange">
          <p className="mt-0 md:mt-[2px] md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center md:text-left">
            <span className="bg-clip-text">
              🚀 Countdown to Public sale details 🚀
            </span>
          </p>
          <div
            className="countdown-link"
          >
            <DateTimeDisplay value={days} type={'Days'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          </div>
        </div>
      </div>
    );
  }
}