type QuestCharactersType = "Rick" | "Jerry" | "Morty" | "Summer";

type QuestVariantsType = {
  id: number;
  step: string;
  question: string;
  answers: {
    character: QuestCharactersType;
    text: string;
  }[];
};

export default QuestVariantsType;
