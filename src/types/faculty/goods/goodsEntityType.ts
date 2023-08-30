import { Id } from "@/types/id";

/**
 * 商品の種別を表す。
 * 例: 食品、エンターテインメントなど
 */
type GoodsEntityType = {
  name: string;
  id: Id;
  icon: string;
  description: string;
};

export type { GoodsEntityType };
