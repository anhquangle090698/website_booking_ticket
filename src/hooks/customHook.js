import { useEffect, useState } from 'react';

export const useShowLoading = (timeout) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalTimer = setTimeout(() => {
      setLoading(false);
    }, timeout);

    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  return loading;
};

export const useShowTimeOut = (timeInit, interval) => {
  const [timer, setTimer] = useState(timeInit);

  useEffect(() => {
    let intervalTimer;

    if (timer > 0) {
      intervalTimer = setInterval(() => {
        setTimer(timer - 1);
      }, interval);
    } else {
      clearInterval(intervalTimer);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  });

  return timer;
};
