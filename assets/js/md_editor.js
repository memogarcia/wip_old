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
                "Cmd-P": function (cm) {
                    editor.watch();
                },
                "Cmd-E": function (cm) {
                    editor.unwatch();
                }
            };
            this.addKeyMap(keyMap);
        }
    });
});