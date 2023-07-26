const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
const heading = document.createElement('div');

const dateDisplay = document.createElement('span');

const titleDisplay = document.createElement('h1');

const tempDisplay = document.createElement('span');

heading.classList.add('header');

dateDisplay.classList.add('add');

tempDisplay.classList.add('temp');


dateDisplay.textContent = date;

titleDisplay.textContent = title;

tempDisplay.textContent = temp;

heading.appendChild(dateDisplay);

heading.appendChild(titleDisplay);

heading.appendChild(tempDisplay);


return heading;


function headerAppender(selector) {

  const root = document.querySelector(selector);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
  root.appendChild(Header('Test Title', "07/25/23", '76 degrees'));

}




export { Header, headerAppender }
