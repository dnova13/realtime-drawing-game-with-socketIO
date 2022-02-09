(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

/* 채팅창 이벤트 js */
var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg"); // 메세지 붙여넣기

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
}; // 메세지 서버 전달 및 메세지 프론트 동작 실행


var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value; // 해당 소켓 객체를 가져와서 메세지값 웹소켓 서버에 송출

  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
}; // 서버쪽 소켓에 최신 메세지 전달.


var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFGQTtBQUlBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEIsQyxDQUVBOztBQUNBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDMEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEN0MsZ0JBQ3dEQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUQ5RSxzQkFFZ0JELElBRmhCO0FBSUFMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDSCxDQVBELEMsQ0FTQTs7O0FBQ0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFFM0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFDQSxNQUFRQyxLQUFSLEdBQWtCRixLQUFsQixDQUFRRSxLQUFSLENBTDJCLENBTzNCOztBQUNBLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVpQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFFQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBWkQsQyxDQWNBOzs7QUFDTyxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0QsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWWQsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FDNUJGLFNBQVMsQ0FBQ2dCLE9BQUQsRUFBVWQsUUFBVixDQURtQjtBQUFBLENBQXpCOzs7O0FBR1AsSUFBSUgsT0FBSixFQUFhO0FBQ1RBLEVBQUFBLE9BQU8sQ0FBQ21CLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DWCxhQUFuQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyog7LGE7YyF7LC9IOydtOuypO2KuCBqcyAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XHJcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcclxuXHJcbi8vIOuplOyEuOyngCDrtpnsl6zrhKPquLBcclxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7bmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJcclxuICAgICAgICB9Ojwvc3Bhbj4gJHt0ZXh0fVxyXG4gICAgYDtcclxuICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbi8vIOuplOyEuOyngCDshJzrsoQg7KCE64usIOuwjyDrqZTshLjsp4Ag7ZSE66Gg7Yq4IOuPmeyekSDsi6TtlolcclxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IGV2ZW50ID0+IHtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuXHJcbiAgICAvLyDtlbTri7kg7IaM7LyTIOqwneyytOulvCDqsIDsoLjsmYDshJwg66mU7IS47KeA6rCSIOybueyGjOy8kyDshJzrsoTsl5Ag7Iah7LacXHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuLy8g7ISc67KE7Kq9IOyGjOy8k+yXkCDstZzsi6Ag66mU7IS47KeAIOyghOuLrC5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxyXG4gICAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcclxuXHJcbmlmIChzZW5kTXNnKSB7XHJcbiAgICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XHJcbn0iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjNjOTU4Y2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7Il19
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME); // 소켓에 입력한 닉네임 정보 전달.

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
}; // 닉네임에 따른 로그인 유무 체크


if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
} // 닉네임 폼에서 입력된 닉네임 서버 전달


var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = ""; // 닉네임 로컬스토리지 저장

  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN; // 소켓에 닉네임 정보 전달

  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQixDLENBS0E7O0FBQ0EsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUgsUUFBUSxFQUFJO0FBQ3RCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBdkM7QUFFQSw0QkFBWUksTUFBWjtBQUNILENBTEQsQyxDQVFBOzs7QUFDQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUMxQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFRcUIsS0FBUixHQUFrQkQsS0FBbEIsQ0FBUUMsS0FBUjtBQUVBRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkLENBTjBCLENBUTFCOztBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBRUF2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQixDQVgwQixDQWExQjs7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQWZEOztBQWlCQSxJQUFJcEIsU0FBSixFQUFlO0FBQ1hBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXRzIH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuXHJcblxyXG5cclxuLy8g7IaM7LyT7JeQIOyeheugpe2VnCDri4nrhKTsnoQg7KCV67O0IOyghOuLrC5cclxuY29uc3QgbG9nSW4gPSBuaWNrbmFtZSA9PiB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xyXG5cclxuICAgIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn07XHJcblxyXG5cclxuLy8g64uJ64Sk7J6E7JeQIOuUsOuluCDroZzqt7jsnbgg7Jyg66y0IOyytO2BrFxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufSBlbHNlIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcblxyXG4vLyDri4nrhKTsnoQg7Y+87JeQ7IScIOyeheugpeuQnCDri4nrhKTsnoQg7ISc67KEIOyghOuLrFxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIC8vIOuLieuEpOyehCDroZzsu6zsiqTthqDrpqzsp4Ag7KCA7J6lXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xyXG5cclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG5cclxuICAgIC8vIOyGjOy8k+yXkCDri4nrhKTsnoQg7KCV67O0IOyghOuLrFxyXG4gICAgbG9nSW4odmFsdWUpO1xyXG59O1xyXG5cclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn0iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = exports.handleDisconnected = void 0;
