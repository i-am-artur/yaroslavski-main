'use client';
import { type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { css } from '../../../styled-system/css/css';
import Autoplay from 'embla-carousel-autoplay';

export default function AreaCarousel({ children }: { children: ReactNode[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        '(min-width: 550px)': {
          align: 'start',
        },
        '(min-width: 899px)': {
          active: false,
        },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  return (
    <div
      ref={emblaRef}
      className={css({ overflow: 'hidden', width: '100%', backgroundColor: '#4a2626' })}
    >
      <div
        className={css({
          display: 'flex',
          lg: {
            columnGap: 'item',
          },
        })}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className={css({
              flex: '1 0 100%',
              minWidth: 0,
              backgroundColor: 'white',
              borderRadius: 'std',
              sm: {
                flex: '1 0 calc(50% - 6px)',
                marginRight: 8,
                marginLeft: 4,
              },
              lg: {
                flex: '0 1 33%',
                marginRight: 0,
                marginLeft: 0,
              },
            })}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
