/**
 * call PHP graphQL query
 *
 * @param {string} operationName
 * @param {string} query
 * @param {object.<string, value>} variable
 * @returns {fetch}
 */
export async function graphQL(operationName, query, variable = null) {
  let datas = { operationName: operationName, query: query, variables: variable };
  let headers = { "Cache-Control": "max-age=3600" };
  const response = await fetch_post({ url: process.env.local.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL, data: datas, header: { headers: headers, referrer: process.env.local.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL } }, {}, true);
  return response;
}

export async function graphQLPromise(operationName, query, variable = null, headers = {}) {
  return new Promise((resolve, reject) => {
    let datas = { operationName: operationName, query: query, variables: variable };
    headers = { ...{ "Cache-Control": "max-age=600" }, ...headers };
    fetch_post(
      { url: process.env.local.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL, data: datas, header: { headers: headers, referrer: process.env.local.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL } },
      {
        success: (response) => {
          resolve(response);
          setTimeout(() => {}, 5000);
        },
        error: (response) => {
          reject(response);
        },
      }
    );
  });
}

export const customLoader = ({ src }) => {
  return src.replaceAll("-scaled", "");
};

/**
 * Fetch menu by location name.
 *
 * @param {string} location - menu location
 * @param {boolean} [useCacheIf="true"] - get menu from saved cache if possible.
 * @returns {object.<string, object>}
 */
export async function getMenuByLocation(location, useCacheIf = true) {
  let menu = {};
  let menuVersion = new Date().toLocaleDateString();
  if (useCacheIf) {
    menu = getLocalStorage(menuVersion, location, menu);
    if (Object.keys(menu).length > 0) {
      return menu;
    }
  }
  let datas = `query getMenu {
    menus(where: {location: ${location}}) {
      nodes {
        menuItems {
          nodes {
            url
            id
            cssClasses
            target
            parentId
            label
          }
        }
      }
    }
  }`;
  const response = await graphQLPromise("getMenu", datas);
  if (response?.data && response?.data?.menus?.nodes?.length > 0) {
    let tmpMenus = response?.data?.menus?.nodes[0]?.menuItems?.nodes;
    for (const key in tmpMenus) {
      if (tmpMenus[key].parentId == null) {
        menu[tmpMenus[key].id] = { ...tmpMenus[key], ...{ nodes: {} } };
      } else {
        let p_ids = getItsParentIds(tmpMenus, tmpMenus[key].id);
        let refMenu = menu[p_ids[0]].nodes;
        for (let index = 1; index < p_ids.length; index++) {
          refMenu = refMenu[p_ids[index]].nodes;
        }
        refMenu[tmpMenus[key].id] = { ...tmpMenus[key], ...{ nodes: {} } };
      }
    }
  }
  if (Object.keys(menu).length > 0) {
    // setLocalStorage(menuVersion, location, menu);
  }
  return menu;
}

/**
 * get all parent ids from current level in menu
 *
 * @param Object menu
 * @param String id
 * @returns {array}
 */
function getItsParentIds(menu, id) {
  let ids = [getItsParentId(menu, id)];
  do {
    let tmp = getItsParentId(menu, ids[ids.length - 1]);
    if (tmp == null) break;
    ids.push(tmp);
  } while (true);
  return ids.reverse();
}

/**
 * get current menu parent id
 *
 * @param Object menu
 * @param String id
 * @returns {string}
 */
function getItsParentId(menu, id) {
  for (const key in menu) {
    if (id == menu[key].id && menu[key].parentId != null) {
      return menu[key].parentId;
    }
  }
}

export function CapLetters(str, allCap = false) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!allCap && i == 0) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    else if (allCap) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

/**
 * GET - Fetch function.
 * (note: async/await available)
 *
 * @param {any} config - This contains URL, Header and Data to be pass.
 * @param {string} config.url - the URL string.
 * @param {?object} config.data - key value object.
 * @param {?int} config.uid - (optional) Request ID.
 * @param {?object} config.header - key value headers list.
 * @param {?object} callbacks This information holds callback functions (Note: if await is false).
 * @param {?function} callbacks.success - This hold success function reference.
 * @param {?function} callbacks.error - This hold error function reference.
 * @param {?function} callbacks.finally - This hold finally function reference.
 * @param {boolean} isAwait Want to wait until response?
 *
 * @returns {any} if isAwait is TRUE then JSON will be returned or else callback will be called
 */
