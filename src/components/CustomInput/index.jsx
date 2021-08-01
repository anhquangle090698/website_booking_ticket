import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({
  register,
  id,
  name,
  errors,
  cnCustom,
  disabled,
  ...inputProps
}) {
  return (
    <div className={cnCustom ? 'input-group input-group--account' : 'input-group'}>
      <input
        {...register(name)}
        id={id}
        disabled={disabled}
        {...inputProps}
        className={
          errors ? `input-group__control invalid ${cnCustom}` : `input-group__control ${cnCustom}`
        }
      ></input>
      {errors ? <i className="fa fa-info input-group__icon"></i> : ''}
      {errors && <p className="input-group__error">{errors.message}</p>}
    </div>
  );
}

CustomInput.propTypes = {};

export default CustomInput;
