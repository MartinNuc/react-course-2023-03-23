# Getting Started with Create React App

## Problem

"callback hell"

```javascript
setTimeout(() => {
  console.log('1')

  setTimeout(() => {
    console.log('2')

    setTimeout(() => {
      // Kdyz chci udelat neco po tom predtim, musim to zanorit zde
      console.log('3')
    }, 1000);  
  }, 1000);
}, 1000);
```

## Promisy

 1. vytvoreni promise
 2. spusteni async kod
 3. async kod bud uspeje nebo selze a promise prechazi do stavu:

    1. fullfilled (=resolved)
    2. rejected

### Jak vytvorit promise?

```javascript
const promise = new Promise((resolve, reject) => {
  // sem dovnitr jde asynchronni kod:
  setTimeout(() => {
    // kdyz je async kod hotovy, zavola resolve nebo reject podle vysledku
    resolve();
  }, 5000);
});
```

Pouziti promise - to uvnitr `then` se vykona az kdyz je `promise` resolved - tzn v tomto prikladu po 5ti sekundach

```javascript
promise.then(() => console.log('hotovo'));
```

### Async funkce

```javascript
async function blabla() {
  try {
    console.log('cau')
    const data = await fetch(); // uvnitr async funkce muzu pouzit await - ceka na promise
    console.log(data)
  } catch(e) { // lze pouzit i try/catch, ktery funguje s promise
    console.log('error', e)
  }
}
```

To same jako ⬆️ zapsane bez `async`

```javascript
function blabla() {
  return fetch().then((data) => {
    console.log(data);
  }).catch((e) => {
    console.log('error', e);
  });
}
```

### Jak udelat HTTP request

verze s async:

```javascript
const response = await axios.post('/api/users', payload);
console.log(response);
```

bez async:

```javascript
axios.post('/api/users', payload).then((response) => {
  console.log(response);
});
```