export const fetch_get = async (config, callbacks, isAwait = false) => {
  if (config?.uid && config.uid == null) {
    config.uid = getRandomInt(10000);
  }
  let x = "";
  if (config?.data && Object.keys(config?.data).length > 0)
    x = getPairs(config?.data)
      .map(([[key0, ...keysRest], value]) => `${key0}${keysRest.map((a) => `[${a}]`).join("")}=${value}`)
      .join("&");
  let search = new URL(config.url + "?" + x);
  config.url = search.href;
  const fetchObj = isAwait ? await fetchObjInit("GET", config) : fetchObjInit("GET", config);
  if (!isAwait) {
    fetchObj
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        if (callbacks.success != null) callbacks.success(data, config.uid);
      })
      .catch(function (error) {
        if (callbacks.error != null)
          callbacks.error(
            {
              status: false,
              msgs: [`Oops! Looks like it's not you, it's internet problem.`],
            },
            config.uid,
            error
          );
      })
      .finally(() => {
        if (callbacks.finally != null) callbacks.finally(config.uid);
      });
  } else {
    if (!fetchObj.ok) {
      return {
        status: false,
        msgs: [`Oops! Looks like it's not you, it's internet problem.`],
      };
    } else {
      let response = await fetchObj.json();
      return response;
    }
  }
};

/**
 * POST - Fetch function.
 * (note: async/await available)
 *
 * @param {any} config This contains URL, Header and Data to be pass.
 * @param {string} config.url - the URL string.
 * @param {?object} config.data - key value object.
 * @param {?int} config.uid - (optional) Request ID.
 * @param {?object} config.header - key value headers list.
 * @param {?object} callbacks This information holds callback functions (Note: if await is false).
 * @param {?function} callbacks.success - This hold success function reference.
 * @param {?function} callbacks.error - This hold error function reference.
 * @param {?function} callbacks.finally - This hold finally function reference.
 * @param {boolean} isAwait Want to wait until response?
 *
 * @returns {any} if isAwait is TRUE then JSON will be returned or else callback will be called
 */
export const fetch_post = async (config, callbacks, isAwait = false) => {
  if (config?.uid && config.uid == null) {
    config.uid = getRandomInt(10000);
  }
  const fetchObj = isAwait ? await fetchObjInit("POST", config) : fetchObjInit("POST", config);
  if (!isAwait) {
    fetchObj
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        if (callbacks.success != null) callbacks.success(data);
      })
      .catch(function (error) {
        if (callbacks.error != null)
          callbacks.error({
            status: false,
            msgs: [`Oops! Looks like it's not you, it's internet problem.`],
          });
      })
      .finally(() => {
        if (callbacks.finally != null) callbacks.finally();
      });
  } else {
    if (!fetchObj.ok) {
      return {
        status: false,
        msgs: [`Oops! Looks like it's not you, it's internet problem.`],
      };
    } else {
      let response = await fetchObj.json();
      return response;
    }
  }
};

/**
 * get FETCH initialized object
 *
 * @param {string} type
 * @param {object} config
 * @returns {fetch} object
 */
