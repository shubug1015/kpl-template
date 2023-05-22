import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QnASection from 'Components/Sections/QnASection';
import { connect } from 'react-redux';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  border-bottom: 1px solid #dbdbdb;
  width: 80%;
  margin-bottom: 100px;
  padding-bottom: 10px;
`;

const Text = styled.div`
  padding: 50px 0;
  font-size: 10px;
  opacity: 0.8;
`;

const WriteBtn = styled(Link)`
  ${(props) => props.theme.flexCenter};
  border: 1px solid black;
  border-radius: 3px;
  width: 60px;
  height: 20px;
  margin-left: 90%;
  font-size: 11px;
`;

const QnAContent = ({ detail, qnas, logged }) => (
  <Container>
    {qnas && qnas.length > 0 ? (
      <React.Fragment key={detail.id}>
        {qnas.map((item) => (
          <QnASection
            key={item.id}
            QnAId={item.id}
            ProductId={detail.id}
            num={item.num}
            title={item.title}
            content={item.content}
            name={item.user}
            date={item.created}
            secret={item.secret}
            password={item.password}
            user_pk={item.user_pk}
            image={item.image}
            replied={item.replied}
            qna_reply={item.qna_reply}
          />
        ))}
      </React.Fragment>
    ) : (
      <Text>등록된 문의사항이 없습니다.</Text>
    )}
    <WriteBtn
      to={
        logged
          ? {
              pathname: '/qna',
              state: {
                id: detail.id,
                name: detail.name,
              },
            }
          : '/login'
      }
    >
      작성하기
    </WriteBtn>
  </Container>
);

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

export default connect(mapStateToProps, null)(QnAContent);
