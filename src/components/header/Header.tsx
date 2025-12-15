import baulble from "../../assets/bauble.png";
import mistletoe from "../../assets/mistletoe2.png";
import { AppHeader } from "./Header.styled";

function Header() {
  return (
    <AppHeader>
      <img src={mistletoe} alt="Imagem decorativa de folha de natal" />
      <h1>Gerador de Cartões de Natal Personalizados</h1>
      <img src={baulble} alt="Imagem decorativa de bola de natal" />
    </AppHeader>
  );
}

export default Header;
