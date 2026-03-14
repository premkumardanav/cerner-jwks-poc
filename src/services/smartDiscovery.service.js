import axios from "axios";
import { CERNER } from "../constants/cerner.js";

export async function getSmartConfiguration() {
  const { data } = await axios.get(CERNER.smartConfigUrl, {
    headers: { Accept: "application/json" },
  });
  return data;
}
