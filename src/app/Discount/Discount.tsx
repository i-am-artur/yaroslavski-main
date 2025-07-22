'use client';
import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import sbu from './sbu.webp';
import mns from './mns.webp';
import vsu from './VSU.webp';
import police from './police.png';
import DiscountCarousel from './DiscountCarousel';

const images = [sbu, mns, vsu, police];

export default function Discount() {
  return (
    <section
      aria-label="Знижка"
      className={css({
        paddingBottom: 'item',
        width: '100%',
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 'std',
      })}
    >
      <DiscountCarousel>
        {images.map((image, i) => (
          <div
            key={i}
            className={css({
              position: 'relative',
              height: '200px',
            })}
          >
            <Image
              src={image}
              fill
              alt="ЗСУ, СБУ, ДСНС та поліція"
              className={css({
                borderTopLeftRadius: 'std',
                borderTopRightRadius: 'std',
              })}
            />
          </div>
        ))}
      </DiscountCarousel>
      <h2 className={css({ marginTop: 'item', fontWeight: 'bold' })}>
        Знижка 10% у залі ресторану
      </h2>
      <p>для ЗСУ, СБУ, ДСНС та поліції</p>
    </section>
  );
}
