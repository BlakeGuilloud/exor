### exor

A WIP. The current implementation only accepts a single command called `req`.

#### Usage:

```
$ npm install exor -g

exor req -u <uri> -m <method> -h <headers>

exor req -u https://qy7cigwg35.execute-api.us-east-1.amazonaws.com/dev/todos
=> [{"todoId":"642a6fcc-a49d-4299-9cc0-4cad7c298042","todo":"Wash the sheets."}]
```