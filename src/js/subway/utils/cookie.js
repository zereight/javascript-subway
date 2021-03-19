export const setCookie = (cookieName, value, minutes = 3) => {
  const expiringDate = new Date();
  expiringDate.setMinutes(expiringDate.getMinutes() + minutes);
  const cookie_value = escape(value) + (minutes == null ? '' : '; expires=' + expiringDate.toUTCString());
  document.cookie = cookieName + '=' + cookie_value;
};

export const getCookie = cookieName => {
  let x, y;
  let val = document.cookie.split(';');

  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf('='));
    y = val[i].substr(val[i].indexOf('=') + 1);
    x = x.trim();
    if (x === cookieName) {
      return unescape(y);
    }
  }
};

export const deleteCookie = cookieName => {
  setCookie(cookieName, '', 0);
};
