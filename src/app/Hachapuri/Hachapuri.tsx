import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import hachapuri from './hachapuri.jpg';

export default function Hachapuri() {
  return (
    <section
      // aria-label="хачапурі"
      className={css({
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 'std',
        md: {
          // height: 'fit-content',
          fontSize: 14,
        },
      })}
    >
      <h2 className={css({ padding: 'unit' })}>Найбільший вибір хачапурі у місті</h2>
      <Image
        src={hachapuri}
        alt="хачапурі"
        className={css({
          borderBottomLeftRadius: 'std',
          borderBottomRightRadius: 'std',

          md: {
            minHeight: '198px',
            height: '100%',
            borderBottomLeftRadius: 'std',
            borderBottomRightRadius: 'std',
            // borderTopLeftRadius: 'std',
            // borderTopRightRadius: 'std',
          },
        })}
      />
    </section>
  );
}
