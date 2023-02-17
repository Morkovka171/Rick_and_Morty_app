export const filters = {
  characters: [
    {
      id: "name",
      placeholder: "Поиск по имени...",
      type: "input",
    },
    {
      id: "status",
      placeholder: "Поиск по статусу...",
      type: "select",
      variants: ['alive', 'dead', 'unknown']
    },
    {
      id: "gender",
      placeholder: "Поиск по полу...",
      type: "select",
      variants: ['male', 'female', 'genderless', 'unknown'],
    },
    // {
    //   id: "species",
    //   placeholder: "Поиск по виду...",
    //   type: "input",
    // },
  ],
  locations: [],
  episodes: [],
};
