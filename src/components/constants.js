export const eventColor = {
  colorOne: "#D7BDE2",
  colorTwo: "#F5B7B1",
  colorThree: "#AED6F1",
  colorFour: "#A3E4D7",
  colorFive: "#FCF3CF",
  colorSix: "#F5CBA7",
  colorSeven: "#BFC9CA",
  colorEight: "#A2D9CE",
};

export const getMyEventColor = (interval) => {
  if (interval === "01" || interval === "23") {
    return  eventColor.colorOne;
  } else if (interval === "01" || interval === "23") {
    return  eventColor.colorTwo;
  } else if (interval === "02" || interval === "22") {
    return  eventColor.colorThree;
  } else if (interval === "03" || interval === "21") {
    return  eventColor.colorFour;
  } else if (interval === "04" || interval === "20") {
    return  eventColor.colorFive;
  } else if (interval === "05" || interval === "19") {
    return  eventColor.colorSix;
  } else if (interval === "06" || interval === "18") {
    return  eventColor.colorSeven;
  } else if (interval === "07" || interval === "17") {
    return  eventColor.colorEight;
  } else if (interval === "08" || interval === "16") {
    return  eventColor.colorSix;
  } else if (interval === "09" || interval === "14") {
    return  eventColor.colorTwo;
  } else if (interval === "10" || interval === "13") {
    return  eventColor.colorFive;
  } else {
    return  eventColor.colorOne;
  }
};
