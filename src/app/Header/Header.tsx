import { Fragment } from 'react';
import { css } from '../../../styled-system/css/css';
import Image from 'next/image';

import logo from './images/logo.png';
import pg14 from './images/pg1-4.jpg';
import pg2 from './images/pg2.jpg';
import pg35 from './images/pg3-5.jpg';
import grapes from './images/grapes1.png';
import instagram from './images/instagram.png';

export default function Header() {
  return (
    <header
      className={css({
        marginLeft: '-bleed !important',
        marginRight: '-bleed !important',
        backgroundColor: '#1a1a1a',
      })}
    >
      <div
        className={css({ height: 25, stack: 'row' })}
        // className={css({
        //   height: 25,
        //   backgroundImage: `url("/images/grapes1.png")`,
        //   backgroundSize: 'contain',
        //   backgroundPositionY: 'y-start',
        // })}
      >
        {new Array(25).fill('').map((el, i) => (
          <img key={i} src={grapes.src} alt="гранат" />
        ))}
      </div>
      <div className={css({ height: 60, columnGap: 'box', stack: 'row' })}>
        {new Array(8).fill('').map((el, i) => (
          <Fragment key={i}>
            <img src={pg14.src} alt="гранат" />
            <img src={pg2.src} alt="гранат" />
            <img src={pg35.src} alt="гранат" />
            <img src={pg14.src} alt="гранат" />
            <img src={pg35.src} alt="гранат" />
          </Fragment>
        ))}
      </div>
      <div
        className={css({
          margin: '0 auto',
          maxWidth: '1200px',
          md: {
            stack: 'row',
            alignItems: 'center',
          },
        })}
      >
        <h1
          className={css({
            padding:
              'token(spacing.item) token(spacing.bleed) token(spacing.bleed) token(spacing.bleed)',
            md: {
              paddingLeft: 'box',
            },
          })}
        >
          <img src={logo.src} alt="ресторан Ярославський" className={css({ margin: '0 auto' })} />
        </h1>
        <div
          className={css({
            marginBottom: 'box',
            textAlign: 'center',
            color: 'white',
            md: { marginLeft: 'auto', marginBottom: 'unset', paddingRight: 'box' },
          })}
        >
          <address>
            <a href="http://www.google.com/maps/place/Ресторан+Ярославский,+вулиця+Ярославська,+17,+Харків,+Харківська+область,+61000/@49.9885627,36.2191772,17z/data=!4m14!1m7!3m6!1s0x4127a0f85a5c79d5:0x3d9264849d183154!2z0YPQuy4g0K_RgNC-0YHQu9Cw0LLRgdC60LDRjywgMTcsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!8m2!3d49.9885627!4d36.2191772!16s%2Fg%2F1td5ptql!3m5!1s0x4127a172286c8fe3:0xed62e4e7347735f7!8m2!3d49.9885627!4d36.2191772!16s%2Fg%2F11d_8gs_ml?g_ep=Eg1tbF8yMDI1MDcxNF8wIJvbDyoASAJQAg%3D%3D">
              вул. Ярославська, 17б, м. Харків
            </a>
          </address>
          <div className={css({ stack: 'row', justifyContent: 'center' })}>
            <div className={css({ whiteSpace: 'nowrap' })}>
              <a href="tel:+380687122601" className={css({ whiteSpace: 'nowrap' })}>
                (068) 712 - 2601
              </a>
              ,{' '}
            </div>{' '}
            <a href="tel:+380737122601" className={css({ whiteSpace: 'nowrap' })}>
              &nbsp;(073) 712 - 2601
            </a>
            &nbsp;
            <a href="https://www.instagram.com/restoran_yaroslavskiy">
              <Image src={instagram} width={20} height={20} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
