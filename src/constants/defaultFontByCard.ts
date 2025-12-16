import type { CardType } from "../components/main/Main";
import type { FontFamily } from "../components/main/Main";

export const defaultFontByCard: Record<CardType, FontFamily> = {
  classico: "ClassicFont",
  minimalista: "MinimalFont",
  engracado: "FunnyFont",
};