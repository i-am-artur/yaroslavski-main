'use client';

import { css } from '../../styled-system/css/css';

export default function Announcemnt() {
  const curDate = new Date();
  // check if date is between 20/12 and 02/01
  const isChristmas =
    (curDate.getMonth() === 11 && curDate.getDate() >= 20) ||
    (curDate.getMonth() === 0 && curDate.getDate() <= 2);

  return (
    isChristmas && (
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          rowGap: 'unit',
          fontSize: '14px',
          border: '2px solid #f2c86c',
          borderRadius: '8px',
          padding: { md: '20px 50px', base: 15 },
          textAlign: 'center',
          backgroundColor: '#ffffff',
          maxWidth: 500,
          boxSizing: 'content-box',
          alignSelf: 'center',
        })}
      >
        <div
          className={css({
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#003a05',
          })}
        >
          Дорогі любителі смаколиків!
        </div>
        <div
          className={css({
            textAlign: 'center',
            color: '#861118',
            fontSize: 22,
          })}
        >
          Вітаємо вас із Новим роком та Різдвом!
        </div>
        <div
          className={css({
            color: '#737373',
            fontSize: 14,
          })}
        >
          Нехай олів’є завжди буде свіжим, а мандарини соковитими!
        </div>
        <hr />
        <p
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'unit',
            textAlign: 'center !important',
          })}
        >
          <div
            className={css({
              display: 'flex',
              justifyContent: 'center',
              columnGap: 'item',
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={css({
                color: '#861118',
              })}
            >
              <path d="M8 22h8"></path>
              <path d="M7 10h10"></path>
              <path d="M12 15v7"></path>
              <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
            </svg>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={css({
                color: '#861118',
              })}
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
          </div>
          З гіркою у серці та шампанським у келиху повідомляємо:
          <br />
          <span
            className={css({
              textAlign: 'center',
              color: '#861118',
              fontSize: 22,
              fontWeight: 'bold',
            })}
          >
            1 та 2 січня наш ресторан закритий!
          </span>
          <span
            className={css({
              color: '#737373',
              fontSize: 14,
            })}
          >
            Чому? Тому що навіть кухарі заслуговують право на олів’є та серіали під пледом. Ми щиро
            шкодуємо через ваш примусово голодний стан — це трагедія рівня «забув купити мандарини»!
          </span>
        </p>
        <hr />
        <p
          className={css({
            textAlign: 'center',
            color: '#003a05',
          })}
        >
          Та не сумуйте! З 3 січня ми знову раді приймати вас із розкритими обіймами (і повними
          тарелями 😊).
          <br />
          <br />
          <span
            className={css({
              textAlign: 'center',
              color: '#000000',
            })}
          >
            Приходьте — пригостимо фірмовим салатом &quot;Післясвятковий детокс&quot; зі знижкою за
            віру у наше повернення!
          </span>
        </p>
        <p
          className={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={css({
              display: 'flex',
              justifyContent: 'center',
              color: '#861118',
              fill: '#861118',
            })}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          <span
            className={css({
              textAlign: 'center',
              fontStyle: 'italic',
            })}
          >
            З любов’ю і апетитом,
          </span>
          <span
            className={css({
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#003a05',
              fontSize: 18,
            })}
          >
            Ваш ресторан &quot;Ярославський&quot;
          </span>
        </p>
      </div>
    )
  );
}
