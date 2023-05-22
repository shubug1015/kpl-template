import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { mypageList as list } from 'Components/Lists';
import { connect } from 'react-redux';
import { userData } from 'store';

const Container = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #666666;
`;

const Sections = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 60%;
`;

const Section = styled.div`
  font-weight: ${(props) => (props.isFocus ? '700' : '')};
  text-align: center;
  width: 20%;
  font-size: 11px;
  cursor: pointer;
`;

const LogoutBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 80px;
  font-size: 10px;
  cursor: pointer;
`;

const DetailNavbar = ({
  updateOption,
  initialSection,
  redux_removeUserInfo,
}) => {
  const [option, setOption] = useState(initialSection);
  const handdleOption = (e) => {
    setOption(e.target.id);
    updateOption(e.target.id);
  };

  const history = useHistory();

  const logout = () => {
    sessionStorage.removeItem('Login_Info');
    localStorage.removeItem('Login_Info');
    redux_removeUserInfo({ token: '', user_pk: '', logged: false });
    history.push('/');
  };

  return (
    <Container>
      <Sections>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Section
              key={l.id}
              id={l.id}
              onClick={handdleOption}
              isFocus={parseInt(option) === l.id}
            >
              {l.text}
            </Section>
          ))}
      </Sections>
      <LogoutBtn onClick={logout}>LOGOUT</LogoutBtn>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_removeUserInfo: (data) => dispatch(userData(data)),
  };
};

export default connect(null, mapDispatchToProps)(DetailNavbar);
