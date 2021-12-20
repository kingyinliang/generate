((typeof self !== 'undefined' ? self : this)["webpackJsonpengine"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpengine"] || []).push([[1],{

/***/ "2807":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  app: {
    title: '推广页 H5'
  },
  header: {
    chineseDocument: '中文文档',
    englishDocument: '英文文档',
    chat: '交流群',
    //  Discussion Group
    logout: '退出登录'
  },
  sidebar: {
    myWorks: '我的作品',
    dataCenter: '数据中心',
    basicData: '基础数据',
    templateCenter: '模板中心',
    freeTemplates: '模板列表',
    accountCenter: '账号中心'
  },
  workCard: {
    description: '描述',
    createTime: '时间',
    useNow: '立即查看',
    preview: '预览',
    createNewWork: '创建新作品',
    edit: '编辑',
    view: '查看作品'
  },
  basicData: {
    viewData: '查看数据'
  },
  editor: {
    sidebar: {
      components: '组件列表',
      pages: '页面管理',
      templates: '模板',
      dialog: '弹窗',
      dataSource: '数据源'
    },
    pageManager: {
      title: '第{index}页面',
      action: {
        add: '新增页面',
        copy: '复制页面',
        delete: '删除页面'
      }
    },
    header: {
      preview: '预览',
      save: '保存',
      publish: '发布',
      setAsTemplate: '设置为模板'
    },
    centerPanel: {
      mode: {
        edit: '编辑',
        preview: '预览'
      },
      contextMenu: {
        copy: '复制',
        delete: '删除',
        moveToTop: '置顶',
        moveToBottom: '置底',
        moveUp: '上移',
        moveDown: '下移',
        showOnlyButton: '只有按钮才显示该选项',
        showExcludePicture: '除了图片都显示该选项'
      }
    },
    fixedTool: {
      undo: '撤销{hotkey}',
      redo: '重做{hotkey}',
      preview: '预览',
      copyCurrentPage: '复制当前页面',
      copyCurrentElement: '复制当前元素',
      importPSD: '导入PSD',
      zoomIn: '缩小{hotkey}',
      zoomOut: '放大{hotkey}',
      issues: '常见问题'
    },
    editPanel: {
      tab: {
        prop: '属性',
        animation: '动画',
        action: '动作',
        script: '脚本',
        page: '页面'
      },
      animation: {
        add: '添加动画',
        run: '运行动画',
        type: '动画类型',
        duration: '动画时长',
        delay: '动画延时',
        iteration: '运行次数',
        infinite: '循环播放',
        list: '选择动画',
        title: 'Animation {index}'
      },
      common: {
        empty: '请选择一个元素'
      }
    },
    tip: {
      componentUsage: '使用提示: {0} 组件即可',
      click: '点击或拖拽'
    }
  }
});

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// EXTERNAL MODULE: ./src/locales/lang/en-US.js
var en_US = __webpack_require__("743d");

// EXTERNAL MODULE: ./src/locales/lang/zh-CN.js
var zh_CN = __webpack_require__("2807");

// CONCATENATED MODULE: ./src/locales/index.js











external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_i18n_esm["a" /* default */]);
var messages = {
  'en-US': Object(objectSpread2["a" /* default */])({}, en_US["default"]),
  'zh-CN': Object(objectSpread2["a" /* default */])({}, zh_CN["default"])
};
var defaultLang = 'zh-CN';
var loadedLanguages = [defaultLang];
var i18n = new vue_i18n_esm["a" /* default */]({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages: messages
});

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

function loadLanguageAsync() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLang;
  return new Promise(function (resolve) {
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return __webpack_require__("4aa4")("./".concat(lang)).then(function (msg) {
          i18n.setLocaleMessage(lang, msg.default);
          loadedLanguages.push(lang);
          return setI18nLanguage(lang);
        });
      }

      return resolve(setI18nLanguage(lang));
    }

    return resolve(lang);
  });
}
/* harmony default export */ var locales = (i18n);
// CONCATENATED MODULE: ./src/store/modules/i18n.js



