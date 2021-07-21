import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import CustomInput from 'components/CustomInput';
import CustomInputPhone from 'components/CustomInputPhone';
import { postSignUpAsync } from 'features/Login/loginSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  accountSignUp: yup
    .string()
    .required('Vui lập nhập tài khoản')
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/, {
      excludeEmptyString: true,
      message: 'Vui lòng không nhập kí tự đặc biệt',
    })
    .min(7, 'Tài khoản phải có ít nhất 7 kí tự')
    .max(50, 'Tài khoản có tối đa 50 kí tự'),

  passwordSignUp: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
      'Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt'
    )
    .min(10, 'Mật khẩu phải có ít nhất 10 kí tự'),

  username: yup
    .string()
    .required('Vui lòng nhập họ tên')
    .matches(/^(?=.*[a-zA-Z\S])[ a-zA-Z0-9]+$/, {
      excludeEmptyString: true,
      message: 'Vui lòng không nhập kí tự đặc biệt',
    })
    // .matches(/^(\b[a-z](?!\s))$/, 'Vui lòng viết hoa chữ cái đầu mỗi từ')
    .min(5, 'Họ và tên phải có ít nhất 5 kí tự'),

  email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),

  numberPhone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/([+84]|0[3|5|7|8|9])+(([ ]{1})+([0-9]{3})){3}/, {
      message: 'Vui lòng nhập đúng định dạng số điện thoại',
      excludeEmptyString: true,
    }),
});

function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const informationUser = {
      taiKhoan: data.accountSignUp,
      matKhau: data.passwordSignUp,
      email: data.email,
      soDt: data.numberPhone,
      maNhom: 'GP02',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: data.username,
    };

    try {
      const result = await dispatch(postSignUpAsync(informationUser));
      const currentUser = unwrapResult(result);
      console.log('currentUser', currentUser);
      if (currentUser) {
        Swal.fire({
          icon: 'success',
          title: 'Đăng ký thành công',
          text: 'Bạn có thể dùng tài khoản này để đăng nhập',
        });
      }
    } catch (error) {
      if (error.message) {
        Swal.fire({
          icon: 'error',
          title: 'Email đã tồn tại!',
          text: 'Vui lòng sử dụng email khác',
          timer: 3000,
        });
      }
    }
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          register={register}
          id="accountSignUp"
          name="accountSignUp"
          errors={errors.accountSignUp}
          type="text"
          placeholder="Tài khoản"
        ></CustomInput>
        <CustomInput
          register={register}
          id="passwordSignUp"
          name="passwordSignUp"
          errors={errors.passwordSignUp}
          type="password"
          placeholder="Mật khẩu"
        ></CustomInput>
        <CustomInput
          register={register}
          id="username"
          name="username"
          errors={errors.username}
          type="text"
          placeholder="Họ tên"
        ></CustomInput>
        <CustomInput
          register={register}
          id="email"
          name="email"
          errors={errors.email}
          type="email"
          placeholder="Email"
        ></CustomInput>
        <CustomInputPhone
          register={register}
          id="numberPhone"
          name="numberPhone"
          errors={errors.numberPhone}
          type="text"
          placeholder="Số điện thoại"
        ></CustomInputPhone>

        <button className="sign-up__button" type="submit">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  onSubmit: () => {},
};

export default SignUp;
