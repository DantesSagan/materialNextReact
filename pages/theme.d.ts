import { ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    // palette: {
    //   neutral?: {
    //     main: string;
    //   };
    // };
  }

  interface ThemeOprtions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PalletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface PaletteColor {
    darker?: string;
  }
}
