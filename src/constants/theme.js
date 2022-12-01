export const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#fff',
    accent: '#fff',
    highlight: '#fff',
    muted: '#fff',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64],
  buttons: {
    good: {
      backgroundColor: '#119b18',
      width: '130px',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 10px',
      transition: 'all 250ms linear',
      '&:hover': {
        backgroundColor: '#0b610f',
      },
    },
    neutral: {
      backgroundColor: '#3428e0',
      width: '130px',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 10px',
      transition: 'all 250ms linear',
      '&:hover': {
        backgroundColor: '#211a87',
      },
    },
    bad: {
      backgroundColor: '#d62626',
      width: '130px',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 10px',
      transition: 'all 250ms linear',
      '&:hover': {
        backgroundColor: '#851818',
      },
    },
  },
};
