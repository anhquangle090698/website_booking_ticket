import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomInput from 'components/CustomInput';
import { putUpdateUserAsync } from 'features/User/userSlice';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

//Schema validation use yup
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Vui lòng nhập họ tên')
    .matches(/^(?=.*[a-zA-Z\S])[ a-zA-Z0-9]+$/, {
      excludeEmptyString: true,
      message: 'Vui lòng không nhập kí tự đặc biệt',
    })
    .min(5, 'Họ và tên phải có ít nhất 5 kí tự'),
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})$/, {
      message: 'Nhập đúng định dạng, vd: 03xxxxxxxx, 05xxxxxxx, 08xxxxxxx',
      excludeEmptyString: true,
    }),
  passwordAccount: yup.string().when('hasPassword', {
    is: true,
    then: yup
      .string()
      .required('Vui lòng nhập mật khẩu cũ')
      .oneOf([yup.ref('passWordHidden')], 'Mật khẩu cũ không đúng'),
  }),
  passwordAccountEdit: yup.string().when('hasPassword', {
    is: true,
    then: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
        'Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt'
      )
      .min(10, 'Mật khẩu phải có ít nhất 10 kí tự'),
  }),
  passwordAccountEditConfirm: yup.string().when('hasPassword', {
    is: true,
    then: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .oneOf([yup.ref('passwordAccountEdit')], 'Mật khẩu mới không khớp!'),
  }),
});

InformationAccount.propTypes = {
  account: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

InformationAccount.defaultProps = {
  account : {}
}

function InformationAccount(props) {
  //Use form of React-hook-form
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const hasPassword = watch('hasPassword');

  const dispatch = useDispatch();

  const account = useSelector((state) => state.user.informationAccount);

  useEffect(() => {
    setValue('fullName', `${account?.hoTen}`);
    setValue('phone', `${account?.soDT}`);
    setValue('accountName', `${account?.taiKhoan}`);
    setValue('emailAccount', `${account?.email}`);
    setValue('passWordHidden', `${account?.matKhau}`);
    setValue('hasPassword', false);
  }, []);

  const onSubmit = async (data) => {
    const informationUpdate = {
      taiKhoan: account.taiKhoan,
      matKhau: data.passwordAccountEdit ? data.passwordAccountEdit : account.matKhau,
      email: account.email,
      soDt: data.phone,
      maNhom: 'GP02',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: data.fullName,
    };

    try {
      await dispatch(putUpdateUserAsync(informationUpdate));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="information-account">
      <h3 className="information-account__title">Thông tin tài khoản</h3>
      <div className="information-account__container">
        <form className="information-account__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="information-account__form-control">
            <label htmlFor="fullName" className="information-account__label">
              Họ tên
            </label>
            <CustomInput
              register={register}
              id="fullName"
              name="fullName"
              errors={errors.fullName}
              type="text"
              cnCustom="input-group__control--account"
            ></CustomInput>
          </div>
          <div className="information-account__form-control">
            <label htmlFor="phone" className="information-account__label">
              Số điện thoại
            </label>
            <CustomInput
              register={register}
              id="phone"
              name="phone"
              errors={errors.phone}
              type="text"
              cnCustom="input-group__control--account"
            ></CustomInput>
          </div>
          <div className="information-account__form-control">
            <label htmlFor="accountName" className="information-account__label">
              Tài khoản
            </label>
            <CustomInput
              register={register}
              id="accountName"
              name="accountName"
              errors={errors.accountName}
              type="text"
              disabled="disabled"
              cnCustom="input-group__control--account"
            ></CustomInput>
          </div>
          <div className="information-account__form-control">
            <label htmlFor="emailAccount" className="information-account__label">
              Email
            </label>
            <CustomInput
              register={register}
              id="emailAccount"
              name="emailAccount"
              errors={errors.emailAccount}
              type="email"
              disabled="disabled"
              cnCustom="input-group__control--account"
            ></CustomInput>
          </div>
          <div className="information-account__form-control information-account__form-control--hidden">
            <label htmlFor="passWordHidden" className="information-account__label">
              Email
            </label>
            <CustomInput
              register={register}
              id="passWordHidden"
              name="passWordHidden"
              errors={errors.passWordHidden}
              type="password"
              hidden="hidden"
              cnCustom="input-group__control--account"
            ></CustomInput>
          </div>

          <Controller
            name="hasPassword"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox checked={field.value} {...field} />}
                label="Thay đổi mật khẩu"
              />
            )}
          />

          {hasPassword && (
            <>
              <div className="information-account__form-control">
                <label htmlFor="passwordAccount" className="information-account__label">
                  Mật khẩu cũ
                </label>
                <CustomInput
                  register={register}
                  id="passwordAccount"
                  name="passwordAccount"
                  errors={errors.passwordAccount}
                  type="password"
                  cnCustom="input-group__control--account"
                ></CustomInput>
              </div>

              <div className="information-account__form-control">
                <label htmlFor="passwordAccountEdit" className="information-account__label">
                  Mật khẩu mới
                </label>
                <CustomInput
                  register={register}
                  id="passwordAccountEdit"
                  name="passwordAccountEdit"
                  errors={errors.passwordAccountEdit}
                  type="password"
                  cnCustom="input-group__control--account"
                ></CustomInput>
              </div>
              <div className="information-account__form-control">
                <label htmlFor="passwordAccountEditConfirm" className="information-account__label">
                  Xác nhận mật khẩu
                </label>
                <CustomInput
                  register={register}
                  id="passwordAccountEditConfirm"
                  name="passwordAccountEditConfirm"
                  errors={errors.passwordAccountEditConfirm}
                  type="password"
                  cnCustom="input-group__control--account"
                ></CustomInput>
              </div>
            </>
          )}

          <button className="information-account__button" type="submit">
            Cập nhật
          </button>
        </form>
      </div>
    </div>
  );
}

export default InformationAccount;
