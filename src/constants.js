export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

// values are in pixels
const BREAKPOINTS = {
  phone: 600,
  tab: 950,
  laptop: 1300
}

// Reason for converting px to rem is:
// If the user de/increase the font-size from browser, appropriate layout is displayed to the user instead of big fonts and small containers
export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabAndSmaller: `(max-width: ${BREAKPOINTS.tab / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}
