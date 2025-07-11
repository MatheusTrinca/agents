export type GetQuesionsAPIResponse = Array<{
  id: string;
  question: string;
  answer: string | null;
  createdAt: string;
}>;
