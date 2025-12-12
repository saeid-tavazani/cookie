interface CookieOptions {
  path?: string;
  expires?: string | Date;
  maxAge?: number;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

export const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.expires) {
    const expires =
      options.expires instanceof Date ? options.expires.toUTCString() : options.expires;
    cookieStr += `; Expires=${expires}`;
  }

  if (options.maxAge !== undefined) {
    cookieStr += `; Max-Age=${options.maxAge}`;
  }

  cookieStr += `; Path=${options.path ?? '/'}`;

  if (options.secure) {
    if (location.protocol !== 'https:') {
      console.warn('Secure cookies should only be set over HTTPS');
    } else {
      cookieStr += '; Secure';
    }
  }

  if (options.sameSite) {
    cookieStr += `; SameSite=${options.sameSite}`;
  }

  document.cookie = cookieStr;
};

export const getCookie = (name: string): string | null => {
  const cookieArr = document.cookie.split('; ');

  for (const cookie of cookieArr) {
    const [key, val] = cookie.split('=');
    if (decodeURIComponent(key) === name) {
      return decodeURIComponent(val);
    }
  }

  return null;
};

export const deleteCookie = (name: string, path: string = '/') => {
  setCookie(name, '', { path, maxAge: 0 });
};

export const maxAgeToExpiryDate = (maxAge: number): Date => {
  return new Date(Date.now() + maxAge * 1000);
};
