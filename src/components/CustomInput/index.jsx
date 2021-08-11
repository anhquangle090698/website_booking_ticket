import PropTypes from 'prop-types';
import React from 'react';

CustomInput.propTypes = {
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  cnCustom: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
};

CustomInput.defaultProps = {
  register: () => {},
  id: '',
  name: '',
  cnCustom: '',
  disabled: '',
};

//Custom input about style, error change input of react-hook-form
function CustomInput({ register, id, name, errors, cnCustom, disabled, ...inputProps }) {
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

export default CustomInput;