// const notifications = document.getElementById("jsNotifications");
var body = document.querySelector("body"); // 알림 프론트 이벤트 동작 함수

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification"; // notifications.appendChild(notification);

  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return (// 입장할때 프론트 이벤트 실행
    fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)")
  );
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return (// 퇴장할때 프론트 이벤트 실행
    fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)")
  );
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLEMsQ0FFQTs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUVBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QixDQUxzQyxDQU90Qzs7QUFDQVgsRUFBQUEsSUFBSSxDQUFDWSxXQUFMLENBQWlCTixZQUFqQjtBQUNILENBVEQ7O0FBV08sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ3pCO0FBQ0FYLElBQUFBLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0I7QUFGUztBQUFBLENBQXRCOzs7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQzlCO0FBQ0FYLElBQUFBLGdCQUFnQixXQUFJVyxRQUFKLGtCQUEyQixrQkFBM0I7QUFGYztBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZmljYXRpb25zXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4vLyDslYzrprwg7ZSE66Gg7Yq4IOydtOuypO2KuCDrj5nsnpEg7ZWo7IiYXHJcbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcclxuXHJcbiAgICAvLyBub3RpZmljYXRpb25zLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+XHJcbiAgICAvLyDsnoXsnqXtlaDrlYwg7ZSE66Gg7Yq4IOydtOuypO2KuCDsi6TtlolcclxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDAsIDEyMiwgMjU1KVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gICAgLy8g7Ye07J6l7ZWg65WMIO2UhOuhoO2KuCDsnbTrsqTtirgg7Iuk7ZaJXHJcbiAgICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpOyJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleFilled = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
}; // 마우스가 움직이고, 그림 그릴때 그 값을 소켓 전송 해야하므로
// 여기에 소켓 동작 추가


function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY; // 마우스 시작 포인터 지정 및 그 좌표값 소켓 전송

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } // 그림 그릴 경우 포인터 지정 및 그 좌표값, 색깔 정보 소켓 전송
  else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
} // 채우기 함수 


function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
}

