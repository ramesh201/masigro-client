//import axios from "axios";

var home = {
  currUserMailAddress: function (userCookieValueParam) {
    alert(userCookieValueParam);
  },
  singleClick: function singleClick() {
    console.log("Single clicked");
    if (this.state.itemCount == 0) {
      alert("Cart is empty...");
      this.setState({ showConfModal: false });
    } else {
      this.setState({ showConfModal: true });
    }
    return this.state.showConfModal;
  },

  setCookie: function setCookie(name, value, days) {
    debugger;
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  getCookieExpirationDate: function getCookieExpirationDate(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  eraseCookie: function eraseCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};
module.exports = home;
