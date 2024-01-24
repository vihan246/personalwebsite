const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
const _ = require("lodash");
const { nanoid } = require("nanoid");
export default class Information {
  constructor({
    title,
    type,
    startDate,
    endDate,
    shortDescription,
    link,
    tags = undefined,
    additionalLinks = undefined,
    logo = undefined,
  }) {
    this.id = nanoid(4);
    this.title = title;
    this.type = type;
    this.startDate = dayjs(startDate, "MM-DD-YYYY").format("MMM YYYY");
    this.endDate =
      endDate === "Present"
        ? "Present"
        : dayjs(endDate, "MM-DD-YYYY").format("MMM YYYY");
    this.shortDescription = shortDescription;
    this.link = link;
    if (tags) {
      this.tags = _.map(tags, (item) => {
        return { id: nanoid(4), display: item };
      });
    }
    if (additionalLinks) {
      this.additionalLinks = _.map(additionalLinks, (item) => {
        return { id: nanoid(4), display: item.display, link: item.link };
      });
    }
    this.logo = logo;
  }
}
