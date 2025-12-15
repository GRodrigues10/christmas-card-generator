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

type CardType = "classico" | "minimalista" | "engracado";

function Main() {
  const [text, setText] = useState("Feliz Natal!");
  const [sectionCard, setSectionCard] = useState<CardType>("classico");
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("#9C3227");
  const [changeTextColor, setChangeTextColor] = useState("#F3B950");
  const [snowDots, setSnowDots] = useState(generateSnowDots());

  function generateSnowDots(amount = 60) {
    return Array.from({ length: amount }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }

  function changeSection(cardType: CardType) {
    setSectionCard(cardType);
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
              value={changeBackgroundColor}
              onChange={(e) => setChangeBackgroundColor(e.target.value)}
            />
          </BackgroundColorDisplay>

          <TextColorDisplay>
            <p>Cor do Texto</p>
            <input
              type="color"
              value={changeTextColor}
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
            <select>
              <option value="Poppins">Poppins</option>
              <option value="Roboto">Roboto</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Playfair Display">Playfair Display</option>
              <option value="Lobster">Lobster</option>
              <option value="Pacifico">Pacifico</option>
              <option value="Dancing Script">Dancing Script</option>
            </select>
          </FontTypeDisplay>

          <FontSizeDisplay>
            <p>Tamanho</p>
            <select>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="26">26</option>
              <option value="28">28</option>
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
            Refazer Neve
          </button>
        </IconsDisplay>
      </MainContentDisplay>

      <MainContentPreview>
        {sectionCard === "classico" && (
          <ClassicCard>
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
          <MinimalCard>
            <div className="img">
              <h2>{text}</h2>
            </div>
          </MinimalCard>
        )}

        {sectionCard === "engracado" && (
          <FunnyCard>
            <div className="img">
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
