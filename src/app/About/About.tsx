import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import mainDish from './mainDish.jpg';

export default function About() {
  return (
    <section
      aria-label="унікальні страви авторської кухні"
      className={css({
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 'std',
        lg: {
          stack: 'row',
        },
      })}
    >
      <Image
        src={mainDish}
        alt="оригінальні гастрономічні ідеї"
        className={css({
          width: '100%',
          // display: 'block',
          borderTopLeftRadius: 'std',
          borderTopRightRadius: 'std',
          md: {
            flex: '1 0 50%',
            borderTopLeftRadius: 'std',
            borderTopRightRadius: 'unset',
            borderBottomLeftRadius: 'std',
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
        <p>
          Відкрийте для себе унікальні страви авторської кухні, які ви не знайдете більше ні в
          одному ресторані міста.
        </p>
        <br />
        {/* <p>
          Гастрономічні ідеї з теплом і щедрістю кавказької гостинності, щоб кожен ваш візит став
          особливою подією.
        </p> */}
        <p>
          Ми поєднали оригінальні гастрономічні ідеї з теплом і щедрістю кавказької гостинності, щоб
          кожен ваш візит став особливою подією.
        </p>
      </div>
    </section>
  );
}
