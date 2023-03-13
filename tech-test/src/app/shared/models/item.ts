// import { uuid } from "uuidv4";

export interface Item {
  id: string;
  label: string;
  description: string;
  category: string;
  done?: boolean;
}
