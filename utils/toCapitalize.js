export const ToCapitalize = (text) => {
  const CapitalizedText = text.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );

  return CapitalizedText;
};
