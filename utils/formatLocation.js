export const formatLocation = (location) => {
  const fullName = location;
  const city = fullName.split("/")[1];
  const name = city.replace("_", " ");

  return name;
};
