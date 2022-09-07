const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let content = document.querySelector('.row')
let menu_items = null
let item_photo = null
let menu_info = null
let menu_title = null
let title = null
let price = null
let menu_text = null
let row = null

const btnContainer = document.querySelector('.btn-container')
const btnAll = document.createElement('button')
const btnKorea = document.createElement('button')
const btnJapan = document.createElement('button')
const btnChina = document.createElement('button')

btnContainer.append(btnAll, btnKorea, btnJapan, btnChina)

const children = btnContainer.children
Array.from(children).forEach(btn => {
  btn.classList.add('btn', 'btn-outline-dark', 'btn-item')
})

btnAll.innerText = 'All'
btnKorea.innerText = 'Korea'
btnJapan.innerText = 'Japan'
btnChina.innerText = 'China'

const KOREA = menu.filter(item => item.category == 'Korea').map(item => {
  return {
    title: item.title,
    category: item.category,
    price: item.price,
    img: item.img,
    desc: item.desc
  }
});

const JAPAN = menu.filter(item => item.category == 'Japan').map(item => {
  return {
    title: item.title,
    category: item.category,
    price: item.price,
    img: item.img,
    desc: item.desc
  }
});

const CHINA = menu.filter(item => item.category == 'China').map(item => {
  return {
    title: item.title,
    category: item.category,
    price: item.price,
    img: item.img,
    desc: item.desc
  }
});

let allItems = menu.map(({ img, title, price, desc }) => ({ img, title, price, desc }))

window.addEventListener('DOMContentLoaded', function () {
  for (let item = 0; item < allItems.length; item++) {
    menu_items = document.createElement('div')
    item_photo = document.createElement('img')
    menu_info = document.createElement('div')
    menu_title = document.createElement('div')
    title = document.createElement('h4')
    price = document.createElement('h4')
    menu_text = document.createElement('div')
    row = document.querySelector('.row').append(menu_items)
    menu_items.classList.add('col-lg-6', 'col-sm-12', 'menu-items')
    menu_info.classList.add('menu-info')
    menu_title.classList.add('menu-title')
    menu_text.classList.add('menu-text')
    item_photo.classList.add('photo')
    menu_title.append(title)
    menu_title.append(price)
    menu_info.append(menu_title)
    menu_info.append(menu_text)
    menu_items.append(item_photo)
    menu_items.append(menu_info)

    item_photo.setAttribute('src', allItems[item].img)
    title.innerText = allItems[item].title
    price.innerText = allItems[item].price
    menu_text.innerText = allItems[item].desc
  }
})

btnAll.addEventListener('click', function () {
  content.innerHTML = "";
  for (let item = 0; item < allItems.length; item++) {
    menu_items = document.createElement('div')
    item_photo = document.createElement('img')
    menu_info = document.createElement('div')
    menu_title = document.createElement('div')
    title = document.createElement('h4')
    price = document.createElement('h4')
    menu_text = document.createElement('div')
    row = document.querySelector('.row').append(menu_items)
    menu_items.classList.add('col-lg-6', 'col-sm-12', 'menu-items')
    menu_info.classList.add('menu-info')
    menu_title.classList.add('menu-title')
    menu_text.classList.add('menu-text')
    item_photo.classList.add('photo')
    menu_title.append(title)
    menu_title.append(price)
    menu_info.append(menu_title)
    menu_info.append(menu_text)
    menu_items.append(item_photo)
    menu_items.append(menu_info)

    item_photo.setAttribute('src', allItems[item].img)
    title.innerText = allItems[item].title
    price.innerText = allItems[item].price
    menu_text.innerText = allItems[item].desc
  }
})


let koreaItems = menu
  .filter(i => i.category == 'Korea')
  .map(({ img, title, price, desc }) => ({ img, title, price, desc }))

btnKorea.addEventListener('click', function () {
  content.innerHTML = "";
  for (let item = 0; item < koreaItems.length; item++) {
    menu_items = document.createElement('div')
    item_photo = document.createElement('img')
    menu_info = document.createElement('div')
    menu_title = document.createElement('div')
    title = document.createElement('h4')
    price = document.createElement('h4')
    menu_text = document.createElement('div')
    row = document.querySelector('.row').append(menu_items)

    menu_items.classList.add('col-lg-6', 'col-sm-12', 'menu-items')
    menu_info.classList.add('menu-info')
    menu_title.classList.add('menu-title')
    menu_text.classList.add('menu-text')
    item_photo.classList.add('photo')

    menu_title.append(title)
    menu_title.append(price)
    menu_info.append(menu_title)
    menu_info.append(menu_text)
    menu_items.append(item_photo)
    menu_items.append(menu_info)

    item_photo.setAttribute('src', koreaItems[item].img)
    title.innerText = koreaItems[item].title
    price.innerText = koreaItems[item].price
    menu_text.innerText = koreaItems[item].desc
  }
})

let japanItems = menu
  .filter(i => i.category == 'Japan')
  .map(({ img, title, price, desc }) => ({ img, title, price, desc }))

btnJapan.addEventListener('click', function () {
  content.innerHTML = "";
  for (let item = 0; item < japanItems.length; item++) {
    menu_items = document.createElement('div')
    item_photo = document.createElement('img')
    menu_info = document.createElement('div')
    menu_title = document.createElement('div')
    title = document.createElement('h4')
    price = document.createElement('h4')
    menu_text = document.createElement('div')
    row = document.querySelector('.row').append(menu_items)

    menu_items.classList.add('col-lg-6', 'col-sm-12', 'menu-items')
    menu_info.classList.add('menu-info')
    menu_title.classList.add('menu-title')
    menu_text.classList.add('menu-text')
    item_photo.classList.add('photo')

    menu_title.append(title)
    menu_title.append(price)
    menu_info.append(menu_title)
    menu_info.append(menu_text)
    menu_items.append(item_photo)
    menu_items.append(menu_info)

    item_photo.setAttribute('src', japanItems[item].img)
    title.innerText = japanItems[item].title
    price.innerText = japanItems[item].price
    menu_text.innerText = japanItems[item].desc
  }
})

let chinaItems = menu
  .filter(i => i.category == 'China')
  .map(({ img, title, price, desc }) => ({ img, title, price, desc }))

btnChina.addEventListener('click', function () {
  content.innerHTML = "";
  for (let item = 0; item < chinaItems.length; item++) {
    menu_items = document.createElement('div')
    item_photo = document.createElement('img')
    menu_info = document.createElement('div')
    menu_title = document.createElement('div')
    title = document.createElement('h4')
    price = document.createElement('h4')
    menu_text = document.createElement('div')
    row = document.querySelector('.row').append(menu_items)

    menu_items.classList.add('col-lg-6', 'col-sm-12', 'menu-items')
    menu_info.classList.add('menu-info')
    menu_title.classList.add('menu-title')
    menu_text.classList.add('menu-text')
    item_photo.classList.add('photo')

    menu_title.append(title)
    menu_title.append(price)
    menu_info.append(menu_title)
    menu_info.append(menu_text)
    menu_items.append(item_photo)
    menu_items.append(menu_info)

    item_photo.setAttribute('src', chinaItems[item].img)
    title.innerText = chinaItems[item].title
    price.innerText = chinaItems[item].price
    menu_text.innerText = chinaItems[item].desc
  }
})