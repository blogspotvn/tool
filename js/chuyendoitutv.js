function sentencecase(a) {
    a = a.toLowerCase();
    var b = true;
    var c = "";
    for (var d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (/\.|\!|\?|\n|\r/.test(e)) {
            b = true;
        } else if ($.trim(e) != "" && b == true) {
            e = e.toUpperCase();
            b = false;
        }
        c += e;
    }
    return c;
}

function alternatingcase(a) {
    a = a.toLowerCase();
    var b = "";
    for (var c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        if (c % 2) {
            b += d.toUpperCase();
        } else {
            b += d;
        }
    }
    return b;
}

function ucfirst(a) {
    var b = a.charAt(0).toUpperCase();
    return b + a.substr(1);
}

function ucwords(a) {
    return (a + "").replace(/^(\S)|\s+(\S)/g, function(a) {
        return a.toUpperCase();
    });
}

$(document).ready(function() {
    var a = "None";

    $("#upper").click(function() {
        $("#content").val($("#content").val().toUpperCase());
        return false;
    });

    $("#lower").click(function() {
        $("#content").val($("#content").val().toLowerCase());
        return false;
    });

    $("#capitalized").click(function() {
        $("#content").val(ucwords($("#content").val().toLowerCase()));
        return false;
    });

    $("#sentence").click(function() {
        $("#content").val(sentencecase($("#content").val()));
        return false;
    });

    $("#alternating").click(function() {
        $("#content").val(alternatingcase($("#content").val()));
        return false;
    });

    $('#change').click(function() {
        var text = $('#content').val();
        var input = ['á', 'ả', 'à', 'ã', 'ạ', 'ă', 'ắ', 'ẳ', 'ằ', 'ẵ', 'ặ', 'â', 'ấ', 'ẩ', 'ầ', 'ẫ', 'ậ', 'đ', 'é', 'ẻ', 'è', 'ẽ', 'ẹ', 'ê', 'ế', 'ể', 'ề', 'ễ', 'ệ', 'ó', 'ỏ', 'ò', 'õ', 'ọ', 'ô', 'ố', 'ổ', 'ồ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ở', 'ờ', 'ỡ', 'ợ', 'ú', 'ủ', 'ù', 'ũ', 'ụ', 'ư', 'ứ', 'ử', 'ừ', 'ữ', 'ự', 'ý', 'ỷ', 'ỳ', 'ỹ', 'ỵ', 'í', 'ỉ', 'ì', 'ĩ', 'ị', 'Á', 'Ả', 'À', 'Ã', 'Ạ', 'Ă', 'Ắ', 'Ẳ', 'Ằ', 'Ẵ', 'Ặ', 'Â', 'Ấ', 'Ẩ', 'Ầ', 'Ẫ', 'Ậ', 'Đ', 'É', 'Ẻ', 'È', 'Ẽ', 'Ẹ', 'Ê', 'Ế', 'Ể', 'Ề', 'Ễ', 'Ệ', 'Ó', 'Ỏ', 'Ò', 'Õ', 'Ọ', 'Ô', 'Ố', 'Ổ', 'Ồ', 'Ỗ', 'Ộ', 'Ơ', 'Ớ', 'Ở', 'Ờ', 'Ỡ', 'Ợ', 'Ú', 'Ủ', 'Ù', 'Ũ', 'Ụ', 'Ư', 'Ứ', 'Ử', 'Ừ', 'Ữ', 'Ự', 'Ý', 'Ỷ', 'Ỳ', 'Ỹ', 'Ỵ', 'Í', 'Ỉ', 'Ì', 'Ĩ', 'Ị'];
        var output = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'y', 'y', 'y', 'y', 'y', 'i', 'i', 'i', 'i', 'i', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'Y', 'Y', 'Y', 'Y', 'Y', 'I', 'I', 'I', 'I', 'I', 'á', 'ả', 'à', 'ã', 'ạ', 'ắ', 'ẳ', 'ằ', 'ẵ', 'ặ', 'ấ', 'ẩ', 'ầ', 'ẫ', 'ậ', 'é', 'ẻ', 'è', 'ẽ', 'ẹ', 'ế', 'ể', 'ề', 'ễ', 'ệ', 'ó', 'ỏ', 'ò', 'õ', 'ọ', 'ố', 'ổ', 'ồ', 'ỗ', 'ộ', 'ớ', 'ở', 'ờ', 'ỡ', 'ợ', 'ú', 'ủ', 'ù', 'ũ', 'ụ', 'ứ', 'ử', 'ừ', 'ữ', 'ự', 'ý', 'ỷ', 'ỳ', 'ỹ', 'ỵ', 'í', 'ỉ', 'ì', 'ĩ', 'ị', 'Á', 'Ả', 'À', 'Ã', 'Ạ', 'Ắ', 'Ẳ', 'Ằ', 'Ẵ', 'Ặ', 'Ấ', 'Ẩ', 'Ầ', 'Ẫ', 'Ậ', 'É', 'Ẻ', 'È', 'Ẽ', 'Ẹ', 'Ế', 'Ể', 'Ề', 'Ễ', 'Ệ', 'Ó', 'Ỏ', 'Ò', 'Õ', 'Ọ', 'Ố', 'Ổ', 'Ồ', 'Ỗ', 'Ộ', 'Ớ', 'Ở', 'Ờ', 'Ỡ', 'Ợ', 'Ú', 'Ủ', 'Ù', 'Ũ', 'Ụ', 'Ứ', 'Ử', 'Ừ', 'Ữ', 'Ự', 'Ý', 'Ỷ', 'Ỳ', 'Ỹ', 'Ỵ', 'Í', 'Ỉ', 'Ì', 'Ĩ', 'Ị'];

        for (var i = 0; i < input.length; i++) {
            var pattern = new RegExp(input[i], 'g');
            text = text.replace(pattern, output[i]);
        }

        $('#content').val(text);
        return false;
    });

    function calc_counts() {
        $('.char_count').text($('#content').val().length);
        $('.word_count').text(
            $.trim($('#content').val()).replace(/\s+/gi, ' ').split(' ').length
        );
    }

    function getFlashVersion() {
        try {
            try {
                var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {
                    axo.AllowScriptAccess = 'always';
                } catch (e) {
                    return '6,0,0';
                }
            } catch (e) {}
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
        } catch (e) {
            try {
                if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                    return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
                }
            } catch (e) {}
        }
        return '0,0,0';
    }

    var flashVersion = getFlashVersion().split(',').shift();

    if (flashVersion >= 10) {
        $("#copy").show();
        $("#copy").zclip({
            path: 'js/ZeroClipboard.swf',
            copy: function() {
                return $('#content').val();
            },
            beforeCopy: function() {
                this.copy = $('#content').val();
            },
            afterCopy: function() {
                alert('Copy thành công');
            }
        });
    } else if (window.clipboardData && clipboardData.setData) {
        $("#copy").show();
        $("#copy").click(function() {
            clipboardData.setData('text', $('#content').val());
            return false;
        });
    }

    var b = $("#content").attr('data-placeholder');

    function calc_counts() {
        $('#character').text($('#content').val().length);
        $('#word').text(
            $.trim($('#content').val()).replace(/\s+/gi, ' ').split(' ').length
        );
    }

    $("#content").focus(function() {
        calc_counts();
    });

    $("#content").blur(function() {
        if ($(this).val() == "") {
            $(this).val(b);
        }
        calc_counts();
    });

    $("#content").keyup(function() {
        calc_counts();
    });

    calc_counts();
});
