import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from 'components/CustomInput';
import { postSignInAsync } from 'features/Login/loginSlice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as yup from 'yup';

//Schema validation use yup
const schema = yup.object().shape({
  account: yup
    .string()
    .required('Vui lập nhập tài khoản')
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/, {
      excludeEmptyString: true,
      message: 'Vui lòng không nhập kí tự đặc biệt',
    })
    .min(7, 'Tài khoản phải có ít nhất 7 kí tự')
    .max(50, 'Tài khoản có tối đa 50 kí tự'),

  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
      'Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt'
    )
    .min(10, 'Mật khẩu phải có ít nhất 10 kí tự'),
});

SignIn.propTypes = {
  onSubmit: PropTypes.func,
};

function SignIn(props) {
  //Use form of React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  //Handle submit form sign in
  const onSubmit = async (data) => {
    const informationUser = {
      taiKhoan: data.account,
      matKhau: data.password,
    };

    try {
      await dispatch(postSignInAsync(informationUser));
    } catch (error) {
      console.log('fail', error.message);
    }
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          register={register}
          id="account"
          name="account"
          errors={errors.account}
          type="text"
          placeholder="Tài khoản"
        ></CustomInput>
        <CustomInput
          register={register}
          id="password"
          name="password"
          errors={errors.password}
          type="password"
          placeholder="Mật khẩu"
        ></CustomInput>

        <button className="sign-in__button" type="submit">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default SignIn;
