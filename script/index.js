function NamesOfSelectToClick(div){
    this.div = div;
    this.firstChild = div.children[0];
    this.secondChild = div.children[1];
    this.firstChild.addEventListener('click', this.select.bind(null, this.div))

}

NamesOfSelectToClick.prototype.select = function(element){
    let findOpenedSelect = document.getElementsByClassName('aside-list-of-items');
    let childrenElementName = element.children[0].children[0];//доступ к h3 span
    let newClassname = `aside-list-of-items open`;
    let oldClassname = `aside-list-of-items`
        if( element.children[1].className == newClassname ){
            element.children[1].className = oldClassname;
            childrenElementName.innerHTML = '+'

            return
        }
        for (let i = 0; i<findOpenedSelect.length; i++){
            let siblingSpanElementName = findOpenedSelect[i].previousElementSibling.children[0];// доступ к элементу соседа
            if(findOpenedSelect[i].className == newClassname ){
                findOpenedSelect[i].className = oldClassname;
                siblingSpanElementName.innerHTML = '+'
            }
        }
    element.children[1].className = newClassname;
    childrenElementName.innerHTML = '-'
};

let namesOfSelect = document.getElementsByClassName('aside-list');
let inputElement = document.getElementById('searchTextBtn');
inputElement.addEventListener('click', getWordForSeach )

for(let i = 0; i < namesOfSelect.length; i++){
    let namesOfSelectToClicknew = new NamesOfSelectToClick(namesOfSelect[i]);
};
    


// search section

const originalHTMLPage = document.getElementsByTagName('section')[0].innerHTML; //для reset page

function searchNodElementInText(word){
        let searchWord = word;  
        let fieldOfOurSearch = document.getElementsByTagName('section')[0].innerHTML;
        let reg = new RegExp(`${searchWord}`,"gm");

        fieldOfOurSearch = fieldOfOurSearch.replace(reg,`<span style="background-color:yellow;">${word}</span>`) 
        document.getElementsByTagName('section')[0].innerHTML = fieldOfOurSearch;  //заменяем html код
};

function resetToOldPage(){
    document.getElementsByTagName('section')[0].innerHTML = originalHTMLPage;
}

function getWordForSeach(){
let searchWord = document.getElementById('searchText').value;

    if(searchWord.length < 3){
        alert('Искать слово меньше 3-х букв? хм....');
        resetToOldPage()
    }
    
    else {
        searchNodElementInText(searchWord);
        document.getElementById('searchText').value = '';
    }
};

