const Time = {
  format: (date) => {
    const hours = Time.formatHour(date.getHours()),
      minutes = date.getMinutes(),
      second = date.getSeconds();

    return `${hours}:${Time.formatSegment(minutes)}`;
  },
  formatHour: (hours) => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment) => {
    return segment < 10 ? `0${segment}` : segment;
  },
};

export default Time;
