# empty-trim
A module to remove empty subobjects from given object recursively.

## Installation
With npm
```bash
npm install empty-trim
```

## Example

```js
var trim = require('trim-empty');
var obj = {
  level1:{
    level2:{
      level3:{
        name: "Foo"
      },
      emptyOne: {
        inner: {}
      }
    },
    anotherLevel2: "bar"
  }
};

trim(obj); 
/*
Object now:
obj => {
  level1:{
    level2:{
      level3:{
        name: "Foo"
      }
    },
    anotherLevel2: "bar"
  }
}
*/
```

## API

### trim(object);

Removes all empty objects({}) recursively. **If object becomes empty after its children are removed, it'll remove empty parent too.**
