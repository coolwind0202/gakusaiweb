import { Faculty } from "./faculty";
import { GoodsEntity } from "./goods/goodsEntity";

type Shop = {
  faculty: Faculty;
  goodsEntities: GoodsEntity[];
};

export type { Shop };
