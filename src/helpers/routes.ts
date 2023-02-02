type TRoute = {
    name: string;
    url: string;
}

export const favoriteRoute: string = "/favorites";
export const mainRoute: string = "/";

const routes: TRoute[] = [
  { name: "Main", url: mainRoute },
  { name: "Characters", url: "/characters" },
  { name: "Locations", url: "/locations" },
  { name: "Episodes", url: "/episodes" },
  { name: "Favorites", url: favoriteRoute },
];

export default routes;