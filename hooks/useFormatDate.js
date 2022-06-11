import { useState, useEffect } from "react";

const useFormatDate = (date) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    dateFormat();
  }, []);

  const dateFormat = () => {
    const formatDate = date ? new Date(date * 1000) : new Date();
    const dateParts = formatDate.toDateString().split(" ");
    const formatted = `${dateParts[0].toString()}. ${dateParts[2].toString()} ${dateParts[1].toString()}`;
    setFormattedDate(formatted);
  };
  return formattedDate;
};

export default useFormatDate;
