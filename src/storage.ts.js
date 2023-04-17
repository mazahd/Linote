const defaultStorage = {
  count: 0
};
export const storage = {
  get: () => chrome.storage.sync.get(defaultStorage),
  set: (value) => chrome.storage.sync.set(value)
};
