/**
 * Initializes local storage with default values if any
 */
export const initLocalStorage = () => {
  if (!getFromLocalStorage(LocalStorageKeys.LikedSongsList)) {
    saveInLocalStorage(LocalStorageKeys.LikedSongsList, {});
  }
};

/**
 *
 * @param key identifier
 * @param payload data
 */
export const saveInLocalStorage = (key: string, payload: any = "") => {
  if (!key) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(payload));
};

/**
 *
 * @param key identifier
 * @returns
 */
export const getFromLocalStorage = (key: string) => {
  if (!key || (key && !key.trim())) {
    return null;
  }
  return JSON.parse(localStorage.getItem(key) || "");
};

export enum LocalStorageKeys {
  LikedSongsList = "likedSongsList",
}
