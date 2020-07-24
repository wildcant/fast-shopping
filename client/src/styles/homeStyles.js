export default (theme) => ({
  root: {
    width: '100%',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    width: '100%',
    padding: 0,
    [theme.breakpoints.up('md')]: {
      displat: 'row',
    },
  },
  listItem: {
    height: '490px',
    width: '100%',
    padding: '1em 0',
    [theme.breakpoints.up('sm')]: {
      height: '300px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
      width: '50%',
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
});
