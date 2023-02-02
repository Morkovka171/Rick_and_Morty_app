type CharacterType = {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown"; 
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export default CharacterType;
