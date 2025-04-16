export type Values = {
  name: string;
  category: string;
  createdAt: string;
};

export type Product = Values & {
  id: number;
};
