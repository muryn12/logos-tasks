document.write("<h1 style='color: red;'><i>Таблиця множення</i></h1>");
for (j = 2; j <= 9; j++) {
    document.write("<div style='float: left; width: 100px;'>");
    for (i = 2; i <= 9; i++) {
        document.write(j + "*" + i + "=" + (i * j) + "<br>");
    }
    document.write("</div>");
} 