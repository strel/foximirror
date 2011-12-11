define("ace/theme/merbivore_soft",[], function(require, exports, module) {
exports.isDark = true;
exports.cssText = ".ace-merbivore-soft .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-merbivore-soft .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-merbivore-soft .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-merbivore-soft .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-merbivore-soft .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-merbivore-soft .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-merbivore-soft .ace_scroller {\
  background-color: #1C1C1C;\
}\
\
.ace-merbivore-soft .ace_text-layer {\
  cursor: text;\
  color: #E6E1DC;\
}\
\
.ace-merbivore-soft .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-merbivore-soft .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-merbivore-soft .ace_marker-layer .ace_selection {\
  background: #494949;\
}\
\
.ace-merbivore-soft .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-merbivore-soft .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #FCE94F;\
}\
\
.ace-merbivore-soft .ace_marker-layer .ace_active_line {\
  background: #333435;\
}\
\
       \
.ace-merbivore-soft .ace_invisible {\
  color: #404040;\
}\
\
.ace-merbivore-soft .ace_keyword {\
  color:#FC803A;\
}\
\
.ace-merbivore-soft .ace_keyword.ace_operator {\
  \
}\
\
.ace-merbivore-soft .ace_constant {\
  color:#68C1D8;\
}\
\
.ace-merbivore-soft .ace_constant.ace_language {\
  color:#E1C582;\
}\
\
.ace-merbivore-soft .ace_constant.ace_library {\
  color:#8EC65F;\
}\
\
.ace-merbivore-soft .ace_constant.ace_numeric {\
  color:#7FC578;\
}\
\
.ace-merbivore-soft .ace_invalid {\
  color:#FFFFFF;\
background-color:#FE3838;\
}\
\
.ace-merbivore-soft .ace_invalid.ace_illegal {\
  \
}\
\
.ace-merbivore-soft .ace_invalid.ace_deprecated {\
  color:#FFFFFF;\
  background-color:#FE3838;\
}\
\
.ace-merbivore-soft .ace_support {\
  \
}\
\
.ace-merbivore-soft .ace_support.ace_function {\
  color:#FC803A;\
}\
\
.ace-merbivore-soft .ace_function.ace_buildin {\
  \
}\
\
.ace-merbivore-soft .ace_string {\
  color:#8EC65F;\
}\
\
.ace-merbivore-soft .ace_string.ace_regexp {\
  \
}\
\
.ace-merbivore-soft .ace_comment {\
  color:#AC4BB8;\
}\
\
.ace-merbivore-soft .ace_comment.ace_doc {\
  \
}\
\
.ace-merbivore-soft .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-merbivore-soft .ace_variable {\
  \
}\
\
.ace-merbivore-soft .ace_variable.ace_language {\
  \
}\
\
.ace-merbivore-soft .ace_xml_pe {\
  \
}\
\
.ace-merbivore-soft .ace_meta {\
  \
}\
\
.ace-merbivore-soft .ace_meta.ace_tag {\
  color:#FC803A;\
}\
\
.ace-merbivore-soft .ace_meta.ace_tag.ace_input {\
  \
}\
\
.ace-merbivore-soft .ace_entity.ace_other.ace_attribute-name {\
  color:#EAF1A3;\
}\
\
.ace-merbivore-soft .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-merbivore-soft .ace_markup.ace_heading {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_1 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_2 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_3 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_4 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_5 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_heading.ace_6 {\
  \
}\
\
.ace-merbivore-soft .ace_markup.ace_list {\
  \
}\
\
.ace-merbivore-soft .ace_collab.ace_user1 {\
     \
}";

exports.cssClass = "ace-merbivore-soft";

    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText);

});

