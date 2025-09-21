import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import delivery from './delivery.png';

export default function Delivery() {
  return (
    <a
      href="https://yaroslavskiy.kh.ua/assortment?isDelivery=1"
      className={css({
        width: '100%',
        paddingTop: 'box',
        paddingBottom: 'box',
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 'std',
        md: {
          padding: '0 token(spacing.box)',
          flex: '1 0 33%',
        },
      })}
    >
      <h2 className={css({ fontWeight: 'bold' })}>ДОСТАВКА ЇЖІ</h2>
      <Image
        src={delivery}
        alt="Доставка їжі"
        height={119}
        width={217}
        className={css({
          display: 'block',
        })}
      />
    </a>
  );
}
