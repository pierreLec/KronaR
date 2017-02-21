HTMLWidgets.widget({

  name: 'Krona',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        // initialise the page 
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }   
        //console.log(x);
        console.log(x.data);
        //el.innerText = x.message;
        var dataKrona =  x.message;
        var conditions = x.conditions;
        var body = document.body;
        body.style = "padding:0;position:relative";

        //body.setAttribute("onload","addData()");

        body.innerHTML ="<body style='padding:0;position:relative'>\
                      <img id='hiddenImage' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oLCBQhNQwWVnsAAAAidEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVAgb24gYSBNYWOHqHdDAAABE0lEQVQYGQEIAff+AwAAABkAAAAAAAAA+gAAAAAAAAAAAAAAAAAAAAAAAAAMAwAAAAAAAAANAAAAAAAAAPoAAAAAAAAADAAAAAYAAAD0AwAAAPoAAAAAAAAAAAAAAPoAAAAMAAAADQAAAPoAAAD6AAAAAAAAAAAAAAAAAAAAAAwAAAAZAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAABkAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGQAAAAwAAAAAAAAADAAAAAwAAAAABAAAAAAAAAAAAAAA8wAAAPQAAAAAAAAAAAAAAA0AAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAZRssKC5OpXwYAAAAASUVORK5CYII=' style='display:none'/>\
                      <div id='options' style='position:absolute;left:0;top:0'>\
                      </div>\
                      \
                      <div id='details' style='position:absolute;top:1%;right:2%;text-align:right;'>\
                      </div>\
                      \
                      \
                      </body>";
                     // <img id='hiddenImage' src='http://krona.sourceforge.net/img/hidden.png' visibility='hide'/>\
                     // <script name='tree' src='javascript/krona-2.0.js'></script>\
                    
    //<script name='tree' src='http://krona.sourceforge.net/krona-1.1.js'></script>"
        //document.get
        //canvas.setAttribute( "style","width:"+width+";height:"+height);

        function addData() {
          console.log("redraw");
          //var data ="<magnitude attribute='magnitude'></magnitude><attributes magnitude='Total'></attributes></node><node name='all' magnitude='55'><node name='Protein' magnitude= '5' rank=''></node><node name='Carbohydrates' magnitude='38' rank=''><node name='Sugars' magnitude='13' rank=''></node><node name='Dietary fiber' magnitude='4' rank=''></node></node><node name='Fats' magnitude='8' rank=''><node name='Saturated fat' magnitude='2' rank=''></node><node name='Unsaturated fatv' magnitude='6' rank=''><node name='Polyunsaturated fat' magnitude='3' rank=''></node><node name='Monounsaturated fat' magnitude='3' rank=''></node></node></node></node>";

          /*var data = "<attributes magnitude='count'>\
                  <data>members</data>\
                  <attribute display='Count' dataAll='members'>count</attribute>\
                  <attribute display='Unassigned' dataNode='members'>unassigned</attribute>\
                  <attribute display='Avg. % Confidence'>score</attribute>\
                  <attribute display='Rank' mono='true'>rank</attribute>\
                 </attributes>\
                 <datasets>"
          */

          var data = "<attributes magnitude='magnitude'>\
                  <attribute display='Total'>magnitude</attribute>\
                  <attribute display='Unassigned'>magnitudeUnassigned</attribute>\
                  </attributes>\
                  <datasets>\
                  <dataset>text</dataset>\
                  </datasets>";

          /*for (var i = 0; i < conditions.length; i++) {
                data +="<dataset>"+conditions[i]+"</dataset>";
                
          }*/
                 /* <dataset>M3_skin_day_0</dataset>\
                  <dataset>M3_skin_day_1</dataset>\
                  <dataset>M3_skin_day_2</dataset>\
                  <dataset>M3_skin_day_3</dataset>\*/
        //  data +="       </datasets>\
       //<color attribute='score' hueStart='180' hueEnd='240' valueStart='0' valueEnd='100' default='false' ></color>";

          /*data += "<node name='top'>\
                <count><val>70</val><val>70</val><val>70</val><val>70</val></count>\
                <node name='Archaea'>\
                  <score><val>61.125</val><val>22.8</val><val>35</val><val>41.2414</val></score>\
                    <count><val>8</val><val>10</val><val>9</val><val>29</val></count>\
                    <node name='Crenarchaeota'>\
                     <score><val>9</val><val>18.4</val><val>38.5</val><val>47</val></score>\
                     <count><val>1</val><val>5</val><val>2</val><val>7</val></count>\
                   </node>\
                   </node>\
              </node>";
            */
            data += x.data;
            data += dataKrona;

          console.log(data);
          var datel = document.createElement("Krona");    
          datel.setAttribute( "collapse","true");
          datel.setAttribute( "key","true");
          datel.innerHTML= data;
          //document.body.appendChild(datel);
          //load();
          // var scriptKrona = document.createElement("script"); 
          // scriptKrona.name = "tree";
          // scriptKrona.src = "http://krona.sourceforge.net/krona-1.1.js";
          var div = document.createElement("div");
          div.setAttribute( "style","display:none");
          
          div.appendChild(datel);
          document.body.appendChild(div);

          load();
          // document.body.appendChild(scriptKrona);
        }
        //redraw();
        //addData();
        //window.onload = addData;
        addData();


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
