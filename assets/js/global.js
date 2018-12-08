$(function(){

  // Adds current year to copyright date
	var currentYear = (new Date()).getFullYear();
	$("[data-year]").text(currentYear);


  // Table of Contents for lesson notes
  var ToC = "<ul>";
  var newLine, el, title, link;

  $("article > h2, blockquote h2").each(function() {
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" + title + "</a>" +
      "</li>";

    ToC += newLine;
  });

  ToC +="</ul>";
  $(".table-of-contents").append(ToC);

  $('[data-collapse]').on("click", function(){
    $(this).parent().toggleClass("collapse");
  });


  // fix table of contents on scroll
  var waypoints = $('[data-nav]').waypoint({
    handler: function(direction) {
      if(direction === "down") {
        $('[data-nav]').addClass('fixed');
      } else {
        $('[data-nav]').addClass('fixed');
      }
    },
    offset: 40
  });
  var waypoints = $('[data-main]').waypoint({
    handler: function(direction) {
      if(direction === "up") {
        $('[data-nav]').removeClass('fixed');
      }
    }
  });

  // open external links in a new window
  $("a[href^='http://'], a[href^='https://'], a[href^='/llc-digital-skills/assets/img/']").attr("target","_blank");


  //accordion control
  $('.summary').click(function(){
    $(this).toggleClass('opened');
    $(this).next().slideToggle();
  });
});
