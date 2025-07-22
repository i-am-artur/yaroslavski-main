import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import mangal from './mangal.jpg';

export default function Mangal() {
  return (
    <section
      // aria-label="Великий вибір страв з мангалу та тандира"
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 'std',
        md: {
          flexDirection: 'column-reverse',
          fontSize: 14,
        },
      })}
    >
      <h2 className={css({ padding: 'unit' })}>Великий вибір страв з мангалу та тандира</h2>
      <Image
        src={mangal}
        alt="mangal"
        className={css({
          borderBottomLeftRadius: 'std',
          borderBottomRightRadius: 'std',
          md: {
            borderBottomLeftRadius: 'unset',
            borderBottomRightRadius: 'unset',
            borderTopLeftRadius: 'std',
            borderTopRightRadius: 'std',
          },
        })}
      />
    </section>
  );
}
