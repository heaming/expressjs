/**
 * document.createElement()
 * 메모리에만 존재하는 새로운 html 요소 생성 반환
 */
const divEl = document.createElement('div');
console.log(divEl);

const inputEl = document.createElement('input');
console.log(inputEl);

/**
 * E.prepend() / E.append()
 * 노드를 요소의 첫번째 혹은 마지막 자식으로 삽입
 */
const parentEl = document.querySelector('.parent');
const el = document.createElement('div');
el.textContent = 'Hello!';

parentEl.prepend(new Comment('주석'));
parentEl.append(el);
parentEl.append('TEXT!!');

/**
 * E.remove()
 */
// const el2 = document.querySelector('.child');
// el2.remove();

/**
 * E.insertAdjacentElement(point, newElement)
 * 대상 요소의 지정한 위치에 새로운 요소 삽입
 * 대상요소.insertAdjacentElement(위치, 새로운 요소)
 */
`
<!-- beforebegin -->
<div class="target">
    <!-- after begin -->
    CONTENT
    <!--   beforeend  -->
</div>
<!-- afterend -->
`
const childEl = document.querySelector('.child');
const newEl = document.createElement('span');
newEl.textContent = 'NEW SPAN'
// childEl.insertAdjacentElement('beforebegin', newEl);
// childEl.insertAdjacentElement('afterbegin', newEl);
// childEl.insertAdjacentElement('beforeend', newEl);
// childEl.insertAdjacentElement('afterend', newEl);

/**
 * N.insertBefore()
 * 부모 노드의 자식인 참조노드의 이전 형제로 노드 삽입
 * 부모노드.insertBefore(노드, 참조노드)
 */
const parentEl2 = document.querySelector('.parent');
const childEl2 = document.querySelector('.child');
const newEl2 = document.createElement('span');
newEl2.textContent = "얍얍";
parentEl2.insertBefore(newEl2, childEl2);

/**
 * N.contains()
 * 주어진 노드가 노드의 자신을 포함한 후손인지 확인
 * node.contains(주어진 노드)
 */
const p = document.querySelector('.parent');
const c = document.querySelector('.child');
console.log(p.contains(c));
console.log(p.contains(p));
console.log(document.body.contains(p));
console.log(document.body.contains(c));
console.log(document.body.contains(document.body));
console.log(p.contains(document.body));
console.log(c.contains(p));

/**
 * N.textContent()
 * node의 모든 텍스트를 얻거나 변경
 */
const ell = document.querySelector('.child');
console.log(ell.textContent);
ell.textContent="7";
console.log(ell.textContent);

/**
 * E.innerHTML()
 * 요소의 모든 html 내용을 하나의 문자로 얻거나 새로운 html지정
 */
const elll = document.querySelector('.parent');
console.log(elll);
// elll.textContent = "<span style=\"color: cadetblue;\">Hello</span>";
elll.innerHTML = `<span style="color: cadetblue;">Hello</span>`