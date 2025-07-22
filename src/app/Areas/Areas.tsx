'use client';
import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import mainArea from './main.jpg';
import verandaArea from './veranda.jpg';
import vipArea from './vip.jpg';
import { cx } from '../../../styled-system/css/cx';
import AreaCarousel from './AreaCarousel';
// import { Fragment } from 'react';

const areaItems = [
  {
    img: mainArea,
    p: 'Великий зал. Розрахований на комфортне розміщення великої кількості гостей, ідеально підходить для банкетів, весіль, корпоративних заходів та святкових урочистостей.',
    imgAlt: 'Великий зал',
  },
  {
    img: vipArea,
    p: `VIP-зал. Забезпечує повну приватність та комфорт, дозволяючи насолоджуватися часом у колі близьких або ділових партнерів, далеко від сторонніх поглядів та шуму.`,
    imgAlt: 'VIP-зал',
  },
  {
    img: verandaArea,
    p: 'Літня веранда зі скляним оглядом. Прямо при вас на відкритій кухні готують страви на тандирі та мангалі – аромат та свіжість відчуваються у кожному шматочку.',
    imgAlt: 'Літня веранда зі скляним оглядом',
  },
];

export default function Areas() {
  return (
    <section
      className={css({
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'std',
      })}
    >
      <AreaCarousel>
        {areaItems.map((area, i) => (
          <div key={i}>
            <Image
              src={area.img}
              alt={area.imgAlt}
              className={cx(
                css({
                  height: '200px',
                  borderTopLeftRadius: 'std',
                  borderTopRightRadius: 'std',
                }),
              )}
            />
            <p
              className={css({
                margin: 'item',
                fontSize: 14,
                // whiteSpace: 'wrap',
              })}
            >
              {area.p}
            </p>
          </div>
        ))}
      </AreaCarousel>
    </section>
  );
}
