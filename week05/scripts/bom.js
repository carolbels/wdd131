let chaptersArray = getChapterList() || [];

function getChapterList() {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : null;
}

chaptersArray.forEach((chapter) => displayList(chapter));

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert("Please add a chapter");
        input.focus();
    }
});

function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '\u274C';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', function(){
        list.removeChild (li);
        deleteChapter(li.textContent);
        input.focus();
    });

    console.log (`Chapter "${item}" has been added to the list.`);
}

function setChapterList() {
    localStorage.setItem('favChapters', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('favChapters'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}