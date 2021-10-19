const topics = [
    {id:0, title:"인사글", body: "안녕하세요, 게시판입니다!"},
    {id:1, title:"공지사항", body: "회원가입 후 작성해주세요!"}];



    
function makeList(){
    var listUl = document.getElementById("makeList");
    var list = `<li><a><span>글 번호</span>
    <span>제목</span></a></li>`;

    for(var i=0; i<topics.length; i++){
        //onClick으로 지정된 함수를 밖으로 뺄 순 없나
        var tags = `<li id = "li_${topics[i].id}" class="lis"><a href="#">
            <span>${topics[i].id}</span>
        <span>${topics[i].title}</span>
        </a></li>`;

        list = list+tags;
    }
    listUl.innerHTML = list;
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


// 페이지가 실행될때 처음에 같이 실행
window.onload = function(){makeList();}

// 글 클릭시 수정 버튼 생성

var display = document.getElementById('display');
var lis_btn = document.getElementsByClassName('lis');
console.log(lis_btn[0])
// lis_btn.forEach((item,i)=>(item.addEventListener(showBody(topics[i].title,topics[i].body))))


