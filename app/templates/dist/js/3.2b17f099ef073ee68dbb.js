(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "2XN9": function(e, a, t) {
      "use strict";
      t.r(a);
      function r() {
        var a = this,
          e = a.$createElement,
          t = a._self._c || e;
        return t("div", [
          t(
            "div",
            { staticClass: "add-product" },
            [
              t(
                "a-button",
                { attrs: { type: "primary" }, on: { click: a.creatProduct } },
                [a._v("添加商品")]
              )
            ],
            1
          ),
          a._v(" "),
          t(
            "div",
            { staticClass: "product-list" },
            [
              t("a-table", {
                attrs: {
                  columns: a.columns,
                  rowKey: function(e) {
                    return e.login.uuid;
                  },
                  dataSource: a.data,
                  pagination: a.pagination,
                  loading: a.loading
                },
                on: { change: a.handleTableChange },
                scopedSlots: a._u([
                  {
                    key: "name",
                    fn: function(e) {
                      return [a._v(a._s(e.first) + " " + a._s(e.last))];
                    }
                  }
                ])
              })
            ],
            1
          ),
          a._v(" "),
          t(
            "div",
            { staticClass: "creat" },
            [
              t("create", {
                attrs: { visible: a.visible },
                on: { close: a.close }
              })
            ],
            1
          )
        ]);
      }
      function n() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "a-drawer",
          {
            attrs: {
              title: "添加产品",
              width: 720,
              visible: t.visible,
              wrapStyle: {
                height: "calc(100% - 108px)",
                overflow: "auto",
                paddingBottom: "108px"
              }
            },
            on: { close: t.onClose }
          },
          [
            r(
              "a-form",
              {
                attrs: {
                  form: t.form,
                  layout: "vertical",
                  hideRequiredMark: ""
                }
              },
              [
                r(
                  "a-row",
                  { attrs: { gutter: 16 } },
                  [
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "商品名称" } },
                          [
                            r("a-input", {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "name",
                                    {
                                      rules: [
                                        {
                                          required: !0,
                                          message: "请输入商品名称"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n              'name',\n              {\n                rules: [{ required: true, message: '请输入商品名称' }]\n              }\n            ]"
                                }
                              ],
                              attrs: { placeholder: "不能与淘宝商品名称标题" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "商品价值" } },
                          [
                            r("a-input", {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "name",
                                    {
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            "请输入粉丝使用熊掌兑换的价格"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n              'name',\n              {\n                rules: [\n                  { required: true, message: '请输入粉丝使用熊掌兑换的价格' }\n                ]\n              }\n            ]"
                                }
                              ],
                              attrs: { placeholder: "粉丝使用熊掌兑换的价格" }
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
                t._v(" "),
                r(
                  "a-row",
                  { attrs: { gutter: 16 } },
                  [
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "商品类目" } },
                          [
                            r(
                              "a-select",
                              {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "owner",
                                      {
                                        rules: [
                                          {
                                            required: !0,
                                            message: "Please select an owner"
                                          }
                                        ]
                                      }
                                    ],
                                    expression:
                                      "[\n              'owner',\n              {\n                rules: [{ required: true, message: 'Please select an owner' }]\n              }\n            ]"
                                  }
                                ],
                                attrs: { placeholder: "Please a-s an owner" }
                              },
                              [
                                r(
                                  "a-select-option",
                                  { attrs: { value: "xiao" } },
                                  [t._v("Xiaoxiao Fu")]
                                ),
                                t._v(" "),
                                r(
                                  "a-select-option",
                                  { attrs: { value: "mao" } },
                                  [t._v("Maomao Zhou")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "淘宝url" } },
                          [
                            r("a-input", {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "name",
                                    {
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            "请输入粉丝使用熊掌兑换的价格"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n              'name',\n              {\n                rules: [\n                  { required: true, message: '请输入粉丝使用熊掌兑换的价格' }\n                ]\n              }\n            ]"
                                }
                              ],
                              attrs: { placeholder: "粉丝使用熊掌兑换的价格" }
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
                t._v(" "),
                r(
                  "a-row",
                  { attrs: { gutter: 16 } },
                  [
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "淘宝名称" } },
                          [
                            r("a-input", {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "name",
                                    {
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            "请输入粉丝使用熊掌兑换的价格"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n              'name',\n              {\n                rules: [\n                  { required: true, message: '请输入粉丝使用熊掌兑换的价格' }\n                ]\n              }\n            ]"
                                }
                              ],
                              attrs: { placeholder: "粉丝使用熊掌兑换的价格" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    r(
                      "a-col",
                      { attrs: { span: 12 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "淘宝价格" } },
                          [
                            r("a-input", {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "name",
                                    {
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            "请输入粉丝使用熊掌兑换的价格"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n              'name',\n              {\n                rules: [\n                  { required: true, message: '请输入粉丝使用熊掌兑换的价格' }\n                ]\n              }\n            ]"
                                }
                              ],
                              attrs: { placeholder: "粉丝使用熊掌兑换的价格" }
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
                t._v(" "),
                r(
                  "a-row",
                  { attrs: { gutter: 16 } },
                  [
                    r(
                      "a-col",
                      { attrs: { span: 24 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "主图" } },
                          t._l(t.pictures, function(e, a) {
                            return r(
                              "a-upload",
                              {
                                key: a,
                                staticClass: "avatar-uploader",
                                attrs: {
                                  accept: ".jpeg, .jpg, .png, .gif",
                                  name: "avatar",
                                  listType: "picture-card",
                                  showUploadList: !1,
                                  action:
                                    "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                                  beforeUpload: t.beforeUpload
                                },
                                on: { change: t.detailImg }
                              },
                              [
                                e.img
                                  ? r("img", {
                                      attrs: { src: e.img, alt: "avatar" }
                                    })
                                  : r(
                                      "div",
                                      [
                                        r("a-icon", {
                                          attrs: {
                                            type: e.loading ? "loading" : "plus"
                                          }
                                        }),
                                        t._v(" "),
                                        r(
                                          "div",
                                          { staticClass: "ant-upload-text" },
                                          [t._v("上传")]
                                        )
                                      ],
                                      1
                                    )
                              ]
                            );
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(" "),
                r(
                  "a-row",
                  { attrs: { gutter: 16 } },
                  [
                    r(
                      "a-col",
                      { attrs: { span: 24 } },
                      [
                        r(
                          "a-form-item",
                          { attrs: { label: "详情图" } },
                          t._l(t.detailsImg, function(e, a) {
                            return r(
                              "a-upload",
                              {
                                key: a,
                                staticClass: "avatar-uploader",
                                attrs: {
                                  accept: ".jpeg, .jpg, .png, .gif",
                                  name: "avatar",
                                  listType: "picture-card",
                                  showUploadList: !1,
                                  action:
                                    "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                                  beforeUpload: t.beforeUpload
                                },
                                on: { change: t.detailImg }
                              },
                              [
                                e.img
                                  ? r("img", {
                                      attrs: { src: e.img, alt: "avatar" }
                                    })
                                  : r(
                                      "div",
                                      [
                                        r("a-icon", {
                                          attrs: {
                                            type: e.loading ? "loading" : "plus"
                                          }
                                        }),
                                        t._v(" "),
                                        r(
                                          "div",
                                          { staticClass: "ant-upload-text" },
                                          [t._v("上传")]
                                        )
                                      ],
                                      1
                                    )
                              ]
                            );
                          }),
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
            ),
            t._v(" "),
            r(
              "div",
              {
                style: {
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  borderTop: "1px solid #e9e9e9",
                  padding: "10px 16px",
                  background: "#fff",
                  textAlign: "right"
                }
              },
              [
                r(
                  "a-button",
                  { style: { marginRight: "8px" }, on: { click: t.onClose } },
                  [t._v("取消")]
                ),
                t._v(" "),
                r(
                  "a-button",
                  { attrs: { type: "primary" }, on: { click: t.onClose } },
                  [t._v("提交")]
                )
              ],
              1
            )
          ],
          1
        );
      }
      n._withStripped = r._withStripped = !0;
      var s = [
          { id: "0", name: "女装" },
          { id: "1", name: "男装" },
          { id: "2", name: "童装" },
          { id: "3", name: "鞋子" },
          { id: "4", name: "化妆品" },
          { id: "5", name: "汽车" }
        ],
        o = {
          props: { visible: { type: Boolean, default: !1 } },
          mixins: [
            {
              methods: {
                beforeUpload: function(e) {
                  var a = e.size / 1024 / 1024 < 2;
                  return (
                    a || this.$message.error("Image must smaller than 2MB!"),
                    isJPG && a
                  );
                }
              }
            }
          ],
          data: function() {
            return {
              category: s,
              form: this.$form.createForm(this),
              pictures: [{ img: "", loading: !1 }],
              detailsImg: [{ img: "", loading: !1 }]
            };
          },
          methods: {
            onClose: function() {
              this.$emit("close", !1);
            },
            detailImg: function() {}
          }
        },
        i = t("KHd+"),
        l = Object(i.a)(o, n, [], !1, null, null, null);
      l.options.__file = "src/views/product/comm/create.vue";
      var d = l.exports,
        c = [
          { title: "淘宝信息", dataIndex: "name" },
          { title: "类目", dataIndex: "category" },
          { title: "活动sku", dataIndex: "sku" },
          { title: "淘宝原价", dataIndex: "price" },
          { title: "心选价值（熊掌）", dataIndex: "discounts" },
          { title: "参与活动", dataIndex: "join" },
          { title: "操作", dataIndex: "handle" }
        ],
        u = {
          data: function() {
            return {
              columns: c,
              data: [],
              pagination: {},
              loading: !1,
              visible: !1
            };
          },
          methods: {
            close: function(e) {
              this.visible = e;
            },
            creatProduct: function() {
              this.visible = !0;
            },
            handleTableChange: function() {}
          },
          components: { Create: d }
        },
        p = (t("ZabK"), Object(i.a)(u, r, [], !1, null, "7cffdf3a", null));
      p.options.__file = "src/views/product/productList.vue";
      a.default = p.exports;
    },
    "3pb6": function(e, a, t) {
      var r = t("n50J");
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var n = { hmr: !0, transform: void 0, insertInto: void 0 };
      t("aET+")(r, n);
      r.locals && (e.exports = r.locals);
    },
    ZabK: function(e, a, t) {
      "use strict";
      var r = t("3pb6");
      t.n(r).a;
    },
    n50J: function(e, a, t) {
      (e.exports = t("JPst")(!1)).push([
        e.i,
        ".add-product[data-v-7cffdf3a] {\n  display: flex;\n  justify-content: flex-end;\n}\n.product-list[data-v-7cffdf3a] {\n  margin-top: 10px;\n}\n",
        ""
      ]);
    }
  }
]);
