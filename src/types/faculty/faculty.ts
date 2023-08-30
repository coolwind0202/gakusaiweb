import { Congestion } from "./congestion";
import { FacultyType } from "./facultyType";
import { MapObject } from "../map/mapObject";

type Faculty = {
  mapobj: MapObject;
  facultyTypes: FacultyType[];
  images: string[];
  congestion: Congestion;
  description: string;
};

export type { Faculty };
