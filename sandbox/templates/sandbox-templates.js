(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['inlet'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n<style>\n  body {\n    margin-top: -12px;\n    padding: 0;\n    border-radius: 0;\n  }\n  #display {\n    padding-top:0;\n    margin-top: 0;\n    border-radius: 0;\n  }\n  #gif {\n    display:none;\n  }\n</style>\n";}

function program3(depth0,data) {
  
  
  return "\n<style>\n  #gif {\n    display:none;\n  }\n</style>\n";}

function program5(depth0,data) {
  
  
  return "class=\"hidden\"";}

function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "tb.__fullscreen__ = ";
  foundHelper = helpers.fullscreen;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.fullscreen; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "; ";
  return buffer;}

  buffer += "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\"/>\n	<title>Tributary Sandbox</title>\n	<link rel=\"stylesheet\" media=\"all\" href=\"\"/>\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n	<!-- Adding \"maximum-scale=1\" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->\n\n  <link rel=\"stylesheet\" href=\"/static/css/trib.css\">\n  <link rel=\"stylesheet\" href=\"/static/css/animation.css\">\n  <link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n  <link rel=\"stylesheet\" href=\"/static/css/tipsy.css\">\n\n  <!-- Add jQuery -->\n  <script src=\"/static/lib/jquery-1.7.min.js\"></script>\n  <script src=\"/static/lib/jquery.tipsy.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n  \n  <!-- CodeMirror Things -->\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/lib/codemirror.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/lib/util/dialog.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/night.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/vibrant-ink.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/ambiance.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/elegant.css\">\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/addon/lint/lint.css\">\n\n<!-- Add EJ modified lesser dark -->\n<link rel=\"stylesheet\" href=\"/static/lib/CodeMirror3/theme/ej.css\">\n\n<link rel=\"stylesheet\" href=\"/static/lib/inlet.css\" type=\"text/css\" media=\"screen\" charset=\"utf-8\">\n<!-- And the main styles -->\n<link rel=\"stylesheet\" href=\"/static/css/style.css\" type=\"text/css\" media=\"screen\" title=\"Primary Stylesheet\" charset=\"utf-8\">\n\n<script src=\"/static/lib/html5slider.js\"></script>\n";
  stack1 = depth0.embed;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = depth0.share;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</head>\n<body>\n<div id=\"container\">\n\n	<section id=\"display\">\n	</section>\n  \n  <aside id=\"panel\" ";
  stack1 = depth0.fullscreen;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n		<section id=\"files\">\n			<ul id=\"file-list\">\n			</ul>\n		</section>\n\n		<section id=\"config\" >\n			<button id=\"config-toggle\">Config</button>\n			<button id=\"library-toggle\">Add libraries</button>\n			<button id=\"fullscreen\">Fullscreen</button>\n\n\n			<div id=\"config-content\" class=\"config-content\" style=\"display: none;\">\n				<h4>Display <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n				<select>\n					<option value=\"svg\">SVG</option>\n					<option value=\"canvas\">Canvas</option>\n					<option value=\"webgl\">WebGL</option>\n					<option value=\"div\">HTML</option>\n				</select>\n\n        \n\n        <div id=\"editorcontrols\">\n          <h4>Editor Controls <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n          <button id=\"logerrors\" >Log Errors</button>\n          <button id=\"updatecode\" class=\"active\">Auto Update</button>\n        </div>\n\n        <div id=\"thumbnail-content\">\n          <h4>Add thumbnail <small><i class=\"explain-this-shit icon-help-circled\"></i></small></h4>\n          <img id=\"trib-thumbnail\" style=\"display:none;\"></img>\n          <i id=\"thumb-load\" class=\"icon-load animate-spin\" style=\"opacity: 0;\" original-title=\"\"></i>\n          <input type=\"file\" name=\"files[]\" />\n        </div>\n\n			</div>\n\n				<div id=\"library-content\" class=\"config-content\" style=\"display: none;\">\n					<ul id=\"library-checklist\">\n          <!--\n					<li class=\"lib\"> <input type=\"checkbox\" /> Tabletop </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> Paper.js </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> Kartogram </li>\n					<li class=\"lib\"> <input type=\"checkbox\" /> TopoJSON </li>\n          -->\n					</ul>\n					<h4>Import URL</h4>\n					<ul id=\"library-links\">\n						<li class=\"add-link\">Title: <input type=\"text\" class=\"library-title\"> URL: <input type=\"text\" class=\"library-url\">\n						<button class=\"add-library\">Add</button>\n						</li>\n					</ul>\n				</div>\n\n		</section>\n		<section id=\"code\">\n\n		</section>\n\n    <section id=\"controls\">\n    </section>\n\n	</aside>\n  \n  <section id=\"plugins\">\n  </section>\n\n</div>\n\n\n<!-- Essential 3rd party libraries (that can't be browserified for now) -->\n<script src=\"/static/lib/coffee-script.js\"></script>\n<script src=\"/static/lib/jsonlint.js\"></script>\n\n\n<!-- three.js should probably be done as a plugin -->\n<!--<script src=\"/static/lib/three.min.js\"></script>-->\n<script src=\"/static/lib/three.js\"></script>\n<script src=\"/static/lib/Stats.js\"></script>\n\n<!-- 3rd party libs we want available as global variables (should be libs in the add libraries list) -->\n<script src=\"/static/lib/underscore-min.js\"></script>\n<script src=\"/static/lib/queue.min.js\"></script>\n\n<!-- extra 3rd party libs\nTODO: add these as defualt libs in the list\n<script src=\"http://d3js.org/topojson.v0.min.js\"></script>\n<script src=\"http://d3js.org/d3.geo.projection.v0.min.js\"></script>\n-->\n<script src=\"/static/lib/gif.js\"></script>\n<script src=\"/static/lib/stylus.js\"></script>\n<script src=\"/static/lib/processing-1.4.1.js\"></script>\n<script src=\"/static/lib/esprima.js\"></script>\n<script src=\"/static/lib/escodegen.browser.js\"></script>\n\n\n<!-- Tributary -->\n<script src=\"/static/tributary.min.js?v=0.9\"></script>\n\n<!-- UI related -->\n<script src=\"/static/lib/handlebars-1.0.rc.1.js\"></script>\n<script src=\"/static/templates.js\"></script>\n<script src=\"/static/tributary-ui.min.js\"></script>\n\n<!-- canvg for screenshots -->\n<script type=\"text/javascript\" src=\"/static/plugins/screenshots/lib/rgbcolor.js\"></script>\n<script type=\"text/javascript\" src=\"/static/plugins/screenshots/lib/StackBlur.js\"></script>\n<script type=\"text/javascript\" src=\"/static/plugins/screenshots/lib/canvg.js\"></script>\n<script type=\"text/javascript\" src=\"/static/plugins/screenshots/lib/html2canvas.js\"></script>\n\n<script type=\"text/javascript\">\n\n/*\n//get rid of selection when dragging things\nif(typeof document.body.style.MozUserSelect!=\"undefined\")\n    document.body.style.MozUserSelect=\"none\";\nelse if(typeof document.body.onselectstart!=\"undefined\")\n    document.body.onselectstart=function(){return false};\nelse\n    document.body.onmousedown=function(){return false};\ndocument.body.style.cursor = \"default\";\n*/\n\n\nvar tb = Tributary();\ntb._origin = \"";
  foundHelper = helpers.origin;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.origin; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\";\n";
  stack1 = depth0.fullscreen;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n//decorate the tributary object with the ui logic\nTributaryUi(tb);\n\ntb.loadPlugin(\"/static/plugins/stylus/plugin.json\", {}, function(e) {\n  tb.loadPlugin(\"/static/plugins/inline-console/plugin.json\", {}, function(e) {\n    tb.ui.setup();\n  });\n});\n\n\ntb.events.on(\"loaded\", function() {\n  tb.loadPlugin(\"/static/plugins/play/plugin.json\", {}, function (err, pluginId) {\n      tb.loadPlugin(\"/static/plugins/screenshots/plugin.json\", {}, function(e) {\n        tb.loadPlugin(\"/static/plugins/controls/plugin.json\", {}, function(e) {\n        tb.events.trigger(\"execute\");\n        });\n      });\n    });\n    /*\n  //example simple plugin\n  tb.loadPlugin(\"/static/plugins/simple/plugin.json\"\n  , {}\n  , function (err) { console.log(\"plugin load err?\", err) }\n  );\n  */\n})\n\n\n$('i').tipsy({fade: true, gravity: 'n', opacity: 0.86});\n</script>\n\n</body>\n</html>\n";
  return buffer;});
})();
