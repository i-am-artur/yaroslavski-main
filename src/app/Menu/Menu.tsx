import { css } from '../../../styled-system/css/css';
import pgSplit from './pgSplit.jpg';
import Image from 'next/image';

export default function Menu() {
  return (
    <section
      className={css({
        width: '100%',
        stack: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 'std',
        sm: {
          stack: 'column',
          padding: 'bleed',
          justifyContent: 'center',
          rowGap: 'unit',
          flex: '1 0 33%',
        },
      })}
    >
      <a href="https://yaroslavskiy.kh.ua/assortment/ua/categories/">
      <Image
        src={pgSplit.src}
        alt="Гранат"
        height={85}
        width={60}
        className={css({
          display: 'inline-block',
          borderTopLeftRadius: 'std',
          borderBottomLeftRadius: 'std',
          sm: {
            height: 93,
            width: 'auto',
          },
          md: {
            height: 150,
          },
        })}
      />
      </a><a href="https://yaroslavskiy.kh.ua/assortment/ua/categories/">
      <h2 className={css({ margin: '0 auto', fontWeight: 'bold' })}>МЕНЮ РЕСТОРАНУ</h2></a>
    </section>
  );
}
