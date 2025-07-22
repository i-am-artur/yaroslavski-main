import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  pageHeading: {
    description: 'Used in page headings',
    value: {
      fontWeight: 'bold',
      fontSize: '14px',
    },
  },
  explanation: {
    description: 'hint text',
    value: {
      fontSize: '12px',
    },
  },
});
