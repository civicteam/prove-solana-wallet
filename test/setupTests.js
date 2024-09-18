const nodeCrypto = require('crypto');

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: arr => nodeCrypto.randomBytes(arr.length),
  },
});
