import get from "lodash/get";
import { PropertyRequest } from "@/types/property.type";
import api from "../api";

export const getProperty = async (params: PropertyRequest) => {
  const response = await api.get(`/property/content`, {
    params,
  });

  const result = get(response, "data", {});
  const resultKeys = Object.keys(get(response, "data", {}));
  return resultKeys.length ? result[resultKeys[0]] : {};
};
