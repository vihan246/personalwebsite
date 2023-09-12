const dayjs = require("dayjs");
const _ = require("lodash");
export default class Information {
  constructor({
    title,
    type,
    startDate,
    endDate,
    shortDescription,
    link,
    additionalLinks = undefined,
  }) {
    this.title = title;
    this.type = type;
    this.startDate = dayjs(startDate, "DD-MM-YYYY").format("MMM YYYY");
    this.endDate = dayjs(endDate, "DD-MM-YYYY").format("MMM YYYY");
    this.shortDescription = shortDescription;
    this.link = link;
    if (additionalLinks) {
      this.additionalLinks = _.map(additionalLinks, (item) => {
        return { display: item.display, link: item.link };
      });
    }
  }
}
