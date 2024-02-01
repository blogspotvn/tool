     function cdClear() {
         var e = document.getElementById("codes");
         e.value = "";
         e.focus();
         document.getElementById("cvrt").disabled = false
     }

     function cdConvert() {
         var e = document.getElementById("codes"),
             t = e.value,
             n = document.getElementById("opt1"),
             r = document.getElementById("opt2"),
             i = document.getElementById("opt3"),
             s = document.getElementById("opt4"),
             o = document.getElementById("opt5");
         t = t.replace(/\t/g, "    ");
         if (n.checked) t = t.replace(/&/g, "&amp;");
         if (r.checked) t = t.replace(/'/g, "&#039;");
         if (i.checked) t = t.replace(/"/g, "&quot;");
         if (s.checked) t = t.replace(/</g, "&lt;");
         if (o.checked) t = t.replace(/>/g, "&gt;");
         if (t.lastIndexOf("\n") != -1 || t.length > 40) {
             t = t.replace(/^/, '')
         } else {
             t = t.replace(/^/, '')
         }
         t = t.replace(/$/, "");
         e.value = t;
         e.focus();
         e.select()
     }
