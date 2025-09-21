import { css } from '../../../styled-system/css/css';
import ReserveTableForm from './ReserveTableForm';
import reserve from './reserve1.gif';
import Image from 'next/image';

export default function ReserveTable() {
  return (
    <section
      className={css({
        padding: 'token(spacing.box) token(spacing.bleed)',
        stack: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#3b3127',
        borderRadius: 'std',
        md: {
          padding: 'box',
        },
      })}
    >
      <h2 className={css({ textAlign: 'center', fontSize: 24, fontWeight: 'bold' })}>
        Забронюйте стіл
      </h2>
      <p className={css({ textAlign: 'center', fontWeight: 'bold' })}>У зручний для себе час!</p>
      <hr className={css({ width: 15, margin: 'token(spacing.unit) auto' })} />
      <div
        className={css({
          margin: '0 auto',
          width: '100%',
          maxWidth: 200,
          stack: 'row',
          alignItems: 'center',
          color: 'white',
        })}
      >
        <span className={css({ whiteSpace: 'nowrap' })}>Пн - Нд</span>
        <span
          className={css({
            flex: 1,
            borderBottom: '1px dashed #fff',
            margin: '0 token(spacing.unit)',
            height: 0,
            minWidth: 10,
          })}
        />
        <span className={css({ whiteSpace: 'nowrap' })}>11:00 - 21:00</span>
      </div>
      <div
        className={css({
          width: '100%',
          md: {
            marginTop: 'box',
            width: '100%',
            stack: 'row',
            columnGap: 'box',
          },
        })}
      >
        <div
          className={css({
            display: 'none',
            position: 'relative',
            md: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '1 0 40%',
            },
            lg: { flex: '1 0 50%' },
          })}
        >
          <Image
            src={reserve}
            alt="офіціант"
            // fill
            className={css({ width: '100%', height: 'auto', maxWidth: 300 })}
          />
        </div>
        {/* <ul className={css({ width: '100%', fontSize: 12 })}>
          {workingHours.map((item) => (
            <li
              key={item.day}
              className={css({
                display: 'flex',
                alignItems: 'center',
                marginBottom: 'unit',
              })}
            >
              <span className={css({ color: 'white', whiteSpace: 'nowrap' })}>{item.day}</span>
              <span
                className={css({
                  flex: 1,
                  borderBottom: '1px dashed #fff',
                  margin: '0 token(spacing.unit)',
                  height: 0,
                  minWidth: 10,
                })}
              />
              <span className={css({ color: 'white', whiteSpace: 'nowrap' })}>{item.time}</span>
            </li>
          ))}
        </ul> */}

        <ReserveTableForm />
      </div>
    </section>
  );
}
