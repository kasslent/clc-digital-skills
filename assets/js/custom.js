$(function(){
  
  // Adds current year to copyright date
	var currentYear = (new Date()).getFullYear();
	$("[data-year]").text(currentYear);
  
  
  // Table of Contents
  var ToC = "<p>On this page:</p><ul>";
  var newLine, el, title, link;

  $("main h2").each(function() {
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;
  });
  
  ToC +="</ul>";
  $(".table-of-contents").prepend(ToC);
  
});
