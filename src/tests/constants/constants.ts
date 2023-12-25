require("dotenv").config();
const BASE_URL = process.env.BASE_URL;
const MAIN_LINKS_AND_IDS = {
  contactUs: {
    id: "contact-us",
    selectorContainer: {
      byId: {
        contactForm: "contact_form",
        contactReplyPostSendMessage: "contact_reply",
        fountainG: "fountainG",
      },
      byName: {
        firstName: "first_name",
        lastName: "last_name",
        email: "email",
        message: "message",
      },
      type: {
        submit: "submit",
        reset: "reset",
      },
    },
  },
  loginPortal: {
    id: "login-portal",
    selectorContainer: {
      byId: {
        textUsernameId: "text",
        passwordId: "password",
        loginButton: "login-button",
      },
      byName: {},
      byType: {},
    },
  },
  buttonClicks: {
    id: "button-clicks",
    selectorContainer: {
      byId: { button1: "button1", button2: "button2", button3: "button3" },
      byName: {},
      byType: {},
    },
  },
  toDoList: {
    id: "to-do-list",
    selectorContainer: {
      byId: { container: "container" },
      byName: {},
      byType: {},
    },
  },
  pageObjectModel: {
    id: "page-object-model",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  dropdown: {
    id: "dropdown-checkboxes-radiobuttons",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  ajaxLoader: {
    id: "ajax-loader",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  actions: {
    id: "actions",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  scrollingArround: {
    id: "scrolling-around",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  popupAlerts: {
    id: "popup-alerts",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  iframe: {
    id: "iframe",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  hiddenElements: {
    id: "hidden-elements",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  dataTable: {
    id: "data-table",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  autocompleteTextField: {
    id: "autocomplete-textfield",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  fileUpload: {
    id: "file-upload",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
  datePicker: {
    id: "datepicker",
    selectorContainer: { byId: {}, byName: {}, byType: {} },
  },
};

const EXCEL_HEADERS: string[] = [
  "id",
  "featureName",
  "name",
  "uri",
  "tags",
  "steps",
  "status",
  "duration(nanoseconds)",
  "retried",
  "failure",
];
const EXCEL_FILE_NAME = "ExcelReport";

export default {
  BASE_URL,
  MAIN_LINKS_AND_IDS,
  EXCEL_HEADERS,
  EXCEL_FILE_NAME,
};
