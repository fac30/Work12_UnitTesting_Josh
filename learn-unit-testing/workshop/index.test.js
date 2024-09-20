

function equal(actual, expected, message) {
    if (actual === expected) {
      const defaultMessage = `Expected ${expected} and received ${actual}`;
      console.info("Pass: " + (message || defaultMessage));
    } else {
      const defaultMessage = `Expected ${expected} but received ${actual} instead`;
      console.error("Fail: " + (message || defaultMessage));
    }
  }

  function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }

  test('make url', () => {
    const result = makeUrl('pikachu');
    const expected = 'https://pokeapi.co/api/v2/pikachu';
    equal(result, expected);
  })

  test('query conversion name', () => {
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    const result = searchParamsToObject('name=oliver&email=hello@oliverjam.es');
    equal(result.name, expected.name);
  })
  
  test('query conversion email', () => {
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    const result = searchParamsToObject('name=oliver&email=hello@oliverjam.es');
    equal(result.email, expected.email);
  })