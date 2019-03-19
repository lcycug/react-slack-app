import devKeys from "./devKeys";
import prodKeys from "./prodKeys";

export default (process.env.NODE_ENV === "production" ? prodKeys : devKeys);