/* harmony default export */ var modules_i18n = ({
  namespaced: true,
  state: {
    lang: 'zh-CN'
  },
  mutations: {
    SetLang: function SetLang(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    SetLangAsync: function SetLangAsync(_ref, lang) {
      var commit = _ref.commit;
      return new Promise(function (resolve) {
        commit('SetLang', lang);
        loadLanguageAsync(lang);
        resolve();
      });
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./src/core/models/element.js + 1 modules
var models_element = __webpack_require__("a545");

// EXTERNAL MODULE: ./src/core/plugins/k-background.js
var k_background = __webpack_require__("e1dc");

// CONCATENATED MODULE: ./src/core/models/page.js






var page_Page = /*#__PURE__*/function () {
  function Page() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, Page);

    this.uuid = page.uuid || +new Date();
    this.title = page.title || '';
    this.height = page.height || 667;
    this.width = page.width || 375;
    this.elements = page.elements || [new models_element["a" /* default */](k_background["a" /* default */])];
  }

  Object(createClass["a" /* default */])(Page, [{
    key: "clone",
    value: function clone() {
      var elements = this.elements.map(function (element) {
        return new models_element["a" /* default */](element);
      });
      return new Page({
        title: this.title,
        elements: elements
      });
    }
  }]);

  return Page;
}();

/* harmony default export */ var models_page = (page_Page);
// EXTERNAL MODULE: ./src/core/models/data-source.js + 7 modules
var data_source = __webpack_require__("c401");

// CONCATENATED MODULE: ./src/core/models/work.js







var work_Work = function Work() {
  var work = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(classCallCheck["a" /* default */])(this, Work);

  this.id = work.id;
  this.title = work.title || '标题';
  this.description = work.description || '描述';
  this.pages = work.pages || [new models_page()];
  this.dialog = work.dialog || [];
  this.height = work.height || 667;
  this.is_template = false;
  this.datasources = (work.datasources || []).map(function (item) {
    return new data_source["a" /* default */](item);
  });
};

/* harmony default export */ var models_work = (work_Work);
// CONCATENATED MODULE: ./src/store/modules/editor/work.js





var actions = {
  updateWork: function updateWork(_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var work = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, state.work), payload);

    commit('setWork', work);
  }
};
var mutations = {
  setWork: function setWork(state, work) {
    window.__work = work;
    work.pages = work.pages.map(function (page) {
      page.elements = page.elements.map(function (element) {
        return new models_element["a" /* default */](element);
      });
      return new models_page(page);
    });
    state.work = new models_work(work);
  }
};
// CONCATENATED MODULE: ./src/core/models/dialog.js





var dialog_Dialog = /*#__PURE__*/function () {
  function Dialog() {
    var dialog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, Dialog);

    this.uuid = dialog.uuid || +new Date();
    this.title = dialog.title || '';
    this.height = dialog.height || 667;
    this.elements = dialog.elements || [];
  }

  Object(createClass["a" /* default */])(Dialog, [{
    key: "clone",
    value: function clone() {
      var elements = this.elements.map(function (element) {
        return new models_element["a" /* default */](element);
      });
      return new Dialog({
        title: this.title,
        elements: elements
      });
    }
  }]);

  return Dialog;
}();

/* harmony default export */ var models_dialog = (dialog_Dialog);
// CONCATENATED MODULE: ./src/store/modules/editor/page.js


