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
- Lack of accessibility features. (Even if this is not relevent to the project, will adress it anyway) ✔️
  - Semantic HTML: Went through the project, everything should be as intended. ✔️
  - Alternative Text for Images: Well, i only have one image in this project. ✔️
  - Keyboard Navigation: Implemented keyboard navigation, so that people can browse project using only keyboard ✔️
  - Focus Styles: Provided clear and visible focus styles for interactive elements when they receive keyboard focus. ✔️
  - Color Contrast: That's kinda hard to implement, because it requires real-world testing and feedback ✔️
  - Semantic Forms: Went through the project, everything should be as intended. ✔️
  - ARIA Roles and Attributes: Added some ARIA features to project, where it is fit for me. ✔️
  - Skip Links: Well, it's kinda feels off to implement this here, because what considered a main-content. ✔️
  - Screen Reader Testing: For now seems f2m. ✔️
  - Responsive Design: Part of the "UI and Functionality" section.
  - Video and Audio Accessibility: Not relevent. ✔️
  - Keyboard Shortcuts: I can't really come up with something in this type of application ✔️

([10-A11y-Features-Implementation](https://github.com/Vladislp/spacex-cargo-planner/pull/23))
- A lot of unnecessary state is used. ✔️
  - ([9-Part-One-Of-Feed-Back](https://github.com/Vladislp/spacex-cargo-planner/pull/21))
- No tests. **[TODO]**

## Action Points

- Pay attention to code quality and follow React + TypeScript best practices. You might find the [React + TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) helpful.

Remember to address these issues to improve the overall quality and maintainability of the project.
