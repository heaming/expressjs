/**
 * E.dataset
 * 요소의 data 속성을 얻거나 지정
 */
const el = document.querySelector('.child');
const str = 'hello world';
const obj = { a: 1, b: 2};

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj);

console.log(el.dataset);
console.log(JSON.parse(el.dataset.object));

/**
 * E.tagName
 * 요소의 태그 이름 반환
 */
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const el2 = document.createElement('span')

console.log(parentEl.tagName)
console.log(childEl.tagName)
console.log(el2.tagName)
console.log(document.body.tagName)

/**
 * E.id / E.className
 */
el.id = "element";
el.className += " child1 active"
console.log(el.id);
console.log(el.className);
console.log(el)

/**
 * E.classList
 * - add()
 * - remove()
 * - toggle()
 * - contains()
 */
el.classList.remove('active')
console.log(el.classList.contains('active'))

el.classList.add('active')
console.log(el.classList.contains('active'))

el.addEventListener('click', () => {
    el.classList.toggle('active')
    console.log(el.classList.contains('active'))
})

/**
 * E.style / Object.assign()
 */
// el.style.width = '100px';
// el.style.backgroundColor = 'green';
Object.assign(el.style, {
    width : '100px',
    fontSize: '20px',
    backgroundColor: 'blue'
});

/**
 * window.getComputedStyle()
 * 요소에 적용된 스타일 객체를 반환
 */
const styles = window.getComputedStyle(el);
console.log(styles.width);

/**
 * E.getAttribute() / E.setAttribute()
 */
el.setAttribute('title', 'Hello World!');
console.log(el.getAttribute('title'));

/**
 * E.hasAttribute() / E.removeAttribute
 */
console.log(el.hasAttribute('class'));
el.removeAttribute('class');
console.log(el.hasAttribute('class'));


















