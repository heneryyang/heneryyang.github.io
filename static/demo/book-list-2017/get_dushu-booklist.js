var length = jQuery(".slick-track")[1].children.length;
var books = [];

for (var i = 0; i < length; i++) {
    var book = {
        "feature-title": jQuery(".slick-track").find(".feature-title a")[i].text,
        "subtitle": jQuery(".slick-track").find(".subtitle")[i].innerText,
        "content": jQuery(".slick-track").find(".content")[i].innerText,
        "cover": jQuery(".slick-track").find(".dfd-team-front .image-wrap img")[i].src
    }
    books.push(book)
}