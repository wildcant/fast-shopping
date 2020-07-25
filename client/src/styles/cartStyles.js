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
    height: '320px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '140px',
      padding: '1em',
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
    padding: '0 1em 1em 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
