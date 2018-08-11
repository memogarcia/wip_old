$(function () {
    var editor = editormd("editormd", {
        path: "lib/",
        toolbarIcons: function () {
            return []
        },
        lineNumbers: false,
        flowChart: true,
        watch: false,
        toolbar: false,
        placeholder: "",
        height: "100%",
        onchange: function () {},
        onload: function () {
            var keyMap = {
                "Ctrl-P": function (cm) {
                    editor.watch();
                },
                "Ctrl-E": function (cm) {
                    editor.unwatch();
                }
            };
            this.addKeyMap(keyMap);
        }
    });
});