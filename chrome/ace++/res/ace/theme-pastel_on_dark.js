define("ace/theme/pastel_on_dark",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-pastel-on-dark";
exports.cssText = "\
.ace-pastel-on-dark .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-pastel-on-dark .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-pastel-on-dark .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-pastel-on-dark .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-pastel-on-dark .ace_scroller {\
  background-color: #2C2828;\
}\
\
.ace-pastel-on-dark .ace_text-layer {\
  cursor: text;\
  color: #8F938F;\
}\
\
.ace-pastel-on-dark .ace_cursor {\
  border-left: 2px solid #A7A7A7;\
}\
\
.ace-pastel-on-dark .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #A7A7A7;\
}\
 \
.ace-pastel-on-dark .ace_marker-layer .ace_selection {\
  background: rgba(221, 240, 255, 0.20);\
}\
\
.ace-pastel-on-dark .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-pastel-on-dark .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25);\
}\
\
.ace-pastel-on-dark .ace_marker-layer .ace_active_line {\
  background: rgba(255, 255, 255, 0.031);\
}\
\
.ace-pastel-on-dark .ace_marker-layer .ace_selected_word {\
  border: 1px solid rgba(221, 240, 255, 0.20);\
}\
       \
.ace-pastel-on-dark .ace_invisible {\
  color: rgba(255, 255, 255, 0.25);\
}\
\
.ace-pastel-on-dark .ace_keyword {\
  color:#757aD8;\
}\
\
.ace-pastel-on-dark .ace_keyword.ace_operator {\
  color:#797878;\
}\
\
.ace-pastel-on-dark .ace_constant {\
  color:#4FB7C5;\
}\
\
.ace-pastel-on-dark .ace_constant.ace_language {\
  color:#DE8E30;\
}\
\
.ace-pastel-on-dark .ace_constant.ace_numeric {\
  color:#CCCCCC;\
}\
\
.ace-pastel-on-dark .ace_invalid {\
  color:#F8F8F8;\
background-color:rgba(86, 45, 86, 0.75);\
}\
\
.ace-pastel-on-dark .ace_invalid.ace_illegal {\
  color:#F8F8F8;\
background-color:rgba(86, 45, 86, 0.75);\
}\
\
.ace-pastel-on-dark .ace_invalid.ace_deprecated {\
  text-decoration:underline;\
font-style:italic;\
color:#D2A8A1;\
}\
\
.ace-pastel-on-dark .ace_fold {\
    background-color: #757aD8;\
    border-color: #8F938F;\
}\
\
.ace-pastel-on-dark .ace_support.ace_function {\
  color:#AEB2F8;\
}\
\
.ace-pastel-on-dark .ace_string {\
  color:#66A968;\
}\
\
.ace-pastel-on-dark .ace_string.ace_regexp {\
  color:#E9C062;\
}\
\
.ace-pastel-on-dark .ace_comment {\
  color:#A6C6FF;\
}\
\
.ace-pastel-on-dark .ace_variable {\
  color:#BEBF55;\
}\
\
.ace-pastel-on-dark .ace_variable.ace_language {\
  color:#C1C144;\
}\
\
.ace-pastel-on-dark .ace_xml_pe {\
  color:#494949;\
}\
\
.ace-pastel-on-dark .ace_markup.ace_underline {\
    text-decoration:underline;\
}";

    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText);
});

