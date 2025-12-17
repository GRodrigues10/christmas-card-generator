import baulble from "../../assets/bauble.png";
import mistletoe from "../../assets/mistletoe2.png";
import { AppHeader } from "./Header.styled";

function Header() {
  return (
    <AppHeader>
      <a
        href="https://www.flaticon.com/free-icon/mistletoe_9120701?term=christmas+mistletoe&page=1&position=8&origin=search&related_id=9120701"
        target="_blank"
      >
        <img src={mistletoe} alt="Imagem decorativa de folha de natal" />
      </a>
      <h1>Gerador de Cartões de Natal Personalizados</h1>
      <a
        href="https://www.flaticon.com/free-icon/bauble_2286444?term=christmas+balls&page=1&position=7&origin=search&related_id=2286444"
        target="_blank"
      >
        <img src={baulble} alt="Imagem decorativa de bola de natal" />
      </a>
    </AppHeader>
  );
}

export default Header;
