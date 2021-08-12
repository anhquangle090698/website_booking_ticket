import {
  getListMoviesByCinema,
  getListShowtimeByNameFilm,
  getListShowtimeSearch
} from 'features/Movies/moviesSlice';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted #bdbdbd',
    color: state.isSelected ? '#F05520' : '#212121',
    backgroundColor: state.isFocused ? '#eeeeee' : state.isSelected ? 'transparent' : 'transparent',
    transition: 'all .3s ease',
    padding: 10,
    cursor: state.isDisabled ? 'not-allowed' : 'default',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms ease';

    return { ...provided, opacity, transition };
  },

  placeholder: (provided, state) => ({
    ...provided,
    color: '#212121',
    letterSpacing: '.4px',
  }),
};

SelectSearch.propTypes = {
  lSystemCinema: PropTypes.array,
  lMovies: PropTypes.array,
  lShowtimeSearch: PropTypes.array,
  lShowtimeByNameFilm: PropTypes.array,
  options: PropTypes.array,
  optionsCinema: PropTypes.array,
  optionsMovies: PropTypes.array,
  optionShowtime: PropTypes.array,
  handleChangeSelectSystemCinema: PropTypes.func,
  handleChangeSelectCinema: PropTypes.func,
  handleChangeSelectMovie: PropTypes.func,
};

function SelectSearch(props) {
  const { control, handleSubmit } = useForm();
  const history = useHistory();

  const dispatch = useDispatch();

  const lSystemCinema = useSelector((state) => state.movies.listSystemCinema);
  const lMovies = useSelector((state) => state.movies.listMoviesByCinema);
  const lShowtimeSearch = useSelector((state) => state.movies.listShowtimeSearch);
  const lShowtimeByNameFilm = useSelector((state) => state.movies.listShowtimeByNameFilm);

  const options = lSystemCinema?.map((lsc) => {
    return { value: lsc.maHeThongRap, label: lsc.tenHeThongRap.toUpperCase() };
  });

  const handleChangeSelectSystemCinema = async (e) => {
    if (e !== null && e.value !== '') {
      dispatch(await getListShowtimeSearch(e.value));
    } else {
      dispatch(await getListShowtimeSearch(null));
    }
  };

  const optionsCinema =
    lShowtimeSearch.length !== 0
      ? lShowtimeSearch[0]?.lstCumRap?.map((lc, index) => {
          return { value: lc.maCumRap, label: lc.tenCumRap };
        })
      : [{ value: '', label: 'Vui lòng chọn hệ thống rạp', disabled: true }];

  const handleChangeSelectCinema = async (e) => {
    if (e !== null && e.value !== '') {
      dispatch(await getListMoviesByCinema(e.value));
    } else {
      dispatch(await getListMoviesByCinema(null));
    }
  };

  const optionsMovies =
    lMovies.length !== 0
      ? lMovies[0]?.danhSachPhim?.map((lc, index) => {
          return { value: lc.maPhim, label: lc.tenPhim };
        })
      : [{ value: '', label: 'Vui lòng chọn hệ thống rạp và cụm rạp', disabled: true }];

  const handleChangeSelectMovie = async (e) => {
    if (e !== null && e.value !== '') {
      dispatch(await getListShowtimeByNameFilm(e.value));
    } else {
      dispatch(await getListShowtimeByNameFilm(null));
    }
  };

  const optionShowtime =
    lShowtimeByNameFilm.length !== 0
      ? lShowtimeByNameFilm[0]?.lstLichChieuTheoPhim?.map((lstbn) => {
          return {
            value: lstbn.maLichChieu,
            label: moment(lstbn.ngayChieuGioChieu).format('DD/MM/YYYY LT'),
          };
        })
      : [{ value: '', label: 'Vui lòng chọn hệ thống rạp, cụm rạp và phim', disabled: true }];

  const onSubmit = (data) => {
    if (data.showtime) {
      history.push(`/dat-ve/${data.showtime.value}`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Vui lòng chọn đầy đủ thông tin!',
        timer: 3000,
      });
    }
  };

  return (
    <div className="select-search">
      <div className="select-search__container">
        <Select
          className="select-search__select"
          placeholder="Hệ thống rạp"
          options={options}
          onChange={handleChangeSelectSystemCinema}
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
        />
        <Select
          className="select-search__select"
          placeholder="Cụm rạp"
          options={optionsCinema}
          onChange={handleChangeSelectCinema}
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
          isOptionDisabled={(option) => option.disabled}
        />

        <Select
          className="select-search__select"
          placeholder="Phim"
          options={optionsMovies}
          onChange={handleChangeSelectMovie}
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
          isOptionDisabled={(option) => option.disabled}
        />
        <form
          className="select-search__select select-search__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="showtime"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="select-search__form-option"
                placeholder="Suất chiếu"
                options={optionShowtime}
                isClearable={true}
                isSearchable={true}
                styles={customStyles}
                isOptionDisabled={(option) => option.disabled}
              />
            )}
          />
          <input type="submit" value="Đặt vé ngay" className="select-search__input" />
        </form>
      </div>
    </div>
  );
}

export default SelectSearch;
