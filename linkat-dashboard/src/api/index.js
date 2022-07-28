const API_ROOT = process.env.REACT_APP_API_URL;
console.log("API_URL = ", API_ROOT);

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/admins/signin/",
    LOGOUT: API_ROOT + "/users/logout/",
  },
  USERS: {
    TOGGLE_ACTIVITY: API_ROOT + "/admins/activity/" + extraData,
    GET_USERS: API_ROOT + "/admins/users/",
    GET_USERSDATES: API_ROOT + "/admins/users/dates",
    GET_USER: API_ROOT + "/admins/users/" + extraData,
    GET_USERLINKS: API_ROOT + "/admins/users/" + extraData + "/links", //get all links from user
    DELETE_USER: API_ROOT + "/admins/users/" + extraData,
    DELETE_LINK: API_ROOT + "/admins/links/" + extraData,
  },
  ADMINS: {
    GET_ADMINS: API_ROOT + "/admins/",
    CREATE_ADMIN: API_ROOT + "/superadmins/createadmin",
    DELETE_ADMIN: API_ROOT + "/superadmins/delete/" + extraData,
    CHANGE_ROLE: API_ROOT + "/superadmins/users/" + extraData,
  },
  LINKTYPES: {
    GET_LINKTYPES: API_ROOT + "/admins/linktypes/",
    ADD_LINKTYPE: API_ROOT + "/admins/linktypes/",
    EDIT_LINKTYPE: API_ROOT + "/admins/linktypes/" + extraData,
    EDIT_LINKICON: API_ROOT + "/admins/linksicon/" + extraData,
  },
});

export default API_URLS;
