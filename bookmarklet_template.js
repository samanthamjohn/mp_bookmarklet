/* --------------------------------------------------------------
   bookmarklet.js
   by Antoine Doury and Luis Lavena from AREA 17

   Main javascript actions for the krrbit bookmarklet
   Containt headjs to load external scripts

   -------------------------------------------------------------- */

   window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
   (function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
   {console.log();return window.console;}catch(err){return window.console={};}})());

/**
	Head JS		The only script in your <HEAD>
	Copyright	Tero Piirainen (tipiirai)
	License		MIT / http://bit.ly/mit-license
	Version		0.9

	http://headjs.com
*/

(function(a){var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===true||"MozAppearance"in a.documentElement.style||window.opera;var j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)};var l=0,m=1,n=2,o=3;i?k.js=function(){var a=arguments,b=a[a.length-1],c=[];t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c.push(d),x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(a,b){if(a=="dom"){d?p(b):e.push(b);return k}t(a)&&(b=a,a="ALL");var c=h[a];if(c&&c.state==o||a=="ALL"&&u()&&d){p(b);return k}var f=g[a];f?f.push(b):f=g[a]=[b];return k},k.ready("dom",function(){c&&u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",true)});function p(a){a._done||(a(),a._done=1)}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function s(a,b){if(a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function u(a){a=a||h;var b=false,c=0;for(var d in a){if(a[d].state!=o)return false;b=true,c++}return b||c===0}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function w(a,b){a.state||(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function x(a,b){if(a.state==o&&b)return b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),d&&u()&&s(g.ALL,function(a){p(a)})})}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=false,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d(),d.done=true)},b.appendChild(e)}setTimeout(function(){c=true,s(f,function(a){a()})},0);function z(){d||(d=true,s(e,function(a){p(a)}))}window.addEventListener?(a.addEventListener("DOMContentLoaded",z,false),window.addEventListener("onload",z,false)):window.attachEvent&&(a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()}),window.frameElement==null&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)),!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,false),a.readyState="complete"},false))})(document)

function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri (str) {
  var o   = parseUri.options,
    m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i   = 14;

  while (i--) uri[o.key[i]] = m[i] || "";

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });

  return uri;
};

parseUri.options = {
  strictMode: false,
  key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
  q:   {
    name:   "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};

// ---------- Krrb_it ---------- //

var geocoder;
var krrbPageTracker;
var _gaq = _gaq || [];

function krrb_it() {

  this.krrbit_script = function() {
    var scripts = document.getElementsByTagName("script");
    var url = "";
    for(var idx = 0; idx < scripts.length; idx++) {
      var match = scripts[idx].src.match(/(krrb|localhost).*((bookmarklet|bmlet)\.js)(\?.*)?$/);
      if (match) {
        url = scripts[idx].src;
      }
    }
    return parseUri(url);
  }

  this.init = function() {
    var uri = this.krrbit_script();
    var url = "";
    url += uri.protocol + "://";
    url += uri.host;
    if (uri.port) {
      url += ":" + uri.port;
    }

    this.root = url;
    this.public_key = uri.queryKey["t"];
    this.guessLat = 0;
    this.guessLng = 0;
    this.credits = 0;
    this.home = '';
    this.title = '', this.desc = '', this.price = '', this.tags = '', this.img = '', this.curr = '', this.loc = '';
    
    this.marker;
    this.locations = new Object();
    this.isReady = false;
    this.pushed = '';
    this.currentQueue = 0;
    this.currentPostId = '';
    
    // set the anatylics code
    var gaCode = (this.root != 'http://krrb.com') ? "UA-18756031-4" : "UA-18756031-1";

    // analytics
    _gaq.push(['_setAccount', gaCode]);
    _gaq.push(['_setDomainName', this.root.replace("http://", "") ]);
    _gaq.push(['_setAllowLinker', true]);
    
    
    // Refer to this http://www.craigslist.org/about/sites - convertion object
    this.craig_location_table = new Object();
    
    // ADD stylesheet
    var css = document.createElement("link");
      css.setAttribute("href", this.root + "/stylesheets/pages/bookmarklet.css");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("type", "text/css");
      document.getElementsByTagName("head")[0].appendChild(css);
    
    // ADD loader
    var loader = document.createElement("div");
    loader.id = "krrbit_loader";
    loader.innerHTML = "<b>Krrbing</b>";
    document.getElementsByTagName("body")[0].appendChild(loader);
    
    // load google analitycs
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    
    // Load the JS : jquery, jqueryui, get craiglist location table, get user locations, get user credit number
    head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js", 
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js", 
    this.root + "/javascripts/bookmarklet/craiglist_location.js", 
    this.root + '/bmlet/locations.js?t=' + this.public_key,
    this.root + '/bmlet/credits.js?t=' + this.public_key, function() {

       // launch it!
       krrb_it.localise();
       if(window.krrb_running) {
         krrb_it.grab();
         krrb_it.googlemaps();
       }
 
       $('#krrbit_loader').remove();
    });
  }
  
  this.googlemaps = function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=krrb_it_googlemap";
    document.body.appendChild(script);
  };
  
  // google map is loaded - launch the interactive map
  this.loadedMap = function() {

    var self = this;
    
    var interactive_latlng = new google.maps.LatLng($('#loc_latitude').val(), $('#loc_longitude').val());
    var reverseGeocoder = new google.maps.Geocoder();
    var myOptions = {
      zoom: 14,
      mapTypeControl: false,
      disableDoubleClickZoom: true,
      streetViewControl: false,
      center: interactive_latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var interactivemap = new google.maps.Map(document.getElementById("interactive_map"), myOptions);
    // create the draggable marker
    var image = new google.maps.MarkerImage('http://krrb.com/images/maps/marker_interactif.png',
        new google.maps.Size(30, 42),
        new google.maps.Point(0,0),
        new google.maps.Point(14, 42));
    var shadow = new google.maps.MarkerImage('http://krrb.com/images/maps/shadow_interactif.png',
        new google.maps.Size(49, 26),
        new google.maps.Point(0,0),
        new google.maps.Point(14, 26));
    // 
    self.marker = new google.maps.Marker({
        position: interactive_latlng,
        draggable:true,
        animation: google.maps.Animation.DROP,
        map: interactivemap,
        shadow: shadow,
        icon: image,
        title: 'Enter your precise location'
    });
    
    var marker = self.marker;
    google.maps.event.addListener(marker, 'dragend', endrag_reverse_geo);
    
    function endrag_reverse_geo() {
      var latlng = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
      
      reverseGeocoder.geocode({'latLng': latlng, 'language': 'en' }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          $('#address').val(results[0].formatted_address);
          self.okGeocoding();
          self.setLocationValues(results[0], 'loc', false, true);
        }
        else self.errorGeocoding();
      });
    }
    
    function reverse_geo() {
      var latlng = new google.maps.LatLng($('#loc_latitude').val(), $('#loc_longitude').val());
      
      reverseGeocoder.geocode({'latLng': latlng, 'language': 'en' }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          $('#address').val(results[0].formatted_address);
          self.okGeocoding();
          self.setLocationValues(results[0], 'loc', false, true);
        }
        else self.errorGeocoding();
      });
    }
    
    function setMarker() {
      interactive_latlng = new google.maps.LatLng($('#loc_latitude').val(), $('#loc_longitude').val());
      marker.setPosition(interactive_latlng);
      interactivemap.setCenter(interactive_latlng);
    }
    
    $('body').addClass('krrbing'); 
    $('#address').bind('blur', function(e) {
      
      e.preventDefault();
      
      geocoder.geocode( {'address': $('#address').val(), 'language': 'en' }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
           self.setLocationValues(results[0], 'loc');
           setMarker();
           reverse_geo();
          } else self.errorGeocoding();
      })
    })
    
    $('#address').autocomplete({
      select: function(event, ui) {

        geocoder.geocode( {'address': ui.item.value, 'language': 'en' }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
             self.setLocationValues(results[0], 'loc');
             setMarker();
             reverse_geo();
            } else self.errorGeocoding();
        })
      },
      search: function(event, ui) {
        self.okGeocoding();
      },
      source: function(request, response) {
          geocoder.geocode( {'address': request.term, 'language': 'en' }, function(results, status) {
            response($.map(results, function(item) {
               return { label:  item.formatted_address }
            }));

            if (status == google.maps.GeocoderStatus.OK) self.setLocationValues(results[0], 'loc');
            else self.errorGeocoding();
        })
      },
      position: ({
        my: "left top",
        at: "left bottom",
        offset: "0 10"
      })
  	});
    
    // show hide the map
    if(this.hasExistingLoc > 0) {

      $("input[name='post[existing_location]']").change(function(e){
        var selected_value = $("input[name='post[existing_location]']:checked").val();
          switch(selected_value)
          {
            case 'existing':
            default:
              showHideById('group_existinglocation', 'group_newlocation');
              enabledInputs('addressholder', 'disabled');
              enabledInputs('group_existinglocation', '');
              
            break;
            case 'new':
              showHideById('group_newlocation', 'group_existinglocation');
              enabledInputs('group_existinglocation', 'disabled');
              enabledInputs('addressholder', '');
              
              if($('#container_interactive_map').is(':visible')) {
                var center = interactivemap.getCenter();
                google.maps.event.trigger(interactivemap, 'resize');
                interactivemap.setCenter(center);
              }
            break;
          }
      });
      
      function showHideById(id1, id2) {
        $("#" + id1).show();
        $("#" + id2).hide();
      }
      
      function enabledInputs(group , value) {
        $('#' + group).find('input').attr('disabled', value);
        $('#' + group).find('select').attr('disabled', value);
      }
    }
    
    // do you have a location
    if(self.loc != '') {
      
      $('#address').val(self.loc);
      //location
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( {'address': self.loc, 'language': 'en' }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
           self.setLocationValues(results[0], 'loc');
           setMarker();
           reverse_geo();
          } else self.errorGeocoding();
        });

    } else {
      
      // There are no no locations provided on the page. We must find a default location
      // this.guessLat = 40.7214012145996;
      // this.guessLng = -74.0052032470703
      var latlng = new google.maps.LatLng(this.guessLat, this.guessLng);
      
      reverseGeocoder.geocode({'latLng': latlng, 'language': 'en' }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          $('#address').val(results[0].formatted_address);
          self.okGeocoding();
          self.setLocationValues(results[0], 'loc');
          setMarker();
        }
        else self.errorGeocoding();
      });
    }
  }
  
  this.sizes = function() {    
    return [$(window).width(), $(window).height(), $(window).scrollTop()];
  };
  
  this.showContainer = function() {
    var krrbit_container = $("#krrbit_container");
    var top_pos = Math.abs(((this.sizes()[1] / 2) - (krrbit_container.height() / 2)) + this.sizes()[2]);
    krrbit_container.css('top', top_pos + "px");
    krrbit_container.css('left', ((this.sizes()[0] / 2) - (krrbit_container.width() / 2)) + "px");
    krrbit_container.show();
    krrbit_container.draggable({ scroll: true, handle: "#krrbit_cont_t" })
  };
  
  this.closeWindow = function(success) {
    
    $("#address").autocomplete( "close" );
    
    if(success) {
      // ADD loader
      var loader = document.createElement("div");
      loader.id = "krrbit_loader";
      loader.innerHTML = "<b>Krrbing</b>";
      document.getElementsByTagName("body")[0].appendChild(loader);

      var krrbit_container = $("#krrbit_container");
      if(krrbit_container.length > 0) krrbit_container.hide();
    }
    else this.clean();
  }

  this.getCredits = function(data) {
    // get the credit number here
    this.credits = data;
  }
  
  this.addLocations = function(data) {
    this.locations = data;
    
    function getSize(obj) {
      var size = 0, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    
    this.hasExistingLoc = getSize(this.locations);
  }
  
  this.guessLocation = function(lat, lng) {
    this.guessLat = lat;
    this.guessLng = lng;
  }

  this.localise = function() {

    var regex_krrb = /^https?:\/\/.*?\.?krrb\.com\//;

    if (location.href.match(regex_krrb)) {
        alert('This bookmarklet cannot use in krrb.com domain.');
        this.clean();
        return;
    }

    var isEtsy    = location.href.match(/^https?:\/\/.*?\.?etsy\.com\//) ? true : false;
    var isCraig   = location.href.indexOf(".craigslist.") == -1 ? false : true;
    var isBonCoin = location.href.indexOf(".leboncoin.") == -1 ? false : true;
    var isEbay    = location.href.match(/^https?:\/\/.*?\.?cgi.ebay/) ? true : false;
    var isEbay2   = location.href.match(/^https?:\/\/.*?\.?annonces.ebay/) ? true : false;
	var isEbay3   = location.href.match(/^https?:\/\/.*?\.?ebay\.com\//) ? true : false;
	
    this.originUrl = location.href;

    if(isEtsy) this.home = 'Etsy';
    else if(isCraig) this.home = 'Craiglist';
    else if(isEbay) this.home = 'eBay';
    else if(isEbay2) this.home = 'eBay';
	else if(isEbay3) this.home = 'eBay';
    else if(isBonCoin) this.home = 'Le bon coin';
	
	console.log(this.home);
  }
  
  this.grab = function() {
    
    var tabImg = new Array();
    var $title = '', $desc = '', $price = '', $tags = '', $imgs = '', $curr = '', $loc = '';
    
      switch(this.home) {
        // ETSY
        case 'Etsy':
          var content = $('#content');

          $title = $('h1', content).text();
          $desc = $('div[id*="description"] div:first-child', content).html();
          $curr = $('.currency-code:first', content).text();
          $loc = $('.location:first', content).text();
          $priceText = $('.item-amount:first', content).text();
          $price = $priceText.replace(/[^\d\,\.-]/g,'');
          $tags = $('meta[name*="keywords"]').attr('content');

          var imgs = $("#item-thumbs a");
          if(imgs.length > 0) {
            imgs.each(function(){
              var img = $(this).find("img");
              var imgsrc = img.attr("src").replace("il_75x75","il_fullxfull");
              tabImg.push(imgsrc);
            });
          } else if($("#fullimage_link1 a").length > 0) {
            var imgsrc = $("#fullimage_link1 a").attr("href");
            tabImg.push(imgsrc);
          }

          break;

        // CRAIGLIST
        case 'Craiglist':
          $title = $('h2').text();
          $desc = $('div[id*="userbody"]').text();
          
          this.craig_location_table = CRAIGLIST_LOC;
          
          var locTemp = window.location.host;
          var locTag = locTemp.split('.');
          if(locTag[0] != '' && locTag[0] != 'craiglist' && locTag[0] != 'en') {
            var newLoc = locTag[0];
            $loc = newLoc;
            if(this.craig_location_table.hasOwnProperty(newLoc)) {
              $loc = this.craig_location_table[newLoc];
            }
            
          }
          
          var imgs = $('table[summary*="images"]').find('img');
          if(imgs.length > 0) {
            imgs.each(function(){
              var imgsrc = $(this).attr("src");
              tabImg.push(imgsrc);
            });
          }

          break;

        // EBAY
        // EBAY2
        case 'eBay':
        
          if($('h1').length > 0) $title = $('h1').text();
          
          if($('span[class^="vi-is1-prcp"]', $('#vi-tTbl')).length > 0) {
            var el = $('span[class^="vi-is1-prcp"]', $('#vi-tTbl'));
            $priceText = el.text();
            $price = $priceText.replace(/[^\d\,\.-]/g,'');
            
            $curr = $priceText.replace(/\d+/g,'');
          }
          
          var meta_desc = $('meta[name*="description"]');
          var meta_key = $('meta[name*="keywords"]');
          var meta_image = $('meta[property*="image"]');
          
          if($("#EBdescription").length > 0) $desc = $("#EBdescription").text();
          else if($('.vi-iw:visible').find('td.vi-ia-attrColPadding:first').length > 0) {
            var temp_desc = $('.vi-iw:visible').find('th, td.vi-ia-attrColPadding');
            var temp_desc_text = '';
            temp_desc.each(function() {
              
              var el = $(this);
              el.find('a').remove();
              
              if(el.is('td')) temp_desc_text += el.text() + ". ";
              else if(el.is('th')) temp_desc_text += el.text();
              
            })
            $desc = temp_desc_text;
          }
          else if(meta_desc.length > 0) $desc = meta_desc.attr('content');
          
          
          if(meta_key.length > 0) {
            var temp_meta_key = new Array();
            temp_meta_key = meta_key.attr('content').split(',');
            $tags  = temp_meta_key.slice(1).join(",");
          }
          
          // imgs
          if(meta_image.length > 0) {
            tabImg.push(meta_image.attr('content'));
          } else {
            var imgs = $("img:visible");
            if(imgs.length > 0) {
              imgs.each(function(){
                var img = $(this);
                if(img.height() > 220) tabImg.push(img.attr("src"));
              });
            }
          }
          
          
          break;
        
        case 'Le bon coin':
        
          var title = $('h1');
          if(title.length > 0) $title = title.text();

          var meta_desc = $('meta[name*="description"]');
          var meta_key = $('meta[name*="keywords"]');

          if(meta_desc.length > 0) $desc = meta_desc.attr('content');
          if(meta_key.length > 0) $tags  = meta_key.attr('content');
          
          var temp_loc = $("a:contains('Offres')", $('#nav')).attr('href');
          
          temp_loc_t = temp_loc.split('/');
          
          var details = $('span', $(".lbcAdParams"));
          if(details.length > 1) {
            details_loc = $('span:eq(1)', $(".lbcAdParams")).find('strong').text();
            
            $priceText = $('span:eq(0)', $(".lbcAdParams")).find('strong').text();
            if($priceText != '' && $priceText != undefined) $price = $priceText.replace(/[^\d\,\.-]/g,'');
            
          } else details_loc = $('span:eq(0)', $(".lbcAdParams")).find('strong').text();
          
          
          if(temp_loc_t[temp_loc_t.length-2] != 'offres') $loc = details_loc + ", " + temp_loc_t[temp_loc_t.length-2] + ", France";
          
          
          $curr = 'EUR';
          
          // grab images
          if($(".ad_thumb").length > 0) {
            $(".ad_thumb").each(function() {
              $(this).trigger('click');
              
              if($("#main_image").length > 0) {
                var imgsrc = $("#main_image").attr("src");
                tabImg.push(imgsrc);
              }
            })
            
          } else if($("#main_image").length > 0) {
            var imgsrc = $("#main_image").attr("src");
            tabImg.push(imgsrc);
          }
          
          break;
        
        default:

          var title = $('h1');
          if(title.length > 0) $title = title.text();

          var meta_desc = $('meta[name*="description"]');
          var meta_key = $('meta[name*="keywords"]');

          if(meta_desc.length > 0) $desc = meta_desc.attr('content');
          if(meta_key.length > 0) $tags  = meta_key.attr('content');
          
          this.home = document.domain;

          break;
      }
      
      //clean up datas
      var MAXTITLE = 50;
      var MAXDESC = 2500;
      var MAXTAGS = 6;
      var MAXTAGSLENGTH = 32;

      // clean up location
      $loc = $loc.replace(/^\s+|\s+$/g, '');

      // clean up title
      $title = $title.replace(/^\s+|\s+$/g, '');
      if ($title.length > MAXTITLE) $title = $title.substr(0, MAXTITLE-3) + '...';

      // desc
      $desc = $desc.replace(/^\s+|\s+$/g, '');
      $desc = $desc.replace(/<br>/g, '\n');
      $desc = $desc.replace(/<a\b[^>]*>/g,"");
      $desc = $desc.replace(/<\/a>/g, "");

      if ($desc.length > MAXDESC) $desc = $desc.substr(0, MAXDESC-3) + '...';

      function trim(myString) { return myString.replace(/^\s+/g,'').replace(/\s+$/g,'') }
      
      var tagsTemp = $tags.split(',');

      for(var i = 0; i< tagsTemp.length; i++) {
        tagsTemp[i] = trim(tagsTemp[i]);
        if(isNaN(tagsTemp[i]) == false) {
          tagsTemp.splice(i, 1);
          i--;
        }
      }
      
      if(tagsTemp.length > 6) {
        var smallTags = tagsTemp.splice(0, 6);

        for(var i = 0; i< smallTags.length; i++) {
          if (smallTags[i].length > MAXTAGSLENGTH) smallTags[i] = smallTags[i].substr(0, MAXTAGSLENGTH);
        }

        $tags = smallTags.join(',');
      } else {

        for(var i = 0; i< tagsTemp.length; i++) {
          if (tagsTemp[i].length > MAXTAGSLENGTH) tagsTemp[i] = tagsTemp[i].substr(0, MAXTAGSLENGTH);
        }

        $tags = tagsTemp.join(',');
      }

      // clean up imgs
      if(tabImg.length > 0) {

        if(tabImg.length > 6) {
          var smallImgs = tabImg.splice(0, 6);
          $imgs = smallImgs.join('|');
        } else $imgs = tabImg.join('|');

      } else $imgs = '';
      
      
      
      this.title = $title;
      this.desc =  $desc;
      this.price =  $price;
      this.tags =  $tags;
      this.img =  $imgs;
      this.curr =  $curr;
      this.loc =  $loc;
      
      if(this.title == '') {
        this.clean();
        alert('No articles can be found. Are you sure, you are on an article page?');      
      }
      else this.openLightbox();
    
  }
  
  this.setLocationValues = function(result, prefix, gen, isPinpointed) {
    
    this.okGeocoding();
    // are we looking for the general location ?
    var gen = gen || '',
        isPinpointed = isPinpointed || false;

    var components      = result.address_components,
        accuracy        = components.length,
        level           = isPinpointed ? 'pinpointed' : result.types[0],
        country         = '',
        city            = '',
        state           = '',
        district        = '',
        neighborhood    = '';

    $.each(components, function() {
      if (this.types[0] == 'neighborhood')                    neighborhood = this.long_name;
      if (this.types[0] == 'sublocality')                     district = this.long_name;
      if( this.types[0] == 'locality')                        city = this.long_name;
      if( this.types[0] == 'administrative_area_level_1')     state = this.long_name;
      if( this.types[0] == 'country')                         country = this.long_name;
    });


    $('#' + prefix + gen + '_neighborhood').val(neighborhood);
    $('#' + prefix + gen + '_district').val(district);
    $('#' + prefix + gen + '_city').val(city);
    $('#' + prefix + gen + '_state').val(state);
    $('#' + prefix + gen + '_country').val(country);

    var borders = result.geometry.viewport;

    if(borders != undefined) {
       $('#' + prefix + gen + '_sw_lat').val(borders.getSouthWest().lat().toString());
       $('#' + prefix + gen + '_sw_lng').val(borders.getSouthWest().lng().toString());
       $('#' + prefix + gen + '_ne_lat').val(borders.getNorthEast().lat().toString());
       $('#' + prefix + gen + '_ne_lng').val(borders.getNorthEast().lng().toString());
     } else {
       $('#' + prefix + gen + '_sw_lat, #' + prefix + gen + '_sw_lng, #' + prefix + gen + '_ne_lat, #' + prefix + gen + '_ne_lng').val('');
     }

    $('#' + prefix + gen + '_address').val(result.formatted_address.toString());
    $('#' + prefix + gen + '_accuracy').val(accuracy);
    $('#' + prefix + gen + '_level').val(level);
    $('#' + prefix + gen + '_longitude').val(result.geometry.location.lng().toString());
    $('#' + prefix + gen + '_latitude').val(result.geometry.location.lat().toString());
    
    if(gen == '') this.setGeneralLocation(prefix, '_gen');
  }
  
  this.setGeneralLocation = function(prefix, gen) {

    var neighborhood    = $('#' + prefix + '_neighborhood').val(),
        district        = $('#' + prefix + '_district').val(),
        city            = $('#' + prefix + '_city').val(),
        state           = $('#' + prefix + '_state').val(),
        country         = $('#' + prefix + '_country').val();

    var address = neighborhood + ' ' + district + ' ' + city + ' ' + state + ' ' + country;

    var generalGeocoder = new google.maps.Geocoder();
    var self = this;
    generalGeocoder.geocode( {'address': address, 'language': 'en' }, function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
        self.setLocationValues(results[0], prefix, gen);
      }
    });
  }
  
  this.okGeocoding = function() {
    $("#addressholder").removeClass('ko');
  }
  
  this.errorGeocoding = function() {
    $("#addressholder").addClass('ko');
  }
  
  this.pushTags = function() {
    var container = $('.selected-options');
    var self = this;
    
  	if (container.length == 0) return false;

  	var container_action  = $('.option-select'),
  	    bt                = container_action.find('.bt2'),
  	    tagfield          = bt.next();

  	bt.click(function (e) {
  		e.preventDefault();

  		var bt          = $(this),
  		    targetName  = bt.attr('rel'),
  		    text_value  = tagfield.val();

    	var maxNumb = 6, container_action  = $('.option-select'), curr = $(".tag_list").length;
    	var target = $("#" + targetName), values = new Array();

      if( curr >= maxNumb) {
        bt.addClass('inactive');
        bt.next().attr('title', 'taglimit');
        return false;
      }
      else if( curr == maxNumb - 1) {
        bt.addClass('inactive');
        bt.next().attr('title', 'taglimit');
      }
      else {
        bt.removeClass('inactive');
      	bt.next().attr('title', 'tagtip');
      }
      

    	values = text_value.split(',');

    	for (var i = 0; i < values.length; i++) {
    		val = values[i];
    		var slug = val;
      
    		if ( values[i] != '' && $('#'+slug, $('#selected-tags')).length == 0 ) {
      
    			var li = $("<li><a href='#'></a></li>");
    			li.find('a').text(values[i]);
    			li.attr('id', slug);
    			li.attr('class', 'tag_list');
    			li.attr('title', values[i]);
    			target.append(li);
      
    			li.children().click(function(e) {
    				e.preventDefault();
      
    				var e = $(this);
    				var cont = e.html();
    				e.parent().remove();
    				
    				bt.removeClass('inactive');
          	bt.next().attr('title', 'tagtip');
    			});
    		}
      }

  		tagfield.val('');
  		
      list = $.map($('#selected-tags li'), function(ele) {
       return $(ele).attr('title');
      }).join(',');
      $('#post_tag_list').val(list);
  	});

  }
  
  this.selectPrice = function() {
    
    $("input:radio", $('#radios_pricetype')).change(function(e){
        var value = $('input:radio:checked', $('#radios_pricetype')).val();
        
        if(value == "0") {
          $("#field_pricevalue").show();
          disabled = '';
        }
        else {
          $("#field_pricevalue").hide();
          $("#krrbit_price").val('');
          disabled = 'disabled';
        }

    		$("#krrbit_post_currency, #post_price_rate").attr('disabled', disabled);
  	});

  }
  
  this.openLightbox = function() {

    $('body').append('<div id="krrbit_container"><div class="krrbit_close" onclick="krrb_it_close()"></div><div id="krrbit_cont"><div id="krrbit_cont_t">Krrb it</div><div id="krrbit_text"></div></div></div>');
    
    var container = $('#krrbit_text');
    container.append('<div id="error_bkmlt"><h2>Oopsie...</h2><ul></ul></div>');
    container.append('<form id="krrbit_form" action="#" class="standard" />');
    
    var form = $('#krrbit_form');

    form.append("<div class='set firstset' id='location-fields'></div>");
    
    // existing locations
    if(this.hasExistingLoc > 0) {
      
      $('#location-fields').append("<div class='field_holder radio'><span class='input_holder'><input id='existing_location' name='post[existing_location]' type='radio' value='existing'><label for='existing_location'><b>Existing places</b></label></span><span class='input_holder'><input id='new_location' name='post[existing_location]' type='radio' value='new'><label for='new_location'><b>New place</b></label></span></div>");
      
      $('#location-fields').append("<div class='group' id='group_existinglocation'><label for='title'><b>My places</b> <span class='grey'>(street level only)</span></label><div class='field_holder'><span id='entered_locations' class='input_holder select'><select id='post_location_select' name='post[location_id]' title='street_location_selector'></select></span></div></div>");
      
      $('#existing_location').attr('checked', true);
      
       for (var i = 0; i < this.locations.length; i++) {
         $('#post_location_select').append("<option selected='selected' value='" + this.locations[i].id + "'>" + this.locations[i].address + "</option>");
       }
     } else {
       $('#location-fields').append("<input id='new_location' name='post[existing_location]' type='hidden' value='new'>");
    }
    
    // new location
    if(this.hasExistingLoc > 0) {
      $('#location-fields').append("<div class='group' id='group_newlocation' style='display:none'></div>");
    }
    else {
      $('#location-fields').append("<div class='group' id='group_newlocation'></div>");
    }
    
    $('#group_newlocation').append("<label for='address'><b>Enter your street address</b></label><div class='field_holder'><span class='input_holder text' id='addressholder'><input id='address' name='location_address' type='text' class='text' /></span></div>");
    $('#group_newlocation').append("<p><b>Drag and drop</b> the pointer to indicate your location</p>");
    $('#group_newlocation').append("<div id='container_interactive_map'><div id='interactive_map'></div></div>");
    
    // address
    $('#addressholder').append("<input id='loc_address' type='hidden' name='location[address]' value=''><input id='loc_city' type='hidden' name='location[city]' value=''><input id='loc_neighborhood' type='hidden' name='location[neighborhood]' value=''><input id='loc_district' type='hidden' name='location[district]' value=''><input id='loc_state' type='hidden' name='location[state]' value=''><input id='loc_country' type='hidden' name='location[country]' value=''><input id='loc_latitude' type='hidden' name='location[latitude]' value=''><input id='loc_longitude' type='hidden' name='location[longitude]' value=''><input id='loc_accuracy' type='hidden' name='location[accuracy]' value=''><input id='loc_level' type='hidden' name='location[level]' value=''><input id='loc_sw_lat' type='hidden' name='location[sw_lat]' value=''><input id='loc_sw_lng' type='hidden' name='location[sw_lng]' value=''><input id='loc_ne_lat' type='hidden' name='location[ne_lat]' value=''><input id='loc_ne_lng' type='hidden' name='location[ne_lng]' value=''><input id='loc_status' type='hidden' name='location[status]' value=''>");
    
    // gen address + address datas
     $('#addressholder').append("<input id='loc_gen_address' type='hidden' value='' name='location[parent_hash][address]'><input id='loc_gen_city' type='hidden' value='' name='location[parent_hash][city]'><input id='loc_gen_neighborhood' type='hidden' value='' name='location[parent_hash][neighborhood]'><input id='loc_gen_district' type='hidden' value='' name='location[parent_hash][district]'><input id='loc_gen_state' type='hidden' value='' name='location[parent_hash][state]'><input id='loc_gen_country' type='hidden' value='' name='location[parent_hash][country]'><input id='loc_gen_latitude' type='hidden' value='' name='location[parent_hash][latitude]'><input id='loc_gen_longitude' type='hidden' value='' name='location[parent_hash][longitude]'><input id='loc_gen_accuracy' type='hidden' value='' name='location[parent_hash][accuracy]'><input id='loc_gen_level' type='hidden' value='' name='location[parent_hash][level]'><input id='loc_gen_sw_lat' type='hidden' value='' name='location[parent_hash][sw_lat]'><input id='loc_gen_sw_lng' type='hidden' value='' name='location[parent_hash][sw_lng]'><input id='loc_gen_ne_lat' type='hidden' value='' name='location[parent_hash][ne_lat]'><input id='loc_gen_ne_lng' type='hidden' value='' name='location[parent_hash][ne_lng]'>");
    
    form.append("<div class='set post-fields'><label for='title'><b>Short description</b></label><div class='field_holder'><span class='input_holder text'><input id='krrbit_title' maxlength='50' name='post[title]' type='text' class='text' /></span></div></div>");

    form.append("<div class='set post-fields'><label for='detail'><b>Juicy details</b></label><div class='field_holder'><span class='input_holder text'><textarea class='text' cols='92' id='krrbit_detail' name='post[description]' rows='7'></textarea></span></div></div>");
    
    // Tags
    form.append("<input type='hidden' value='' name='post[tag_list]' id='post_tag_list' class='post_tag_list'>");
    form.append("<div class='set'><div class='field_holder'><label for='tag'><b>Add up to 6 tags</b></label><div class='select_options_col'><div class='option-select'><span class='input_holder text_button'><a rel='selected-tags' class='bt2' href='#'>Add</a><input type='text' value='' name='tag' maxlength='40' class='text' id='tag'></span></div><div class='selected-options'><ul id='selected-tags'></ul></div></div></div>");
    
    // Img
    form.append("<div class='set' id='set_photos'><div class='field_holder'><label for='post_images'><b>Add multiple pictures</b></label><div class='sortable_container' id='container'><div class='container_post_images'><ul id='post_images'></ul></div></div></div></div>");
    
    // Price
    form.append("<div class='set post-fields'><div id='radios_pricetype' class='field_holder radio'></div><div class='field_holder' id='field_pricevalue'></div></div>");
    
    $('#radios_pricetype').append("<label for='price'><b>Name your price</b></label>");
    $('#radios_pricetype').append("<span class='input_holder'><input id='post_trade_type_0' name='post[trade_type]' type='radio' value='0'><label for='post_trade_type_0'>Price</label></span>");
    $('#radios_pricetype').append("<span class='input_holder'><input id='post_trade_type_1' name='post[trade_type]' type='radio' value='1'><label for='post_trade_type_1'>Make an offer</label></span>");
    $('#radios_pricetype').append("<span class='input_holder'><input id='post_trade_type_2' name='post[trade_type]' type='radio' value='2'><label for='post_trade_type_2'>Free</label></span>");
    $('#radios_pricetype').append("<span class='input_holder'><input id='post_trade_type_3' name='post[trade_type]' type='radio' value='3'><label for='post_trade_type_3'>Trade</label></span>");
    $('#radios_pricetype').append("<span class='input_holder'><input id='post_trade_type_4' name='post[trade_type]' type='radio' value='4'><label for='post_trade_type_4'>Not applicable</label></span>");
    
    $('#field_pricevalue').append("<span class='input_holder text_select'><select name='post[currency]' id='krrbit_post_currency'><option value='USD'>US Dollar ($)</option><option value='CAD'>Canadian Dollar (CA $)</option><option value='EUR'>Euro (â‚¬)</option><option value='GBP'>British Pound (Â£)</option></select> <input id='krrbit_price' name='post[price]' type='text'  class='text' /><select name='post[price_rate]' id='post_price_rate'><option selected='selected' value='0'>Fixed</option><option value='6'>Best offer</option><option value='1'>Per hour</option><option value='5'>Per day</option><option value='2'>Per week</option><option value='3'>Per month</option><option value='4'>Per year</option></select></span>");
    
    $('#post_trade_type_0').attr('checked', true);
    
    form.append("<div class='set lastset'><div class='warning-message'>By publishing or saving as draft, you acknowledge and agree that this post belongs to you.</div><div class='field_holder'><a href='#' class='bt' id='publish_bt'><span>Publish</span></a><a href='#' id='draft_bt' class='bt secondary'><span>Save as draft</span></a></div></div>");
    
    // set tags and prices
    this.pushTags();
    this.selectPrice();
    
    // feed the form
    if(this.title != '') $('#krrbit_title').val(this.title);
    if(this.desc != '') $('#krrbit_detail').val(this.desc);
    if(this.price != '') $('#krrbit_price').val(this.price);
    if(this.curr != '') $('#krrbit_post_currency').val(this.curr);
    
    var self = this;
    
    if(this.credits > 0) {
      $("#publish_bt", form).click(function (e) {
        e.preventDefault();
        self.sendDatas('Publish');
      })
      
      $(".lastset", form).find('.field_holder').append("<span class='terms'><b>Publishing will cost you 1 credit.</b><br /> Your current balance is "+ this.credits + " credits</span>");
      
    } else {
      // You dont have enought credits
      $("#publish_bt", form).addClass('inactive');
      $("#draft_bt", form).addClass('secondary');
      
      $(".lastset", form).children().append("<span class='terms'><b>Oops, you don't have any credits.</b><br /> Your post will be saved as a draft</span>");
    }
    
    $("#draft_bt", form).click(function (e) {
      e.preventDefault();
      self.sendDatas('Save as draft');
    })
    
    // Tags
    if(this.tags != '') {
      $('#tag', form).val(this.tags);
      $('.option-select', form).find('.bt2').trigger('click');
    }


    // Images
    if(this.img != '') {
      var $imgs = this.img;
      var imgTab = $imgs.split('|');

      for(var i = 0; i < imgTab.length; i++) {
        $('#post_images').append('<li class="sortable_item"><span class="thumbContainer thumbCountMe krrbit_thumbs" style="background-image:url(\'' + imgTab[i] + '\');"></span></li>');        
        $('#post_images').append("<input type='hidden' value='" + imgTab[i] + "' name='post[image_urls][]'>")
      }
    } else {
      $("#set_photos").hide();
    }
    
    this.showContainer();
  }
  
  this.showSuccess = function(name, clean_url, url) {
    
    var krrbit_container = $("#krrbit_container");
    krrbit_container.hide().remove();
    if($('#krrbit_loader').length > 0) $('#krrbit_loader').hide().remove();
    
    var mess = (this.pushed == "Publish") ? "Your post is published live." : "Your post is saved as draft.";
    
    $('body').append('<div id="krrbit_container" class="krrbit_success"><div class="krrbit_close" onclick="krrb_it_close()"></div><div id="krrbit_cont"><div id="krrbit_cont_t">Krrb it</div><div id="krrbit_text" ><div id="success_bkmlt"><h2>Bravo ' + name + '! ' + mess + '</h2> <p>On Krrb, posts don\'t expire, so please don\'t forget to close it when you\'re ready.</p> </div><div class="set"><p class="text_success">See your post on Krrb: <br /><a class="post_url" href="' + url + '" target="_blank">' + clean_url + '</a></p></div> <div class="set lastset holder-bt"><a href="#" class="bt" onclick="krrb_it_close()"><span>Done</span></a></div> </div></div></div>');
    this.showContainer();
    
    if(this.pushed == "Publish") {
      // analytics
      _gaq.push(['_trackPageview', '/success/publish']);
    }
  }

  this.showError = function(errors) {

    if($('#krrbit_loader').length > 0) $('#krrbit_loader').remove();

    var krrbit_container = $("#krrbit_container");
    if(krrbit_container.length > 0) krrbit_container.show();

    $("#krrbit_text").scrollTop(0);
    var list = $('#error_bkmlt').find('ul');
    list.empty();
    $.each(errors, function(idx, msg) { list.append('<li>&mdash; ' + msg + '</li>'); });
    $('#error_bkmlt').show();
  }

  this.clean = function() {
    
    var krrbit_container = $("#krrbit_container");
    if(krrbit_container.length > 0) krrbit_container.hide().remove();
    if($('#krrbit_loader').length > 0) $('#krrbit_loader').remove();
    
    window.krrb_running = false;
    window.krrb_map = false;
  }
  
  this.sendDatas = function(type) {
    
    this.loc = $('#address').val();
    this.title = $('#krrbit_title').val();
    this.desc = $('#krrbit_detail').val();
    this.price = $('#krrbit_price').val();
    this.curr = $('#krrbit_post_currency').val();
    this.pushed = type;
    
    var existingLocField =  $("input[name='post[existing_location]']:checked").length > 0 ? $("input[name='post[existing_location]']:checked") : $("input[name='post[existing_location]']");
    
    var hasLoc = ( existingLocField.val() == 'new' && $('#addressholder', $('#krrbit_container')).hasClass('ko')) ? false : true;
    var hasPrice = ( $('input:radio:checked', $('#radios_pricetype')).val() == "0" && $('#krrbit_price').val() == '') ? false : true;
    
    this.isReady = (this.loc == '' || this.title == '' || this.desc == '' || !hasPrice || !hasLoc) ? false : true;
    
    $('.field_holder').removeClass('error');

    // We are ready to send datas start the queue
    if(this.isReady) {

      // hide previous errors
      $('#error_bkmlt').hide();

      // append needed datas
      $("#krrbit_form").append("<input type='hidden' value='" + type +"' name='commit' class='type-post'>");

      // new or existing
      if(existingLocField.val() == 'new') {
        this.currentQueue = -1;
        this.closeWindow(true);
        this.sendContinue({ });
      } else {
        var location = $("#post_location_select").val();
        this.closeWindow(true);
        this.sendContinue({ location_id: location });
      }
      
      
       
     } else {
       var errorMsg = new Array();
     
       if(!hasLoc || this.loc == '') errorMsg.push("The location can't be blank");
       if(this.title == '') {
         errorMsg.push("The title can't be blank");
         $('#krrbit_title').parent().parent().addClass('error');
       }
       if(this.desc == '') {
         errorMsg.push("The description can't be blank");
         $('#krrbit_detail').parent().parent().addClass('error');
       }
       if(!hasPrice) errorMsg.push("The price is required");
       
       this.showError(errorMsg);
    }
  }

  this.sendContinue = function(parameters) {

    var location_id = parameters.location_id || '', post_id = parameters.post_id || '';
        
    if(post_id != '') this.currentPostId = parameters.post_id;
    
    switch(this.currentQueue)
    {
      case -1:

        // Send location information
        var params = $('#location-fields :input[value]').serialize();
        var call = this.root + "/bmlet/locations/create.js?t="+this.public_key+"&"+params;
      break;

      case 0:

        // Send post basic informations

        if(location_id != '') {
          //add the location_id
          $(".post-fields:first").append("<input type='hidden' value='" + this.home +"' name='post[origin_name]'>")
                .append("<input type='hidden' value='"+ location_id +"' name='post[location_id]'>")
                .append("<input type='hidden' value='"+ this.originUrl +"' name='post[origin_url]'>");

          // serialize
          var params = $(".post-fields :input[value]").serialize();
          var call = this.root + "/bmlet/post/create.js?t="+ this.public_key +"&"+ params;
        }

      break;

      case 1:

        // Send other part of the post
        if(this.currentPostId != '') $("#post_tag_list").after("<input type='hidden' value='"+ this.currentPostId +"' name='post_id' class='post_tag_list'>");
        var params = $(".post_tag_list").serialize();
        
        var call = this.root + "/bmlet/post/update.js?t="+this.public_key+"&"+params;

      break;

      case 2:

        // Send the post images
        if(this.currentPostId != '') $("#set_photos").append("<input type='hidden' value='"+ this.currentPostId +"' name='post_id'>");
        var params = $("#set_photos :input[value]").serialize();

        var call = this.root + "/bmlet/post/update.js?t="+this.public_key+"&"+params;
      break;

      case 3:

        // Request publishing or saving as draft
        if(this.currentPostId != '') $(".type-post:first").after("<input type='hidden' value='" + this.currentPostId +"' name='post_id' class='type-post'>");
        var params = $(".type-post").serialize();

        // Send datas with JSONP
        var call = this.root + "/bmlet/post/publish.js?t="+this.public_key+"&"+params;

      break;
    }

    // do the JSONP now
    $.ajax({
        url : call,
        dataType : 'jsonp',
        crossDomain : true,
        jsonp: false
    });

    // and progress into the queue
    this.currentQueue++;
  }
  
  this.init();
}


if(!window.krrb_running) {
	window.krrb_running = true;
	window.krrb_map = false;
	krrb_it = new krrb_it();
}

// additional functions
function krrb_it_close() {
  var krrbit_container = $("#krrbit_container");
  krrbit_container.hide().remove();
  if($('#krrbit_loader').length > 0) $('#krrbit_loader').remove();
  window.krrb_running = false;
  window.krrb_map = false;
}

function krrb_it_googlemap() {
  window.krrb_map = true;
  krrb_it.loadedMap();
}

// call functions from json
function addLocations(data) {
  krrb_it.addLocations(data);
}
function getCredits(data) {
  krrb_it.getCredits(data);
}
function guessLocation(lat, lng) {
  krrb_it.guessLocation(lat, lng);
}


function postSucceed(name, clean_url, url) {
  krrb_it.showSuccess(name, clean_url, url);
}

function postFailed(mess) {
  krrb_it.showError(mess);
}

function successLocation(loc_id) {
  krrb_it.sendContinue({ location_id: loc_id });
}

function successContinue(params) {
  krrb_it.sendContinue(params);
}
