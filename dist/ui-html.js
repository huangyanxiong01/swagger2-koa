// ui-html.ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (document, apiDocsPath) => `

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${document.info.title}</title>
    <link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16" />
    <link href='css/typography.css' media='screen' rel='stylesheet' type='text/css'/>
    <link href='css/reset.css' media='screen' rel='stylesheet' type='text/css'/>
    <link href='css/screen.css' media='screen' rel='stylesheet' type='text/css'/>
    <link href='css/reset.css' media='print' rel='stylesheet' type='text/css'/>
    <link href='css/print.css' media='print' rel='stylesheet' type='text/css'/>

    <script src='lib/object-assign-pollyfill.js' type='text/javascript'></script>
    <script src='lib/jquery-1.8.0.min.js' type='text/javascript'></script>
    <script src='lib/jquery.slideto.min.js' type='text/javascript'></script>
    <script src='lib/jquery.wiggle.min.js' type='text/javascript'></script>
    <script src='lib/jquery.ba-bbq.min.js' type='text/javascript'></script>
    <script src='lib/handlebars-4.0.5.js' type='text/javascript'></script>
    <script src='lib/lodash.min.js' type='text/javascript'></script>
    <script src='lib/backbone-min.js' type='text/javascript'></script>
    <script src='swagger-ui.js' type='text/javascript'></script>
    <script src='lib/highlight.9.1.0.pack.js' type='text/javascript'></script>
    <script src='lib/highlight.9.1.0.pack_extended.js' type='text/javascript'></script>
    <script src='lib/jsoneditor.min.js' type='text/javascript'></script>
    <script src='lib/marked.js' type='text/javascript'></script>
    <script src='lib/swagger-oauth.js' type='text/javascript'></script>

    <!-- Some basic translations -->
    <!-- <script src='lang/translator.js' type='text/javascript'></script> -->
    <!-- <script src='lang/ru.js' type='text/javascript'></script> -->
    <!-- <script src='lang/en.js' type='text/javascript'></script> -->

    <script type="text/javascript">
      $(function () {
        var url = ${apiDocsPath};

        hljs.configure({
          highlightSizeThreshold: 5000
        });

        // Pre load translate...
        if(window.SwaggerTranslator) {
          window.SwaggerTranslator.translate();
        }
        window.swaggerUi = new SwaggerUi({
          url: url,
          dom_id: "swagger-ui-container",
          supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
          onComplete: function(swaggerApi, swaggerUi){
            if(typeof initOAuth == "function") {
              initOAuth({
                clientId: "your-client-id",
                clientSecret: "your-client-secret-if-required",
                realm: "your-realms",
                appName: "your-app-name",
                scopeSeparator: " ",
                additionalQueryStringParams: {}
              });
            }

            if(window.SwaggerTranslator) {
              window.SwaggerTranslator.translate();
            }
          },
          onFailure: function(data) {
            log("Unable to Load SwaggerUI");
          },
          docExpansion: "none",
          jsonEditor: false,
          defaultModelRendering: 'schema',
          showRequestHeaders: false
        });

        window.swaggerUi.load();

        function log() {
          if ('console' in window) {
            console.log.apply(console, arguments);
          }
        }
    });
    </script>
  </head>

  <body class="swagger-section">
    <div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>
    <div id="swagger-ui-container" class="swagger-ui-wrap"></div>
  </body>
</html>

`;
//# sourceMappingURL=ui-html.js.map