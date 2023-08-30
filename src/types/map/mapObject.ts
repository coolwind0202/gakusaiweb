import { Id } from "../id";
import { Position } from "./position";

/**
 * マップ上のオブジェクト情報を表します
 */
type MapObject = {
  id: Id;
  name: string;
  /*
    位置情報
  */
  position: Position;
};

export type { MapObject };
