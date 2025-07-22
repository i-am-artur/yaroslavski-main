import { css } from '../../styled-system/css/css';
import About from './About/About';
import Areas from './Areas/Areas';
import Banquet from './Banquet/Banquet';
import Delivery from './Delivery/Delivery';
import Discount from './Discount/Discount';
import Hachapuri from './Hachapuri/Hachapuri';
import Header from './Header/Header';
import Mangal from './Mangal/Mangal';
import Memorial from './Memorial/Memorial';
import Menu from './Menu/Menu';
import ReserveTable from './ReserveTeable/ReserveTable';

export default function Home() {
  return (
    <div
      className={css({
        marginLeft: 'bleed !important',
        marginRight: 'bleed !important',
        rowGap: 'box',
        stack: 'column',
      })}
    >
      <Header />
      <main
        className={css({
          maxWidth: '1200px',
          stack: 'column',
          rowGap: 'box',
          lg: {
            margin: '0 auto',
          },
        })}
      >
        <div
          className={css({
            stack: 'column',
            rowGap: 'inherit',
            lg: { stack: 'row', columnGap: 'item' },
          })}
        >
          <div
            className={css({
              stack: 'column',
              rowGap: 'inherit',
              sm: { width: '100%', stack: 'row', columnGap: 'item' },
            })}
          >
            <Menu />
            <Delivery />
          </div>
          <Discount />
        </div>
        <About />
        <div
          className={css({
            stack: 'column',
            rowGap: 'inherit',
            md: {
              stack: 'row',
              columnGap: 'item',
            },
          })}
        >
          <Hachapuri />
          <Mangal />
        </div>
        <Areas />
        <Banquet />
        <Memorial />
        <ReserveTable />
      </main>

      <footer className={css({ textAlign: 'center', paddingBottom: 'box', color: 'gray' })}>
        &copy; 2017 - ТОВ КАФЕ &quot;ЯРОСЛАВСЬКЕ&quot;
      </footer>
    </div>
  );
}
