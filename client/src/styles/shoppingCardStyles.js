export default (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    minHeight: 'fit-content',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    height: '70%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      height: '100%',
    },
  },
  media: {
    width: '40%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '20%',
    },
  },
  cardTop: {
    width: '60%',
    height: '50%',
    minHeight: 'fit-content',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  description: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  contentBottom: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      width: '40%',
      height: '100%',
    },
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 1em',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      height: '100%',
    },
  },
  cuantity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-evenly',
    },
  },
});
