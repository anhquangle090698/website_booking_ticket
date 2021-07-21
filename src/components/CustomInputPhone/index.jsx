import React from 'react';
import PropTypes from 'prop-types';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const parseNumberPhone = (v) => {
  const numberPhone = parsePhoneNumberFromString(v, 'VN');
  console.log(numberPhone);
  if (numberPhone) return numberPhone.formatInternational();
  return v;
};

function CustomInputPhone({ register, id, name, errors, handleChange, ...inputProps }) {
  return (
    <div className="input-group">
      <input
        {...register(name)}
        onChange={(e) => {
          e.target.value = parseNumberPhone(e.target.value);
        }}
        id={id}
        {...inputProps}
        className={errors ? 'input-group__control invalid' : 'input-group__control'}
      ></input>
      {errors ? <i className="fa fa-info input-group__icon"></i> : ''}
      {errors && <p className="input-group__error">{errors.message}</p>}
    </div>
  );
}

CustomInputPhone.propTypes = {};

export default CustomInputPhone;
