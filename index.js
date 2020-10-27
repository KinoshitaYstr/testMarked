const marked = require("marked");

const main = () => {
    console.log("Hello World");
    console.log(marked("# Hello World"));
    console.log(marked("<!-- テストデータだよ！！！ -->"));
    console.log(marked('<img data-action="display" style="display: none;"/>'));
    console.log(marked('<img src="https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png">'));
    console.log(marked('ネコ（猫）は、狭義には食肉目ネコ科ネコ属に分類されるリビアヤマネコ（ヨーロッパヤマネコ）が家畜化されたイエネコ（家猫、Felis silvestris catus）に対する通称である。'));
    console.log(marked('イヌ（犬）と並ぶ代表的なペットとして日本を含め世界中で広く飼われている。>_<'));
    console.log(marked('<!-- <img data-action="erase" style="display: none;"/> -->'));
    console.log(marked('<!-- <img data-action="hidden" style="display: none;"/> -->'));
    console.log(marked('<!-- <img data-action="display" style="display: none;"/> -->'));
    console.log(marked('<img src="https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png">'));
    console.log(marked('より広義には、ヤマネコやネコ科動物全般を指すこともある'));
    console.log(marked('by wikipedia'));
    console.log(marked('<img data-action="erase" style="display: none;"/>'));
    console.log(marked('<img data-action="hidden" style="display: none;"/>'));
    console.log(marked('![Qiita](https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Qiita")'));
    console.log(marked('<form method="post" action="/">'));
    console.log(marked('<select name="example">'));
    console.log(marked('<option value="サンプル1">サンプル1</option>'));
    console.log(marked('<option value="サンプル2">サンプル2</option>'));
    console.log(marked('<option value="サンプル3">サンプル3</option>'));
    console.log(marked('</select>'));
    console.log(marked('</form>'));
    console.log(marked(''));
    console.log(marked(''));
    console.log(marked(''));

    const testData = '\
<!-- テストデータだよ！！！ -->\
\
<img data-action="display" style="display: none;"/>\
\
<img src="https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png">\
\
\
ネコ（猫）は、狭義には食肉目ネコ科ネコ属に分類されるリビアヤマネコ（ヨーロッパヤマネコ）が家畜化されたイエネコ（家猫、Felis silvestris catus）に対する通称である。\
\
\
イヌ（犬）と並ぶ代表的なペットとして日本を含め世界中で広く飼われている。>_<\
\
<!-- <img data-action="erase" style="display: none;"/> -->\
\
<!-- <img data-action="hidden" style="display: none;"/> -->\
\
<!-- <img data-action="display" style="display: none;"/> -->\
\
<img src="https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png">\
\
より広義には、ヤマネコやネコ科動物全般を指すこともある\
\
by wikipedia\
\
<img data-action="erase" style="display: none;"/>\
\
<img data-action="hidden" style="display: none;"/>\
\
![Qiita](https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Qiita")\
\
<div class="aa"\
id="ok">\
sasasadasda\
</div>\
\
<form method="post" action="/">\
\
<select name="example">\
\
<option value="サンプル1">サンプル1</option>\
\
<option value="サンプル2">サンプル2</option>\
\
<option value="サンプル3">サンプル3</option>\
\
</select>\
\
</form>\
';
    console.log(marked(testData));
}

main();