var page_actions = {
  setEditingPage: function setEditingPage(_ref) {
    var commit = _ref.commit;
    var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    commit('setEditingPage', pageIndex);
  },
  setEditingDialog: function setEditingDialog(_ref2) {
    var commit = _ref2.commit;
    var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    commit('setEditingDialog', pageIndex);
  },
  updateEditingPageWidth: function updateEditingPageWidth(_ref3) {
    var commit = _ref3.commit;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commit('updateEditingPageWidth', payload.width);
  },
  updateEditingPageHeight: function updateEditingPageHeight(_ref4) {
    var commit = _ref4.commit;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commit('updateEditingPageHeight', payload.height);
  },
  addPage: function addPage(_ref5) {
    var commit = _ref5.commit;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commit('addPage', payload);
  },
  addDialog: function addDialog(_ref6) {
    var commit = _ref6.commit;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commit('addDialog', payload);
  }
};
var page_mutations = {
  setEditingPage: function setEditingPage(state) {
    var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    state.editingPage = state.work.pages[pageIndex];
  },
  setEditingDialog: function setEditingDialog(state) {
    var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    state.editingPage = state.work.dialog[pageIndex];
  },
  updateEditingPageHeight: function updateEditingPageHeight(state, height) {
    state.editingPage.height = height;
  },
  updateEditingPageWidth: function updateEditingPageWidth(state, width) {
    state.editingPage.width = width;
  },
  addPage: function addPage(state) {
    var page = new models_page();
    state.work.pages.push(page);
  },
  addDialog: function addDialog(state) {
    var dialog = new models_dialog();
    state.work.dialog.push(dialog);
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./src/store/modules/editor/element.js






var element_actions = {
  setEditingElement: function setEditingElement(_ref, payload) {
    var commit = _ref.commit;
    commit('setEditingElement', payload);
  },
  setElementPosition: function setElementPosition(_ref2, payload) {
    var commit = _ref2.commit;
    commit('setElementCommonStyle', payload);
  },
  setElementCommonStyle: function setElementCommonStyle(_ref3, payload) {
    var commit = _ref3.commit;
    commit('setElementCommonStyle', payload);
  },
  addElement: function addElement(_ref4, payload) {
    var commit = _ref4.commit;
    commit('addElement', payload);
  },
  copyElement: function copyElement(_ref5) {
    var commit = _ref5.commit;
    commit('copyElement');
  },
  deleteElement: function deleteElement(_ref6) {
    var commit = _ref6.commit;
    commit('deleteElement');
  },
  recordRect: function recordRect(_ref7) {
    var commit = _ref7.commit;
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commit('recordRect', payload);
  }
};
var element_mutations = {
  setEditingElement: function setEditingElement(state, payload) {
    state.editingElement = payload;
  },
  setElementCommonStyle: function setElementCommonStyle(state, payload) {
    state.editingElement.commonStyle = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, state.editingElement.commonStyle), payload);
  },
  addElement: function addElement(state, payload) {
    var vm = Object(utils["d" /* getVM */])(payload.name);
    vm.$options.shortcutProps = payload.shortcutProps;
    vm.$options.dragStyle = payload.dragStyle;
    vm.$options.zindex = state.editingPage.elements.length;
    var element = new models_element["a" /* default */](vm.$options);
    console.log(element);
    state.editingPage.elements.push(element);
  },
  copyElement: function copyElement(state) {
    var element = Object(utils["a" /* elementClone */])(state.editingElement, state.editingPage.elements.length);
    state.editingPage.elements.push(element);
  },
  deleteElement: function deleteElement(state) {
    var index = state.editingPage.elements.findIndex(function (e) {
      return e.uuid === state.editingElement.uuid;
    });

    if (index !== -1) {
      state.editingPage.elements.splice(index, 1);
    }

    state.editingElement = null;
  },
  recordRect: function recordRect() {}
};
// EXTERNAL MODULE: ./src/store/modules/editor/data-source.js
var editor_data_source = __webpack_require__("890e");

// CONCATENATED MODULE: ./src/store/modules/editor/index.js






var editor_state = {
  work: new models_work(),
  editingPage: {
    elements: []
  },
  editingElement: null,
  scaleRate: 1
};
var getters = {};

var editor_actions = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, actions), page_actions), element_actions), editor_data_source["b" /* actions */]), {}, {
  updateScaleRate: function updateScaleRate(_ref, payload) {
    var commit = _ref.commit;
    commit('updateScaleRate', payload);
  }
});

var editor_mutations = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, mutations), page_mutations), element_mutations), editor_data_source["c" /* mutations */]), {}, {
  updateScaleRate: function updateScaleRate(state, scaleRateDiff) {
    state.scaleRate += scaleRateDiff;
  }
});

/* harmony default export */ var editor = ({
  namespaced: true,
  state: editor_state,
  getters: getters,
  actions: editor_actions,
  mutations: editor_mutations
});
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// CONCATENATED MODULE: ./src/store/plugins/index.js



