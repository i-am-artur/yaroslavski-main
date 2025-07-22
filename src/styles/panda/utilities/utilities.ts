import { properties } from './properties';

export const utilities = {
  ...properties,
  extend: {
    stack: {
      values: ['row', 'column'],
      transform(value: 'row' | 'column') {
        return { display: 'flex', flexDirection: value };
      },
    },
    place: {
      values: ['absoluteMiddle'],
      transform(value: string) {
        if (value === 'absoluteMiddle') {
          return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          };
        }

        return {};
      },
    },
  },
};
