import { Id } from "../../id";
import { Shop } from "../shop";
import { Allergy } from "./Allergy";

type GoodsEntity = {
  shops: Shop[];
  name: string;
  id: Id;
  count: {
    rest?: number;
  };
  images: string[];
  allergies: Allergy[];
  description: string;
};

export type { GoodsEntity };
