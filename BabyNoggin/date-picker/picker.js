function getCurrentDate() {
  var inputDate = document.getElementById('date');
  var dateValue = inputDate.value;
  var dateArr = dateValue.split('-');
  var day = dateArr[2];
  var month = dateArr[1];
  var year = dateArr[0];
  var currentDate = new Date(year, month - 1, day);
  return currentDate;
}

function getDateAgo(date) {
  date.setDate(date.getDate() - 1);
  return date;
}

function getDateNext(date) {
  date.setDate(date.getDate() + 1);
  return date;
}

function putDate(direction) {
  var currentDate = getCurrentDate();
  var newDate = direction ? getDateNext(currentDate) : getDateAgo(currentDate);

  var newDay = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
  var newMonth = newDate.getMonth() < 9 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
  var newYear = newDate.getFullYear();

  var inputDate = document.getElementById('date');
  inputDate.value = newYear + "-" + newMonth + "-" + newDay;
}

function output() {
  var currentDate = getCurrentDate();
  var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];
  var newMonth = monthArr[currentDate.getMonth()];
  var newDay = currentDate.getDate();
  var newYear = currentDate.getFullYear();
  var strDate = newMonth + ' ' + newDay + ', ' + newYear;
  var headerDate = document.getElementById('diary-date');
  headerDate.textContent = strDate;
}

function dayLinks() {
  var prewDate = getCurrentDate();
  prewDate = getDateAgo(prewDate);
  var prevDay = prewDate.getDate();

  var nextDate = getCurrentDate();
  nextDate = getDateNext(nextDate);
  var nextDay = nextDate.getDate();

  var prevLink = document.getElementById('prev-link');
  var nextLink = document.getElementById('next-link');
  prevLink.textContent = prevDay;
  nextLink.textContent = nextDay;
}

function changeDate() {
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  prev.onclick = function() {
    putDate(false);
    output();
    dayLinks();
  }

  next.onclick = function() {
    putDate(true);
    output();
    dayLinks();
  }

  window.onload = function() {
    output();
    dayLinks();
  }
}

changeDate();
