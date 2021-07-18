import React from 'react';

import { Container, Option, Img } from './styles';

import img1 from '../../images/banner1.png';
import img2 from '../../images/banner2.png';
import img3 from '../../images/banner3.png';

const items = [
    {
      key: String(Math.random()),
      img: img1,
    },
    {
      key: String(Math.random()),
      img: img2,
    },
    {
      key: String(Math.random()),
      img: img3,
    },
  ];

export default function Suggestions() {
    return (
      <Container>
        {items.map((item) => (
          <Option key={item.key}>
            <Img source={item.img} />
          </Option>
        ))}
      </Container>
    );
  }