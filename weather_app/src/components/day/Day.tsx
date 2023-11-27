import Paragraph from "ui/text/TextMain";

const day = () => {
  let day = new Date().getDay().toString();
  switch (day) {
    case "0":
      day = "Sun";
      break;
    case "1":
      day = "Mon";
      break;
    case "2":
      day = "Tue";
      break;
    case "3":
      day = "Wed";
      break;
    case "4":
      day = "Thu";
      break;
    case "5":
      day = "Fri";
      break;
    case "6":
      day = "Sat";
      break;
  }
  return day;
};

const Day = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Paragraph className="text">{`${
      "Today: " + day() + " " + currentDate
    }`}</Paragraph>
  );
};
export default Day;
