define("ace/theme/clouds_midnight",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-clouds-midnight";
exports.cssText = "\
.ace-clouds-midnight .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-clouds-midnight .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-clouds-midnight .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-clouds-midnight .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-clouds-midnight .ace_scroller {\
  background-color: #191919;\
}\
\
.ace-clouds-midnight .ace_text-layer {\
  cursor: text;\
  color: #929292;\
}\
\
.ace-clouds-midnight .ace_cursor {\
  border-left: 2px solid #7DA5DC;\
}\
\
.ace-clouds-midnight .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #7DA5DC;\
}\
 \
.ace-clouds-midnight .ace_marker-layer .ace_selection {\
  background: #000000;\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #BFBFBF;\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_active_line {\
  background: rgba(215, 215, 215, 0.031);\
}\
\
.ace-clouds-midnight .ace_marker-layer .ace_selected_word {\
  border: 1px solid #000000;\
}\
       \
.ace-clouds-midnight .ace_invisible {\
  color: #BFBFBF;\
}\
\
.ace-clouds-midnight .ace_keyword {\
  color:#927C5D;\
}\
\
.ace-clouds-midnight .ace_keyword.ace_operator {\
  color:#4B4B4B;\
}\
\
.ace-clouds-midnight .ace_constant.ace_language {\
  color:#39946A;\
}\
\
.ace-clouds-midnight .ace_constant.ace_numeric {\
  color:#46A609;\
}\
\
.ace-clouds-midnight .ace_invalid {\
  color:#FFFFFF;\
background-color:#E92E2E;\
}\
\
.ace-clouds-midnight .ace_fold {\
    background-color: #927C5D;\
    border-color: #929292;\
}\
\
.ace-clouds-midnight .ace_support.ace_function {\
  color:#E92E2E;\
}\
\
.ace-clouds-midnight .ace_string {\
  color:#5D90CD;\
}\
\
.ace-clouds-midnight .ace_comment {\
  color:#3C403B;\
}\
\
.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {\
  color:#606060;\
}\
\
.ace-clouds-midnight .ace_markup.ace_underline {\
    text-decoration:underline;\
}";

    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText);
});

