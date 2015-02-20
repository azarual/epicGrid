/*! epicGrid.js v0.8 | GNU License | git.io/AZCS | Paul Browne | 2015 */
function epicGrid() {
    for (var a = 656, b = 1024, c = 4, d = window.innerWidth, e = document.getElementsByTagName("*"), f = document.getElementsByClassName("egcf"), g = document.querySelectorAll('[class*="-col-"],[class*="-center-"]'); f.length > 0;) f[0].parentNode.removeChild(f[0]);
    for (var h = 0; h < g.length; ++h) {
        var i = g[h].style;
        i.float = "none", i.width = "100%", i.marginLeft = 0, i.marginRight = 0, i.position = "relative", i.display = "block"
    }
    if (a >= d) var j = "m";
    if (b >= d && d > a) var j = "t";
    if (d > b) var j = "d";
    for (var k = 0; k < e.length; ++k)
        for (var l = e[k].children, m = 0, n = 0; n < l.length; ++n) {
            var o = new RegExp(j + "-col-\\d+-\\d+", "g"),
                p = new RegExp(j + "-center-\\d+-\\d+", "g"),
                q = new RegExp(j + "-left-\\d+-\\d+", "g"),
                r = new RegExp(j + "-right-\\d+-\\d+", "g"),
                s = new RegExp(j + "-offset-\\d+-\\d+", "g"),
                t = new RegExp(j + "-col-\\d+-\\d+|" + j + "-offset-\\d+-\\d+", "g"),
                u = new RegExp(j + "-col-\\d+-\\d+|" + j + "-center-\\d+-\\d+", "g"),
                v = new RegExp(j + "-left-\\d+-\\d+|" + j + "-right-\\d+-\\d+", "g");
            if (o.test(l[n].className) && !q.test(l[n].className) && !r.test(l[n].className)) {
                var w = l[n].className.match(t).toString().match(/\d+/g);
                if (Math.round(1e4 * m) / 1e4 >= 1 && (m += -1), 0 == Math.round(1e4 * m) / 1e4 && (l[n].className = l[n].className + " eg-first"), m += w.length > 2 ? w[0] / w[1] + w[2] / w[3] : w[0] / w[1], 0 == Math.round(1e4 * m) / 1e4 % 1) {
                    var x = document.createElement("div");
                    x.style.clear = "both", x.className = "egcf", l[n].parentNode.insertBefore(x, l[n].nextSibling)
                }
            }
            if (u.test(l[n].className)) {
                var y = l[n].className.match(u).toString().match(/\d+/g),
                    z = y[0] / y[1] * (c + 100 - c * y[1]) + c * y[0] - c;
                if (l[n].style.width = z + "%", l[n].style.marginLeft = c + "%", l[n].style.float = "left", l[n].className.match(/eg\-first/g) && (l[n].style.marginLeft = 0), l[n].className.match(p) && (l[n].style.float = "none", l[n].style.marginLeft = "auto", l[n].style.marginRight = "auto"), l[n].className.match(s)) {
                    var A = l[n].className.match(s).toString().match(/\d+/g),
                        B = A[0] / A[1] * (c + 100 - c * A[1]) + c * A[0] - c;
                    l[n].style.marginLeft = B + 2 * c + "%", l[n].className.match(/eg\-first/g) && (l[n].style.marginLeft = B + c + "%")
                }
                if (v.test(l[n].className)) {
                    var C = l[n].className.match(v).toString().match(/\d+/g),
                        D = C[0] / C[1] * (c + 100 - c * C[1]) + c * C[0] - c,
                        E = parseFloat(l[n].parentNode.style.width);
                    l[n].className.match(q) && (l[n].style.marginLeft = 100 / E * -(D + c) + "%", l[n].style.marginRight = c + "%", l[n].style.float = "left"), l[n].className.match(r) && (l[n].style.float = "right", l[n].style.marginRight = 100 / E * -(D + c) + "%", l[n].style.marginLeft = c + "%")
                }
                for (var F = document.getElementsByClassName("eg-first"), G = 0; G < F.length; ++G) F[0].className = F[0].className.replace(/\seg-first/, "")
            }
        }
}
window.addEventListener("resize", epicGrid), epicGrid();