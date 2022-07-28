const API_ROOT = process.env.REACT_APP_API_URL;
console.log("TEST API", API_ROOT)

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/users/signin/",
    SIGNUP: API_ROOT + "/users/signup/",
    LOGOUT: API_ROOT + "/users/logout/",
    UPDATE_PASSWORD: API_ROOT + "/users/updatepassword/",
    UPDATE_USERNAME: API_ROOT + "/users/updateusername/",
    UPDATE_EMAIL: API_ROOT + "/users/updatemail/",
    UPDATE_PROFILE: API_ROOT + "/users/updateprofile/",
    GET_USERINFO: API_ROOT + "/users/",
    UPDATE_BGPIC: API_ROOT + "/users/updatebgpic/",
    UPDATE_PROFILEPIC: API_ROOT + "/users/updateprofilepic/",
    DELETE_USER: API_ROOT + "/users/",
  },
  LINKS: {
    GET_USERLINKS: API_ROOT + "/links/",
    REORDER_LINKS : API_ROOT + "/links/reorder",
    EDIT_LINK: API_ROOT+ "/links/",
    DELETE_LINK: API_ROOT+ "/links/",
    GET_LINK_TYPES: API_ROOT+ "/links/linkTypes/",
    ADD_NEW_LINK: API_ROOT+ "/links/",
    GET_QR: API_ROOT+ "/qrcodes/",
  },
  QRCODE: {
    CREATE_QR_CODE: API_ROOT + "/qrcodes/",
    CREATE_QR_FOR_LINKS: API_ROOT + "/qrcodes/qrlinks"
  },
  SUBSCRIBERS : {
    GET_NEW_SUBSCRIBERS : API_ROOT + "/subscribers"
  }
});

export default API_URLS;
