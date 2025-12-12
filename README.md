# Cookie Utils 🍪

A lightweight, browser-friendly utility for handling cookies with clean TypeScript APIs.
Perfect for frontend projects that need simple and predictable cookie management.

## Features

* **setCookie** — Create cookies with support for `expires`, `maxAge`, `path`, `secure`, and `sameSite`
* **getCookie** — Safely retrieve cookie values
* **deleteCookie** — Remove cookies easily
* **maxAgeToExpiryDate** — Convert `maxAge` (in seconds) to a real expiration `Date`

---

## Import

Just include the utility in your project:

```ts
import { setCookie, getCookie, deleteCookie, maxAgeToExpiryDate } from './cookie';
```

---

## Usage

### 1. Set a cookie

```ts
setCookie('token', 'abc123', {
  path: '/',
  maxAge: 60 * 60, // 1 hour
  secure: true,
  sameSite: 'Strict',
});
```

### 2. Get a cookie

```ts
const token = getCookie('token');
console.log(token);
```

### 3. Delete a cookie

```ts
deleteCookie('token');
```

### 4. Convert maxAge to an expiration date

```ts
const date = maxAgeToExpiryDate(3600);
console.log(date);
```

---

## Notes

* **Secure cookies require HTTPS.** Browsers will warn or block otherwise.
* When using `SameSite=None`, make sure **Secure** is also enabled (browser requirement).
* These utilities are **browser-only** — they won’t work in Node.js.
