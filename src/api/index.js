import products from "../json/specialproduct.json";
import Motherday from "../json/motherdayproduct.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

export const getJSON = (url) => {
  switch (url) {
    case "/Special":
      return Special;
    case "/Motherday":
      return Motherday;
    case "/tableware":
      return tableware;
    case "/lighting":
      return lighting;
    case "/cookware":
      return cookware;
    case "/furniture":
      return furniture;
    case "/home-accessories":
      return homeAccessories;
    default:
      return products;
  }
};
