### Jest:

Jest is a JavaScript testing framework built by Facebook and primarily designed for React-based applications,

<b>Uses:</b>

1. Snapshot testing in Jest

- Snapshot testing captures code of a component at a specific time to compare it to a reference snapshot stored alongside the test

- Ex:
  const data = someFunctionYouAreTesting() <br>
  expect(data).toMatchSnapshot()
