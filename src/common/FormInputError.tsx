import { css } from '../../styled-system/css/css';

export default function FormInputError({ message }: { message: string }) {
  return <span className={css({ color: '#ff5858', textStyle: 'explanation' })}>{message}</span>;
}
