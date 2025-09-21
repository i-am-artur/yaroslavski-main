'use client';
import { type FormEvent, useState } from 'react';
import { css } from '../../../styled-system/css/css';
import FormInputError from '@/common/FormInputError';
import { telegramMessage } from '@/services/service';

const initReserveTableFormErrors = {
  name: '',
  phone: '',
  NumberOfGuests: '',
  date: '',
  time: '',
};

export default function ReserveTableForm() {
  const [reserveTableFormErrors, setReserveTableFormErrors] = useState(initReserveTableFormErrors);
  const [isReserved, setIsReserved] = useState(false);
  const [isReserveError, setIsReserveError] = useState(false);

  async function reserveTable(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const reserveTableFormErrorsMessages = {
      name: formData.get('name') ? '' : "Ім'я обов'язкове",
      phone: formData.get('phone') ? '' : "Телефон обов'язковий",
      NumberOfGuests: formData.get('NumberOfGuests') ? '' : "Кількість гостей обов'язкова",
      date: formData.get('date') ? '' : "Дата обов'язкова",
      time: formData.get('time') ? '' : "Час обов'язковий",
    };

    const hasErrorsReserveTableForm = Object.values(reserveTableFormErrorsMessages).some(
      (message) => message !== '',
    );

    if (hasErrorsReserveTableForm) {
      setReserveTableFormErrors(reserveTableFormErrorsMessages);
      return;
    }

    const reserveTableResponse = await telegramMessage(`
Бронювання столика:
Ім'я: ${formData.get('name')}
Телефон: ${formData.get('phone')}
Електронна пошта: ${formData.get('email') || ''}
Кількість гостей: ${formData.get('NumberOfGuests')}
Дата: ${formData.get('date')}
Час: ${formData.get('time')}
        `);

    if (reserveTableResponse.ok) {
      setIsReserved(true);
      setIsReserveError(false);
    } else {
      setIsReserved(false);
      setIsReserveError(true);
    }
  }

  return (
    <>
      {!isReserved && !isReserveError && (
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
          onSubmit={reserveTable}
        >
          <div>
            <input name="name" placeholder="Ім'я *" />
            {reserveTableFormErrors.name && (
              <FormInputError message={reserveTableFormErrors.name} />
            )}
          </div>

          <div>
            <input type="tel" name="phone" placeholder="Телефон *" />
            {reserveTableFormErrors.phone && (
              <FormInputError message={reserveTableFormErrors.phone} />
            )}
          </div>

          <input type="email" name="email" placeholder="Електронна пошта" />

          <div>
            <input name="NumberOfGuests" placeholder="Кількість гостей *" type="number" />
            {reserveTableFormErrors.NumberOfGuests && (
              <FormInputError message={reserveTableFormErrors.NumberOfGuests} />
            )}
          </div>

          <div>
            <input name="date" placeholder="Дата *" />
            {reserveTableFormErrors.date && (
              <FormInputError message={reserveTableFormErrors.date} />
            )}
          </div>

          <div>
            <input name="time" placeholder="Обрати час *" />
            {reserveTableFormErrors.time && (
              <FormInputError message={reserveTableFormErrors.time} />
            )}
          </div>

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
      )}
      {isReserved && (
        <div
          className={css({
            padding: 'box',
            width: '100%',
            textAlign: 'center',
            color: 'green',
            backgroundColor: '#f7e3e3',
          })}
        >
          Дякуємо! Ваш столик заброньовано.
        </div>
      )}
      {isReserveError && (
        <div
          className={css({
            padding: 'box',
            width: '100%',
            textAlign: 'center',
            color: 'red',
            backgroundColor: '#f7e3e3',
          })}
        >
          Виникла помилка при бронюванні столика. Будь ласка, спробуйте ще раз.
        </div>
      )}
    </>
  );
}
