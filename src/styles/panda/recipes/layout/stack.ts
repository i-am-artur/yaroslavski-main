import { defineRecipe } from '@pandacss/dev';

export const stack = defineRecipe({
  className: 'stack',
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  defaultVariants: {
    direction: 'column',
  },
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    rowGap: {
      box: {
        rowGap: 'box',
      },
      item: {
        rowGap: 'item',
      },
      unit: {
        rowGap: 'unit',
      },
      inherit: {
        rowGap: 'inherit',
      },
    },
    columnGap: {
      box: {
        columnGap: 'box',
      },
      item: {
        columnGap: 'item',
      },
      unit: {
        columnGap: 'unit',
      },
      inherit: {
        columnGap: 'inherit',
      },
    },
  },
});
