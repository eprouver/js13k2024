const {h1, div} = van.tags;

van.add(document.body, div({class: "parent"},
  div({class: "div1 grid__item"}
  ),
  div({class: "div2 grid__item"}
  ),
  div({class: "div3 grid__item"}
  ),
))