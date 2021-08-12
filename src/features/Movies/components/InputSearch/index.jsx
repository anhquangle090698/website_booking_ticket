import { yupResolver } from '@hookform/resolvers/yup';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { getSearchMovieAsync } from 'features/Movies/moviesSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

//Schema validation use yup
const schema = yup.object().shape({
  search: yup.string().required('Vui lập nhập tên phim'),
});

InputSearch.propTypes = {
  onSubmit: PropTypes.func,
};

function InputSearch(props) {
  //Use form of React-hook-form
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
      await dispatch(getSearchMovieAsync(data.search));
    } catch (error) {
      console.log('fail', error.message);
    }
  };

  return (
    <div className={errors.search ? 'list-slide__search invalid' : 'list-slide__search'}>
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

export default InputSearch;
