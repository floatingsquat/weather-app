export const getWindDirection = (degree) => {
  let text;

  if (degree >= 349 && degree <= 12) {
    text = "N";
  } else if (degree >= 13 && degree <= 33) {
    text = "NNE";
  } else if (degree >= 34 && degree <= 56) {
    text = "NE";
  } else if (degree >= 57 && degree <= 78) {
    text = "ENE";
  } else if (degree >= 79 && degree <= 101) {
    text = "E";
  } else if (degree >= 102 && degree <= 123) {
    text = "ESE";
  } else if (degree >= 124 && degree <= 146) {
    text = "SE";
  } else if (degree >= 147 && degree <= 168) {
    text = "SSE";
  } else if (degree >= 169 && degree <= 191) {
    text = "S";
  } else if (degree >= 192 && degree <= 213) {
    text = "SSW";
  } else if (degree >= 214 && degree <= 236) {
    text = "SW";
  } else if (degree >= 237 && degree <= 258) {
    text = "WSW";
  } else if (degree >= 259 && degree <= 281) {
    text = "W";
  } else if (degree >= 282 && degree <= 303) {
    text = "WNW";
  } else if (degree >= 304 && degree <= 326) {
    text = "NW";
  } else if (degree >= 327 && degree <= 348) {
    text = "NNW";
  }

  return text;
};
