const formElement = `
  <form id='search-form' class='search-form' autocomplete='off'>
    <div class='search-wrapper from-input-wrapper'>
      <ul id="auto-complete-from" class="auto-complete">
      </ul>
      <svg class='search-input-icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='22' height='22' viewBox='0 0 22 22'> <image x='1' y='4' width='19' height='15' xlink:href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAADiUlEQVQ4jWL8//8/A5mAEYpBBvxnYGBgAAAAAP//YsFiEIYiNDn+b9++Kezdu1eSgYFB1MPD4worK+t5BgaG/wAAAAD//0J3GeO3b9/UL1++LK2urv5NQEDgMQMDw0eonPiPHz8MFy5caHzx4kUhHx+ft3fv3uU9evSo4Lx58xZxcXHtAgAAAP//QncZS3d3t+Xt27eD//z5o87Gxnbf3d39nYuLy7dDhw5xzps371JMTAzTtGnTtjEwMLxmYGBwlJOTU6utrQ3s7e09AAAAAP//QjYM5AUuLy8vrt7eXs7Jkyc//vTp08fVq1ezBAQEKOvp6V1ZuHDhAzExsWUMDAwgF4OACT8//8/Dhw//u3//PhMAAAD//yzPsQmAQBBFQRUMzC3B2A5MbWHzRdgGvI7EMsRGNvrJdfHkwGAKmK41gdadgBU4M/M1s6fWWoANmIERGH6LpCMibne/JO1A/wEAAP//ArmM8dWrV0pr1qxxU1ZW1jYzM5M+c+aM4NOnT++fPXv2opeX1yUGBobPUJeI/vr1y3727Nn2GzduZCsrK7vr4uKyi4GB4QgDA8N/AAAAAP//ArmKae3atd6enp5nOjs7L9vY2KyOjo7e/ujRo6z///+L////n/n///+8////dz548GCPh4fH7gkTJsz78eNH8P///6WgvmL4//8/AwAAAP//Arnsv6+v790dO3Zc+/Tpk9GhQ4dEGBkZdzAwMKxnYGB4y8DAoPn8+XPvlpYWux8/fvyfOXPmPjk5OVAEgFyMSAoMDAwAAAAA//+Ch9mvX7/8EhIS9paVlV3/9+/fhP///3v++vUrY/r06Ss8PDx27Ny5c9L///9BYcOP7Bo4/v+fAQAAAP//Qk5njL9//44pLS1N+fbtG5O2trbKrl27rjs7O3/LzMw8zMnJuY6BgeEeAwPDPyyJmYGBgYEBAAAA//9CMQyUbhgYGOwuXbqk/v379z+Kior/xMTEfjIwMJxiYGA4zMDA8ISBgQHE/4thIAMDAwAAAP//ghkGilHF+/fvWzEwMJgxMDDIMjAwMEE1gDS/gibSdywsLDeNjY0PQcURgIGBAQAAAP//giVaxnPnzonevn2bj4GBQYaBgUGdgYGBFSoH8hYIv2dgYLjBwMCgrKSkdFZQUBDVMAYGBgAAAAD//4K7jIGBgQ0pk+MCIMUgL/7B8CYDAwMAAAD//wMAPGaIJMJp5jQAAAAASUVORK5CYII='></image> </svg>
      <input id="search-input-from" required data-touched="false" class='search-input' placeholder='From'>
    </div>
    <div class='search-wrapper to-input-wrapper'>
      <ul id="auto-complete-to" class="auto-complete">
      </ul>
      <svg class='search-input-icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='22' height='22' viewBox='0 0 22 22'> <image width='22' height='22' xlink:href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAC0ElEQVQ4jWL8////fwZqAwYGBgAAAAD//2KihaEMDAwMAAAAAP//oo3BDAwMAAAAAP//oo3BDAwMAAAAAP//QjF48+bNDE1NTQzv37+Hi+3Zs4ehvr6e4eXLl8SbysDAAAAAAP//wjD469evDGvXroWLbd++neHv378Mc+fOJd5UBgYGAAAAAP//QjH4169fDHFxcQxbt26Fi/3+/ZshJiaGYe/evWB5ogADAwMAAAD//8IIY2FhYQYtLS2GgIAAhv7+fobXr18zMDExMXh6ejJs27aNOHMZGBgAAAAA//9iAKVjGIiPj////PlzMPf379//z549+7+3t/f/u3fv/j969Oh/SEjI/1evXiFrwQ7+//8PAAAA//9iQbZESEiI4cOHDwwSEhIMLCwsDEZGRmAMAoKCggxeXl4MmZmZDO/evWPQ19cHy7m7uzOIiYmhupaBgQEAAAD//3zOoQEAMAgEsbUY7QUbYTGMhXl71Zj6iJxxVZGZ2P5udpfuRhIRwcxcADwAAAD//0IxGOT95cuXg72ckZHxf+XKlf9fv36N15IbN278d3Z2RhX8//8/AAAA///CWVaA0u3+/fsZDh8+zPDx40cGU1NTBnt7e3AQMDIyoqhNTk5maGhoYJCVlYUIMDAwAAAAAP//IqoQ+vPnD8OFCxcYDh06xHD16lUGUVFRBgcHBwZbW1sGbm5uhtzcXDBWU1ODaGBgYAAAAAD//yKrdANFHsg3J0+eZPjx4wfDzZs3GSZPnowwmIGBAQAAAP//QgljcsDfv3//Hzt27P+PHz8Q2v///w8AAAD//yLo4rdv3zLcuXOHoC9AmQgUD2DAwMAAAAAA//9CScfYwKVLlxiuXLlCVBDJyckxiIuLMzAwMDAAAAAA//+iTQ3CwMAAAAAA//+iTXnMwMAAAAAA//+ijcEMDAwAAAAA//+ijcEMDAwAAAAA//8DACUC1XwDGJuJAAAAAElFTkSuQmCC'></image> </svg>
      <input disabled required data-touched="false" invalid class='search-input' id='search-input-to' placeholder='To'>
    </div>
    <a class='search-submit-btn' href='#' target='_blank' id='submitBtn'>
      <span>Search flights</span>
    </a>
  </form>
`

