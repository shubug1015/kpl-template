import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  :hover {
    text-decoration: none;
    color: black;
    opacity: 0.5;
  }
`;

export const headerLists = [
  {
    id: 0,
    pathUrl: '/shop',
    searchUrl: '/?filter=new&page=1',
    name: 'SHOP',
  },
  {
    id: 1,
    pathUrl: '/brand',
    searchUrl: '/?filter=new&page=1',
    name: 'BRAND',
  },
];

export const logOutLists = [
  {
    id: 0,
    name: <SLink to='/login'>로그인</SLink>,
  },
  {
    id: 1,
    name: <SLink to='/signup'>회원가입</SLink>,
  },
  {
    id: 2,
    name: <SLink to='/login'>마이페이지</SLink>,
  },
];

export const logInLists = [
  {
    id: 0,
    name: 'LOGOUT',
  },
  {
    id: 1,
    name: <SLink to='/'>CART</SLink>,
  },
  {
    id: 2,
    name: <SLink to='/'>마이페이지</SLink>,
  },
];

export const filterLists = [
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
    name: 'likes',
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

export const items = [
  {
    id: 0,
    name: 'Care Solution SKIN',
    price: '19,800',
    imageUrl: require('Components/assets/productImg1.jpg'),
    pageNum: '1',
  },
  {
    id: 1,
    name: 'Vita-Plus AMPLE',
    price: '16,800',
    imageUrl: require('Components/assets/productImg2.jpg'),
    pageNum: '1',
  },
  {
    id: 2,
    name: 'Moisture Plus SPORTS CREAM',
    price: '21,000',
    imageUrl: require('Components/assets/productImg3.jpg'),
    pageNum: '1',
  },
  {
    id: 3,
    name: 'Hydrating Face MIST',
    price: '14,800',
    imageUrl: require('Components/assets/productImg4.jpg'),
    pageNum: '1',
  },
  {
    id: 4,
    name: 'Skin Relax Mint Ample',
    price: '17,000',
    imageUrl: require('Components/assets/productImg5.jpg'),
    pageNum: '1',
  },
  {
    id: 5,
    name: 'Deep-Red Nature Lip',
    price: '15,500',
    imageUrl: require('Components/assets/productImg6.jpg'),
    pageNum: '1',
  },
  {
    id: 6,
    name: 'Moisture Mild BODY LOTION',
    price: '17,000',
    imageUrl: require('Components/assets/productImg7.jpg'),
    pageNum: '1',
  },
  {
    id: 7,
    name: 'Lemon type Face LOTION',
    price: '19,800',
    imageUrl: require('Components/assets/productImg8.jpg'),
    pageNum: '1',
  },
  {
    id: 8,
    name: 'Moisture Plus BODY LOTION',
    price: '22,000',
    imageUrl: require('Components/assets/productImg9.jpg'),
    pageNum: '1',
  },
  {
    id: 9,
    name: 'Pure Rising Essential TONER',
    price: '20,000',
    imageUrl: require('Components/assets/productImg10.jpg'),
    pageNum: '1',
  },
  {
    id: 10,
    name: 'Whitening Orange LIP-CARE CREAM',
    price: '9,800',
    imageUrl: require('Components/assets/productImg11.jpg'),
    pageNum: '1',
  },
  {
    id: 11,
    name: 'Muti-Rich BODY OIL',
    price: '23,000',
    imageUrl: require('Components/assets/productImg12.jpg'),
    pageNum: '1',
  },
  {
    id: 12,
    name: 'Vita-Plus SKIN OIL SET',
    price: '19,800',
    imageUrl: require('Components/assets/productImg13.jpg'),
    pageNum: '2',
  },
  {
    id: 13,
    name: '100% Natural BODY',
    price: '14,800',
    imageUrl: require('Components/assets/productImg14.jpg'),
    pageNum: '2',
  },
];
