import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

/**
 *
 * @param url API endpoint
 * @returns {Promise<AxiosResponse>} promise based response
 */
export const httpGET = (url: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

/**
 *
 * @param url API endpoint
 * @param body request payload
 * @returns {Promise<AxiosResponse>} promise based response
 */
export const httpPOST = (url: string, body = {}): Promise<AxiosResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      resolve(response.data);
    } catch (e) {
      toast(e.error, { position: "bottom-right", type: "error" });
      reject(e);
    }
  });
};