function fetchObjInit(type, config) {
  const options = {
    method: type,
    body: "",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 300 },
  };
  for (let key in config?.header?.headers) {
    options.headers[key] = config?.header?.headers[key];
  }
  if (options.headers.hasOwnProperty("Cache-Control") && (options.headers["Cache-Control"] == "no-cache" || options.headers["Cache-Control"] == "no-store")) {
    options.next.revalidate = 0;
  }
  if (type == "GET") {
    delete options.body;
  } else {
    if (options?.headers["Content-Type"] == "application/json") {
      options.body = JSON.stringify(config.data);
    } else if (options?.headers["Content-Type"] == "application/x-www-form-urlencoded" && type != "GET") {
      let x = getPairs(config?.data)
        .map(([[key0, ...keysRest], value]) => `${key0}${keysRest.map((a) => `[${a}]`).join("")}=${value}`)
        .join("&");
      options.body = x;
    } else if (options?.headers["Content-Type"] == "multipart/form-data") {
      delete options?.headers["Content-Type"];
      let formData = new FormData();
      for (const key in config?.data) {
        formData.append(key, config?.data[key]);
      }
      options.body = formData;
    }
  }
  for (const key in config?.header) {
    if (key == "headers") continue;
    options[key] = config?.header[key];
  }
  if (config?.signal) options.signal = config?.signal;
  try {
    return fetch(config.url, options);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

let getPairs = (obj, keys = []) =>
  Object.entries(obj).reduce((pairs, [key, value]) => {
    if (typeof value === "object" && value != null) {
      pairs.push(...getPairs(value, [...keys, key]));
    } else {
      pairs.push([[...keys, key], value]);
    }
    return pairs;
  }, []);

/**
 *
 * @param {number} max - Max integer number
 * @returns {number} return random generated number
 */
export function getRandomInt(max = -1) {
  if (max < 0) {
    return Math.floor(Math.random());
  } else {
    return Math.floor(Math.random() * max);
  }
}

/**
 * Get saved value from localStorage.
 *
 * @param {any} token The Unique value (can pass NULL).
 * @param {string} name The Key name.
 * @param {array|object} ArrayOrObject The default value if key not found.
 * @return {void}
 */
export async function setLocalStorage(token, name, ArrayOrObject) {
  let storageName = token == null ? name : token + "-" + name;
  let cValue = ArrayOrObject;
  if (typeof cValue != "string") {
    cValue = JSON.stringify(cValue);
  }
  try {
    localStorage.setItem(storageName, cValue);
  } catch (error) {
    console.error("localStorage Error", "SET", "Cannot save", error);
  }
}

/**
 * Save value to localStorage.
 *
 * @param {any} token The Unique value (can pass NULL).
 * @param {string} name The Key name.
 * @return {Void}
 */
export function removeLocalStorage(token, name) {
  let storageName = token == null ? name : token + "-" + name;
  localStorage.removeItem(storageName);
  return true;
}

/**
 * Get saved value from localStorage.
 *
 * @param {any | null} token The Unique value (can pass `null`).
 * @param {string} name The Key name.
 * @param {any} defaultVal The default value if key not found.
 * @param {boolean} needsRawValue the return value needs raw like as it is?
 * @return {any} return can be any OR defaultVal on error.
 */
export function getLocalStorage(token, name, defaultVal = {}, needsRawValue = false) {
  if (name == "") {
    return defaultVal;
  }
  try {
    let storageName = token == null ? name : token + "-" + name;
    let val = localStorage.getItem(storageName);
    val = val == null ? defaultVal : val;
    return needsRawValue ? val : getResponseConvertToJson(val, defaultVal);
  } catch (error) {
    console.error("localStorage Error", "GET", error);
    return defaultVal;
  }
}

/**
 * Get JSON converted value.
 *
 * @param {any} response Value that needs to be converted.
 * @param {any} hasDefault Value wil be return if something goes wrong.
 * @returns {JSON}
 */
export function getResponseConvertToJson(response, hasDefault = false) {
  try {
    if (typeof response == "string") {
      if (response.length > 0) response = JSON.parse(response);
    }
  } catch (error) {
    console.error("Conversion string to object/array Error");
    if (hasDefault) response = hasDefault;
    else response = { status: false, msgs: ["Response is invalid."] };
  }
  return response;
}

/**
 *
 * @param {string} input
 * @param {string} format
 * @returns DateTime in string
 */
export function getDate(input, format = "full") {
  try {
    let dt = new Date(input);
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      dateStyle: format,
    });
    return formatter.format(dt);
  } catch (err) {
    console.error(err);
  }
  return "N/A";
}

export function titleCase(array) {
  return array
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase())
    .join("");
}

