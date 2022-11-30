export function setItem<T>(
  key: string,
  value: T,
  expires?: number
) {
  try {
    if (typeof value === "string" || typeof value === "number") {
      window.localStorage.setItem(key, `${value}`);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    if (expires) {
      expires = Math.abs(expires);
      const schedule = Date.now() + expires * 1000;
      window.localStorage.setItem(`${key}_exp`, schedule.toString());
    }
    return true;
  } catch (e) {
    console.log("Error: " + e);
    return false;
  }
}

export function getItem(key: string) {
  const expires = window.localStorage.getItem(`${key}_exp`);
  if (expires) {
    if (Number(expires) < Date.now()) {
      window.localStorage.removeItem(key);
      window.localStorage.removeItem(`${key}_exp`);
    }
  }
  const data = window.localStorage.getItem(key);
  if (!data) return data;
  try {
    return  JSON.parse(data);
  } catch (e) {
    return data;
  }
}

export function removeItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.log("Error: ", e);
    return false;
  }
  return true;
}