;

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUND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b20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc0NvbG9yXCIpO1xyXG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XHJcblxyXG5jb25zdCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XHJcbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xyXG5cclxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XHJcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcclxuXHJcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbmN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xyXG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcclxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcclxuXHJcbmxldCBwYWludGluZyA9IGZhbHNlO1xyXG5sZXQgZmlsbGluZyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xyXG4gICAgcGFpbnRpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcclxuICAgIHBhaW50aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuY29uc3QgYmVnaW5QYXRoID0gKHgsIHkpID0+IHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcclxuICAgIGlmIChjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcclxufTtcclxuXHJcbi8vIOuniOyasOyKpOqwgCDsm4Dsp4HsnbTqs6AsIOq3uOumvCDqt7jrprTrlYwg6re4IOqwkuydhCDshozsvJMg7KCE7IahIO2VtOyVvO2VmOuvgOuhnFxyXG4vLyDsl6zquLDsl5Ag7IaM7LyTIOuPmeyekSDstpTqsIBcclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xyXG4gICAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XHJcblxyXG4gICAgLy8g66eI7Jqw7IqkIOyLnOyekSDtj6zsnbjthLAg7KeA7KCVIOuwjyDqt7gg7KKM7ZGc6rCSIOyGjOy8kyDsoITshqFcclxuICAgIGlmICghcGFpbnRpbmcpIHtcclxuICAgICAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICAgICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOq3uOumvCDqt7jrprQg6rK97JqwIO2PrOyduO2EsCDsp4DsoJUg67CPIOq3uCDsooztkZzqsJIsIOyDieq5lCDsoJXrs7Qg7IaM7LyTIOyghOyGoVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcclxuICAgICAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNvbG9yQ2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XHJcbiAgICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGZpbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcclxuICAgIH1cclxufVxyXG5cclxuLy8g7LGE7Jqw6riwIO2VqOyImCBcclxuZnVuY3Rpb24gZmlsbChjb2xvciA9IG51bGwpIHtcclxuICAgIGxldCBjdXJyZW50Q29sb3IgPSBjdHguZmlsbFN0eWxlO1xyXG5cclxuICAgIGlmIChjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FudmFzQ2xpY2soKSB7XHJcbiAgICBpZiAoZmlsbGluZykge1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDTShldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuaWYgKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcclxufVxyXG5cclxuQXJyYXkuZnJvbShjb2xvcnMpLmZvckVhY2goY29sb3IgPT5cclxuICAgIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKVxyXG4pO1xyXG5cclxuaWYgKG1vZGUpIHtcclxuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSwgY29sb3IgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5LCBjb2xvcik7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTsiXX0=
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;

/* 유저 리스트 프론트 셋팅 */
var board = document.getElementById("jsPBoard");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDMUJKLEVBQUFBLEtBQUssQ0FBQ0ssU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFFBQU1DLGFBQWEsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBWixJQUFBQSxLQUFLLENBQUNhLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0gsR0FKRDtBQUtILENBUEQ7O0FBU08sSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCWixVQUFVLENBQUNZLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIOycoOyggCDrpqzsiqTtirgg7ZSE66Gg7Yq4IOyFi+2MhSAqL1xyXG5cclxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xyXG5cclxuY29uc3QgYWRkUGxheWVycyA9IHBsYXllcnMgPT4ge1xyXG4gICAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwbGF5ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX06ICR7cGxheWVyLnBvaW50c31gO1xyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpOyJdfQ==
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSocket = exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
}; // absocket 함수에 넣는 임의 변수로. 그냥 asocket 등으로 아무거나 해도 상관없음


exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
}; // 프론트 쪽 소켓 초기설정 셋팅.


exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0EsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEIsQyxDQUVQOzs7OztBQUNPLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLE9BQU87QUFBQSxTQUFLSCxNQUFNLEdBQUdHLE9BQWQ7QUFBQSxDQUE1QixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUQsT0FBTyxFQUFJO0FBQ2xDLGdCQUFtQkUsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFFQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFFQUgsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBVCxFQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FYLEVBQUFBLE1BQU0sQ0FBQ08sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQWIsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZixFQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FqQixFQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVUQsTUFBTSxDQUFDYyxZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0gsQ0FaTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRsZURpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcclxuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcclxuaW1wb3J0IHsgaGFuZGxlUGxheWVyVXBkYXRlIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbi8vIGFic29ja2V0IO2VqOyImOyXkCDrhKPripQg7J6E7J2YIOuzgOyImOuhnC4g6re464OlIGFzb2NrZXQg65Ox7Jy866GcIOyVhOustOqxsOuCmCDtlbTrj4Qg7IOB6rSA7JeG7J2MXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSBhU29ja2V0ID0+IChzb2NrZXQgPSBhU29ja2V0KTtcclxuXHJcbi8vIO2UhOuhoO2KuCDsqr0g7IaM7LyTIOy0iOq4sOyEpOyglSDshYvtjIUuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IGFTb2NrZXQgPT4ge1xyXG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuXHJcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxuICAgIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcclxuICAgIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xyXG59OyJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])