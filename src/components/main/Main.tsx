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

import christmasTree from "../../assets/christmas-tree.png";
import snowman from "../../assets/snowman.png";
import star from "../../assets/star.png";
import reindeer from "../../assets/reindeer.png";

import { useState, useRef } from "react";
import { useFontSize } from "../../hooks/usefontSize";
import { useFont } from "../../hooks/useFontFamily";

import { DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { DraggableImage } from "../DragabbleImage/DragabbleImage";
import * as htmlToImage from "html-to-image";

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

type DraggableEmoji = {
  id: string;
  src: string;
  position: { x: number; y: number };
};

function Main() {
  const [text, setText] = useState("Feliz Natal");
  const [sectionCard, setSectionCard] = useState<CardType>("classico");
  const [changeBackgroundColor, setChangeBackgroundColor] = useState("#8B0000");
  const [changeTextColor, setChangeTextColor] = useState("#F3B950");
  const [snowDots, setSnowDots] = useState(generateSnowDots());

  const { fontSize, changeFontSize } = useFontSize(36);
  const { font, changeFontByCard, changeFontManually } = useFont(sectionCard);

  const [christmasImgs, setChristmasImgs] = useState<DraggableEmoji[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

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

  function removeImg(id: string) {
    setChristmasImgs((prev) => prev.filter((img) => img.id !== id));
  }

  function insertImg(src: string) {
    setChristmasImgs((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        src,
        position: { x: 0, y: 0 },
      },
    ]);
  }

  function downloadCard() {
    if (!cardRef.current) return;

    htmlToImage
      .toPng(cardRef.current, { pixelRatio: 4 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "cartao.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Erro ao gerar imagem:", err));
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
              onChange={(e) =>
                changeFontManually(e.target.value as FontFamily)
              }
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
              {[16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40].map(
                (size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                )
              )}
            </select>
          </FontSizeDisplay>
        </FontDisplay>

        <IconsDisplay>
          <ImgDisplay>
            <img src={christmasTree} onClick={() => insertImg(christmasTree)} />
          </ImgDisplay>
          <ImgDisplay>
            <img src={reindeer} onClick={() => insertImg(reindeer)} />
          </ImgDisplay>
          <ImgDisplay>
            <img src={snowman} onClick={() => insertImg(snowman)} />
          </ImgDisplay>
          <ImgDisplay>
            <img src={star} onClick={() => insertImg(star)} />
          </ImgDisplay>

          <button onClick={() => setSnowDots(generateSnowDots())}>
            Recriar Neve
          </button>
        </IconsDisplay>
      </MainContentDisplay>

      <MainContentPreview>
        {(sectionCard === "classico" && (
          <ClassicCard
            style={{
              ...cardStyle,
              boxSizing: "border-box",
              padding: "10px",
              overflow: "hidden", 
              position: "relative", 
            }}
            ref={sectionCard === "classico" ? cardRef : null}
          >
            <div className="img">
              <div className="snow">
                {snowDots.map((dot, i) => (
                  <span key={i} style={dot} />
                ))}
              </div>

              <h2>{text}</h2>

              <DndContext
                modifiers={[restrictToParentElement]}
                onDragEnd={(event) => {
                  const { delta, active } = event;

                  setChristmasImgs((prev) =>
                    prev.map((img) =>
                      img.id === active.id
                        ? {
                            ...img,
                            position: {
                              x: img.position.x + delta.x,
                              y: img.position.y + delta.y,
                            },
                          }
                        : img
                    )
                  );
                }}
              >
                {christmasImgs.map((img) => (
                  <DraggableImage
                    key={img.id}
                    id={img.id}
                    src={img.src}
                    position={img.position}
                    onRemove={removeImg}
                  />
                ))}
              </DndContext>
            </div>
          </ClassicCard>
        )) ||
          (sectionCard === "minimalista" && (
            <MinimalCard
              style={{
                ...cardStyle,
                boxSizing: "border-box",
                padding: "10px",
                overflow: "hidden",
                position: "relative",
              }}
              ref={cardRef}
            >
              <div className="img">
                <div className="snow">
                  {snowDots.map((dot, i) => (
                    <span key={i} style={dot} />
                  ))}
                </div>

                <h2>{text}</h2>

                <DndContext
                  modifiers={[restrictToParentElement]}
                  onDragEnd={(event) => {
                    const { delta, active } = event;

                    setChristmasImgs((prev) =>
                      prev.map((img) =>
                        img.id === active.id
                          ? {
                              ...img,
                              position: {
                                x: img.position.x + delta.x,
                                y: img.position.y + delta.y,
                              },
                            }
                          : img
                      )
                    );
                  }}
                >
                  {christmasImgs.map((img) => (
                    <DraggableImage
                      key={img.id}
                      id={img.id}
                      src={img.src}
                      position={img.position}
                      onRemove={removeImg}
                    />
                  ))}
                </DndContext>
              </div>
            </MinimalCard>
          )) ||
          (sectionCard === "engracado" && (
            <FunnyCard
              style={{
                ...cardStyle,
                boxSizing: "border-box",
                padding: "10px",
                overflow: "hidden",
                position: "relative",
              }}
              ref={cardRef}
            >
              <div className="img">
                <div className="snow">
                  {snowDots.map((dot, i) => (
                    <span key={i} style={dot} />
                  ))}
                </div>

                <h2>{text}</h2>

                <DndContext
                  modifiers={[restrictToParentElement]}
                  onDragEnd={(event) => {
                    const { delta, active } = event;

                    setChristmasImgs((prev) =>
                      prev.map((img) =>
                        img.id === active.id
                          ? {
                              ...img,
                              position: {
                                x: img.position.x + delta.x,
                                y: img.position.y + delta.y,
                              },
                            }
                          : img
                      )
                    );
                  }}
                >
                  {christmasImgs.map((img) => (
                    <DraggableImage
                      key={img.id}
                      id={img.id}
                      src={img.src}
                      position={img.position}
                      onRemove={removeImg}
                    />
                  ))}
                </DndContext>
              </div>
            </FunnyCard>
          ))}
        <button onClick={downloadCard}>Baixar Cartão</button>
      </MainContentPreview>
    </AppMain>
  );
}

export default Main;
