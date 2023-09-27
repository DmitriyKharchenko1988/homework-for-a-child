import {Priority} from "./Priority";
import {Category} from "./Category";
// import Date from "$GLOBAL$";

export class Task {
  id: number;
  title: string;
  complete: boolean;
  priority?: Priority;
  category?: Category
  date?: Date;

  constructor(id: number, title: string, complete: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.title = title;
    this.complete = complete;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
