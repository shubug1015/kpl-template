import React from 'react';
import QnAPresenter from './QnAPresenter';

const QnAContainer = () => {
  const qnas1 = [
    {
      id: 0,
      title: '상담신청 방법은 어떻게 되나요?',
      reply:
        '홈페이지 내 신청양식에 정보와 내용을 적어주세요. 상담시간에 준하여 답변이 전달됩니다. ',
    },
    {
      id: 1,
      title: '가격을 알고 싶어요.',
      reply:
        '가격은 법률상담의 종류, 예상소요시간, 실제 업무에서의 인력투입에 따라 상이하며, 상담 후 가격 책정이 1차적으로 이루어질 예정입니다.',
    },
  ];

  const qnas2 = [
    {
      id: 0,
      title: '법률적 지식이 전혀 없어도 상담이 가능할까요?',
      reply:
        '고객님의 이야기를 들려주신다고 생각하고 말씀해 주세요. 그 외의 것은 저희가 책임지겠습니다.',
    },
    {
      id: 1,
      title: '방문상담도 가능한가요?',
      reply:
        '방문상담에는 방문 전 예약이 필수입니다. 전화나 양식을 통해 신청해주시면, 방문상담 일정을 잡아드립니다.',
    },
  ];

  return <QnAPresenter qnas1={qnas1} qnas2={qnas2} />;
};

export default QnAContainer;
