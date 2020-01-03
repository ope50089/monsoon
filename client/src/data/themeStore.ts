const themeStore = {
  fixedThemeSetting: {
    mixins: {
      toolbar: {
        minHeight: 56
      }
    },
    palette: {
      primary: {
        main: 'rgba(0, 0, 0, 0.36)'
      },
      secondary: {
        main: 'rgba(0, 0, 0, 0.6)'
      },
      text: {
        primary: '#fff',
        secondary: '#fff'
      },
      background: {
        paper: 'rgba(0, 0, 0, 0.6)',
        default: '#000'
      },
      action: {
        disabled: 'rgba(255, 255, 255, 0.36)',
        disabledBackground: 'rgba(255, 255, 255, 0.36)'
      }
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      fontSize: 16
    }
  },

  optionalThemeSetting: {
    backgroundImages: [
      { img: 'qimono_0.jpg', by: 'qimono' },
      { img: '8385_0.jpg', by: '8385' },
      { img: 'ArtTower_0.jpg', by: 'ArtTower' },
      { img: 'Pixabay_0.jpg', by: 'Pixabay' },
      { img: 'Pixabay_1.jpg', by: 'Pixabay' },
      { img: 'garageband_0.jpg', by: 'garageband' }
    ]
  }
};

export default themeStore;
