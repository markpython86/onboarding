export interface Option {
  id: number;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: Option[];
  createdAt: Date;
}
