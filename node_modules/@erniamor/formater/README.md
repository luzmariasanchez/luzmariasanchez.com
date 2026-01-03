# Formater

> Formater is a minimalist JavaScript library that provide some format helpers functions.

* 💪 Immutable
* 📦 No dependancies
* 👫 All browsers supported

---

## Getting Started

### Installation

```console
npm install @erniamor/formater
```

### Usage

1. Import function from package

```javascript
import { formatBytes } from '@erniamor/formater';
```

2. Call function with expected arguments

```javascript
formatBytes(1024000, 2); // return "1.02 MB"
```

### API

It's easy to use Formater APIs to format some special usecase.

#### formatBytes

Format a number of bytes to a string with unit and decimals.

***Arguments***
bytes (number) : the number to process
decimals (number) : the number of decimals - default : 0

***Return***
(string) : the formated value

***Exemple***
```javascript
formatBytes(1024000, 2); // return "1.02 MB"
```

All this units are available : 'Byte', 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'

---

## License

Formater is licensed under a [MIT License](./LICENSE).