export function lowerCase(array) {
  return array
    .split(" ")
    .map((letter) => letter.toLowerCase())
    .join("");
}

export function stopPropagation(e) {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}
export function escapeClose(e) {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}

export const dateFormat = (input, type) => {
  // types =
  // "fullDate"
  // 'D/M/YY' : (2/7/09)
  // 'M/D/YY' : (2/7/09)
  // 'YY/M/D' : (2009/2/17)
  // 'D/M/YYYY' : (2/7/2009),
  // 'D/MM/YY' : (2009/2/17)
  // 'D/MM/YYYY': (7/02/2009)
  // 'DD/MM/YY' : (17/02/09)
  // 'DD/MM/YYYY' : (17/02/2009)
  // 'MMDDYY' : (02172009)
  // 'DDMMYY' : (17022009)
  // 'YYMMDD' : (20090217)
  // 'MonDDYY' : (Feb172009)
  // 'DDMonYY' : (17Feb2009)
  // 'YYMonDD' : (2009Feb17)
  // 'D Month, YY' : (17 February, 2009)
  // 'YY, Month D' : (2009, February 17)
  // 'Mon-DD-YYYY' : (Feb 17, 2009)
  // 'DD-Mon-YYYY' : (17 Feb, 2009)
  // 'Mon DD, YYYY' : (Feb 17, 2014)
  // 'DD Mon, YYYY' : (17 Feb, 2014)
  // 'YYYY, Mon DD' : (2014, Feb 17)
  // 'DD Mon YYYY' : (17 Feb 2014)
  // 'Mon DD YYYY' : (Feb 17 2014)
  // 'YYYY Mon DD' : (2014 Feb 17)

  let result;
  let date = new Date(input);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const getDayType = (type = "long") => {
    // types = "numeric", "2-digit"
    return date.toLocaleDateString("en-us", { day: type });
  };
  const getMonthType = (type = "long") => {
    // types = "numeric", "2-digit", "narrow", "short", "long"
    return date.toLocaleDateString("en-us", { month: type });
  };
  const getYearType = (type = "long") => {
    // types = "numeric", "2-digit"
    return date.toLocaleDateString("en-us", { year: type });
  };
  const getWeekdayType = (type = "long") => {
    // types = "narrow", "short", "long"
    return date.toLocaleDateString("en-us", { weekday: type });
  };

  let day_length_2 = getDayType("2-digit");
  let month_length_2 = getMonthType("2-digit");
  let year_length_2 = getYearType("2-digit");

  if (type) {
    switch (type) {
      // 'D/M/YY' : ('Friday, 25, May 2023')
      case "fullDate":
        return (result = `${getWeekdayType()}, ${day_length_2} ${getMonthType("short")}, ${year}`);
      case "D/M/YY":
        return (result = `${day}/${month}/${year_length_2}`);

      // 'M/D/YY' : (2/7/09)
      case "M/D/YY":
        return (result = `${month}/${day}/${year_length_2}`);

      // 'YY/M/D' || 'YYYY/M/D' : (2009/2/17)
      case "YY/M/D":
        return (result = `${year}/${month}/${day}`);

      // 'D/M/YYYY' : (2/7/2009),
      case "D/M/YYYY":
        return (result = `${day}/${month}/${year}`);

      // 'D/MM/YY' : (17/02/09)
      case "D/MM/YY":
        return (result = `${day}/${month_length_2}/${year_length_2}`);

      // 'D/MM/YYYY': (17/02/2009)
      case "D/MM/YYYY":
        return (result = `${day}/${month_length_2}/${year}`);

      // 'DD/MM/YY' : (07/02/09)
      case "DD/MM/YY":
        return (result = `${day_length_2}/${month_length_2}/${year_length_2}`);

      // 'MM/DD/YY' || 'MM/DD/YYYY' : (02/07/2009)
      case "MM/DD/YY":
      case "MM/DD/YYYY":
        return (result = `${month_length_2}/${day_length_2}/${year}`);

      // 'DD/MM/YYYY' : (07/02/2009)
      case "DD/MM/YYYY":
      case "DD/MM/YY":
        return (result = `${day_length_2}/${month_length_2}/${year}`);

      // 'YYYY/MM/DD' : (2009/02/07)
      case "YYYY/MM/DD":
      case "YY/MM/DD":
        return (result = `${year}/${month_length_2}/${day_length_2}`);

      // 'MMDDYY' || 'MMDDYYYY' : (02172009)
      case "MMDDYY":
      case "MMDDYYYY":
        return (result = month_length_2 + day_length_2 + year);

      // 'DDMMYY' : (17022009)
      case "DDMMYY":
      case "DDMMYYYY":
        return (result = day_length_2 + month_length_2 + year);

      // 'YYMMDD' : (20090217)
      case "YYMMDD":
      case "YYYYMMDD":
        return (result = year + month_length_2 + day_length_2);

      // 'MonDDYY' : (Feb172009)
      case "MonDDYY":
      case "MonDDYYYY":
        return (result = `${getMonthType("short")}/${month_length_2}/${year}`);

      // 'DDMonYY' : (17Feb2009)
      case "DDMonYY":
      case "DDMonYYYY":
        return (result = getDayType("2-digit") + getMonthType("short") + year);

      // 'YYMonDD' : (2009Feb17)
      case "YYMonDD":
      case "YYYYMonDD":
        return (result = year + getMonthType("short") + getDayType("2-digit"));

      // 'D Month, YY' : (17 February, 2009)
      case "D Month, YY":
      case "D Month, YYYY":
        return (result = `${day} ${getMonthType()}, ${year}`);

      // 'YY, Month D' : (2009, February 17)
      case "YY, Month D":
      case "YYYY, Month D":
        return (result = `${year}, ${getMonthType()} ${day}`);

      // 'Mon-DD-YYYY' : (Feb 17, 2009)
      case "Mon-DD-YYYY":
      case "Mon-DD-YY":
        return (result = `${getMonthType("short")} ${day_length_2} , ${year}`);

      // 'DD-Mon-YYYY' : (17 Feb, 2009)
      case "DD-Mon-YYYY":
      case "DD-Mon-YY":
        return (result = `${day_length_2} ${getMonthType("short")}, ${year}`);

      // 'YYYY, Mon DD' : (2009, Feb 17)
      case "YYYY, Mon DD":
      case "YY, Mon DD":
        return (result = `${year}, ${getMonthType("short")} ${day_length_2}`);

      // 'Mon DD, YYYY' : (Feb 17, 2009)
      case "Mon DD, YYYY":
      case "Mon DD, YY":
        return (result = `${getMonthType("short")} ${day_length_2}, ${year}`);

      // 'DD Mon, YYYY' : (17 Feb, 2014)
      case "DD Mon, YYYY":
      case "DD Mon, YY":
        return (result = `${day_length_2} ${getMonthType("short")}, ${year}`);

      // 'YYYY, Mon DD' : (2014, Feb 17)
      case "DD Mon, YY":
      case "DD Mon, YYYY":
        return (result = `${year}, ${getMonthType("short")} ${day_length_2}`);

      // 'DD Mon YYYY' : (17 Feb 2014)
      case "DD Mon YYYY":
      case "DD Mon YY":
        return (result = `${day_length_2} ${getMonthType("short")} ${year}`);

      // 'Mon DD YYYY' : (Feb 17 2014)
      case "Mon DD YYYY":
      case "Mon DD YY":
        return (result = `${getMonthType("short")} ${day_length_2} ${year}`);

      // 'YYYY Mon DD' : (2014 Feb 17)
      case "YYYY Mon DD":
      case "YY Mon DD":
        return (result = `${year} ${getMonthType("short")} ${day_length_2}`);

      default:
        return (result = `${day}/${month}/${year}`);
    }
  } else {
    return (result = `${getWeekdayType()}, ${day_length_2} ${getMonthType("short")}, ${year}`);
  }
};

export function arrayDivideByGroup(array, perChunk = 2) {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}
export function hexToRGB(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return `${r}, ${g}, ${b}, ${alpha}`;
  } else {
    return `${r}, ${g}, ${b}`;
  }
}
