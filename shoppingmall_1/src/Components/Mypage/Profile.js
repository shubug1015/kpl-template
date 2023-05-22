import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { usersApi } from 'api';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 40px 20px;
`;

const Content = styled.div`
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter};
  width: 60%;
`;

const ProfileForm = styled.form`
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  width: 100%;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    border-bottom: ${(props) => props.theme.mainBorder};
  }
  height: 100px;
  font-size: 12px;
`;

const ProfileTitle = styled.div`
  ${(props) => props.theme.flexCenter};
  border-right: ${(props) => props.theme.mainBorder};
  width: 30%;
  height: 100%;
  /* font-size: 13px; */
`;

const ProfileId = styled.div`
  ${(props) => props.theme.flexCenter};
  justify-content: left;
  width: 30%;
  height: 30px;
  margin-left: 20px;
  padding-left: 5px;
  font-size: 13px;
  outline: none;
`;

const ProfileInput = styled.input`
  ${(props) => props.theme.flexCenter};
  justify-content: left;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 1px;
  width: 30%;
  height: 30px;
  margin-left: 20px;
  padding-left: 5px;
  outline: none;
`;

const Show = styled.input`
  margin-left: 20px;
  margin-right: 5px;
`;

const Btns = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 60%;
  margin-top: 30px;
`;

const SaveBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  border: none;
  border-radius: 4px;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  margin-right: 20px;
  font-size: 13px;
  cursor: pointer;
`;

const BackBtn = styled(Link)`
  ${(props) => props.theme.flexCenter};
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  width: 80px;
  height: 30px;
  font-size: 13px;
  cursor: pointer;
`;

const Profile = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const ShowPassword = () => {
    let i = document.getElementById('showpassword');
    if (i.type === 'password') {
      i.type = 'text';
    } else {
      i.type = 'password';
    }
  };

  const handleName = (event) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };

  const handleEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const handlePhoneNum = (event) => {
    const {
      target: { value },
    } = event;
    setPhoneNum(value);
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await usersApi.editProfile(name, email, phoneNum);
      history.push('/mypage');
    } catch {
      alert('Error');
    }
  };

  return (
    <Container>
      <Content>
        <ProfileForm>
          <ProfileBox>
            <ProfileTitle>아이디</ProfileTitle>
            <ProfileId>{user.username}</ProfileId>
          </ProfileBox>
          <ProfileBox>
            <ProfileTitle>비밀번호</ProfileTitle>
            <ProfileInput type='password' id='showpassword' />
            <Show type='checkbox' onClick={ShowPassword} />
          </ProfileBox>
          <ProfileBox>
            <ProfileTitle>닉네임</ProfileTitle>
            <ProfileInput
              onChange={handleName}
              type='text'
              placeholder={user.name}
            />
          </ProfileBox>
          <ProfileBox>
            <ProfileTitle>이메일</ProfileTitle>
            <ProfileInput
              onChange={handleEmail}
              type='text'
              placeholder={user.email}
            />
          </ProfileBox>
          <ProfileBox>
            <ProfileTitle>핸드폰 번호</ProfileTitle>
            <ProfileInput
              onChange={handlePhoneNum}
              type='text'
              placeholder={user.phone_number}
            />
          </ProfileBox>
        </ProfileForm>
        <Btns>
          <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
          <BackBtn to='/'>취소</BackBtn>
        </Btns>
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default Profile;
