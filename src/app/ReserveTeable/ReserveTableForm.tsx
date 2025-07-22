import { css } from '../../../styled-system/css/css';

export default function ReserveTableForm() {
  return (
    <form
      className={css({
        marginTop: 'box',
        width: '100%',
        stack: 'column',
        rowGap: 'unit',
        md: {
          marginTop: 0,
        },
      })}
    >
      <input name="name" placeholder="Ім'я *" required />

      <input type="tel" name="phone" placeholder="Телефон *" required />

      <input type="email" name="email" placeholder="Електронна пошта" />

      <input name="NumberOfGuests" placeholder="Кількість гостей" />

      <input name="date" placeholder="Дата" />

      <input name="time" placeholder="Обрати час" />

      <button
        type="submit"
        className={css({
          backgroundColor: '#f0c040',
          color: '#3b3127',
          padding: 'token(spacing.unit)',
          borderRadius: 'std',
          cursor: 'pointer',
        })}
      >
        Забронювати
      </button>
    </form>
  );
}
