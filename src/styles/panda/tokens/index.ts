import { link, primary, secondary, tertiary } from '../../themes/initial/colors';
import { radius } from '../../themes/initial/radius';
import { spacing } from '../../themes/initial/spacing';

export const tokens = {
  colors: {
    primary: {
      DEFAULT: { value: primary.main },
      text: { value: primary.main },
      contrastText: { value: primary.contrastText },
    },
    secondary: {
      DEFAULT: { value: secondary.main },
      text: { value: secondary.text },
      fill: { value: secondary.fill },
    },
    link: {
      DEFAULT: { value: link.main },
    },
    tertiary: {
      DEFAULT: { value: tertiary.main },
    },
  },
  spacing: {
    box: { value: spacing.box + 'px' },
    item: { value: spacing.item + 'px' },
    unit: { value: spacing.unit + 'px' },
    bleed: { value: spacing.bleed + 'px' },
  },
  radii: {
    std: { value: radius.std + 'px' },
  },
};
