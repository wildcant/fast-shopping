export default (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '98%',
    minHeight: 'fit-content',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      height: '100%',
    },
  },
  content: {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '60%',
    },
  },
  media: {
    height: '40%',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '40%',
    },
  },
  description: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
