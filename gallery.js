function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var holder = document.getElementById("pic-holder").setAttribute("src", source);
    var text = whichpic.getAttribute("title");
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
    if (refNode.parentNode.lastChild === refNode) {
        refNode.parentNode.appendChild(newNode);
    } else {
        refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

/*
Chapter 8

**/

/*
Chapter 9 CSS-DOM

内嵌css检索属性：
para = document.getElementById('example');
para.style.fontFamily // NOT .font-family

递归查找下一个element:
getNextElement(node);

document.getElementByTagName("h1"); //得到的是一个数组。


Chapter 10 CSS 动画

setTimeout()函数

把函数赋值是个好想法：
variable = setTimeout("function", interval);


**/
function getNextElement(node) {
    if (node.nodeType === 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }

}

// example of moveElement

function moveElement(eleID, final_x, final_y, interval) {
    var p_var = document.createElement('p');
    var text = document.createTextNode("MOVE");
    p_var.appendChild(text);
    document.getElementById(eleID).appendChild(p_var);
    var mo = document.getElementById(eleID);
    mo.style.position = "absolute";

    var x = parseFloat(mo.style.left);
    var y = parseFloat(mo.style.top);

    if (x === final_x && y === final_y) {
        return true;
    }
    if (x > final_x) {
        x--;
    }
    if (y > final_y) {
        y--;
    }
    if (x < final_x) {
        x++;
    }
    if (y < final_y) {
        y++;
    }
    mo.style.left = x + 'px';
    mo.style.top = y + 'px';

var repeat = "moveElement('" + eleID + "'," + final_x + "," + final_y + "," + interval + ")";
setTimeout(repeat, interval);
}

