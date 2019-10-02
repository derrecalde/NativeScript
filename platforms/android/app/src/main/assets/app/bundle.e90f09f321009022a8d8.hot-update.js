webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onTodoItemTap(item) {
      var index = this.todos.indexOf(item);
      action("What do you want to do with this task?", "Cancel", ["Mark completed", "Delete forever"]).then(result => {
        console.log(result);

        switch (result) {
          case "Mark completed":
            this.dones.unshift(item);
            this.todos.splice(index, 1);
            this.activeTabIndex = 1;
            break;

          case "Delete forever":
            this.todos.splice(index, 1);
            break;

          case "Cancel" || false:
            break;
        }
      });
    },

    onTodoCircleTap(item) {
      var index = this.todos.indexOf(item);
      this.dones.unshift(item);
      this.todos.splice(index, 1);
      this.activeTabIndex = 1;
    },

    onCompletedItemTap(item) {
      var index = this.dones.indexOf(item);
      action("What do you want to do with this task?", "Cancel", ["Mark to do", "Delete forever"]).then(result => {
        console.log(result);

        switch (result) {
          case "Mark to do":
            this.todos.unshift(item);
            this.dones.splice(index, 1);
            this.activeTabIndex = 0;
            break;

          case "Delete forever":
            this.dones.splice(index, 1);
            break;

          case "Cancel" || false:
            break;
        }
      });
    },

    onCompletedCircleTap(item) {
      var index = this.dones.indexOf(item);
      this.todos.unshift(item);
      this.dones.splice(index, 1);
      this.activeTabIndex = 0;
    },

    onReturnPress() {
      if (this.textFieldValue.trim() === "") {
        this.$refs.taskInput.nativeView.focus();
        return;
      }

      console.log("New task added: " + this.textFieldValue + ".");
      this.todos.unshift({
        name: this.textFieldValue
      });
      this.textFieldValue = "";
    },

    onTabChange(tab) {
      this.activeTabIndex = tab.value;
    }

  },

  data() {
    return {
      todos: [{
        name: "Feed dog"
      }, {
        name: "Ride bike"
      }, {
        name: "Go grocery shopping"
      }],
      dones: [],
      textFieldValue: "",
      activeTabIndex: 0
    };
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("ActionBar", { attrs: { title: "To do list", flat: "true" } }),
      _c(
        "TabView",
        {
          attrs: { selectedIndex: _vm.activeTabIndex },
          on: { selectedIndexChange: _vm.onTabChange }
        },
        [
          _c(
            "TabViewItem",
            { attrs: { title: "To Do" } },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, *" } },
                [
                  _c("Label", {
                    staticClass: "header",
                    attrs: { row: "0", text: "My Tasks" }
                  }),
                  _c("TextField", {
                    ref: "taskInput",
                    attrs: {
                      row: "1",
                      hint: "Enter text...",
                      returnKeyType: "done",
                      text: _vm.textFieldValue
                    },
                    on: {
                      returnPress: _vm.onReturnPress,
                      textChange: function($event) {
                        _vm.textFieldValue = $event.value
                      }
                    }
                  }),
                  _c(
                    "ListView",
                    {
                      staticClass: "list-group",
                      attrs: { row: "2", items: _vm.todos, "+alias": "todo" }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var todo = ref.todo
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "GridLayout",
                                { attrs: { columns: "auto, *" } },
                                [
                                  _c("Label", {
                                    attrs: { col: "0", text: " " },
                                    on: {
                                      tap: function($event) {
                                        return _vm.onTodoCircleTap(todo)
                                      }
                                    }
                                  }),
                                  _c("Label", {
                                    attrs: {
                                      col: "1",
                                      text: todo.name,
                                      textWrap: "true"
                                    },
                                    on: {
                                      tap: function($event) {
                                        return _vm.onTodoItemTap(todo)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabViewItem",
            { attrs: { title: "Completed" } },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "auto, *" } },
                [
                  _c("Label", {
                    staticClass: "header completed",
                    attrs: { row: "0", text: "Completed Tasks" }
                  }),
                  _c(
                    "ListView",
                    {
                      staticClass: "list-group",
                      attrs: { row: "1", items: _vm.dones, "+alias": "done" }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var done = ref.done
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "GridLayout",
                                { attrs: { columns: "auto, *" } },
                                [
                                  _c("Label", {
                                    attrs: { col: "0", text: "✓" },
                                    on: {
                                      tap: function($event) {
                                        return _vm.onCompletedCircleTap(done)
                                      }
                                    }
                                  }),
                                  _c("Label", {
                                    attrs: {
                                      col: "1",
                                      text: done.name,
                                      textWrap: "true"
                                    },
                                    on: {
                                      tap: function($event) {
                                        return _vm.onCompletedItemTap(done)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzAwYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUNBLGdCQURBLEVBRUEsZ0JBRkEsR0FHQSxJQUhBLENBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFWQTtBQVlBLE9BakJBO0FBa0JBLEtBckJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1QkE7O0FBOEJBO0FBQ0E7QUFDQSxrRUFDQSxZQURBLEVBRUEsZ0JBRkEsR0FHQSxJQUhBLENBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFWQTtBQVlBLE9BakJBO0FBa0JBLEtBbERBOztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6REE7O0FBMkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBLEtBckVBOztBQXVFQTtBQUNBO0FBQ0E7O0FBekVBLEdBREE7O0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsU0FHQTtBQUNBO0FBREEsT0FIQSxFQU1BO0FBQ0E7QUFEQSxPQU5BLENBREE7QUFXQSxlQVhBO0FBWUEsd0JBWkE7QUFhQTtBQWJBO0FBZUE7O0FBN0ZBLEc7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0EsdUJBQXVCLFNBQVMsb0NBQW9DLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9DQUFvQztBQUN0RCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxpQkFBaUIsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyx3QkFBd0IsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMscUJBQXFCLEVBQUU7QUFDakU7QUFDQTtBQUNBLDRDQUE0QyxzQkFBc0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMscUJBQXFCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsa0JBQWtCLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMscUJBQXFCLEVBQUU7QUFDakU7QUFDQTtBQUNBLDRDQUE0QyxzQkFBc0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZTkwZjA5ZjMyMTAwOTAyMmE4ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIlRvIGRvIGxpc3RcIiBmbGF0PVwidHJ1ZVwiIC8+XG5cbiAgICAgICAgPFRhYlZpZXcgOnNlbGVjdGVkSW5kZXg9XCJhY3RpdmVUYWJJbmRleFwiIEBzZWxlY3RlZEluZGV4Q2hhbmdlPVwib25UYWJDaGFuZ2VcIj5cblxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiVG8gRG9cIj5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0bywgYXV0bywgKlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIHRleHQ9XCJNeSBUYXNrc1wiIGNsYXNzPVwiaGVhZGVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cIjFcIiByZWY9XCJ0YXNrSW5wdXRcIiB2LW1vZGVsPVwidGV4dEZpZWxkVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIkVudGVyIHRleHQuLi5cIiByZXR1cm5LZXlUeXBlPVwiZG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJvblJldHVyblByZXNzXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgcm93PVwiMlwiIGNsYXNzPVwibGlzdC1ncm91cFwiIGZvcj1cInRvZG8gaW4gdG9kb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgdi1vbjp0YXA9XCJvblRvZG9DaXJjbGVUYXAodG9kbylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIiBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHYtb246dGFwPVwib25Ub2RvSXRlbVRhcCh0b2RvKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cInRvZG8ubmFtZVwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9UYWJWaWV3SXRlbT5cbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCAqXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgdGV4dD1cIkNvbXBsZXRlZCBUYXNrc1wiIGNsYXNzPVwiaGVhZGVyIGNvbXBsZXRlZFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IHJvdz1cIjFcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIiBmb3I9XCJkb25lIGluIGRvbmVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHYtb246dGFwPVwib25Db21wbGV0ZWRDaXJjbGVUYXAoZG9uZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIuKck1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdi1vbjp0YXA9XCJvbkNvbXBsZXRlZEl0ZW1UYXAoZG9uZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJkb25lLm5hbWVcIiB0ZXh0V3JhcD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICA8L1RhYlZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25Ub2RvSXRlbVRhcChpdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICAgICAgYWN0aW9uKFwiV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgdGFzaz9cIiwgXCJDYW5jZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICBcIk1hcmsgY29tcGxldGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRGVsZXRlIGZvcmV2ZXJcIlxuICAgICAgICAgICAgICAgIF0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNYXJrIGNvbXBsZXRlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZXMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRGVsZXRlIGZvcmV2ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2FuY2VsXCIgfHwgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblRvZG9DaXJjbGVUYXAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9uZXMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDE7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkNvbXBsZXRlZEl0ZW1UYXAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kb25lcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGFjdGlvbihcIldoYXQgZG8geW91IHdhbnQgdG8gZG8gd2l0aCB0aGlzIHRhc2s/XCIsIFwiQ2FuY2VsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgXCJNYXJrIHRvIGRvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRGVsZXRlIGZvcmV2ZXJcIlxuICAgICAgICAgICAgICAgIF0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNYXJrIHRvIGRvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2Rvcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEZWxldGUgZm9yZXZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDYW5jZWxcIiB8fCB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uQ29tcGxldGVkQ2lyY2xlVGFwKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZG9uZXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb25lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25SZXR1cm5QcmVzcygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0RmllbGRWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy50YXNrSW5wdXQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHRhc2sgYWRkZWQ6IFwiICsgdGhpcy50ZXh0RmllbGRWYWx1ZSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRleHRGaWVsZFZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGRWYWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblRhYkNoYW5nZSh0YWIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGFiLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvZG9zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGZWVkIGRvZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUmlkZSBiaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHbyBncm9jZXJ5IHNob3BwaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZG9uZXM6IFtdLFxuICAgICAgICAgICAgICAgIHRleHRGaWVsZFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluZGV4OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICBBY3Rpb25CYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gIH1cbiAgLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0OTVFO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMCAxNSAxNSAxNTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVG8gZG8gbGlzdFwiLCBmbGF0OiBcInRydWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiVGFiVmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc2VsZWN0ZWRJbmRleDogX3ZtLmFjdGl2ZVRhYkluZGV4IH0sXG4gICAgICAgICAgb246IHsgc2VsZWN0ZWRJbmRleENoYW5nZTogX3ZtLm9uVGFiQ2hhbmdlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJUbyBEb1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sIGF1dG8sICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCB0ZXh0OiBcIk15IFRhc2tzXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YXNrSW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW50ZXIgdGV4dC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50ZXh0RmllbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0ub25SZXR1cm5QcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZXh0RmllbGRWYWx1ZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGl0ZW1zOiBfdm0udG9kb3MsIFwiK2FsaWFzXCI6IFwidG9kb1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvZG8gPSByZWYudG9kb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHRleHQ6IFwiIFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ub2RvQ2lyY2xlVGFwKHRvZG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRvZG8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVG9kb0l0ZW1UYXAodG9kbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkNvbXBsZXRlZFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlciBjb21wbGV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgdGV4dDogXCJDb21wbGV0ZWQgVGFza3NcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgaXRlbXM6IF92bS5kb25lcywgXCIrYWxpYXNcIjogXCJkb25lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IHJlZi5kb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgdGV4dDogXCLinJNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ29tcGxldGVkQ2lyY2xlVGFwKGRvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRvbmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ29tcGxldGVkSXRlbVRhcChkb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9