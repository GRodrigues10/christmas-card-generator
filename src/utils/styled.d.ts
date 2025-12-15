import "styled-components";
import type { MyTheme } from "../theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}