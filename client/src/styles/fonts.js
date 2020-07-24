import ItimRegularTtf from '../assets/fonts/Itim/Itim-Regular.ttf';
import SignikaBoldTtf from '../assets/fonts/Signika/Signika-Bold.ttf';
import SignikaLightTtf from '../assets/fonts/Signika/Signika-Light.ttf';
import SignikaMediumTtf from '../assets/fonts/Signika/Signika-Medium.ttf';
import SignikaRegularTtf from '../assets/fonts/Signika/Signika-Regular.ttf';
import SignikaSemiBoldTtf from '../assets/fonts/Signika/Signika-SemiBold.ttf';

const itim = {
  fontFamily: 'Itim',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Itim'),
    local('Itim-Regular'),
    url(${ItimRegularTtf})
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const signikaBold = {
  fontFamily: 'Signika',
  fontStyle: 'bold',
  fontWeight: '700',
  src: `
    local('Signika'),
    local('Signika-Bold'),
    url(${SignikaBoldTtf})
  `,
};
const signikaSemiBold = {
  fontFamily: 'Signika',
  fontStyle: 'semi-bold',
  fontWeight: '600',
  src: `
    local('Signika'),
    local('Signika-SemiBold'),
    url(${SignikaSemiBoldTtf})
  `,
};
const signikaLight = {
  fontFamily: 'Signika',
  fontStyle: 'light',
  fontWeight: '300',
  src: `
    local('Signika'),
    local('Signika-Light'),
    url(${SignikaLightTtf})
  `,
};
const signikaMedium = {
  fontFamily: 'Signika',
  fontStyle: 'medium',
  fontWeight: '500',
  src: `
    local('Signika'),
    local('Signika-Medium'),
    url(${SignikaMediumTtf})
  `,
};
const signika = {
  fontFamily: 'Signika',
  fontStyle: 'regular',
  fontWeight: '400',
  src: `
    local('Signika'),
    local('Signika-Regular'),
    url(${SignikaRegularTtf})
  `,
};

const fonts = [
  itim,
  signikaBold,
  signikaSemiBold,
  signikaLight,
  signikaMedium,
  signika,
];
export default fonts;
