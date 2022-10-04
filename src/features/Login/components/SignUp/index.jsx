import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from 'components/CustomInput';
import { postSignUpAsync } from 'features/Login/loginSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import * as yup from 'yup';

//Schema validation use yup
const schema = yup.object().shape({
  accountSignUp: yup
    .string()
    .required('Vui lập nhập tài khoản')
    .matches(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]+$/, {
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
    .matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/, {
      excludeEmptyString: true,
      message: 'Họ tên không chứa số và kí tự đặc biệt',
    })
    .min(5, 'Họ và tên phải có ít nhất 5 kí tự'),

  email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),

  numberPhone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})$/, {
      message: 'Nhập đúng định dạng, vd: 03xxxxxxxx, 05xxxxxxx, 08xxxxxxx',
      excludeEmptyString: true,
    })
    .max(10, 'Số điện thoại tối đa 10 kí tự'),
});

SignUp.propTypes = {
  onSubmit: PropTypes.func,
};

function SignUp(props) {
  //Use form of React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  //Handle submit form sign up
  const onSubmit = async (data) => {
    const informationUser = {
      taiKhoan: data.accountSignUp,
      matKhau: data.passwordSignUp,
      email: data.email,
      soDt: data.numberPhone,
      maNhom: 'GP04',
      hoTen: data.username,
    };

   
    await dispatch(postSignUpAsync(informationUser));

    setValue('accountSignUp', '');
    setValue('passwordSignUp', '');
    setValue('username', '');
    setValue('email', '');
    setValue('numberPhone', '');
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
        <CustomInput
          register={register}
          id="numberPhone"
          name="numberPhone"
          errors={errors.numberPhone}
          type="text"
          placeholder="Số điện thoại"
        ></CustomInput>

        <button className="sign-up__button" type="submit">
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default SignUp;
