// Node vs Element
const parent = document.querySelector('.parent');

// 부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes)

// 부모 요소의 모든 자식 요소 확인
console.log(parent.children)

console.dir(parent)

class N {}
class E extends N {}

console.dir(E)
console.dir(N)
console.dir(E.__proto__)

console.dir(Element)
console.dir(Node)
console.dir(Element.__proto__)

/** document.getElementById()
 * Html `id` 속성(attributes) 값으로 검색한 요소를 반환
 * 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
 * 검색 결과가 없으면 null 반환 */
const el = document.getElementById('child2');
console.log(el);

/** document.querySelector()
 * css 선택자로 검색한 요소를 하나 반환
 * 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
 * 검색 결과가 없으면 null 반환
 */
const el2 = document.querySelector('.child:first-child');
console.log(el2);

/**
 * document.querySelectorAll()
 * css선택자로 검색한 모든 요소를 NodeList로 반환
 * NodeList 객체는 forEach() 사용
 */
const nodeList = document.querySelectorAll('.child');
console.log(nodeList);
nodeList.forEach(el => console.log(el.textContent));

console.log(Array.from(nodeList).reverse())

/**
 * N.parentElement
 * 노드의 부모요소 반환
 */
const el3 = document.querySelector('.child');
console.log(el3.parentElement)

/**
 * E.closest()
 * 자신을 포함한 조상 요소 중 'css 선택자'와 일치하는 가장 가까운 요소 반환
 * 요소를 찾지 못하면 null 반환
 */
const el4 = document.querySelector('.child');
console.log(el4.closest('div'));
console.log(el4.closest('body'));
console.log(el4.closest('.hello'));

/**
 * N.previousSibling / N.nextSibling
 * 노드의 이전, 혹은 다음 형제 노드 반환
 */
const el5 = document.querySelector('.child');
console.log(el5.previousSibling);
console.log(el5.nextSibling);

/**
 * N.previousElementSibling / N.nextElementSibling
 * 요소의 이전, 혹은 다음 형제 노드 반환
 */
const el6 = document.querySelector('.child');
console.log(el6.previousElementSibling);
console.log(el6.nextElementSibling);

/**
 * E.children
 * 요소의 모든 자식 요소 반환
 */
const el7 = document.querySelector('.parent');
console.log(el7.children)
console.log(Array.from(el7.children))

/**
 * E.firstElementChild / E.lastElementChild
 * 요소의 첫번째 자식 혹은 마지막 자식 요소 반환
 */
const el8 = document.querySelector('.parent');
console.log(el8.firstElementChild);
console.log(el8.lastElementChild);





