import {
  AppMain,
  BackgroundColorDisplay,
  ClassicCard,
  ColorsButton,
  FontDisplay,
  FontSizeDisplay,
  FontTypeDisplay,
  FunnyCard,
  IconsDisplay,
  ImgDisplay,
  MainContentDisplay,
  MainContentPreview,
  MainHeader,
  MinimalCard,
  TextColorDisplay,
  TextDisPlay,
} from "./Main.styled";

import christimasTree from "../../assets/christmas-tree.png";
import snowman from "../../assets/snowman.png";
import star from "../../assets/star.png";
import reindeer from "../../assets/reindeer.png";
import { useState } from "react";
import { useFontSize } from "../../hooks/usefontSize";
import { useFont } from "../../hooks/useFontFamily";

export type CardType = "classico" | "minimalista" | "engracado";

export type FontFamily =
  | "ClassicFont"
  | "MinimalFont"
  | "FunnyFont"
  | "serif"
  | "sans-serif"
  | "monospace"
  | "cursive"
  | "fantasy"
  | "Verdana"
  | "Georgia"
  | "Courier New";

type CSSVars = React.CSSProperties & {
  "--bg-color"?: string;
  "--text-color"?: string;
  "--font-size"?: string;
  "--font-family"?: string;
};

function Main() {
  const [text, setText] = useState("Feliz Natal");
  const [sectionCard, setSectionCard] = useState<CardType>("classico");
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("#8B0000");
  const [changeTextColor, setChangeTextColor] = useState("#F3B950");
  const [snowDots, setSnowDots] = useState(generateSnowDots());
  const { fontSize, changeFontSize } = useFontSize(36);

  const { font, changeFontByCard, changeFontManually } = useFont(sectionCard);

  const cardStyle: CSSVars = {
    "--bg-color": changeBackgroundColor,
    "--text-color": changeTextColor,
    "--font-size": `${fontSize}px`,
    "--font-family": font,
  };

  function generateSnowDots(amount = 60) {
    return Array.from({ length: amount }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }

  function changeSection(cardType: CardType) {
    setSectionCard(cardType);
    changeFontByCard(cardType);
  }

  const cards: CardType[] = ["classico", "minimalista", "engracado"];

  return (
    <AppMain>
      <MainContentDisplay>
        <MainHeader>
          {cards.map((card) => (
            <p
              key={card}
              onClick={() => changeSection(card)}
              className={sectionCard === card ? "active" : ""}
            >
              {card === "classico"
                ? "Clássico"
                : card === "minimalista"
                ? "Minimalista"
                : "Engraçado"}
            </p>
          ))}
        </MainHeader>

        <ColorsButton>
          <BackgroundColorDisplay>
            <p>Cor do Fundo</p>
            <input
              type="color"
              defaultValue={changeBackgroundColor}
              onChange={(e) => setChangeBackgroundColor(e.target.value)}
            />
          </BackgroundColorDisplay>

          <TextColorDisplay>
            <p>Cor do Texto</p>
            <input
              type="color"
              defaultValue={changeTextColor}
              onChange={(e) => setChangeTextColor(e.target.value)}
            />
          </TextColorDisplay>
        </ColorsButton>

        <TextDisPlay>
          <p>Texto do Cartão</p>
          <input
            type="text"
            placeholder="Digite o texto..."
            onChange={(e) => setText(e.target.value)}
            maxLength={30}
          />
        </TextDisPlay>

        <FontDisplay>
          <FontTypeDisplay>
            <p>Fonte</p>
            <select
              value={font}
              onChange={(e) => changeFontManually(e.target.value as FontFamily)}
            >
              <option value="ClassicFont">Clássica</option>
              <option value="MinimalFont">Minimalista</option>
              <option value="FunnyFont">Engraçada</option>
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-Serif</option>
              <option value="cursive">Cursive</option>
              <option value="monospace">Monospace</option>
              <option value="fantasy">Fantasy</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
            </select>
          </FontTypeDisplay>

          <FontSizeDisplay>
            <p>Tamanho</p>
            <select
              value={fontSize}
              onChange={(e) => changeFontSize(Number(e.target.value))}
            >
              <option value={16}>16</option>
              <option value={18}>18</option>
              <option value={20}>20</option>
              <option value={22}>22</option>
              <option value={24}>24</option>
              <option value={26}>26</option>
              <option value={28}>28</option>
              <option value={30}>30</option>
              <option value={32}>32</option>
              <option value={34}>34</option>
              <option value={36}>36</option>
              <option value={38}>38</option>
              <option value={40}>40</option>
            </select>
          </FontSizeDisplay>
        </FontDisplay>

        <IconsDisplay>
          <ImgDisplay>
            <img src={christimasTree} alt="ícone da Árvore" />
          </ImgDisplay>

          <ImgDisplay>
            <img src={reindeer} alt="ícone da Rena" />
          </ImgDisplay>

          <ImgDisplay>
            <img src={snowman} alt="Ícone do Boneco de Neve" />
          </ImgDisplay>

          <ImgDisplay>
            <img src={star} alt="Ícone da Estrela" />
          </ImgDisplay>

          <button onClick={() => setSnowDots(generateSnowDots())}>
            Recriar Neve
          </button>
        </IconsDisplay>
      </MainContentDisplay>

      <MainContentPreview>
        {sectionCard === "classico" && (
          <ClassicCard style={cardStyle}>
            <div className="img">
              <div className="snow">
                {snowDots.map((dot, i) => (
                  <span
                    key={i}
                    style={{
                      top: dot.top,
                      left: dot.left,
                      opacity: dot.opacity,
                    }}
                  />
                ))}
              </div>
              <h2>{text}</h2>
            </div>
          </ClassicCard>
        )}

        {sectionCard === "minimalista" && (
          <MinimalCard style={cardStyle}>
            <div className="img">
              <h2>{text}</h2>
            </div>
          </MinimalCard>
        )}

        {sectionCard === "engracado" && (
          <FunnyCard style={cardStyle}>
            <div className="img">
              <img src={reindeer} alt="Imagem de Rena de Natal" />
              <h2>{text}</h2>
            </div>
          </FunnyCard>
        )}

        <button>Baixar Cartão</button>
      </MainContentPreview>
    </AppMain>
  );
}

export default Main;
