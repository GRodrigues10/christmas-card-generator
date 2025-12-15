// theme.d.ts ou dentro de theme.ts

export interface ThemeColors {
  background: string;
  cardBackground: string;
  cardBackgroundSoft: string;
  border: string;
  title: string;
  text: string;
  textSecondary: string;
  button: string;
  buttonHover: string;
  red: string;
  gold: string;
  white: string;
}

export interface ThemeFonts {
  title: string;
  text: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}


