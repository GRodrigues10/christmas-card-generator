import type { Theme } from "../utils/types";

export const theme: Theme = {
  colors: {
    background: "#FBF2E3",          
    cardBackground: "#9D2F24",      
    cardBackgroundSoft: "#FAF1E2",  
    border: "#E8D7C5",              
    title: "#6E2B20",               
    text: "#6E2B20",                
    textSecondary: "#C68752",       
    button: "#2E6B4B",             
    buttonHover: "#275C40",         
    red: "#BF3B2C",                 
    gold: "#F3B950",                
    white: "#FFFFFF",               
  },

  fonts: {
    title: "Poppins, sans-serif",   
    text: "Poppins, sans-serif",
  },
};
export type MyTheme = typeof theme;
