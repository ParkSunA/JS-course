let topics = [
    {id:0, title:"인사글", body: "안녕하세요, 게시판입니다!"},
    {id:1, title:"공지사항", body: "회원가입 후 작성해주세요!"}];


function Read(id){
    const topic = topics.find(item => item.id == id)
    const display = document.getElementById('display');
    display.innerHTML = `
    <button id=create onClick="CreateForm()">글쓰기</button>
    <button id=update onClick="Update(${id})">수정</button>
    <button id=delete onClick="Delete(${id})">삭제</button>
    <h2>${topic.title}</h2><div>${topic.body}</div>`

}

function CreateForm(){
    display.innerHTML = `<button id="createBtn">글 게시하기</button>
                <div><input id="createTitle" name="title" required placeholder="제목을 적어주세요"></div>
                <div><textarea id="createBody" name="body" cols="24" rows="5" required="required" placeholder="내용을 적어주세요"></textarea></div>`
}

function Delete(id){
    topics = topics.filter(item=> item.id!=id)
    makeList();
    display.innerHTML =`<form id=display_form>
                <button id="createBtn">글 게시하기</button>
                <div><input id="createTitle" name="title" required placeholder="제목을 적어주세요"></div>
                <div><textarea id="createBody" name="body" cols="24" rows="5" required="required" placeholder="내용을 적어주세요"></textarea></div>
            </form>`
}

function Update(id){
    let index;
    const topic = topics.find((item,i) => { index=i
                                        return item.id == id})

    display.innerHTML =`<form id=display_form>
                <button id="updateComplete">수정 완료</button>
                <div><input id="updateTitle" name="title" required value=${topic.title}></div>
                <div><textarea id="updateBody" name="body" cols="24" rows="5" required="required">${topic.body}</textarea></div>
            </form>`
    function updateComplete(e){
        e.preventDefault();
        var title = document.getElementById("updateTitle");
        var body = document.getElementById("updateBody");
        topics[index].title = title.value
        topics[index].body = body.value
        makeList()
        Read(id)
    }
    const updateBtn = document.getElementById('updateComplete');
    updateBtn.addEventListener("click",(e)=>{updateComplete(e)})

}

function makeList(){
    var listUl = document.getElementById("makeList");
    var list = `<table>
    <tr><th>글 번호</th>
    <th>제목</th></tr>`;

    for(var i=0; i<topics.length; i++){
        //onClick으로 지정된 함수를 밖으로 뺄 순 없나
        var tags = `<tr id = "li_${topics[i].id}" class="lis">
                <td>${topics[i].id}</td>
                <td><a href="#" onClick="Read(${topics[i].id})">${topics[i].title}</a></td>
            </tr>`;

        list = list+tags;
    }
    listUl.innerHTML = list+`</table>`;
}

function createArticle(e){
    var title = document.getElementById("createTitle");
    var body = document.getElementById("createBody");
    e.preventDefault();
    console.log(title.value)
    topics.push({id:topics.length, title:title.value, body:body.value})
    makeList()

}

function showBody(event,title,body){
    event.preventDefault();
    display.innerHTML = `<h2><${title}/h2><div>${body}</div>`
}


// 글 게시하기
var btn = document.getElementById("createBtn");
btn.addEventListener("click",createArticle);
// 글 리스트 생성
makeList();





// 글을 생성하고 글 제목에 addEventListener를 하는게 좋을지 아님 저장된 topics에서 같은 id를 갖는 글을 찾아 보여주기가 나을지
