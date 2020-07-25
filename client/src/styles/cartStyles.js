export default (theme) => ({
  root: {
    width: '100%',
  },
  top: {
    display: 'flex',
    padding: '1em',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    width: '100%',
    padding: 0,
  },
  listItem: {
    height: '380px',
    width: '100%',
    margin: '1em 0',
    [theme.breakpoints.up('md')]: {
      height: '140px',
      margin: '1em',
    },
  },
  filterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '1rem',
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  link: {
    padding: '0 1em',
  },
  bottom: {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.up('md')]: {
      padding: '0 1em 1em 0',
    },
  },
});
