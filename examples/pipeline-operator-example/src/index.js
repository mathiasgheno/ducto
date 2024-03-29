const { isString, isNotNull, hasLessCharactersThan, hasMoreCharactersThan } = require('@ducto/validators');

function correct() {
  'mathias'
    |> isString(#)
    |> isNotNull(#)
    |> hasLessCharactersThan(100)(#)
    |> console.log(#)
}

function error() {
  'mathias'
    |> isString(#)
    |> isNotNull(#)
    |> hasLessCharactersThan(100)(#)
    |> hasMoreCharactersThan(10)(#)
    |> console.log(#)
}
