import React from 'react';
import forest from 'assets/images/forest.png';
import SignUp from 'features/Login/components/SignUp';
import SignIn from 'features/Login/components/SignIn';
import appStore from 'assets/images/app-store-badge.png';
import googlePlay from 'assets/images/google-play-store.png';

function Sign(props) {
  // const user = useSelector(state => state.login.informationUser);
  // console.log('user', user);

  const stars = () => {
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

  return (
    <div className="sign">
      {stars()}
      <div className="sign__moon"></div>
      <img className="sign__forest" src={forest} alt={forest}></img>
      <div className="sign__main">
        <div className="sign__mobile">
          <h4 className="sign__alert">Vui lòng tải ứng dụng để đăng nhập</h4>
          <div className="sign__store">
            <a href="#">
              <img src={appStore} alt={appStore} className="sign__image" />
            </a>
            <a href="#">
              <img src={googlePlay} alt={googlePlay} className="sign__image" />
            </a>
          </div>
        </div>
        <div className="sign__box" id="sign__box">
          <div className="sign__container sign__up">
            <div className="sign__form">
              <h3 className="sign__title sign__title--black">Đăng Ký</h3>
              <div className="sign__block-social">
                <a href="1" className="sign__social sign__social--facebook">
                  {' '}
                  <i className="fab fa-facebook-f"></i>{' '}
                </a>
                <a href="2" className="sign__social sign__social--google">
                  {' '}
                  <i className="fab fa-google-plus-g"></i>{' '}
                </a>
                <a href="3" className="sign__social sign__social--linked">
                  {' '}
                  <i className="fab fa-linkedin-in"></i>{' '}
                </a>
              </div>

              <SignUp></SignUp>
            </div>
          </div>
          <div className="sign__container sign__in">
            <div className="sign__form">
              <h3 className="sign__title sign__title--black">Đăng Nhập</h3>
              <div className="sign__block-social">
                <a href="1" className="sign__social sign__social--facebook">
                  {' '}
                  <i className="fab fa-facebook-f"></i>{' '}
                </a>
                <a href="2" className="sign__social sign__social--google">
                  {' '}
                  <i className="fab fa-google-plus-g"></i>{' '}
                </a>
                <a href="3" className="sign__social sign__social--linked">
                  {' '}
                  <i className="fab fa-linkedin-in"></i>{' '}
                </a>
              </div>

              <SignIn></SignIn>
            </div>
          </div>
          <div className="sign__container-overlay">
            <div className="sign__overlay">
              <div className="sign__panel sign__panel--left">
                <h3 className="sign__title">Chào Mừng Trở Lại!</h3>
                <p className="sign__text">Đăng nhập để mua vé và nhận nhiều ưu đãi từ G2 Cinema.</p>
                <button
                  className="sign__button"
                  id="button__signIn"
                  onClick={() => {
                    document.getElementById('sign__box').classList.remove('right-panel-active');
                  }}
                >
                  Đăng Nhập
                </button>

                <svg
                  className="svg-left"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4230.01"
                  height="2402.81"
                  viewBox="0 0 4230.01 2402.81"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Слой_1" data-name="Слой 1">
                      <g id="ROAD">
                        <polygon
                          points="1110.58 1833.55 105.7 2402.45 4112.34 2402.45 2711.04 1828.71 1110.58 1833.55"
                          fill="#cee4ed"
                        />
                        <line
                          x1="940.92"
                          y1="1880.2"
                          x2="27.05"
                          y2="2391.55"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="4212.96"
                          y1="2399.45"
                          x2="3017.08"
                          y2="1924.17"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                      <g id="BUILDING">
                        <path
                          d="M3964.23,1055.24v702H2528.77V791a66.56,66.56,0,0,1,66.55-66.56h295.87V353.2h598.73v702Z"
                          fill="#cee4ed"
                        />
                        <rect x="2662.98" y="961.71" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2702.07" y="961.71" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2662.98" y="999.36" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2702.07" y="999.36" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2805.78" y="961.71" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="2844.88" y="961.71" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="2805.78" y="999.36" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="2844.88" y="999.36" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="2805.78" y="1093.61" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2844.88" y="1093.61" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2805.78" y="1131.26" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2844.88" y="1131.26" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2662.98" y="816.72" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2702.07" y="816.72" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2662.98" y="854.37" width="26.47" height="26.47" fill="#fff" />
                        <rect x="2702.07" y="854.37" width="26.47" height="26.47" fill="#fff" />
                        <rect x="3489.92" y="353.2" width="174.52" height="702.04" fill="#98c8db" />
                        <line
                          x1="3489.92"
                          y1="1021.44"
                          x2="3964.23"
                          y2="1021.44"
                          fill="none"
                          stroke="#cee4ed"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                        <circle cx="3715.92" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3671.16" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3715.92" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3760.68" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3805.44" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3850.2" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3894.96" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1193.32" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1153.63" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1233.01" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1272.71" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1313.05" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1352.75" r="6.77" fill="#fff" />
                        <circle cx="3537.2" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3581.96" cy="1392.44" r="6.77" fill="#fff" />
                        <circle cx="3626.73" cy="1392.44" r="6.77" fill="#fff" />
                        <line
                          x1="783.25"
                          y1="1044.31"
                          x2="379.82"
                          y2="1262.34"
                          fill="none"
                          stroke="#cee4ed"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                        <path
                          d="M1648.15,594V1837.17H379.82v-541l403.43-218V848.81a56.46,56.46,0,0,1,56.46-56.46h457.73V594Z"
                          fill="#cee4ed"
                        />
                        <circle cx="1405.66" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1360.9" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1450.42" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1495.18" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1539.94" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1584.7" cy="709.05" r="6.77" fill="#fff" />
                        <circle cx="1405.66" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1360.9" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1450.42" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1495.18" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1539.94" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1584.7" cy="669.36" r="6.77" fill="#fff" />
                        <circle cx="1405.66" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1360.9" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1450.42" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1495.18" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1539.94" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1584.7" cy="748.75" r="6.77" fill="#fff" />
                        <circle cx="1360.9" cy="788.44" r="6.77" fill="#fff" />
                        <circle cx="1405.66" cy="788.44" r="6.77" fill="#fff" />
                        <circle cx="1450.42" cy="788.44" r="6.77" fill="#fff" />
                        <circle cx="1495.18" cy="788.44" r="6.77" fill="#fff" />
                        <circle cx="1539.94" cy="788.44" r="6.77" fill="#fff" />
                        <circle cx="1584.7" cy="788.44" r="6.77" fill="#fff" />
                        <line
                          x1="1293.94"
                          y1="572.41"
                          x2="1648.15"
                          y2="572.41"
                          fill="none"
                          stroke="#cee4ed"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                        <rect x="539.69" y="1292.55" width="26.47" height="26.47" fill="#fff" />
                        <rect x="578.79" y="1292.55" width="26.47" height="26.47" fill="#fff" />
                        <rect x="539.69" y="1330.2" width="26.47" height="26.47" fill="#fff" />
                        <rect x="578.79" y="1330.2" width="26.47" height="26.47" fill="#fff" />
                        <rect x="539.69" y="1429.36" width="26.47" height="26.47" fill="#fff" />
                        <rect x="578.79" y="1429.36" width="26.47" height="26.47" fill="#fff" />
                        <rect x="539.69" y="1467.01" width="26.47" height="26.47" fill="#fff" />
                        <rect x="578.79" y="1467.01" width="26.47" height="26.47" fill="#fff" />
                        <rect x="739.18" y="1292.55" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="778.28" y="1292.55" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="739.18" y="1330.2" width="26.47" height="26.47" fill="#ffc200" />
                        <rect x="778.28" y="1330.2" width="26.47" height="26.47" fill="#ffc200" />
                      </g>
                      <g id="BUS">
                        <g id="BUS-2" data-name="BUS">
                          <path
                            d="M1763.68,937.32v843.46a58,58,0,0,1-58,58H1018.46a58,58,0,0,1-58-58V937.32a58,58,0,0,1,58-58h687.22A58,58,0,0,1,1763.68,937.32Z"
                            fill="#90bdd1"
                          />
                          <path
                            d="M1746.24,1041.87v402.91l-42.09,46.7a166,166,0,0,1-123.31,54.86H1143.3A166,166,0,0,1,1020,1491.48l-42.08-46.7V1041.87a39.06,39.06,0,0,1,39.06-39.06h690.21A39.06,39.06,0,0,1,1746.24,1041.87Z"
                            fill="#a74602"
                          />
                          <rect
                            x="1220.21"
                            y="910.47"
                            width="283.73"
                            height="43.26"
                            rx="14.85"
                            fill="#fff"
                          />
                        </g>
                        <g id="WHEELS">
                          <path
                            d="M1030.13,1838.77h124a0,0,0,0,1,0,0v72a32.63,32.63,0,0,1-32.63,32.63h-58.71a32.63,32.63,0,0,1-32.63-32.63v-72A0,0,0,0,1,1030.13,1838.77Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="1030.13 1853.36 1030.13 1838.77 1154.09 1838.77 1154.09 1875.16 1030.13 1853.36"
                            fill="#1a0c12"
                          />
                          <path
                            d="M1565.37,1838.77h124a0,0,0,0,1,0,0v72a32.63,32.63,0,0,1-32.63,32.63H1598a32.63,32.63,0,0,1-32.63-32.63v-72A0,0,0,0,1,1565.37,1838.77Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="1565.37 1853.36 1565.37 1838.77 1689.34 1838.77 1689.34 1875.16 1565.37 1853.36"
                            fill="#1a0c12"
                          />
                        </g>
                        <g id="PEOPLE">
                          <path
                            d="M1244.51,1272.29V1255.1a14.16,14.16,0,0,1,14.12-14.12h6.66a14.16,14.16,0,0,1,14.12,14.12v17.19a14.16,14.16,0,0,1-14.12,14.12h-6.66A14.16,14.16,0,0,1,1244.51,1272.29Z"
                            fill="#59221d"
                          />
                          <path
                            d="M1632.44,1282.22h113.79v162.56l-42.08,46.69a166,166,0,0,1-106.36,54v.87H1143.3A166,166,0,0,1,1020,1491.47l-42.07-46.69V1285.84c19.05-13.38,45.51-13.44,58.88-7.59,18.69,8.15,11.85-33.92,41.55-40.64,19.87-4.5,25.63,9.76,40,2.91,9.8-4.67,15.35-22,33.35-22,13.37,0,15.35,10.47,15.35,10.47l2.86,21.72a7.13,7.13,0,0,1-4.16,7.61,16.47,16.47,0,0,1-8,1.41v24.52l-.32.11h30.74a60.16,60.16,0,0,1,60.08,57h30.58l16-30.21v-8.41c0-9.18,8.86-16.61,19.8-16.61h6.92c8.39,0,15.18,5.7,15.18,12.73V1318c0,5-4.14,9.26-9.72,10.39l.1,13h45v-37.32a53.77,53.77,0,0,1,53.77-53.77h32.45v-18.24h-4.1a13.53,13.53,0,0,1-13.53-13.53v-2.29h-2.84a1.92,1.92,0,0,1-1.79-2.62l7.57-22.55h0a10.18,10.18,0,0,1-.51-2.06c-.85-6.27,4.34-12.17,11.59-13.16,6.44-.87,12.34,2.4,14.19,7.53a9,9,0,0,1,3-1c5.55-.76,10.74,3.72,11.6,10a12.39,12.39,0,0,1-1.16,7.26l6,12,20.3,38.69H1544a53.79,53.79,0,0,1,52.66,42.82A63.82,63.82,0,0,1,1632.44,1282.22Z"
                            fill="#59221d"
                          />
                          <path
                            d="M1013.61,1225.56V1207.4a13.67,13.67,0,0,1,13.63-13.63h7.64a13.67,13.67,0,0,1,13.63,13.63v18.16a13.67,13.67,0,0,1-13.63,13.64h-7.64A13.67,13.67,0,0,1,1013.61,1225.56Z"
                            fill="#59221d"
                          />
                          <rect
                            x="1586.59"
                            y="1202.13"
                            width="34.9"
                            height="45.43"
                            rx="13.72"
                            fill="#59221d"
                          />
                        </g>
                        <g id="MIRRORS">
                          <path
                            d="M889.27,1096h38.17a9.82,9.82,0,0,1,9.82,9.82V1192a9.82,9.82,0,0,1-9.82,9.82h-48a0,0,0,0,1,0,0v-95.93A9.82,9.82,0,0,1,889.27,1096Z"
                            fill="#90bdd1"
                          />
                          <path
                            d="M960.47,1071.17H907.63a25.89,25.89,0,0,0-25.89,25.89v104.73"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M1786.88,1096h48a9.82,9.82,0,0,1,9.82,9.82V1192a9.82,9.82,0,0,1-9.82,9.82H1796.7a9.82,9.82,0,0,1-9.82-9.82V1096a0,0,0,0,1,0,0Z"
                            transform="translate(3631.58 2297.82) rotate(-180)"
                            fill="#90bdd1"
                          />
                          <path
                            d="M1763.68,1071.17h52.83a25.89,25.89,0,0,1,25.89,25.89v104.73"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                        </g>
                        <g id="HEADLAMPS">
                          <path
                            d="M1095.9,1715.88H960.47v-44.51h103.84a28.15,28.15,0,0,1,22.16,10.79l16,20.34A8.28,8.28,0,0,1,1095.9,1715.88Z"
                            fill="#fff"
                          />
                          <rect
                            x="977.12"
                            y="1730.85"
                            width="53.01"
                            height="28.34"
                            rx="9"
                            fill="#ffb600"
                          />
                          <circle
                            cx="1062.03"
                            cy="1745.02"
                            r="11.09"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M1628.24,1715.88h135.43v-44.51H1659.84a28.17,28.17,0,0,0-22.17,10.79l-15.94,20.34A8.27,8.27,0,0,0,1628.24,1715.88Z"
                            fill="#fff"
                          />
                          <rect
                            x="1694.02"
                            y="1730.85"
                            width="53.01"
                            height="28.34"
                            rx="9"
                            transform="translate(3441.04 3490.04) rotate(-180)"
                            fill="#ffb600"
                          />
                          <circle
                            cx="1662.11"
                            cy="1745.02"
                            r="11.09"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                        </g>
                        <g id="CONTOURS">
                          <line
                            x1="1572.56"
                            y1="1187.69"
                            x2="1666.61"
                            y2="1097.43"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1526.98"
                            y1="1231.43"
                            x2="1549.5"
                            y2="1209.82"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1322.06"
                            y1="1428.11"
                            x2="1476.36"
                            y2="1280.02"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1450.1"
                            y1="1245.64"
                            x2="1526.28"
                            y2="1172.53"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1198.1"
                            y1="1487.48"
                            x2="1421.06"
                            y2="1273.51"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <path
                            d="M1746.24,1041.87v402.91l-42.09,46.7a166,166,0,0,1-123.31,54.86H1143.3A166,166,0,0,1,1020,1491.48l-42.08-46.7V1041.87a39.06,39.06,0,0,1,39.06-39.06h690.21A39.06,39.06,0,0,1,1746.24,1041.87Z"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <path
                            d="M960.47,1649.21h102.39a57.21,57.21,0,0,1,45.41,22.42l23.49,30.68a70.06,70.06,0,0,0,55.6,27.45h349.42a70,70,0,0,0,55.6-27.45l23.5-30.68a57.18,57.18,0,0,1,45.4-22.42h102.39"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                        </g>
                      </g>
                      <g id="PINK_CAR" data-name="PINK CAR">
                        <g id="WHEELS-2" data-name="WHEELS">
                          <path
                            d="M2737.71,1920.23h124.63a0,0,0,0,1,0,0v91.18a26,26,0,0,1-26,26h-72.66a26,26,0,0,1-26-26v-91.18A0,0,0,0,1,2737.71,1920.23Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="2737.71 1936.03 2737.71 1923.5 2862.34 1923.5 2862.34 1963.28 2737.71 1936.03"
                            fill="#1a0c12"
                          />
                          <path
                            d="M2071.65,1920.23h124.63a0,0,0,0,1,0,0v91.18a26,26,0,0,1-26,26h-72.66a26,26,0,0,1-26-26v-91.18A0,0,0,0,1,2071.65,1920.23Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="2071.65 1936.03 2071.65 1923.5 2196.28 1923.5 2196.28 1963.28 2071.65 1936.03"
                            fill="#1a0c12"
                          />
                        </g>
                        <g id="MIRRORS-2" data-name="MIRRORS">
                          <rect x="2834.53" y="1454.54" width="20.02" height="7" fill="#59221d" />
                          <path
                            d="M2898.64,1384.75h47.23a10.84,10.84,0,0,1,10.84,10.84v28.56a37.39,37.39,0,0,1-37.39,37.39h-64.77a0,0,0,0,1,0,0v-32.7A44.09,44.09,0,0,1,2898.64,1384.75Z"
                            fill="#f5bbbb"
                          />
                          <rect x="2088.71" y="1454.54" width="20.02" height="7" fill="#59221d" />
                          <path
                            d="M1986.56,1384.75h64.77a37.39,37.39,0,0,1,37.39,37.39v28.56a10.84,10.84,0,0,1-10.84,10.84h-47.23a44.09,44.09,0,0,1-44.09-44.09v-32.7a0,0,0,0,1,0,0Z"
                            transform="translate(4075.28 2846.29) rotate(-180)"
                            fill="#f5bbbb"
                          />
                        </g>
                        <g id="CAR">
                          <path
                            d="M2900.56,1565a64.7,64.7,0,0,1,9.06,32.16,63.79,63.79,0,0,0-63.77-62.14H2091.08a63.67,63.67,0,0,0-52.47,27.52l64.3-101h736.3Z"
                            fill="#fed4c7"
                          />
                          <path
                            d="M2760.92,1193.46A46.74,46.74,0,0,0,2716.1,1160H2226a46.74,46.74,0,0,0-44.86,33.64l14.19-48.6a38.9,38.9,0,0,1,37.34-28h476.75a38.88,38.88,0,0,1,37.33,28Z"
                            fill="#f5bbbb"
                          />
                          <line
                            x1="2250.8"
                            y1="1117.02"
                            x2="2250.8"
                            y2="1090.77"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="2690.12"
                            y1="1117.02"
                            x2="2690.12"
                            y2="1090.77"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="2250.8"
                            y1="1104.99"
                            x2="2690.12"
                            y2="1104.99"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M2091.09,1535h754.77a63.79,63.79,0,0,1,63.79,63.79v266a0,0,0,0,1,0,0H2027.3a0,0,0,0,1,0,0v-266A63.79,63.79,0,0,1,2091.09,1535Z"
                            fill="#f5bbbb"
                          />
                          <path
                            d="M2744.51,1659.17h165.13v-50A20.14,20.14,0,0,0,2889.5,1589h-72.35a69.69,69.69,0,0,0-67,50.47Z"
                            fill="#fff"
                          />
                          <circle
                            cx="2863.92"
                            cy="1623.15"
                            r="26.16"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <circle cx="2806.9" cy="1611.16" r="12" fill="#f3b304" />
                          <path
                            d="M2192.43,1659.17H2027.3V1603a14,14,0,0,1,14-14h78.48a69.71,69.71,0,0,1,67,50.47Z"
                            fill="#fff"
                          />
                          <circle
                            cx="2068.95"
                            cy="1623.15"
                            r="26.16"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <circle cx="2129.24" cy="1611.16" r="12" fill="#f3b304" />
                          <rect
                            x="2271.75"
                            y="1575.95"
                            width="391.61"
                            height="126.23"
                            rx="26.14"
                            fill="#59221d"
                          />
                          <rect x="2298.81" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2326.52" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2354.23" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2381.93" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2437.35" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2409.64" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2465.06" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2492.76" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2520.47" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2548.18" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2575.88" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2603.59" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                          <rect x="2631.3" y="1575.95" width="5" height="126.23" fill="#f5bbbb" />
                        </g>
                        <g id="WINDSHIELD">
                          <path
                            d="M2839.21,1461.54h-736.3l78.25-267.93A46.72,46.72,0,0,1,2226,1160H2716.1a46.73,46.73,0,0,1,44.81,33.49L2746.77,1145Z"
                            fill="#59221d"
                          />
                          <path
                            d="M2673.8,1348c55.11,0,114.13,60.75,130,113.51l-301.85-.27c14.47-54.4,71.67-112.8,127.88-113.23l2.73-9.52c-12.56-1.09-22.66-7.71-23.36-23-.64-14,17.78-28.07,31.29-38.23s21-8,34.22-2.14,11.69,14.88,10,17.24c-5,19.1,13.9,17.86,9,32.68-2.56,7.72-11.65,9.35-19.77,9.13Z"
                            fill="#a74602"
                          />
                          <line
                            x1="2541.06"
                            y1="1393.61"
                            x2="2636.99"
                            y2="1301.54"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="2613.89"
                            y1="1273.39"
                            x2="2661.26"
                            y2="1227.93"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="2467.56"
                            y1="1413.83"
                            x2="2595.84"
                            y2="1290.71"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                        </g>
                        <rect
                          id="BUMPER"
                          x="2016.62"
                          y="1864.81"
                          width="902.7"
                          height="55.42"
                          rx="14.18"
                          fill="#fff"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                      <g id="TREES">
                        <path
                          d="M4019.48,318.22a166.52,166.52,0,0,1,13.9,66.69c0,97.53-84.3,176.6-188.28,176.6-98.57,0-179.45-71-187.61-161.51a135.46,135.46,0,0,1-97.4-18.37c-52.21,71.48-145.8,119.12-252.57,119.12-115.12,0-214.91-55.38-264.05-136.3-18.1,27.31-47.27,48.47-82.25,58.95,0,.84.06,1.68.06,2.53a53.42,53.42,0,0,1-106.84,0c0-1.56.07-3.11.21-4.64C2798.58,402,2759,354.69,2759,299.45c0-72.46,68.15-131.2,152.23-131.2,40.6,0,77.49,13.7,104.79,36C3041.62,88,3162.39,0,3307.52,0c118.85,0,221.37,59,268.68,144.26A135.24,135.24,0,0,1,3761,226.85a199.14,199.14,0,0,1,192.4,13.61,53.42,53.42,0,1,1,66.05,77.76Z"
                          fill="#f5bbbb"
                        />
                        <circle cx="2866.74" cy="334.22" r="11.74" fill="#a74602" />
                        <circle cx="2956.7" cy="250.37" r="11.74" fill="#a74602" />
                        <circle cx="2999.24" cy="280.8" r="11.74" fill="#a74602" />
                        <circle cx="3119.56" cy="250.37" r="11.74" fill="#a74602" />
                        <circle cx="3112.27" cy="345.96" r="11.74" fill="#a74602" />
                        <circle cx="3243.34" cy="310.74" r="11.74" fill="#a74602" />
                        <circle cx="3215.07" cy="353.2" r="11.74" fill="#a74602" />
                        <circle cx="3221.78" cy="154" r="11.74" fill="#a74602" />
                        <circle cx="3261.79" cy="131.19" r="11.74" fill="#a74602" />
                        <circle cx="3192.63" cy="97.5" r="11.74" fill="#a74602" />
                        <circle cx="3364.35" cy="215.65" r="11.74" fill="#a74602" />
                        <circle cx="3326.28" cy="402.39" r="11.74" fill="#a74602" />
                        <circle cx="3411.05" cy="839.97" r="11.74" fill="#a74602" />
                        <circle cx="3788.23" cy="177.47" r="11.74" fill="#a74602" />
                        <circle cx="2827.47" cy="446.25" r="11.74" fill="#a74602" />
                        <circle cx="3446.27" cy="93.76" r="11.74" fill="#a74602" />
                        <circle cx="3458" cy="148.49" r="11.74" fill="#a74602" />
                        <circle cx="3434.53" cy="310.74" r="11.74" fill="#a74602" />
                        <circle cx="3552.35" cy="250.37" r="11.74" fill="#a74602" />
                        <circle cx="3575.82" cy="280.8" r="11.74" fill="#a74602" />
                        <circle cx="3692.36" cy="203.91" r="11.74" fill="#a74602" />
                        <circle cx="3732.61" cy="420.84" r="11.74" fill="#a74602" />
                        <circle cx="3785.17" cy="395.12" r="11.74" fill="#a74602" />
                        <circle cx="3827.89" cy="478.66" r="11.74" fill="#a74602" />
                        <circle cx="3998.55" cy="269.07" r="11.74" fill="#a74602" />
                        <circle cx="3909.36" cy="364.93" r="11.74" fill="#a74602" />
                        <path
                          d="M3457.23,872.22h0V824.36c0-19.27,19.55-34.89,43.65-34.89h0V802.7C3500.88,830.08,3484.7,855.86,3457.23,872.22Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M3460,828.27h0a77.7,77.7,0,0,1-45.56-70.74V723.87h0A45.56,45.56,0,0,1,3460,769.43Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M3004.27,152.28c-.12.88-.27,1.76-.44,2.62a47.52,47.52,0,0,1-10.9-.27c-26.44-3.66-44.85-28.33-41.15-55.08.13-.88.27-1.76.44-2.62a48.08,48.08,0,0,1,10.9.26C2989.56,100.85,3008,125.52,3004.27,152.28Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M3574.41,442.45c.78.42,1.56.86,2.31,1.32a48.4,48.4,0,0,1-4,10.14c-12.56,23.54-42.07,32.32-65.9,19.61-.79-.42-1.56-.86-2.31-1.31a47.94,47.94,0,0,1,4-10.15C3521.07,438.52,3550.57,429.74,3574.41,442.45Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M3858.14,620.56c.79.42,1.56.85,2.31,1.31a47.86,47.86,0,0,1-4,10.14c-12.55,23.55-42.06,32.33-65.9,19.62-.78-.42-1.56-.86-2.31-1.32a48.4,48.4,0,0,1,4-10.14C3804.8,616.62,3834.31,607.85,3858.14,620.56Z"
                          fill="#f5bbbb"
                        />
                        <line
                          x1="3604.07"
                          y1="399.47"
                          x2="3604.07"
                          y2="1756.74"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3804.13,557.3S3770.07,704.17,3657.33,757a91.8,91.8,0,0,0-53.26,83"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3383.83,492.38s46.32,103.67,168.11,148.54a80,80,0,0,1,52.13,75.13"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3162.22,466.93v24.29a59.1,59.1,0,0,0,59.11,59.11h162a92.64,92.64,0,0,1,64,25.64"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3456.78,823.32v69.62a132.06,132.06,0,0,0,47.3,101.27l50.68,42.52a138,138,0,0,1,49.31,105.75"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="706.49"
                          y1="670.18"
                          x2="706.49"
                          y2="1829.88"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M944,728c-16.41,44.18-65.61,133.24-185.19,170.23a74.29,74.29,0,0,0-52.28,71"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M597.26,744s6.49,38,75.5,50.49c19,3.44,33.9,19.73,33.9,39"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M776.55,657.44V699A45.94,45.94,0,0,1,745,742.66l-10.3,3.4a40.61,40.61,0,0,0-27.92,38.58"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M1016.14,737.14v0A30.14,30.14,0,0,1,986,767.32H944.41a34.74,34.74,0,0,0-29.12,15.78"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M369.11,814.43c.84.24,1.68.5,2.5.79a47.53,47.53,0,0,1-1.77,10.62c-7.27,25.35-34,39.93-59.61,32.58-.85-.24-1.69-.5-2.51-.79A47.56,47.56,0,0,1,309.5,847C316.76,821.66,343.45,807.08,369.11,814.43Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M935.18,429.64a47.47,47.47,0,0,1,.21-10.77c3.51-26.14,27.81-44.43,54.26-40.88.87.12,1.74.26,2.59.42a47.47,47.47,0,0,1-.21,10.77c-3.51,26.14-27.81,44.43-54.26,40.88C936.9,429.94,936,429.8,935.18,429.64Z"
                          fill="#f5bbbb"
                        />
                        <path
                          d="M1150.61,590.8A147.95,147.95,0,0,1,856.24,612c-38.32,36.37-91.27,58.85-149.75,58.85a222.34,222.34,0,0,1-62.87-9c-6.87,32.54-23.56,62-47.24,85.9a104.62,104.62,0,0,1-201.3,56.63c-89.7-19.09-156.37-90.68-156.37-176.08,0-100,91.42-181.08,204.2-181.08a229.18,229.18,0,0,1,52.56,6.06c8.94-103.13,100-184.17,211-184.17,116.74,0,211.4,89.6,211.76,200.25A147.94,147.94,0,0,1,1150.61,590.8Z"
                          fill="#f5bbbb"
                        />
                        <circle cx="337.13" cy="673.7" r="11.02" fill="#a74602" />
                        <circle cx="357.3" cy="555.42" r="11.02" fill="#a74602" />
                        <circle cx="393.08" cy="577.45" r="11.02" fill="#a74602" />
                        <circle cx="505.99" cy="548.89" r="11.02" fill="#a74602" />
                        <circle cx="468.89" cy="706.75" r="11.02" fill="#a74602" />
                        <circle cx="622.13" cy="594.77" r="11.02" fill="#a74602" />
                        <circle cx="595.61" cy="634.61" r="11.02" fill="#a74602" />
                        <circle cx="623.33" cy="439.46" r="11.02" fill="#a74602" />
                        <circle cx="660.87" cy="418.06" r="11.02" fill="#a74602" />
                        <circle cx="595.98" cy="386.44" r="11.02" fill="#a74602" />
                        <circle cx="735.68" cy="516.31" r="11.02" fill="#a74602" />
                        <circle cx="738.91" cy="694.04" r="11.6" fill="#a74602" />
                        <circle cx="457.87" cy="407.04" r="11.6" fill="#a74602" />
                        <circle cx="812.55" cy="401.93" r="11.02" fill="#a74602" />
                        <circle cx="840.33" cy="447.18" r="11.02" fill="#a74602" />
                        <circle cx="801.53" cy="605.54" r="11.02" fill="#a74602" />
                        <circle cx="912.09" cy="548.89" r="11.02" fill="#a74602" />
                        <circle cx="934.12" cy="577.45" r="11.02" fill="#a74602" />
                        <circle cx="1043.47" cy="527.33" r="11.02" fill="#a74602" />
                        <circle cx="1004.05" cy="695.73" r="11.02" fill="#a74602" />
                        <circle cx="528.02" cy="818.19" r="11.02" fill="#a74602" />
                        <circle cx="313.73" cy="800.92" r="11.6" fill="#a74602" />
                      </g>
                      <g id="PLANTS">
                        <path
                          d="M4230,1715a171.14,171.14,0,0,1-6.18,45.68H3871.41a171.14,171.14,0,0,1-6.18-45.68c0-97.38,81.66-176.31,182.4-176.31S4230,1617.64,4230,1715Z"
                          fill="#ffc200"
                        />
                        <line
                          x1="3865.42"
                          y1="1695.48"
                          x2="3939.31"
                          y2="1762.35"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M4229.92,1709.57,4155.69,1684l-105.57,28.39v48.35h-5V1654.09l-79.27-96.71q2.31-1.12,4.67-2.19l74.6,91V1538.72h5v60.47l60-49.86q2.73,1,5.41,2l-65.4,54.35v101.48l171.21-46.05c.53,1.58,1,3.18,1.5,4.78l-58.92,15.85,65.76,22.46C4229.78,1706,4229.87,1707.78,4229.92,1709.57Z"
                          fill="#fff"
                        />
                        <path
                          d="M4138.91,1761.22l-1127.81-3.94s83.54-229.91,506.07-244.92c160.75-5.71,79.61,129.44,120.62,110.07,88.22-41.66,151.23-63.83,191.32-42.23,65.11,35.07-9.58,106.27,30.21,103.42s99.18-40,144-11.43-21.9,57.14,0,60S4137,1679.91,4138.91,1761.22Z"
                          fill="#98c8db"
                        />
                        <path
                          d="M879.6,1837.17H82.86c0-36.28,43.53-77.9,116-66.56a75.5,75.5,0,0,1-2.15-17.94c0-46.67,42.46-84.5,94.83-84.5a104.86,104.86,0,0,1,20.37,2A168.7,168.7,0,0,1,325,1636.79c43.82-84.42,149.7-118.31,236.5-75.69,72.37,35.52,108.63,113,93.28,186.68a160.15,160.15,0,0,1,145.61-2.31C840.11,1765,867.61,1798.75,879.6,1837.17Z"
                          fill="#98c8db"
                        />
                      </g>
                      <g id="STREET_LIGHTS" data-name="STREET LIGHTS">
                        <path
                          d="M2367.75,583.31h610.83a173.3,173.3,0,0,1,173.3,173.31V1757.28"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="2362.41"
                          y="596.76"
                          width="190.96"
                          height="35.22"
                          rx="16.15"
                          fill="#ffc200"
                        />
                        <rect x="3002.32" y="843.92" width="92.14" height="313.81" fill="#fff" />
                        <line
                          x1="3094.46"
                          y1="864.05"
                          x2="3151.88"
                          y2="864.05"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3094.46"
                          y1="1137.61"
                          x2="3151.88"
                          y2="1137.61"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect x="3048.39" y="891" width="46.07" height="150.23" fill="#fed4c7" />
                        <line
                          x1="3024.02"
                          y1="920.04"
                          x2="3076.1"
                          y2="920.04"
                          fill="none"
                          stroke="#a74602"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3024.02"
                          y1="943.5"
                          x2="3076.1"
                          y2="943.5"
                          fill="none"
                          stroke="#a74602"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3024.02"
                          y1="966.96"
                          x2="3076.1"
                          y2="966.96"
                          fill="none"
                          stroke="#a74602"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3024.02"
                          y1="990.43"
                          x2="3076.1"
                          y2="990.43"
                          fill="none"
                          stroke="#a74602"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <circle cx="3049.77" cy="1089.99" r="24.78" fill="#ffc200" />
                        <rect
                          x="1023.8"
                          y="145.77"
                          width="273.17"
                          height="50.38"
                          rx="23.11"
                          transform="translate(2320.77 341.92) rotate(-180)"
                          fill="#ffc200"
                        />
                        <path
                          d="M1289.33,126.54H415.5c-136.92,0-247.92,111-247.92,247.93V2310.88"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                      <g id="BUSH">
                        <path
                          d="M408,2357.13a154.14,154.14,0,0,1-6.91,45.68H6.91A154.14,154.14,0,0,1,0,2357.13c0-97.38,91.33-176.31,204-176.31S408,2259.75,408,2357.13Z"
                          fill="#ffc200"
                        />
                        <path d="M82.36,2402.81H74.52l-73.75-61c.19-2,.42-4,.7-5.92Z" fill="#fff" />
                        <path
                          d="M400.21,2308.74,206.5,2354.53v48.28h-5V2318.1l-62.91-69a2.24,2.24,0,0,1-.52.06H42.75q2.27-2.53,4.65-5h86.69l-34.9-38.29q2.3-1.2,4.64-2.34l97.67,107.17V2180.83h5v59.22l47.81-53.83c1.86.41,3.7.84,5.54,1.29l-53.35,60.07v101.8L322.18,2322a.67.67,0,0,1,.06-.12l43-72.8c1.19,1.31,2.34,2.63,3.47,4l-39.79,67.36L398.56,2304C399.14,2305.56,399.69,2307.15,400.21,2308.74Z"
                          fill="#fff"
                        />
                      </g>
                      <g id="CHARACTER_ON_BICYCLE" data-name="CHARACTER ON BICYCLE">
                        <g id="WHEELS-3" data-name="WHEELS">
                          <ellipse
                            cx="3572.07"
                            cy="2090.39"
                            rx="107.06"
                            ry="249.61"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M3563.88,1872.15c53-4,94.95,103.32,93,229"
                            fill="none"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <ellipse
                            cx="3572.05"
                            cy="2091.4"
                            rx="9.28"
                            ry="21.63"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <ellipse
                            cx="3135.02"
                            cy="1931.85"
                            rx="62.68"
                            ry="174.57"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M3094.4,1860.62c3.42-37.78,19.68-70.11,35.76-81"
                            fill="none"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <ellipse
                            cx="3135.02"
                            cy="1931.85"
                            rx="7.55"
                            ry="17.61"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                        </g>
                        <g id="CHARACTER">
                          <g id="LEGS">
                            <path
                              id="LEGS-2"
                              data-name="LEGS"
                              d="M3488.32,1730.11l-90.62-83-253.45,2.24c-8,45.34-3.93,84.57,10.9,124.33l146.74,391.55h120.56l-42.85-158.82L3500.91,1850A90.92,90.92,0,0,0,3488.32,1730.11Zm-146,138-40.58-150.47a3.27,3.27,0,0,1,5.59-3l84,92.07Z"
                              fill="#59221d"
                            />
                            <line
                              id="CONTOUR"
                              x1="3343.31"
                              y1="1860.88"
                              x2="3382.87"
                              y2="2007.54"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <rect
                              x="3308.76"
                              y="2236.94"
                              width="138.66"
                              height="14.8"
                              fill="none"
                              stroke="#f3b304"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <g id="SHOE">
                              <path
                                d="M3303.68,2165.92l-10.28,54.73a13.76,13.76,0,0,0,13.52,16.29h149v-7.62a34.39,34.39,0,0,0-5.91-19.27l-29.91-44.13Z"
                                fill="#fff"
                                stroke="#59221d"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <line
                                x1="3295.32"
                                y1="2227.39"
                                x2="3455.09"
                                y2="2227.39"
                                fill="none"
                                stroke="#59221d"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <line
                                x1="3328.15"
                                y1="2165.92"
                                x2="3316.19"
                                y2="2227.39"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <line
                                x1="3339.56"
                                y1="2165.92"
                                x2="3327.6"
                                y2="2227.39"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <path
                                d="M3441.94,2185.78a9.94,9.94,0,0,0-9.93-9.94h-40.48a9.94,9.94,0,0,0-9.94,9.94"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <path
                                d="M3450.73,2198.59a9.93,9.93,0,0,0-9.93-9.93h-39.39a9.94,9.94,0,0,0-9.93,9.93"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                          </g>
                          <g id="SHIRT">
                            <path
                              d="M3575.25,1611.09c-4.54-5.1-23.06-6.13-44.33-2.1-22.13,4.18-39.43,13.3-40.64,20l-26.23-89.59a6.09,6.09,0,0,0-11.3-1.08l-55.05,108.87c-219.6,6.31-257.44,55.78-257.44,55.78-3.58-34.24,5-66.7,13.32-88.09l54.11-138.71a128.88,128.88,0,0,1,120.08-82h131.71a80.25,80.25,0,0,1,78.08,61.65Z"
                              fill="#ffc200"
                            />
                            <line
                              x1="3321.52"
                              y1="1648.57"
                              x2="3266.74"
                              y2="1544.87"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M3334.38,1414.11a52.7,52.7,0,0,1,26,32.57l47.13,169"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M3321.51,1649.18s-.18-18.94,39.4-31.67c36.33-11.68,46.57-1.85,46.57-1.85l-6.88-22.1s-12.17-12.8-48.51-1.12c-39.57,12.72-42.66,32.76-42.66,32.76Z"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="5"
                            />
                            <path
                              d="M3489.16,1626.93c1.21-6.66,18.51-15.77,40.64-20,21.33-4,39.89-3,44.37,2.15l-6.54-25.07c-4.48-5.14-23-7.27-44.37-3.24-22.13,4.18-39.43,14.39-40.64,21Z"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="5"
                            />
                          </g>
                          <g id="HANDS">
                            <g id="LEFT">
                              <path
                                d="M3498,1755.48l-44.47,1.24a9.55,9.55,0,0,1-9.08-5.9l-5.45-13.41-7.39-.1c-23.89-.69-39-2.91-52.12-15.49-22.13-21.17-42.66-48.19-57.11-70.34,0,0,1.09-19,40.66-31.67,36.34-11.68,48.51,0,48.51,0,11.37,26.09,28.86,61.15,35.15,72.41l27.7.36a22.89,22.89,0,0,1,21.22,15l12.18,33.29A10.85,10.85,0,0,1,3498,1755.48Z"
                                fill="#a74602"
                              />
                              <path
                                d="M3484.73,1758.09a10.83,10.83,0,0,0,9.8-14.55l-6.73-18.42"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <path
                                d="M3469,1758.37a10.84,10.84,0,0,0,9.8-14.55l-6.74-18.41"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <path
                                d="M3452.63,1758.83a10.84,10.84,0,0,0,9.8-14.56l-6.74-18.41"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <line
                                x1="3432.08"
                                y1="1692.32"
                                x2="3446.65"
                                y2="1692.32"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                            </g>
                            <g id="RIGHT">
                              <path
                                d="M3608.32,1692.61l20.88.23a21.07,21.07,0,0,1,19.54,13.82l11.22,30.67a10,10,0,0,1-9,13.39l-40.95,1.15a8.76,8.76,0,0,1-8.35-5.44l-2.81-6.84-26.81-.41c-33-14.64-65.08-68.12-80.28-106.46-.5-1.28-1-2.53-1.45-3.77,1.21-6.66,18.51-15.78,40.64-20,21.34-4,39.89-3,44.37,2.14Z"
                                fill="#a74602"
                              />
                              <path
                                d="M3638.75,1748.94a10,10,0,0,0,9-13.4l-6.2-17"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <path
                                d="M3625.22,1749.2a10,10,0,0,0,9-13.4l-6.2-17"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <path
                                d="M3612.2,1749.62a10,10,0,0,0,9-13.4l-6.2-17"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <path
                                d="M3598.82,1738.09V1734a12.71,12.71,0,0,0-12.71-12.71h-2.46l-9.5-6.61"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                            </g>
                          </g>
                          <g id="HEAD">
                            <g id="NECK">
                              <path
                                d="M3431.06,1369v25.09s-37.16,25.09-79.51,0l39.76-47.56Z"
                                fill="#a74602"
                              />
                              <path
                                d="M3391.31,1346.53h0l39.75,22.47v25.09a75.1,75.1,0,0,1-26.28,9.88l-16.29-31A23.86,23.86,0,0,1,3391.31,1346.53Z"
                                fill="#59221d"
                              />
                              <path
                                d="M3432.15,1396.27s-39.34,25.09-81.69,0"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                            <path
                              id="HEAD-2"
                              data-name="HEAD"
                              d="M3447.33,1357.16a3.09,3.09,0,0,1-2.81,3.37l-5.29.48-.36,9.84a8.94,8.94,0,0,1-10.95,8.37l-20.74-4.81a15.25,15.25,0,0,1-11.31-11l-2.41-9.09h-4.54a10.85,10.85,0,0,1-10.85-10.85V1343a10.85,10.85,0,0,1,10.85-10.85h56.14Z"
                              fill="#a74602"
                            />
                            <path
                              id="EAR"
                              d="M3393.73,1345.45a7.49,7.49,0,0,0-7.48-7.38"
                              fill="none"
                              stroke="#59221d"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="3"
                            />
                            <path
                              id="HAIR"
                              d="M3412.94,1332.18c-2.58.17-8.36,1.41-8.36,9.17,0,3.86-5.21,2.54-5.21,2.54l-.91-4.86a8.33,8.33,0,0,0-6.72-6.7v-.15Z"
                              fill="#59221d"
                            />
                            <path
                              id="CAP"
                              d="M3475.11,1329.46a2.72,2.72,0,0,1-2.72,2.72h-80.65l.31-3.91a21.33,21.33,0,0,1,21.26-19.6h18.13a12.66,12.66,0,0,1,12.61,11.62l.52,6.44h27.82A2.72,2.72,0,0,1,3475.11,1329.46Z"
                              fill="#fff"
                            />
                            <g id="EYE">
                              <line
                                x1="3425.59"
                                y1="1335.69"
                                x2="3438.74"
                                y2="1335.69"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="3"
                              />
                              <ellipse
                                cx="3432.22"
                                cy="1344.55"
                                rx="2.16"
                                ry="3.56"
                                fill="#59221d"
                              />
                            </g>
                          </g>
                        </g>
                        <g id="RUDDER">
                          <path
                            d="M3447.09,2039.77c10.64-123.92,63-218,126.06-218,21.38,0,41.54,10.83,59.26,30"
                            fill="none"
                            stroke="#f3b304"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="3508.92"
                            y1="1736.62"
                            x2="3571.03"
                            y2="1736.62"
                            fill="none"
                            stroke="#f3b304"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="3533.94"
                            y1="1806.72"
                            x2="3570.29"
                            y2="2066.74"
                            fill="none"
                            stroke="#f3b304"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="3436.91"
                            y1="1736.62"
                            x2="3401.49"
                            y2="1736.62"
                            fill="none"
                            stroke="#f3b304"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M3550.93,1736.62l6.2,43.37a23.43,23.43,0,0,1-23.19,26.73h-204.5"
                            fill="none"
                            stroke="#f3b304"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                        </g>
                      </g>
                      <g id="YELLOW_CAR" data-name="YELLOW CAR">
                        <g id="CAR-2" data-name="CAR">
                          <path
                            d="M2310.28,1243.87H1681.36a89,89,0,0,0-82.85,56.48l-158.93,404.72H2552.06l-158.93-404.72A89,89,0,0,0,2310.28,1243.87Z"
                            fill="#ffc200"
                          />
                          <path
                            d="M2521,1705.08H1470.61l142.7-384.87c14.31-24.69,41-40.32,68.79-40.48l626.58-3.61c29.15-.17,55.68,16.74,69.37,43.35Z"
                            fill="#90bdd1"
                          />
                          <polygon
                            points="2692.92 1866.86 1298.71 1866.86 1439.58 1705.07 2552.06 1705.07 2692.92 1866.86"
                            fill="#f3b304"
                          />
                          <rect
                            x="1284.97"
                            y="1824.8"
                            width="1421.69"
                            height="288.39"
                            rx="91.57"
                            fill="#ffc200"
                          />
                          <rect
                            x="1296.54"
                            y="2102.12"
                            width="1398.55"
                            height="52.08"
                            rx="19.24"
                            fill="#fff"
                          />
                          <rect
                            x="1330.04"
                            y="1861.83"
                            width="1331.67"
                            height="210.31"
                            rx="91.57"
                            fill="#a74602"
                          />
                          <circle cx="1447.09" cy="1960.94" r="72.78" fill="#fff" />
                          <circle cx="1553.58" cy="2013.6" r="20.12" fill="#ffc200" />
                          <circle cx="2439.43" cy="2013.6" r="20.12" fill="#ffc200" />
                          <circle cx="2542.39" cy="1958.94" r="72.78" fill="#fff" />
                          <path
                            d="M1731.68,1861.83h528.8a0,0,0,0,1,0,0v118.59a44.29,44.29,0,0,1-44.29,44.29H1776a44.29,44.29,0,0,1-44.29-44.29V1861.83A0,0,0,0,1,1731.68,1861.83Z"
                            fill="#59221d"
                          />
                          <circle cx="2030.99" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2064.39" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2097.8" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2131.2" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2164.6" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2198" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1797.17" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1830.57" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1863.98" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1897.38" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1930.78" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1964.19" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="1997.59" cy="1888.62" r="5.3" fill="#ffc200" />
                          <circle cx="2047.69" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2081.09" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2114.5" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2147.9" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2181.3" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2214.71" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1813.87" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1780.47" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1847.28" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1880.68" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1914.08" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1947.48" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="1980.89" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2014.29" cy="1906.03" r="5.3" fill="#ffc200" />
                          <circle cx="2030.99" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2064.39" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2097.8" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2131.2" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2164.6" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2198" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2231.41" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1797.17" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1763.77" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1830.57" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1863.98" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1897.38" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1930.78" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1964.19" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="1997.59" cy="1923.43" r="5.3" fill="#ffc200" />
                          <circle cx="2047.69" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2081.09" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2114.5" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2147.9" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2181.3" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2214.71" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1813.87" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1780.47" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1847.28" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1880.68" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1914.08" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1947.48" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="1980.89" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2014.29" cy="1940.83" r="5.3" fill="#ffc200" />
                          <circle cx="2030.99" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2064.39" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2097.8" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2131.2" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2164.6" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2198" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2231.41" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1797.17" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1763.77" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1830.57" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1863.98" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1897.38" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1930.78" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1964.19" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="1997.59" cy="1958.24" r="5.3" fill="#ffc200" />
                          <circle cx="2047.69" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2081.09" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2114.5" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2147.9" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2181.3" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2214.71" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1813.87" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1780.47" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1847.28" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1880.68" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1914.08" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1947.48" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="1980.89" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2014.29" cy="1975.64" r="5.3" fill="#ffc200" />
                          <circle cx="2030.99" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="2064.39" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="2097.8" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="2131.2" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="2164.6" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="2198" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1797.17" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1830.57" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1863.98" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1897.38" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1930.78" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1964.19" cy="1993.04" r="5.3" fill="#ffc200" />
                          <circle cx="1997.59" cy="1993.04" r="5.3" fill="#ffc200" />
                        </g>
                        <g id="WHEELS-4" data-name="WHEELS">
                          <path
                            d="M1367.6,2154.44h188.11a0,0,0,0,1,0,0v109.27a60.59,60.59,0,0,1-60.59,60.59H1428.2a60.59,60.59,0,0,1-60.59-60.59V2154.44A0,0,0,0,1,1367.6,2154.44Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="1367.61 2154.44 1555.71 2154.44 1555.71 2211.3 1367.61 2180.63 1367.61 2154.44"
                            fill="#1a0c12"
                          />
                          <path
                            d="M2426.35,2154.44h188.11a0,0,0,0,1,0,0v109.27a60.59,60.59,0,0,1-60.59,60.59h-66.93a60.59,60.59,0,0,1-60.59-60.59V2154.44A0,0,0,0,1,2426.35,2154.44Z"
                            fill="#59221d"
                          />
                          <polygon
                            points="2426.35 2154.44 2614.47 2154.44 2614.47 2211.3 2426.35 2180.63 2426.35 2154.44"
                            fill="#1a0c12"
                          />
                        </g>
                        <g id="CHARACTERS">
                          <g id="MAN">
                            <g id="T-SHIRT">
                              <path
                                d="M2523.89,1705.08H2061c-47.08,0-79.1-47.77-61.22-91.32L2010,1589a168.5,168.5,0,0,1,155.87-104.5h154.54A168.5,168.5,0,0,1,2476.24,1589Z"
                                fill="#fff"
                              />
                              <path
                                d="M2183.48,1484.54,2117.56,1661a64.1,64.1,0,0,1-45,39.72,64.12,64.12,0,0,0,38.6-42.49l48.65-173.62c2-.08,4-.11,6-.11Z"
                                fill="#cee4ed"
                              />
                            </g>
                            <g id="HEAD-3" data-name="HEAD">
                              <g id="NECK-2" data-name="NECK">
                                <path
                                  d="M2274.78,1484.54l-32.93-48.69H2184v48.69S2223.6,1512.43,2274.78,1484.54Z"
                                  fill="#a74602"
                                />
                                <path
                                  d="M2241.85,1435.85H2184v48.69s8.32,5.85,22.25,9.52l34.64-40.62A14.56,14.56,0,0,0,2241.85,1435.85Z"
                                  fill="#59221d"
                                />
                              </g>
                              <g id="HEAD-4" data-name="HEAD">
                                <path
                                  id="HEAD-5"
                                  data-name="HEAD"
                                  d="M2249.61,1426.19l-8.83,3.43-.16-.41a17.39,17.39,0,0,1-9.92,22.48l-21.1,8.2a17.39,17.39,0,0,1-22.51-9.91v0l-8.79,4a11.43,11.43,0,0,1-14.8-6.52l-.74-1.92a11.44,11.44,0,0,1,6.51-14.8l8.79-4-1.35-3.46a17.39,17.39,0,0,1,9.91-22.51l21.1-8.2a17.38,17.38,0,0,1,22.51,9.9l1.53,3.94,8.83-3.43a11.44,11.44,0,0,1,14.8,6.51l.74,1.92A11.43,11.43,0,0,1,2249.61,1426.19Z"
                                  fill="#a74602"
                                />
                                <g id="FACE">
                                  <path
                                    d="M2240.33,1417.94a7,7,0,0,1,4-9"
                                    fill="none"
                                    stroke="#59221d"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                  />
                                  <path
                                    d="M2179.45,1440.22a7,7,0,0,0-9.22-3.61"
                                    fill="none"
                                    stroke="#59221d"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                  />
                                  <path
                                    d="M2208,1436.86a21.66,21.66,0,0,0-10.57-15.52s-3.92,3.14-10.91,2.23"
                                    fill="none"
                                    stroke="#59221d"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                  />
                                  <path
                                    d="M2209.06,1416.59s7.9-1.61,11.73-6.5"
                                    fill="none"
                                    stroke="#59221d"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                  />
                                  <ellipse
                                    cx="2216.83"
                                    cy="1421.34"
                                    rx="2.02"
                                    ry="3.44"
                                    transform="translate(-380.21 985.52) rotate(-23.14)"
                                    fill="#59221d"
                                  />
                                  <ellipse
                                    cx="2195.36"
                                    cy="1430.1"
                                    rx="2.02"
                                    ry="3.44"
                                    transform="translate(-385.38 977.79) rotate(-23.14)"
                                    fill="#59221d"
                                  />
                                  <path
                                    d="M2211.48,1445.73s4.35-7.33,8.7-6"
                                    fill="none"
                                    stroke="#59221d"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                  />
                                </g>
                              </g>
                            </g>
                            <polygon
                              id="SEAT_BELT"
                              data-name="SEAT BELT"
                              points="2284.32 1663.2 2320.29 1663.2 2426.14 1450.37 2410.76 1408.92 2284.32 1663.2"
                              fill="#59221d"
                            />
                            <g id="HANDS-2" data-name="HANDS">
                              <g id="RIGHT-2" data-name="RIGHT">
                                <path
                                  id="WHEEL"
                                  d="M2162.8,1695c0-49,42-88.63,93.76-88.63s93.76,39.68,93.76,88.63"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeMiterlimit="10"
                                  strokeWidth="5"
                                />
                                <path
                                  d="M2507.55,1666H2254.82s-29.42-43.93,19.29-63.07c59.92-23.54,148.25-27.28,200.68-21.76Z"
                                  fill="#a74602"
                                />
                                <path
                                  d="M2274.76,1623.25c-18.11,7.11-22.4,16.65-24.44,27.09"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeLinecap="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="4"
                                />
                                <path
                                  d="M2282.32,1639.59c-18.11,7.11-22.4,13.63-24.44,24.07"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeLinecap="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="4"
                                />
                              </g>
                              <g id="LEFT_HAND" data-name="LEFT HAND">
                                <path
                                  d="M2185,1447.78c0,8.86-8.06,23.77-16.91,23.77h-4.57l-52.32,186.72a64.09,64.09,0,0,1-61.72,46.81h-23a64.1,64.1,0,0,1-47.27-107.4l148.23-161.83v-19.08a24.38,24.38,0,0,1,12.07-21l14.74-8.63a12.21,12.21,0,0,1,6.15-1.67h20.93a12.18,12.18,0,0,1,10.9,6.74l2.67,5.36-9.9,4.16a14.69,14.69,0,0,0-8.38,17.73Z"
                                  fill="#a74602"
                                />
                                <path
                                  d="M2140.27,1408.92a23.24,23.24,0,0,1,9.72-11.15l14-8.2a11.58,11.58,0,0,1,5.85-1.59"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeLinecap="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="4"
                                />
                                <path
                                  d="M2156.37,1408.92a23.24,23.24,0,0,1,9.72-11.15l14-8.2A11.55,11.55,0,0,1,2186,1388"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeLinecap="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="4"
                                />
                                <path
                                  d="M2193.06,1398.3l-8,3.38a14.69,14.69,0,0,0-8.38,17.73l10.58,36"
                                  fill="none"
                                  stroke="#59221d"
                                  strokeLinecap="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="4"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="WOMAN">
                            <path
                              id="BLOUSE"
                              d="M1922.37,1666.22H1485.25l27.54-74.23a138.4,138.4,0,0,1,129.76-90.26h108.12c73.32-1.8,119.78,38.06,143.72,96.35Z"
                              fill="#f5bbbb"
                            />
                            <g id="NECK-3" data-name="NECK">
                              <path
                                d="M1760.2,1501.73l-56.06,89.78-44.65-89.78h6.36a14.6,14.6,0,0,0,14.6-14.6v-32.72h44.42l12.12,37.24a14.59,14.59,0,0,0,13.88,10.08Z"
                                fill="#fff"
                              />
                              <path
                                d="M1725.63,1457.12c-.18.51-8.46,19.05-30,28.94-5.31,2.45-12.67,2.51-15.2-.48l0-31.17h44.62Z"
                                fill="#59221d"
                              />
                            </g>
                            <g id="HAIR-2" data-name="HAIR">
                              <circle cx="1848.53" cy="1506.39" r="9.46" fill="#ffc200" />
                              <path
                                d="M1826.65,1481.53a48.14,48.14,0,0,1-12.72,30.91c-15.86-6.45-33.74-10.19-53.73-10.7h-9.53a14.6,14.6,0,0,1-13.68-10.08l-11.39-35c-13.71-7.94-47.43-48.83-42.85-56.2,3.72-6,14.53-12.83,33.82-11,9.31.88,36.47,9.92,34.43,44a57.25,57.25,0,0,1,23.23-4C1804.08,1430.39,1827.55,1453.72,1826.65,1481.53Z"
                                fill="#ffc200"
                              />
                            </g>
                            <g id="HEAD-6" data-name="HEAD">
                              <path
                                d="M1722.12,1454.25c-4.32,4.31-14.33,12.29-31,14.71a29.88,29.88,0,0,1-16.3-2.4,13.08,13.08,0,0,1-7.62-14l1.69-10.83-3-.88a5.16,5.16,0,0,1-3.33-6.93l21-26.94C1688.82,1419.79,1709.82,1444.83,1722.12,1454.25Z"
                                fill="#fff"
                              />
                              <path
                                d="M1691.55,1428.68s-2-6.87-8.84-8.51"
                                fill="none"
                                stroke="#ffc200"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="4"
                              />
                              <ellipse
                                cx="1682.93"
                                cy="1431.23"
                                rx="4.21"
                                ry="2.38"
                                transform="translate(-248.78 2503.23) rotate(-69.41)"
                                fill="#59221d"
                              />
                              <circle cx="1701.57" cy="1449.63" r="8.35" fill="#fed4c7" />
                            </g>
                            <polygon
                              id="SEAT_BELT-2"
                              data-name="SEAT BELT"
                              points="1698.84 1666.2 1664.03 1666.2 1561.63 1460.28 1576.5 1420.17 1698.84 1666.2"
                              fill="#59221d"
                            />
                          </g>
                        </g>
                        <g id="MIRRORS-3" data-name="MIRRORS">
                          <rect
                            x="1906.13"
                            y="1319.66"
                            width="179.38"
                            height="51.19"
                            rx="18.58"
                            fill="#ffc200"
                          />
                          <rect
                            x="1906.13"
                            y="1312.87"
                            width="179.38"
                            height="51.19"
                            rx="18.58"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="1995.82"
                            y1="1277.98"
                            x2="1995.82"
                            y2="1312.87"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M2697.89,1613.49v39.06a52.52,52.52,0,0,1-52.52,52.52H1346.45a52.52,52.52,0,0,1-52.52-52.52v-39.06a27.07,27.07,0,0,1,26.82-27.06c103.46-1,135.36,79.79,135.36,79.79h1079.6s31.9-80.78,135.36-79.79A27.07,27.07,0,0,1,2697.89,1613.49Z"
                            fill="#ffc200"
                          />
                          <path
                            d="M2536.8,1664s31.9-80.78,135.36-79.79"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="6"
                          />
                          <path
                            d="M1456.11,1660.77S1424.22,1582,1320.76,1583"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="6"
                          />
                        </g>
                        <g id="CONTOURS-2" data-name="CONTOURS">
                          <rect
                            x="1284.97"
                            y="1824.8"
                            width="1421.69"
                            height="288.39"
                            rx="91.57"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="6"
                          />
                          <path
                            d="M2442.8,1799.7h-894c-23.64,0-36.29-27.81-20.78-45.63l42.67-49h850.18l42.66,49C2479.09,1771.89,2466.43,1799.7,2442.8,1799.7Z"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="6"
                          />
                          <path
                            d="M2506.62,1666.23H1485l128.3-346c14.31-24.69,41-40.32,68.79-40.48l626.58-3.61c29.15-.17,55.68,16.74,69.37,43.35Z"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1436.5"
                            y1="1705.07"
                            x2="2552.06"
                            y2="1705.07"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="6"
                          />
                          <line
                            x1="2050.64"
                            y1="1428.9"
                            x2="2119.54"
                            y2="1362.77"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="2017.24"
                            y1="1460.95"
                            x2="2033.74"
                            y2="1445.12"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1867.1"
                            y1="1605.04"
                            x2="1980.15"
                            y2="1496.55"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1952.93"
                            y1="1463.37"
                            x2="2008.74"
                            y2="1409.8"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                          <line
                            x1="1768.3"
                            y1="1640.56"
                            x2="1931.65"
                            y2="1483.79"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="sign__panel sign__panel--right">
                <h3 className="sign__title">Xin Chào, Bạn!</h3>
                <p className="sign__text">
                  Vui lòng nhập các thông tin của bạn và bắt đầu chặng hành trình với G2 Cinema.
                </p>
                <button
                  className="sign__button"
                  id="button__signUp"
                  onClick={() => {
                    document.getElementById('sign__box').classList.add('right-panel-active');
                  }}
                >
                  Đăng Ký
                </button>

                <svg
                  className="svg-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4270.81"
                  height="2402.64"
                  viewBox="0 0 4270.81 2402.64"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Слой_1" data-name="Слой 1">
                      <g id="BUILDING">
                        <rect
                          x="3231.13"
                          y="1178.68"
                          width="394.93"
                          height="371.83"
                          fill="#98c8db"
                        />
                        <path
                          d="M2657.34,718.19V897.12H2401.57c-117.07,0-212,94.9-212,212V718.19Z"
                          fill="#fed4c7"
                        />
                        <polygon
                          points="1772.1 558.44 1590.52 718.2 1039 718.45 1039 718.2 1039.14 718.2 1220.72 558.44 1772.1 558.44"
                          fill="#98c8db"
                        />
                        <path
                          d="M4015,1852.26V2281.4H554.26V1275.31L1039,942.92V718.45h551.52v-.26l299.53-263.53,299.54,263.53v390.92c0-117.09,94.91-212,212-212s212,94.9,212,212v69.27c118.65-18.21,229.47-106.83,311.7-281.26,56.55,120,123.29,196.32,197.82,240.28a346.12,346.12,0,0,0,108,41.28v371.83l389,301.75Z"
                          fill="#fff"
                        />
                        <polygon
                          points="3231.13 1550.51 3626.06 1550.51 4015.04 1852.27 3620.11 1852.27 3231.13 1550.51"
                          fill="#fed4c7"
                        />
                        <path
                          d="M2923,510.66a83.73,83.73,0,0,0-83.73,83.73c0,46.24,83.73,171.25,83.73,171.25s83.72-125,83.72-171.25A83.73,83.73,0,0,0,2923,510.66Zm0,108.9a24.93,24.93,0,1,1,24.92-24.92A24.93,24.93,0,0,1,2923,619.56Z"
                          fill="#f3b304"
                        />
                        <path
                          d="M2925.26,897.13c-82.23,174.42-193.05,263-311.7,281.25v-69.27c0-117.08-94.91-212-212-212Z"
                          fill="#59221d"
                        />
                        <line
                          x1="3231.13"
                          y1="897.13"
                          x2="3231.13"
                          y2="677.03"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3142.7"
                          y1="718.2"
                          x2="3275.66"
                          y2="718.2"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3172.5"
                          y1="738.62"
                          x2="3275.66"
                          y2="738.62"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <circle cx="1901.39" cy="707.7" r="79.38" fill="#fed4c7" />
                        <circle
                          cx="1887.49"
                          cy="686.84"
                          r="79.38"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="1887.49"
                          y1="607.46"
                          x2="1887.49"
                          y2="766.22"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="1966.86"
                          y1="686.84"
                          x2="1808.11"
                          y2="686.84"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M1532,435.13V604a34.17,34.17,0,0,1-34.17,34.17h0A34.17,34.17,0,0,1,1463.68,604V435.13a34.17,34.17,0,1,0,68.34,0Z"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <circle
                          cx="1497.85"
                          cy="435.13"
                          r="34.17"
                          fill="none"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <polygon
                          points="1518.11 634.42 1614.49 558.44 1532.02 558.44 1532.02 612.73 1518.11 634.42"
                          fill="#59221d"
                        />
                        <rect
                          x="1115.99"
                          y="790.88"
                          width="171.93"
                          height="67.63"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="1316.76"
                          y="790.88"
                          width="171.93"
                          height="67.63"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="1115.99"
                          y="889.28"
                          width="171.93"
                          height="67.63"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect x="1316.76" y="889.28" width="171.93" height="67.63" fill="#f3b304" />
                        <path
                          d="M2926.06,1192.68h8.88a125.85,125.85,0,0,1,125.85,125.85v554.15a0,0,0,0,1,0,0H2800.21a0,0,0,0,1,0,0V1318.53A125.85,125.85,0,0,1,2926.06,1192.68Z"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2930.5"
                          y1="1192.68"
                          x2="2930.5"
                          y2="1872.68"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2800.21"
                          y1="1329.46"
                          x2="3060.79"
                          y2="1329.46"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2800.21"
                          y1="1465.5"
                          x2="3060.79"
                          y2="1465.5"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2800.21"
                          y1="1601.53"
                          x2="3060.79"
                          y2="1601.53"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2800.21"
                          y1="1737.57"
                          x2="3060.79"
                          y2="1737.57"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3626.06,1178.68H3231.13a345.69,345.69,0,0,1-108-41.28c-74.53-44-141.27-120.31-197.83-240.27h394.93C3402.87,1072.51,3507.32,1154.68,3626.06,1178.68Z"
                          fill="#98c8db"
                        />
                        <polygon
                          points="1890.06 454.66 2357.81 454.66 2657.34 718.2 2189.59 718.2 1890.06 454.66"
                          fill="#fff"
                          stroke="#f3b304"
                          strokeLinejoin="round"
                          strokeWidth="5"
                        />
                        <line
                          x1="2288.76"
                          y1="454.66"
                          x2="2588.3"
                          y2="718.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2212.42"
                          y1="454.66"
                          x2="2511.96"
                          y2="718.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2136.09"
                          y1="454.66"
                          x2="2435.62"
                          y2="718.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="2059.75"
                          y1="454.66"
                          x2="2359.28"
                          y2="718.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="1983.41"
                          y1="454.66"
                          x2="2282.95"
                          y2="718.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <polyline
                          points="1590.52 718.2 1890.06 454.66 2357.81 454.66"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <polyline
                          points="1041.07 718.45 1041.07 942.15 554.26 1275.31 554.26 2281.4"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                      <g id="CLOUDS">
                        <path
                          d="M1761.85,309.28A154,154,0,0,1,1680,288.51a81.88,81.88,0,1,1-76.73-115.89h.65a81.73,81.73,0,0,1,61.36,25.88A81.86,81.86,0,0,0,1603,160.27c0-.45,0-.88,0-1.33a154.67,154.67,0,1,1,158.88,150.34Z"
                          fill="#fed4c7"
                        />
                        <circle cx="1500.72" cy="351.12" r="26.74" fill="#fed4c7" />
                        <path
                          d="M2566.86,332.46h972.8a42,42,0,0,0-47.44-41.58L3415.39,301a28.81,28.81,0,0,1-32.58-28.56h0a39.43,39.43,0,0,0-47.52-38.59L3234.8,255a43.29,43.29,0,0,1-52.17-42.36h0a97.22,97.22,0,0,0-97.22-97.22h0c-1.62,0-3.24,0-4.85,0-44.54.69-88.31,11.6-128.42,31Z"
                          fill="#fed4c7"
                        />
                      </g>
                      <g id="PLANTS">
                        <path
                          d="M2800.21,2281.4h1470.6s0-474.11-427.3-483.26c-338.25-7.24-303.82,288.37-546.56,292.25C3175.06,2092.33,2800.21,1932.93,2800.21,2281.4Z"
                          fill="#f3b304"
                        />
                        <path
                          d="M4097.27,2242.44a150.23,150.23,0,0,1-5.1,38.95H3801.66a150.37,150.37,0,1,1,295.61-38.95Z"
                          fill="#fff"
                        />
                        <line
                          x1="3946.92"
                          y1="2092.01"
                          x2="3946.92"
                          y2="2279.32"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3983.82"
                          y1="2097.68"
                          x2="3946.92"
                          y2="2148.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3870.13"
                          y1="2112.53"
                          x2="3946.92"
                          y2="2208.32"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="4067.33"
                          y1="2152.54"
                          x2="4035.65"
                          y2="2213.5"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3827.94"
                          y1="2148.2"
                          x2="3898.33"
                          y2="2148.2"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3797.71"
                          y1="2224.79"
                          x2="3858.62"
                          y2="2279.75"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3946.92"
                          y1="2238.53"
                          x2="4091.43"
                          y2="2198.44"
                          fill="none"
                          stroke="#f3b304"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <ellipse cx="874.43" cy="1670.57" rx="240.58" ry="434.37" fill="#fed4c7" />
                        <line
                          x1="874.43"
                          y1="1379.48"
                          x2="874.43"
                          y2="2279.32"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M920.75,1435.92c0,7.32-.56,11.44-3.64,18.08l-32,69.12a114.69,114.69,0,0,0-10.64,48.25"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M800.31,1538.82v34.63a93.07,93.07,0,0,0,26.34,64.88l21.9,22.54a91.39,91.39,0,0,1,25.88,63.73"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M946.38,1712.07v48.55a87,87,0,0,1-22.1,57.93l-31.12,34.86a73.71,73.71,0,0,0-18.73,49.09"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M773,1836.09a77.32,77.32,0,0,0,45.54,70.49l24.21,10.92a53.81,53.81,0,0,1,31.68,49"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M985.78,1647.45h24.39a0,0,0,0,1,0,0v24.39a39.77,39.77,0,0,1-39.77,39.77H946a0,0,0,0,1,0,0v-24.39A39.77,39.77,0,0,1,985.78,1647.45Z"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M960.52,1397.64h1.4a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,960.52,1397.64Z"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M936.71,1704h1.4a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,936.71,1704Z"
                          transform="translate(-1034.12 1809.3) rotate(-64.47)"
                          fill="#59221d"
                        />
                        <path
                          d="M835.58,1464.95H837a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,835.58,1464.95Z"
                          transform="translate(-633.39 607.22) rotate(-30)"
                          fill="#59221d"
                        />
                        <path
                          d="M939.93,1977.48h1.4a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,939.93,1977.48Z"
                          transform="translate(792.21 -198.19) rotate(21.39)"
                          fill="#59221d"
                        />
                        <path
                          d="M856.55,1842.12H858a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,856.55,1842.12Z"
                          transform="translate(-1204.36 1815.56) rotate(-64.47)"
                          fill="#59221d"
                        />
                        <path
                          d="M755.21,1496.82h4.62a39.77,39.77,0,0,1,39.77,39.77v4.62a0,0,0,0,1,0,0H795a39.77,39.77,0,0,1-39.77-39.77v-4.62A0,0,0,0,1,755.21,1496.82Z"
                          transform="translate(1554.82 3038.03) rotate(-180)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M885,1313.78h17.08a0,0,0,0,1,0,0v17.08a39.77,39.77,0,0,1-39.77,39.77H845.27a0,0,0,0,1,0,0v-17.08A39.77,39.77,0,0,1,885,1313.78Z"
                          transform="translate(-693.18 1010.92) rotate(-45)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M784.45,1770h17.08a0,0,0,0,1,0,0v17.08a39.77,39.77,0,0,1-39.77,39.77H744.68a0,0,0,0,1,0,0v-17.08A39.77,39.77,0,0,1,784.45,1770Z"
                          transform="translate(-1045.26 1073.42) rotate(-45)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M977.16,1433.53h1.4a0,0,0,0,1,0,0v1.4a39.77,39.77,0,0,1-39.77,39.77h-1.4a0,0,0,0,1,0,0v-1.4A39.77,39.77,0,0,1,977.16,1433.53Z"
                          transform="translate(1384.46 -234.16) rotate(47.55)"
                          fill="#59221d"
                        />
                        <ellipse
                          cx="3106.65"
                          cy="1863.4"
                          rx="179.71"
                          ry="274.14"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3095.61"
                          y1="1638.02"
                          x2="3095.61"
                          y2="2280.4"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3144.65,1710.85a97.07,97.07,0,0,1-14.12,50.43l-24.07,39.58a74.55,74.55,0,0,0-10.85,38.74"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3047.21,1733.39V1826a104.13,104.13,0,0,0,16.7,56.56l15.83,24.49a99,99,0,0,1,15.87,53.78"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3144.65,1886.47v40a109.36,109.36,0,0,1-12.64,51l-29.62,56.13a58.68,58.68,0,0,0-6.78,27.37"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3149.91,2165.48h24.39a0,0,0,0,1,0,0v24.39a39.77,39.77,0,0,1-39.77,39.77h-24.39a0,0,0,0,1,0,0v-24.39A39.77,39.77,0,0,1,3149.91,2165.48Z"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="3095.61"
                          y1="2242.66"
                          x2="3150.1"
                          y2="2192.17"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3117.61,1822.92h1.28a36.4,36.4,0,0,1,36.4,36.4v1.28a0,0,0,0,1,0,0H3154a36.4,36.4,0,0,1-36.4-36.4v-1.28A0,0,0,0,1,3117.61,1822.92Z"
                          transform="translate(5078.66 4917.03) rotate(-152.7)"
                          fill="#f3b304"
                        />
                        <path
                          d="M3140.69,1670.56H3142a36.4,36.4,0,0,1,36.4,36.4v1.28a0,0,0,0,1,0,0h-1.28a36.4,36.4,0,0,1-36.4-36.4v-1.28A0,0,0,0,1,3140.69,1670.56Z"
                          transform="translate(2279.17 5162.4) rotate(-103.91)"
                          fill="#f3b304"
                        />
                        <path
                          d="M3118.64,1667.43h1.28a36.4,36.4,0,0,1,36.4,36.4v1.28a0,0,0,0,1,0,0H3155a36.4,36.4,0,0,1-36.4-36.4v-1.28A0,0,0,0,1,3118.64,1667.43Z"
                          transform="translate(5011.49 4715.37) rotate(-150)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3022.11,1954.9h1.28a36.4,36.4,0,0,1,36.4,36.4v1.28a0,0,0,0,1,0,0h-1.28a36.4,36.4,0,0,1-36.4-36.4v-1.28A0,0,0,0,1,3022.11,1954.9Z"
                          transform="translate(5971.32 4108.24) rotate(-176.92)"
                          fill="#f3b304"
                        />
                        <path
                          d="M3157.2,1822.7h1.55a43.86,43.86,0,0,1,43.86,43.86v1.55a0,0,0,0,1,0,0h-1.55a43.86,43.86,0,0,1-43.86-43.86v-1.55A0,0,0,0,1,3157.2,1822.7Z"
                          transform="translate(1641.87 5184.84) rotate(-95.4)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3037.05,1936.1h1.55a43.86,43.86,0,0,1,43.86,43.86v1.55a0,0,0,0,1,0,0h-1.55a43.86,43.86,0,0,1-43.86-43.86v-1.55A0,0,0,0,1,3037.05,1936.1Z"
                          transform="translate(3838.25 5507.46) rotate(-135)"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M3010.64,1785.15V1792a20,20,0,0,0,20,20h0a16.62,16.62,0,0,1,16.62,16.62"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                      <g id="CHARACTER_ON_SCOOTER" data-name="CHARACTER ON SCOOTER">
                        <g id="SCOOTER">
                          <path
                            d="M1512.71,1696.52h389.72a0,0,0,0,1,0,0v7.26a56.21,56.21,0,0,1-56.21,56.21H1463.67a0,0,0,0,1,0,0v-14.44A49,49,0,0,1,1512.71,1696.52Z"
                            fill="#a74602"
                          />
                          <circle cx="2742.92" cy="2192.12" r="153.9" fill="#a74602" />
                          <path
                            d="M2618.62,2282.89a153.91,153.91,0,0,1,227.41-205Z"
                            fill="#59221d"
                          />
                          <circle
                            cx="2742.92"
                            cy="2192.17"
                            r="44.08"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <circle cx="1337.78" cy="2192.12" r="153.9" fill="#a74602" />
                          <path
                            d="M1191.86,2143.07a153.93,153.93,0,0,1,299.82,49Z"
                            fill="#59221d"
                          />
                          <circle
                            cx="1337.85"
                            cy="2192.17"
                            r="44.08"
                            fill="none"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M2523.48,1454.91a73.41,73.41,0,0,1-143.06,23.2l123.89-72.67A73.14,73.14,0,0,1,2523.48,1454.91Z"
                            fill="#f3b304"
                          />
                          <path
                            d="M2504.31,1405.44l-123.89,72.67a73.41,73.41,0,0,1,123.89-72.67Z"
                            fill="#fff"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M1778.86,2177V1760H1490.67c-209.05,0-383,160.71-399.45,369.11h360a172.59,172.59,0,0,1,128.38,57.25l52.37,58.29a110.75,110.75,0,0,0,82.42,36.76h720.09a160.51,160.51,0,0,0,81.2-22.06L2904.89,2031s-42.24-136.15-217.76-99.68l-300.82-492.09a61.45,61.45,0,0,0-52.41-29.39H2278v26.94h23.61a61.45,61.45,0,0,1,56,36.11L2541.29,1879c75.62,167.15-46.61,356.6-230.07,356.6H1837.43A58.57,58.57,0,0,1,1778.86,2177Z"
                            fill="#fff"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M1126.94,2128.13c16.57-102,105.1-179.93,211.81-179.93,118.52,0,214.6,96.08,214.6,214.6"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M2689,1930.35c-42.87,12.38-78.19,40.36-98.08,76.69"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <circle cx="2280.86" cy="1412.16" r="30.65" fill="#59221d" />
                          <ellipse
                            cx="2290.89"
                            cy="1190.52"
                            rx="63.64"
                            ry="24.17"
                            transform="translate(-29.2 2323.08) rotate(-53.48)"
                            fill="#f3b304"
                          />
                          <ellipse
                            cx="2282.69"
                            cy="1183.6"
                            rx="65.67"
                            ry="24.95"
                            transform="translate(-26.96 2313.69) rotate(-53.48)"
                            fill="none"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M2367,1419.55v-117.9a65,65,0,0,0-16.71-43.5l-66.51-73.78"
                            fill="none"
                            stroke="#59221d"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <path
                            d="M1778.87,1760v68.31L1463.68,1761v-.07q13.38-.92,27-.91Z"
                            fill="#59221d"
                          />
                          <line
                            x1="1337.78"
                            y1="2346.02"
                            x2="3047.21"
                            y2="2346.02"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <line
                            x1="1922.12"
                            y1="2400.14"
                            x2="2904.89"
                            y2="2400.14"
                            fill="none"
                            stroke="#59221d"
                            strokeMiterlimit="10"
                            strokeWidth="5"
                          />
                          <g id="SMOKE">
                            <path
                              d="M1076.41,2192.42a177.4,177.4,0,0,0-172.9-137.65A183.7,183.7,0,0,1,739.59,1954l-49.89-98.64a234.4,234.4,0,0,0-443.56,105.79v37.29a160.35,160.35,0,0,1,132,87.25,160,160,0,0,0-125.33-60.33c-2.23,0-4.46.05-6.67.14a160.33,160.33,0,0,0,0,320.39l1067.24.14C1165.77,2346,1097.1,2282.31,1076.41,2192.42ZM225.6,2127.59a20.54,20.54,0,1,1,20.54-20.54A20.54,20.54,0,0,1,225.6,2127.59Z"
                              fill="#98c8db"
                            />
                            <circle cx="36.47" cy="2305.14" r="36.47" fill="#98c8db" />
                          </g>
                        </g>
                        <g id="CHARACTER">
                          <g id="LEGS">
                            <g id="RIGHT">
                              <path
                                d="M2293.68,2159.66c-111.15,31.22-224,10.62-253.71,4.15.1-.23.2-.47.31-.71l246.42-508v476.54A60,60,0,0,0,2293.68,2159.66Z"
                                fill="#59221d"
                              />
                              <path
                                d="M2339.16,2226.47v9.11h-254.5c-37,0-61.67-38.07-46.76-71.77,29.75,6.47,142.56,27.07,253.71-4.15h0a59.9,59.9,0,0,0,16.76,19.69l11.82,9A47.83,47.83,0,0,1,2339.16,2226.47Z"
                                fill="#a74602"
                                stroke="#59221d"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                            <g id="LEFT">
                              <path
                                d="M2271.58,1695l-215.74,445.36a35.36,35.36,0,0,0-2,25.64s-138.47,56-267.25,39.36a58.66,58.66,0,0,1-2.67-52.34l179.76-416a31.14,31.14,0,0,0-28.58-43.49h-258a162.71,162.71,0,0,1-122.51-55.64l348.47-157.31H2137.2C2247.38,1480.57,2319.61,1595.81,2271.58,1695Z"
                                fill="#fff"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <path
                                d="M1990.36,1542.8c110.18,0,182.41,115.25,134.38,214.4L1909,2202.56"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                                strokeDasharray="20"
                              />
                              <path
                                d="M2094.73,2235.58H1838.18a58.8,58.8,0,0,1-51.62-30.26c128.78,16.61,267.25-39.36,267.25-39.36a35.24,35.24,0,0,0,9.88,15.79l12.54,11.6A57.41,57.41,0,0,1,2094.73,2235.58Z"
                                fill="#fff"
                                stroke="#59221d"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                          </g>
                          <g id="HEAD">
                            <g id="HEAD-2" data-name="HEAD">
                              <path
                                d="M1964.6,1023,1934,1066.41a112.16,112.16,0,0,0-63.7-19.72H1823q-3.82,0-7.63.12l66.75-60.76Z"
                                fill="#fff"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <path
                                d="M1988.36,944.9l7.45,45.79A10.41,10.41,0,0,1,1988,1002l-.63.15a12.49,12.49,0,0,0-9.42,10.5l-2,15.22a12,12,0,0,1-13.41,10.32c-17.17-2.29-47.69-10.52-56.14-40.12-11.95-41.86,32.56-53.2,32.56-53.2Z"
                                fill="#fff"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <path
                                d="M1950.1,960.6s9.71-5.67,18.29-5.82"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                              <ellipse cx="1963.13" cy="974.57" rx="3.1" ry="5.5" fill="#59221d" />
                              <path
                                d="M1977.63,1013.22c-11.66,0-14.13-11.34-14.13-11.34"
                                fill="none"
                                stroke="#59221d"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                            <g id="HELMET">
                              <path
                                d="M1876.21,980.78l-1.37-3a59.79,59.79,0,0,1,29.31-79.25l7.67-3.54a52,52,0,0,1,71.86,33.2l4.68,16.7h-37.7a18.32,18.32,0,0,0-18.32,18.32v6.1a27.47,27.47,0,0,1-27.47,27.47h-3.7A27.46,27.46,0,0,1,1876.21,980.78Z"
                                fill="#59221d"
                              />
                              <path
                                d="M1951,1046.92a7.34,7.34,0,0,1-.81-.05c-6.12-.76-19.69-4.49-31.77-13.66-14.66-11.14-21.88-26.36-20.89-44a6.5,6.5,0,0,1,13,.73c-1.78,31.78,32.65,43,41.28,44a6.5,6.5,0,0,1-.79,13Z"
                                fill="#59221d"
                              />
                              <circle
                                cx="1904.37"
                                cy="973.06"
                                r="16.15"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="5"
                              />
                            </g>
                            <g id="HAIR">
                              <path
                                d="M1942.68,947.61c-7.78,1.42,16.15-8.67,33-17.67a25.26,25.26,0,0,1-1.54-8.71c0-14.65,12.37-26.52,27.62-26.52s27.63,11.87,27.63,26.52-12.37,26.51-27.63,26.51Z"
                                fill="#f3b304"
                              />
                              <circle cx="2046.74" cy="919.37" r="9.72" fill="#f3b304" />
                            </g>
                          </g>
                          <g id="HAND">
                            <path
                              d="M2174.1,1485.07s-251.51,138.61-386.69,47.71c0,0-128.92,87.53-232.81,105.1V1394.74c0-51.17,22.87-127.49,48-195.9A236.89,236.89,0,0,1,1825,1043.69h47.34a112.7,112.7,0,0,1,112.7,112.7V1285.6a26.81,26.81,0,0,0,31.82,26.34l150.35-28.6c-12.33,12-21.46,55.07-21.46,101.47C2145.73,1439.54,2158.43,1485.07,2174.1,1485.07Z"
                              fill="#f3b304"
                            />
                            <path
                              d="M2197.47,1384.81c0,54.73-12.7,100.26-28.37,100.26s-28.37-45.53-28.37-100.26,12.7-99.78,28.37-99.78S2197.47,1330.08,2197.47,1384.81Z"
                              fill="#fff"
                              stroke="#f3b304"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M2343,1331.68v98.06h-13.87a17.58,17.58,0,0,1-17.58-17.58,30.66,30.66,0,0,0-30.64-30.66h0a30.68,30.68,0,0,0-30.65,30.66,72.89,72.89,0,0,1-72.91,72.91h-3.19l-.75,0c-15.32-1.43-27.62-46.36-27.62-100.23,0-24.67,2.59-47.37,6.85-64.86h0l37.5-17.44,20.95-9.74a54.85,54.85,0,0,1,34.54-3.91l75.75,16.1A27.33,27.33,0,0,1,2343,1331.68Z"
                              fill="#fff"
                              stroke="#59221d"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M2271.91,1333.32l49.42,10.5a27.33,27.33,0,0,1,21.63,26.73v58.19"
                              fill="none"
                              stroke="#59221d"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M2202.47,1384.81c0,54.74-12.7,100.26-28.37,100.26l-.75,0c-15.32-1.43-27.62-46.36-27.62-100.23,0-24.67,2.59-47.37,6.85-64.86h0l37.5-17.44C2197.57,1320.55,2202.47,1350.81,2202.47,1384.81Z"
                              fill="#59221d"
                            />
                            <path
                              d="M1803.91,1545c-47.56-31-93.08-81.82-79.59-235.23"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                          </g>
                          <g id="DELIVERY_BOX" data-name="DELIVERY BOX">
                            <path
                              d="M1800.67,1544.48c-82.52,91.8-246.07,93.4-246.07,93.4V1463.14c6.32,116.53,181.8,55.45,205.35,46.78C1771.9,1524.32,1786.55,1535.18,1800.67,1544.48Z"
                              fill="#59221d"
                            />
                            <path
                              d="M1822.91,1040.58v3.11a252.93,252.93,0,0,0-233.49,196.86l-34.82,154.19V1040.58Z"
                              fill="#59221d"
                            />
                            <path
                              d="M1554.6,1043.69v594.2h-285c-42,0-77.15-31.65-85.69-73.89a99.62,99.62,0,0,1-2-19.92V1137.49c0-.21,0-.43,0-.65a99.35,99.35,0,0,1,4.83-30.15c11.91-36.68,44.49-63,82.83-63Z"
                              fill="#fff"
                              stroke="#59221d"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M1554.6,1538.69v30.15H1183.92a87.93,87.93,0,0,1-2-18.62v-11.53Z"
                              fill="#59221d"
                            />
                            <path
                              d="M1554.6,1106.69v30.15H1182a99.35,99.35,0,0,1,4.83-30.15Z"
                              fill="#59221d"
                            />
                            <rect
                              x="1184.96"
                              y="1146.01"
                              width="366.54"
                              height="5"
                              fill="#98c8db"
                            />
                            <path
                              d="M1388.42,1425V1263.67a5.76,5.76,0,0,1,5.76-5.76h0a5.76,5.76,0,0,1,5.76,5.76v67.46"
                              fill="none"
                              stroke="#98c8db"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M1388.42,1425h0v-93.9h25.94v49.65A50.7,50.7,0,0,1,1388.42,1425Z"
                              fill="none"
                              stroke="#98c8db"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <path
                              d="M1358,1257.91l2.68,31.84a18.38,18.38,0,0,1-18.31,19.92h0a18.37,18.37,0,0,1-18.31-19.92l2.67-31.84"
                              fill="none"
                              stroke="#f3b304"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <line
                              x1="1342.35"
                              y1="1257.91"
                              x2="1342.35"
                              y2="1336.67"
                              fill="none"
                              stroke="#f3b304"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                            <rect
                              x="1336.09"
                              y="1337.94"
                              width="12.82"
                              height="87.09"
                              rx="4.42"
                              fill="none"
                              stroke="#f3b304"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="5"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
