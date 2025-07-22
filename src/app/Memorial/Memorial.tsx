import { css } from '../../../styled-system/css/css';
import Image from 'next/image';
import memorial from './memorial.png';

export default function Memorial() {
  return (
    <section
      aria-label="Поминки"
      className={css({
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        backgroundColor: 'white',
        borderRadius: 'std',
        md: {
          flexDirection: 'row-reverse',
        },
      })}
    >
      <Image
        src={memorial}
        alt="Поминки, свічка"
        className={css({
          borderTopLeftRadius: 'std',
          borderTopRightRadius: 'std',
          md: {
            width: '50%',
            minHeight: '200px',
            height: '100%',
            borderTopLeftRadius: 'unset',
            borderBottomLeftRadius: 'unset',
            borderTopRightRadius: 'std',
            borderBottomRightRadius: 'std',
          },
          lg: {
            width: '40%',
          },
        })}
      />
      <div className={css({ padding: 'item' })}>
        <h2> Організація поминальних обідів</h2>
        <br />
        <p>
          У важкі моменти втрати ми готові взяти на себе всі турботи щодо організації поминального
          обіду, щоб ви могли зосередитися на спогадах про близьку людину. Наша команда з розумінням
          і тактом підходить до цієї скорботної події.
        </p>
        {/* <br />
        <p>
          Ми пропонуємо спеціально розроблене меню, що включає традиційні страви, такі як кутя,
          млинці та кисіль, а також різноманітні закуски, салати, перші та основні страви
        </p> */}
      </div>
    </section>
  );
}
