import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/router";
import countries from "../../constants/countries.json";

const SignupForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [termsChecked, setTermsChecked] = useState(false);


  const onSubmit = async (values, { resetForm, setFieldError }) => {
    try {
      setFieldError('submit', null);
      const response = await fetch('https://api-oceanleads.affise.com/3.0/admin/partner', {
        method: 'POST',
        headers:{
          'api-key': 'c1a0c7da0768a4988742c1db8c394a52',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: Object.entries({
          password: values.password,
          email: values.email,
          country: values.country,
          'custom_fields[4]': values.messenger,
          'custom_fields[5]': values.messengerId,
          'custom_fields[6]': values.cpaNetworks,
          'custom_fields[7]': values.country,
        }).map(([key, value]) => encodeURIComponent(key)
          + '=' + encodeURIComponent(value)).join('&')
      })
      if (response.status === 200) {
        // resetForm();
        router.replace('/thank-you');
      }
    } catch (e) {
      setFieldError('submit', e.message);
    }
  };

  return (
    <Formik
      validationSchema={Yup.object({
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string()
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-!@*\.$%?&#\/|\\~<>^\{\}\[\]\(\):;])[A-Za-z\d\_\-\!\@\*\.\$\%\?\&\#\/\|\\~\<\>\^\{\}\[\]\(\)\:\;]{8,30}$/,
            'Password must be 8-30 characters and include at least one uppercase letter, one lowercase letter, one numeric digit, and one of the following special characters: _-!@*.$%?&#/|\\~<>^{}[]():;')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Password confirmation is required'),
        country: Yup.string().required('Country is required'),
        messenger: Yup.string().required('Messenger is required'),
        messengerId: Yup.string().required('Messenger ID is required'),
        cpaNetworks: Yup.string().required('CPA Networks are required')
      })}
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        messenger: '',
        messengerId: '',
        cpaNetworks: '',
        submit: null
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, handleSubmit, handleChange, handleBlur, touched, errors, values }) => {
        return (
          <form action="#" className="user-data-form mt-40 lg-mt-30" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="hasan@gmail.com"
                  />
                  {touched.email && errors.email && <span className="errorMessage">{errors.email}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Password</label>
                  <input
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="pass_log_id"
                  />
                  <span className="placeholder_icon" onClick={handleTogglePassword}>
                    <span className=" d-flex align-items-center">
                      {showPassword ? (
                        <>
                          <i className="fa-regular fa-eye"></i>
                        </>
                      ) : (
                        <>
                          <i className=" fa-regular fa-eye-slash"></i>
                        </>
                      )}
                    </span>
                  </span>
                  {touched.password && errors.password && <span className="errorMessage">{errors.password}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-25">
                  <label>Confirm Password</label>
                  <input
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className="pass_log_id"
                  />
                  <span className="placeholder_icon" onClick={handleToggleConfirmPassword}>
                    <span className=" d-flex align-items-center">
                      {showConfirmPassword ? (
                        <>
                          <i className="fa-regular fa-eye"></i>
                        </>
                      ) : (
                        <>
                          <i className=" fa-regular fa-eye-slash"></i>
                        </>
                      )}
                    </span>
                  </span>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <span className="errorMessage">{errors.confirmPassword}</span>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>What messenger do you use?</label>
                  <select
                    name="messenger"
                    className="nice-select form-select"
                    value={values.messenger}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select messenger</option>
                    <option value="1">Telegram</option>
                    <option value="2">Skype</option>
                  </select>
                  {touched.messenger && errors.messenger && <span className="errorMessage">{errors.messenger}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>Messenger ID</label>
                  <input
                    name="messengerId"
                    value={values.messengerId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="@flirtyad"
                  />
                  {touched.messengerId && errors.messengerId && <span className="errorMessage">{errors.messengerId}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>What CPA networks do you currently work with?</label>
                  <input
                    name="cpaNetworks"
                    value={values.cpaNetworks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="CPA Network"
                  />
                  {touched.cpaNetworks && errors.cpaNetworks && <span className="errorMessage">{errors.cpaNetworks}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta mb-30">
                  <label>What country are you from?</label>
                  <select
                    name="country"
                    className="nice-select form-select"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {
                      [{cca2: '', name: {common: 'Select country'}}, ...countries].map((country, i) =>
                        (<option key={i} value={country.cca2}>{country.name?.common}</option>)
                      )
                    }
                  </select>
                  {touched.country && errors.country && <span className="errorMessage">{errors.country}</span>}
                </div>
              </div>
              <div className="col-12">
                <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                  <div>
                    <input onChange={(e) => setTermsChecked(e.target.checked)} value={termsChecked} type="checkbox" id="agree_to_policy" />
                    <label htmlFor="agree_to_policy">
                      By clicking &quot;SIGN UP&quot; I agree to the Terms and Conditions and
                      Privacy Policy.
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button
                  disabled={isSubmitting || !termsChecked}
                  type="submit"
                  className={`btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30 ${!termsChecked ? 'opacity-50' : ''}`}
                >
                  Sign Up
                </button>
                {errors.submit && <span className="errorMessage">{errors.submit}</span>}
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;