export const headerList = [
  {
    id: 0,
    pathUrl: '/shop',
    searchUrl: '/?page=1&filter=new',
    name: 'SHOP',
  },
  {
    id: 1,
    pathUrl: '/collection',
    searchUrl: '/?page=1filter=new',
    name: 'COLLECTION',
  },
  {
    id: 2,
    pathUrl: '/lookbook',
    searchUrl: '/?page=1&filter=new&page=1',
    name: 'LOOKBOOK',
  },
  {
    id: 3,
    pathUrl: '/magazine',
    searchUrl: '/?page=1&filter=new',
    name: 'MAGAZINE',
  },
];

export const logoutList = [
  {
    id: 0,
    pathUrl: '/login',
    name: 'LOGIN',
  },
  {
    id: 1,
    pathUrl: '/signup',
    name: 'SIGNUP',
  },
  {
    id: 2,
    pathUrl: '/login',
    name: 'MYPAGE',
  },
];

export const loginList = [
  {
    id: 0,
    pathUrl: '/',
    name: 'LOGOUT',
  },
  {
    id: 1,
    pathUrl: '/mypage',
    name: 'CART',
  },
  {
    id: 2,
    pathUrl: '/mypage',
    name: 'MYPAGE',
  },
];

export const dropDownList = [
  {
    id: 0,
    pathUrl: '/shop',
    searchUrl: '/?page=1&filter=new',
    menu: ['20 S/S', '20 F/W', '19 S/S', '19 F/W'],
  },
  {
    id: 1,
    pathUrl: '/collection',
    searchUrl: '/?page=1&filter=new',
    menu: ['Summer Collection', 'Fall Collection'],
  },
  {
    id: 2,
    pathUrl: '/lookbook',
    searchUrl: '/?page=1&filter=new',
    menu: ['Look Book'],
  },
  {
    id: 3,
    pathUrl: '/magazine',
    searchUrl: '/?page=1&filter=new',
    menu: ['Magazine'],
  },
];

export const sideMenuList = [
  {
    id: 0,
    pathUrl: '/shop/',
    searchUrl: '?page=1&filter=new',
    name: 'SHOP',
    menu: ['20 S/S', '20 F/W', '19 S/S', '19 F/W'],
  },
  {
    id: 1,
    pathUrl: '/collection/',
    searchUrl: '?page=1&filter=new',
    name: 'COLLECTION',
    menu: ['Summer Collection', 'Fall Collection'],
  },
  {
    id: 2,
    pathUrl: '/lookbook/',
    searchUrl: '?page=1&filter=new',
    name: 'LOOKBOOK',
    menu: ['Look Book'],
  },
  {
    id: 3,
    pathUrl: '/magazine/',
    searchUrl: '?page=1&filter=new',
    name: 'MAGAZINE',
    menu: ['Magazine'],
  },
];

export const filterList = [
  {
    id: 0,
    name: 'new',
    text: '신상품순',
  },
  {
    id: 1,
    name: 'popularity',
    text: '인기순',
  },
  {
    id: 2,
    name: 'favs',
    text: '좋아요순',
  },
  {
    id: 3,
    name: 'reviews',
    text: '리뷰순',
  },
  {
    id: 4,
    name: 'max_price',
    text: '높은가격순',
  },
  {
    id: 5,
    name: 'min_price',
    text: '낮은가격순',
  },
];

export const mypageList = [
  {
    id: 0,
    name: 'info',
    text: 'INFO',
  },
  {
    id: 1,
    name: 'profile',
    text: 'PROFILE',
  },
  {
    id: 2,
    name: 'cart',
    text: 'CART',
  },
  {
    id: 3,
    name: 'favs',
    text: 'FAVS',
  },
  {
    id: 4,
    name: 'orders',
    text: 'ORDERS',
  },
];

export const signUpList = [
  {
    id: 0,
    name: 'ID',
    input: [{ num: 0, type: 'text', placeholder: '사용하실 ID를 입력하세요.' }],
    text: [
      '',
      '아이디를 입력해주세요.',
      '아이디는 4~11 자리여야 합니다.',
      '이미 사용중인 아이디입니다.',
      '사용 가능한 아이디입니다.',
    ],
  },
  {
    id: 1,
    name: '비밀번호',
    input: [
      { num: 1, type: 'password', placeholder: '비밀번호를 입력하세요.' },
      {
        num: 2,
        type: 'password',
        placeholder: '비밀번호를 다시 한번 입력하세요.',
      },
    ],
    text: [
      '',
      '비밀번호를 입력하세요.',
      '비밀번호는 4~11 자리여야 합니다.',
      '입력하신 비밀번호와 일치하지 않습니다. ',
      '사용 가능한 비밀번호입니다.',
    ],
  },
  {
    id: 2,
    name: '닉네임',
    input: [
      {
        num: 3,
        type: 'text',
        placeholder: '닉네임을 입력하세요.',
      },
    ],
    text: [
      '',
      '닉네임을 입력하세요.',
      '닉네임은 4~8 자리여야 합니다.',
      '이미 사용중인 닉네임입니다.',
      '사용 가능한 닉네임입니다.',
    ],
  },
  {
    id: 3,
    name: 'Email',
    input: [
      {
        num: 4,
        type: 'text',
        placeholder: '이메일을 입력하세요.',
      },
    ],
    text: ['', '사용 가능한 이메일입니다.', '이메일 양식에 맞지 않습니다.'],
  },
  {
    id: 4,
    name: '전화번호',
    input: [
      {
        num: 5,
        type: 'text',
        placeholder: '전화번호를 입력하세요.',
      },
    ],
    text: ['', '전화번호는 필수 입력 항목입니다.'],
  },
];

export const buyerInfo = [
  {
    id: 0,
    title: '받으시는 분',
    type: 'name',
    input: [
      {
        num: 0,
      },
    ],
  },
  {
    id: 1,
    title: '주소',
    type: 'address',
    input: [
      {
        num: 1,
      },
      {
        num: 2,
      },
    ],
  },
  {
    id: 2,
    title: '우편번호',
    type: '우편번호',
    input: [
      {
        num: 3,
      },
    ],
  },
  {
    id: 3,
    title: '휴대폰 번호',
    type: 'phone_number',
    input: [
      {
        num: 4,
      },
    ],
  },
  {
    id: 4,
    title: '이메일 주소',
    type: 'email',
    input: [
      {
        num: 5,
      },
    ],
  },

  {
    id: 5,
    title: '배송 메세지',
    type: '',
    input: [
      {
        num: 6,
      },
    ],
  },
];