var recordHistoryMutationTypes = ['editor/recordRect', 'editor/addElement', 'editor/setEditingPage'];

var plugins_vuexHistory = function vuexHistory(store) {
  utils["g" /* undoRedoHistory */].init(store);
  store.subscribe(function (mutation, state) {
    var type = mutation.type;
    if (!recordHistoryMutationTypes.includes(type)) return;
    utils["g" /* undoRedoHistory */].addState(Object(lodash["cloneDeep"])(state));
  });
};

/* harmony default export */ var plugins = (plugins_vuexHistory);
// CONCATENATED MODULE: ./src/store/index.js




 // import VuexPersistence from 'vuex-persist';

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vuex_esm["a" /* default */]); // const vuexLocal = new VuexPersistence({
//   storage: window.sessionStorage
// });

/* harmony default export */ var src_store = __webpack_exports__["default"] = (new vuex_esm["a" /* default */].Store({
  modules: {
    i18n: modules_i18n,
    editor: editor
  },
  // plugins: [vuexLocal.plugin]
  plugins: [plugins]
}));

/***/ }),

/***/ "4aa4":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-US": "743d",
	"./en-US.js": "743d",
	"./zh-CN": "2807",
	"./zh-CN.js": "2807"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "4aa4";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "743d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  app: {
    title: 'Getting Out There H5'
  },
  header: {
    chineseDocument: '中文文档',
    englishDocument: 'Document(En)',
    chat: 'Discussion Group',
    //
    logout: 'Logout'
  },
  sidebar: {
    myWorks: 'My Works',
    dataCenter: 'Data Center',
    basicData: 'Basic Data',
    templateCenter: 'Templates',
    freeTemplates: 'Templates List',
    accountCenter: 'Account'
  },
  workCard: {
    description: 'Desc',
    createTime: 'Time',
    useNow: 'Use it Now',
    preview: 'Preview',
    edit: 'Edit',
    createNewWork: 'Create New',
    view: 'View Work'
  },
  basicData: {
    viewData: 'View Data'
  },
  editor: {
    sidebar: {
      components: 'Components',
      pages: 'Pages',
      templates: 'Templates',
      dialog: 'Dialog',
      dataSource: 'DataSource'
    },
    pageManager: {
      title: 'Page {index}',
      action: {
        add: 'Add Page',
        copy: 'Copy Page',
        delete: 'Delete Page'
      }
    },
    header: {
      preview: 'Preview',
      save: 'Save',
      publish: 'Publish',
      setAsTemplate: 'Set As Template'
    },
    centerPanel: {
      mode: {
        edit: 'Edit',
        preview: 'Preview'
      },
      contextMenu: {
        copy: 'Copy',
        delete: 'Delete',
        moveToTop: 'Move To Top',
        moveToBottom: 'Move To Bottom',
        moveUp: 'Move Up',
        moveDown: 'Move Down',
        showOnlyButton: 'showOnlyButton',
        showExcludePicture: 'showExcludePicture'
      }
    },
    fixedTool: {
      undo: 'Undo{hotkey}',
      redo: 'Redo{hotkey}',
      preview: 'Preview',
      copyCurrentPage: 'CopyCurrentPage',
      copyCurrentElement: 'copyCurrentElement',
      importPSD: 'Import PSD',
      zoomIn: 'Zoom In{hotkey}',
      zoomOut: 'Zoom Out{hotkey}',
      issues: 'Issues'
    },
    editPanel: {
      tab: {
        prop: 'Prop',
        animation: 'Animation',
        action: 'Action',
        script: 'Script',
        page: 'Page'
      },
      animation: {
        add: 'Add',
        run: 'Run',
        type: 'Type',
        duration: 'Duration',
        delay: 'Delay',
        iteration: 'Iteration',
        infinite: 'Infinite',
        list: 'Select Animation',
        title: 'Animation {index}'
      },
      common: {
        empty: 'Select an element first please!'
      }
    },
    tip: {
      componentUsage: 'Tip: just {0} on component',
      click: 'click/drag'
    }
  }
});

/***/ })

}]);