import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import fishDish from './fishDish.png';

export default function Banquet() {
  return (
    <section
      aria-label="Банкети"
      className={css({
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 'std',
        md: {
          stack: 'row',
        },
      })}
    >
      <Image
        src={fishDish}
        alt="банкет"
        className={css({
          borderTopLeftRadius: 'std',
          borderTopRightRadius: 'std',
          md: {
            width: '50%',
            minHeight: '200px',
            height: '100%',
            borderTopLeftRadius: 'std',
            borderTopRightRadius: 'unset',
            borderBottomLeftRadius: 'std',
          },
          lg: {
            width: '40%',
          },
        })}
      />
      <div
        className={css({
          padding: 'item',
          md: { fontSize: 14 },
          lg: { padding: '0 calc(2* token(spacing.box))' },
        })}
      >
        <h2>Банкетне меню - ідеальне рішення для ваших свят та заходів.</h2>
        <br />
        <p>
          Ми розробили спеціально оптимізоване банкетне меню, яке поєднує у собі різноманітність,
          якість та вигідні умови для будь-яких урочистостей.
        </p>
        {/* <br /> */}
        {/* <p>
          Наші страви підбираються з урахуванням переваг гостей та формату заходу, щоб зробити ваше
          свято незабутнім та комфортним.
        </p> */}
      </div>
    </section>
  );
}
