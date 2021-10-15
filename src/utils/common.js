// Handle logic number chair booking
// Param (string) id Id chair
// Return string: '01' -> A01, '17' -> B01
export const logicNumberChairTicket = (numberChair) => {
  return numberChair < 17
    ? `A${logicNumberChair(numberChair)}`
    : numberChair < 33
    ? `B${logicNumberChair(numberChair)}`
    : numberChair < 49
    ? `C${logicNumberChair(numberChair)}`
    : numberChair < 65
    ? `D${logicNumberChair(numberChair)}`
    : numberChair < 81
    ? `E${logicNumberChair(numberChair)}`
    : numberChair < 97
    ? `F${logicNumberChair(numberChair)}`
    : numberChair < 113
    ? `G${logicNumberChair(numberChair)}`
    : numberChair < 129
    ? `H${logicNumberChair(numberChair)}`
    : numberChair < 145
    ? `I${logicNumberChair(numberChair)}`
    : numberChair < 161
    ? `J${logicNumberChair(numberChair)}`
    : '';
};

//Handle id chair transform number chair 
//Param (string) id Id chair
// Return string: '01' -> 01, '18' -> 02
export const logicNumberChair = (numberChair) => {
  return numberChair % 16 === 1
    ? '01'
    : numberChair % 16 === 2
    ? '02'
    : numberChair % 16 === 3
    ? '03'
    : numberChair % 16 === 4
    ? '04'
    : numberChair % 16 === 5
    ? '05'
    : numberChair % 16 === 6
    ? '06'
    : numberChair % 16 === 7
    ? '07'
    : numberChair % 16 === 8
    ? '08'
    : numberChair % 16 === 9
    ? '09'
    : numberChair % 16 === 10
    ? '10'
    : numberChair % 16 === 11
    ? '11'
    : numberChair % 16 === 12
    ? '12'
    : numberChair % 16 === 13
    ? '13'
    : numberChair % 16 === 14
    ? '14'
    : numberChair % 16 === 15
    ? '15'
    : numberChair % 16 === 0
    ? '16'
    : '';
};

//Transform second to minutes : second
//Param (number) d Second 
//Return string: 300 -> '5:00'
export const secondsToHms = (d) => {
  d = Number(d);

  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const minute = m < 10 ? `0${m}` : m;
  const second = s < 10 ? `0${s}` : s;
  return `${minute}:${second}`;
};

//Create star on background sign
//Param: none
//Return array
export const renderStars = () => {
  const contentStar = [];

  for (let index = 0; index < 500; index++) {
    let x = Math.floor(Math.random() * 1900);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10 + 5;
    let delay = Math.random() * 10;
    let size = Math.random() * 2 + 1;

    contentStar.push(
      <span
        className="sign__star"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
        key={index}
      ></span>
    );
  }

  return contentStar;
};

//Convert VND to USD
//Param (number) money
//Return number -> 1,000 VND = 0.04 USD
export const convertVndToUsd = (money) => {
  return  Number.parseFloat(money / 22821).toFixed(2);
}