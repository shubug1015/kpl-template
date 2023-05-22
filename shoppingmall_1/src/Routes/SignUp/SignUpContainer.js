import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';
import { usersApi } from 'api';

const SignUpContainer = () => {
  // const [signUpData, setSignUpData] = useState({
  //   id: '',
  //   pw: '',
  //   pwCheck: '',
  //   name: '',
  //   email: '',
  //   phoneNum: '',
  //   idText: 0,
  //   pwText: 0,
  //   nameText: 0,
  //   emailText: 0,
  //   phoneNumText: 0,
  // });

  // const history = useHistory();

  // const signUpFunc = {
  //   handleId: (e) => {
  //     const {
  //       target: { value: id },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       id,
  //     });
  //   },
  //   handlePw: (e) => {
  //     const {
  //       target: { value: pw },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       pw,
  //     });
  //   },
  //   handlePwCheck: (e) => {
  //     const {
  //       target: { value: pwCheck },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       pwCheck,
  //     });
  //   },
  //   handleName: (e) => {
  //     const {
  //       target: { value: name },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       name,
  //     });
  //   },
  //   handleEmail: (e) => {
  //     const {
  //       target: { value: email },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       email,
  //     });
  //   },
  //   handlePhoneNum: (e) => {
  //     const {
  //       target: { value: phoneNum },
  //     } = e;
  //     setSignUpData({
  //       ...signUpData,
  //       phoneNum,
  //     });
  //   },
  //   confirmId: async () => {
  //     const { data: usedId } = await usersApi.checkId(signUpData.id);
  //     setSignUpData({
  //       ...signUpData,
  //       idText:
  //         signUpData.id.length === 0
  //           ? 1
  //           : signUpData.id.length < 4 || signUpData.id.length > 12
  //           ? 2
  //           : usedId === 'used id'
  //           ? 3
  //           : 4,
  //     });
  //   },
  //   confirmPw: async () => {
  //     setSignUpData({
  //       ...signUpData,
  //       pwText:
  //         signUpData.pw.length === 0
  //           ? 1
  //           : signUpData.pw.length < 4 || signUpData.pw.length > 12
  //           ? 2
  //           : signUpData.pw !== signUpData.pwCheck
  //           ? 3
  //           : 4,
  //     });
  //   },
  //   confirmName: async () => {
  //     const { data: usedName } = await usersApi.checkName(signUpData.name);
  //     setSignUpData({
  //       ...signUpData,
  //       nameText:
  //         signUpData.name.length === 0
  //           ? 1
  //           : signUpData.name.length < 3 || signUpData.name.length > 9
  //           ? 2
  //           : usedName === 'used name'
  //           ? 3
  //           : 4,
  //     });
  //   },
  //   confirmEmail: () => {
  //     setSignUpData({
  //       ...signUpData,
  //       emailText: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
  //         signUpData.email
  //       )
  //         ? 1
  //         : 2,
  //     });
  //   },
  //   confirmPhoneNum: () => {
  //     setSignUpData({
  //       ...signUpData,
  //       phoneNumText: signUpData.phoneNum.length === 0 ? 1 : 0,
  //     });
  //   },
  //   handleSubmit: async () => {
  //     if (
  //       signUpData.idText === 4 &&
  //       signUpData.pwText === 4 &&
  //       signUpData.nameText === 4 &&
  //       signUpData.emailText === 1 &&
  //       signUpData.phoneNumText === 0
  //     ) {
  //       try {
  //         await usersApi.signup(
  //           signUpData.id,
  //           signUpData.pw,
  //           signUpData.name,
  //           signUpData.email,
  //           signUpData.phoneNum
  //         );
  //         history.push('/login');
  //       } catch {
  //         alert('Error');
  //       }
  //     } else {
  //       alert('회원정보를 정확하게 입력해주세요.');
  //     }
  //   },
  // };

  return (
    <SignUpPresenter
    // {...signUpData} {...signUpFunc}
    />
  );
};

export default SignUpContainer;
