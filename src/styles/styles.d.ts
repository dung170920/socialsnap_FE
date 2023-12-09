import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: number;
    boxShadow: {
      primary: string;
    };
    colors: {
      primary: string;
      scrollbar: string;
      background: string;
      card: string;
      text: string;
      border: string;
      // info: string;
      // warning: string;
      // error: string;
      // success: string;
    };
  }
}
