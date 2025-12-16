import { useState } from "react";
import type { FontFamily } from "../components/main/Main";
import type { CardType } from "../components/main/Main";
import { defaultFontByCard } from "../constants/defaultFontByCard";

export function useFont(initialCard: CardType) {
  const [font, setFont] = useState<FontFamily>(
    defaultFontByCard[initialCard]
  );

  function changeFontByCard(card: CardType) {
    setFont(defaultFontByCard[card]);
  }

  function changeFontManually(font: FontFamily) {
    setFont(font);
  }

  return {
    font,
    changeFontByCard,
    changeFontManually,
  };
}
