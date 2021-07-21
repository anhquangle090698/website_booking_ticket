import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({ register, id, name, errors, handleChange, ...inputProps }) {
  return (
    <div className="input-group">
      <input
        {...register(name)}
        id={id}
        {...inputProps}
        className={errors ? 'input-group__control invalid' : 'input-group__control'}
      ></input>
      {errors ? <i className="fa fa-info input-group__icon"></i> : ''}
      {errors && <p className="input-group__error">{errors.message}</p>}
    </div>
  );
}

CustomInput.propTypes = {};

export default CustomInput;
