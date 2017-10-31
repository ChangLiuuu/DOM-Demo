function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var holder = document.getElementById("pic-holder").setAttribute("src", source);
    var text =whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

/*
Chapter 7

0 document.write()
1 document.createElement('p')
2 document.createTextNode('Hello world')
3 appendChild()
4 insertBefore(new node, ref node);
5 node.nextSibling  //平行的下一个node
6 node.setAttribute("src/alt/id", "img/a.gif / This is a cat. / cat")
7 var link = document.getElementsByTagName('a');  link[];

**/
function load() {
    var para = document.createElement('p');
    var testdiv = document.getElementById('test');
    testdiv.appendChild(para);
    var txt = document.createTextNode("Test... ");
    var txt2 = document.createTextNode("TestBefore... ");
    var txt3 = document.createTextNode("TestAfter... ");
    para.appendChild(txt);
    txt.parentNode.insertBefore(txt2, txt);
    insertAfter(txt3, txt2);

}
// my own script
function insertAfter(newNode, refNode) {
    if(refNode.parentNode.lastChild === refNode) {
        refNode.parentNode.appendChild(newNode);
    } else {
        refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

/*
Chapter 8

0 document.write()
1 document.createElement('p')
2 document.createTextNode('Hello world')
3 appendChild()
4 insertBefore(new node, ref node);
5 node.nextSibling  //平行的下一个node
6 node.setAttribute("src/alt/id", "img/a.gif / This is a cat. / cat")
7 var link = document.getElementsByTagName('a');  link[];

**/

