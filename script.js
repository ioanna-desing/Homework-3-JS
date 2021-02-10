// - Створити масив автівок з полями id , model, producer ,tankVolume, horsePower, image. 15 об'єктів.
// Вивести увесь масив в документ застилізувавши його по 2 елементи в ряд


let arrayCars = [
    { 
      model : 'Mercedes A-Class (W177) 220d',
      producer :'Mercedes-Benz',
      tankVolume : 43,
      horsePower : 190 , 
      img : "https://sales.mercedes-mb-belyaevo.ru/upload/img/2018/10/27/5bd4828a5ca20_650-0.jpeg",
    },

    { 
        model : 'Suzuki Jimny 1.5i (102 л.с.) 4-авт 4x4',
        producer : 'Suzuki',
        tankVolume : 40,
        horsePower : 102, 
        img : "https://i.rst.ua/new/suzuki/suzuki_jimny/151-0.jpg",

    },

    {
        model : 'Subaru Forester 2.5i-S AT FR',
        producer : 'Subaru',
        tankVolume : 63,
        horsePower : 184, 
        img : "https://avtotachki.com/wp-content/uploads/2020/07/timthumb-300x237.jpg",

    },

    {
        model : 'Toyota Land Cruiser 200 4.5D AT PREMIUM 4WD',
        producer : 'Toyota',
        tankVolume : 93,
        horsePower : 249, 
        img : "https://avatars.mds.yandex.net/get-autoru-vos/1981977/230237ff24a2e92ef91fba5370b7ad26/456x342",
    },

    {
        model : 'Nissan Patrol 5.6i (428 л.с.) 7-авт 4x4',
        producer : 'Nissan',
        tankVolume :100,
        horsePower : 428,
        img : "https://avtotachki.com/wp-content/uploads/2020/05/nissan-patrol-5-6i-400-l-s-7-akp-4x4-1.jpg",
    },

    {
        model : 'Mitsubishi L200 2.4 DI-D (181 л.с.) 6-АКП INVECS II 4x4',
        producer : 'Mitsubishi',
        tankVolume :75,
        horsePower :181,
        img : "https://i.infocar.ua/img/models/5921.jpg",
    },

    {
        model : 'Opel Combo Life 1.5 BlueHDi (102 л.с.) 5-мех',
        producer : 'Opel',
        tankVolume :60,
        horsePower :102,
        img :"https://cdn.drivek.it/configurator-covermobile/cars/de/500/OPEL/COMBO/32350_KOMPAKTVAN-5-TURER/opel-combo-life-2018-mobile-cover.jpg",
    },

    {
        model : 'Volvo XC90 2.0 B5 (235 л.с.) 8-АКП Geartronic 4x4',
        producer :'Volvo',
        tankVolume :71,
        horsePower :235,
        img : "https://avtotachki.com/wp-content/uploads/2020/05/acura-mdx-2016-1.jpg",
    },

    {
        model :'Lamborghini Huracan LP 610-4 Spyder 5.2 AT',
        producer : 'Lamborghini',
        tankVolume :80,
        horsePower :610,
        img : "https://avtotachki.com/wp-content/uploads/2020/05/lamborghini-huracan-lp640-4-performante-2018-1.jpg",
    },

    {
        model :'Porsche 718 Spyder 4.0i (420 л.с.) 6-мех',
        producer : 'Porsche',
        tankVolume :64,
        horsePower :420,
        img : "https://avtotachki.com/wp-content/uploads/2020/05/porsche-718-spyder-4-0i-420-l-s-6-meh-1.png",
    },

    {
        model : 'Citroen C3 Aircross 1.6 Hdi 5MT FEEL (92)',
        producer :'Citroen',
        tankVolume :45,
        horsePower :92,
        img :"https://avtotachki.com/wp-content/uploads/2020/05/citroen-c3-aircross-2017-1.jpg",
    },

    {
        model : 'Daewoo Lanos Hatchback 1.5i MT (TF48Y1-29)',
        producer :'Daewoo',
        tankVolume :48,
        horsePower :86,
        img : "https://i.infocar.ua/img/models/154.jpg",
    },
    
    {
        model : 'Chevrolet Corvette Convertible 6.2 MT',
        producer :'Chevrolet',
        tankVolume :70,
        horsePower :466,
        img : "https://avtotachki.com/wp-content/uploads/2020/05/chevrolet-corvette-convertible-2013-1.jpg",
    },

    {
        model : 'Honda Pilot 3.0 AT Premium AWD',
        producer :'Honda',
        tankVolume : 74,
        horsePower :249,
        img: "https://i.infocar.ua/img/models/4573.jpg",
    },

    {
        model : 'BMW X6 (G06) M50i',
        producer : 'BMW',
        tankVolume :80,
        horsePower :530,
        img : "https://i.infocar.ua/img/models/5921.jpg",
    }

  
]
      for (let i = 0;i< arrayCars.length; i++){
         document.write (`
             <div class = "arrayCars">
             <h1>${arrayCars[i].model}</h1>
             <h2>${arrayCars[i].producer} - tankVolume: ${arrayCars[i].tankVolume}; horsePower:${arrayCars[i].horsePower}</h2>
             <img src ="${arrayCars[i].img}" alt="${arrayCars[i].model}">
             </div>
         `)
     }