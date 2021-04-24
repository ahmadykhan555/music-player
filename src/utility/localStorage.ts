export const initLocalStorage = () => {
  if (!getFromLocalStorage(LocalStorageKeys.LikedSongsList)) {
    saveInLocalStorage(LocalStorageKeys.LikedSongsList, {});
  }
};

export const saveInLocalStorage = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};

export enum LocalStorageKeys {
  LikedSongsList = "likedSongsList",
}
