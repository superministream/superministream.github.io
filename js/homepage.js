window.onload = function() {
    var name = "will";
    var host = window.location.hostname;
    if (host.startsWith("www.")) {
        host = host.substring(4);
    }
    var mail = name + "@" + host;
    document.getElementById("contact-link").setAttribute("href", "mailto:" + mail);
}