$('.bannerBorder').append(formElement);

let from = null;
let to = null;
let destiny = city_to;
const list = city_from;
let filteredList = list;
let filteredDestiny = destiny;

const searchInputFromRef = $('#search-input-from');
const searchInputToRef = $('#search-input-to');
const autoCompleteFromRef = $('#auto-complete-from');
const autoCompleteToRef = $('#auto-complete-to');

filteredList.forEach((item, index) => {
  autoCompleteFromRef.append(`<li id="autoComplete_result_${index}" role="option">${item.label}</li>`);
});

$(document).click(function(event) {
  if (!$(event.target).closest('#search-form').length) {
    autoCompleteFromRef.removeClass('auto-complete--active');
    autoCompleteToRef.removeClass('auto-complete--active');
  }
});

searchInputFromRef.on( "input", function(e) {
  const { value } = e.target;
  autoCompleteFromRef.empty();
  searchInputToRef.attr("disabled", "true");
  from = null;

  filteredList = list.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()));
  filteredList.forEach((item, index) => {
    autoCompleteFromRef.append(`<li id="autoComplete_result_${index}" role="option">${item.label}</li>`);
  });
});

searchInputToRef.on( "input", function(e) {
  const { value } = e.target;
  autoCompleteToRef.empty();
  to = null;

  filteredDestiny = destiny.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()));
  filteredDestiny.forEach((item, index) => {
    autoCompleteToRef.append(`<li id="autoComplete_result_${index}" role="option">${item.label}</li>`);
  });
});

searchInputFromRef.focus(function() {
  autoCompleteFromRef.addClass('auto-complete--active');
});

searchInputToRef.focus(function() {
  autoCompleteToRef.addClass('auto-complete--active');
});

$("#submitBtn").click(function(event) {
  event.preventDefault();
  if (!from) {
    searchInputFromRef.attr("aria-invalid", "true")
  }

  if (!to) {
    searchInputToRef.attr("aria-invalid", "true")
  }

  $(".search-input").attr("data-touched", "true")

  if (from && to) {
    const url = `https://de.gotogate.com/rf/destination?from=${from}&to=${to}&text=9&utm_source=blue&utm_medium=cpc&utm_campaign=DE_gotogate.com_tgrp25&domain=blue&campaign=remarketing-blue_DE_tgrp25`;
    window.location = url;
  }
});

autoCompleteFromRef.on("click", "li", function(e) {
  const id = e.target.id;
  const index = id.split('_').pop()
  const value = filteredList[index];
  from = value.value;
  searchInputFromRef.val(value.label)
  searchInputFromRef.attr("aria-invalid", "false")

  autoCompleteFromRef.css({
    'display': 'none',
  })
  searchInputToRef.removeAttr("disabled");

  autoCompleteFromRef.empty();

  filteredList = list.filter((item) => item.label.toLowerCase().includes(value.label.toLowerCase()));
  filteredList.forEach((item, index) => {
    autoCompleteFromRef.append(`<li id="autoComplete_result_${index}" role="option">${item.label}</li>`);
  });

  const parseDestiny = city_to.filter((item) => item.valuefrom === value.value);
  destiny = parseDestiny
  filteredDestiny = parseDestiny
  autoCompleteToRef.empty();

  filteredDestiny.forEach((item, index) => {
    autoCompleteToRef.append(`<li id="autoComplete_result_${index}" role="option">${item.label}</li>`);
  });
});

autoCompleteToRef.on("click", "li", function(e) {
  const id = e.target.id;
  const index = id.split('_').pop()
  const value = filteredDestiny[index];
  to = value.value;
  searchInputToRef.val(value.label)
  searchInputToRef.attr("aria-invalid", "false")

  autoCompleteToRef.css({
    'display': 'none',
  })
  searchInputToRef.removeAttr("disabled");

  searchInputToRef.empty();

  filteredDestiny = destiny.filter((item) => item.label.toLowerCase().includes(value.label.toLowerCase()));
});
