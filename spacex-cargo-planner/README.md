# Known Issues

## UI and Functionality

- A lot of issues with the UI in all screen sizes. **[TODO]**
  - Continue to work on UI in all screen sizes. Already made some progress.
- Functionality is mostly fine with minor issues. ✔️
  - Did not think about that yet ✔️

## Code Quality and Structure ✔️

- Styles are not encapsulated inside components. ✔️
  - Found one styles, that was not encapsulated inside components ✔️
  - ([8-Styles-Are-Not-Encapsulated-Inside-Component](https://github.com/Vladislp/spacex-cargo-planner/pull/19))
- A lot of code duplication. ✔️
  - Found similar code in two files, but only one of them is used. ✔️
  - Made changes to "ShipmentList.js" file to avoid further duplication. ✔️
  - ([7-Get-Rid-Off-Code-Duplication](https://github.com/Vladislp/spacex-cargo-planner/pull/16))

## Accessibility and Best Practices

- `<td>` elements are used instead of anchor tags which is not correct. ✔️
  - ([9-Part-One-Of-Feed-Back](https://github.com/Vladislp/spacex-cargo-planner/pull/21))
- Lack of accessibility features. **[TODO]**
- A lot of unnecessary state is used. ✔️
  - ([9-Part-One-Of-Feed-Back](https://github.com/Vladislp/spacex-cargo-planner/pull/21))
- No tests. **[TODO]**

## Action Points

- Pay attention to code quality and follow React + TypeScript best practices. You might find the [React + TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) helpful.

Remember to address these issues to improve the overall quality and maintainability of the project.
