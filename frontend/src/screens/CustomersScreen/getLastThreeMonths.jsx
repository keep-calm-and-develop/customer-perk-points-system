import { MONTHS } from "../../constants";
import subtractMonths from "./subtractMonths";

export default function getLastThreeMonths() {
    return [0, 1, 2].map((month) => MONTHS[subtractMonths(month).getMonth()]);
}
