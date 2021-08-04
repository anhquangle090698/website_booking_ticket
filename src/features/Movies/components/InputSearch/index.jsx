import React from 'react';
import PropTypes from 'prop-types';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import { getSearchMovieAsync } from 'features/Movies/moviesSlice';

const schema = yup.object().shape({
  search: yup.string().required('Vui lập nhập tên phim'),
});

function InputSearch(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(getSearchMovieAsync(data.search));
      const currentUser = unwrapResult(result);
      //   console.log('currentUser', currentUser);
    } catch (error) {
      //   console.log('fail', error.message);
    }
  };

  return (
    <div className={errors.search ? "list-slide__search invalid" : "list-slide__search"}>
      <form className="list-slide__form" onSubmit={handleSubmit(onSubmit)}>
        <button type="submit" className="list-slide__button">
          <SearchOutlinedIcon className="list-slide__icon-search"></SearchOutlinedIcon>
        </button>
        <div className="list-slide__group-search">
          <input
            {...register('search')}
            type="text"
            name="search"
            id="search"
            placeholder="Tìm theo tên phim"
            className="list-slide__input-search"
          />
        </div>
        <ClearOutlinedIcon
          onClick={() => {
            reset({
              search: '',
            });
          }}
          className="list-slide__icon-clear"
        ></ClearOutlinedIcon>
      </form>
      {errors.search && <p className="list-slide__error">{errors.search.message}</p>}
    </div>
  );
}

InputSearch.propTypes = {};

export default InputSearch;
