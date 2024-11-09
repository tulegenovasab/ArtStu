const galleryLamp = document.getElementById('gallery-lamp');
const galleryTop = document.getElementById('gallery-top');
const galleryCommon = document.getElementById('gallery-common');
const galleryBottom = document.getElementById('gallery-bottom');

const toggleSidebarLampButton = document.getElementById('toggle-sidebar-lamp');
const toggleSidebarCeilingButton = document.getElementById('toggle-sidebar-ceiling');
const toggleSidebarWallsButton = document.getElementById('toggle-sidebar-walls');
const toggleSidebarFloorButton = document.getElementById('toggle-sidebar-floor');
const sidebarLamp = document.getElementById('sidebar-lamp');
const sidebarCeiling = document.getElementById('sidebar-ceiling');
const sidebarCommon = document.getElementById('sidebar-common');
const sidebarFloor = document.getElementById('sidebar-floor');
const imageModal = document.getElementById('imageModal');
const submitImage = document.getElementById('submitImage');
const cancelImage = document.getElementById('cancelImage');
const imageUrlInput = document.getElementById('imageUrl');

const addImageLampButton = document.getElementById('add-image-lamp');
const addImageTopButton = document.getElementById('add-image-top');
const addImageCommonButton = document.getElementById('add-image-common');
const addImageBottomButton = document.getElementById('add-image-bottom');

const lampContainer = document.getElementById('lamp-container');
const topContainer = document.getElementById('top-container');
const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');
const bottomContainer = document.getElementById('bottom-container');

let currentGallery = null;

addImageLampButton.addEventListener('click', () => {
    currentGallery = galleryLamp;
    openModal();
});

addImageTopButton.addEventListener('click', () => {
    currentGallery = galleryTop;
    openModal();
});

addImageCommonButton.addEventListener('click', () => {
    currentGallery = galleryCommon;
    openModal();
});

addImageBottomButton.addEventListener('click', () => {
    currentGallery = galleryBottom;
    openModal();
});

function openModal() {
    imageModal.classList.add('open');
}

function closeModal() {
    imageModal.classList.remove('open');
    imageUrlInput.value = '';
}

submitImage.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    if (imageUrl && currentGallery) {
        addImageToGallery(imageUrl, currentGallery);
        closeModal();
    }
});

cancelImage.addEventListener('click', closeModal);

toggleSidebarWallsButton.addEventListener('click', () => {
    sidebarLamp.classList.remove('open'); // Закрыть боковую панель "Лампа"
    sidebarCeiling.classList.remove('open'); // Закрыть боковую панель "Потолок"
    sidebarCommon.classList.toggle('open');
    sidebarFloor.classList.remove('open'); // Закрыть боковую панель "Пол"
});

toggleSidebarLampButton.addEventListener('click', () => {
    sidebarLamp.classList.toggle('open');
    sidebarCeiling.classList.remove('open'); // Закрыть боковую панель "Потолок"
    sidebarCommon.classList.remove('open');// Закрыть боковую панель "Стены"
    sidebarFloor.classList.remove('open'); // Закрыть боковую панель "Пол"
});

toggleSidebarCeilingButton.addEventListener('click', () => {
    sidebarLamp.classList.remove('open'); // Закрыть боковую панель "Лампа"
    sidebarCeiling.classList.toggle('open');
    sidebarCommon.classList.remove('open'); // Закрыть боковую панель "Стены"
    sidebarFloor.classList.remove('open'); // Закрыть боковую панель "Пол"
});

toggleSidebarFloorButton.addEventListener('click', () => {
    sidebarLamp.classList.remove('open'); // Закрыть боковую панель "Лампа"
    sidebarCeiling.classList.remove('open'); // Закрыть боковую панель "Потолок"
    sidebarFloor.classList.toggle('open');
    sidebarCommon.classList.remove('open'); // Закрыть боковую панель "Стены"
});

// Закрытие боковых панелей при клике на пустое пространство
document.body.addEventListener('click', (event) => {
    const isSidebarOrModal = sidebarLamp.contains(event.target) || 
                             sidebarCeiling.contains(event.target) || 
                             sidebarCommon.contains(event.target) || 
                             sidebarFloor.contains(event.target) || 
                             imageModal.contains(event.target) || 
                             event.target.classList.contains('open-sidebar-button');

    if (!isSidebarOrModal) {
        sidebarLamp.classList.remove('open');
        sidebarCeiling.classList.remove('open');
        sidebarCommon.classList.remove('open');
        sidebarFloor.classList.remove('open');
    }
});

function addImageToGallery(imageUrl, gallery) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Uploaded Image';

    img.addEventListener('click', () => {
        if (gallery === galleryCommon) {
            leftContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
            rightContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
        } else if (gallery === galleryBottom) {
            bottomContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
        } else if (gallery === galleryTop) {
            topContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
        } else if (gallery === galleryLamp) {
            lampContainer.innerHTML = `<img src="${imageUrl}" alt="Image">`;
        }
    });

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.appendChild(img);

    const removeButton = document.createElement('span');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', (event) => {
        galleryItem.remove();
        event.stopPropagation(); // Остановить всплытие события, чтобы боковые панели не закрывались
    });

    galleryItem.appendChild(removeButton);
    gallery.appendChild(galleryItem);
}

function addDefaultImagesForLamp() {
    const defaultImagesLamp = [
        'https://static.vecteezy.com/system/resources/previews/038/028/589/non_2x/ai-generated-hanging-lamp-isolated-on-transparent-background-png.png',
        'https://i.ibb.co.com/7tRvzSB/lamp-1.png',
        'https://i.ibb.co.com/7g8BkXF/lamp-2.png',
        'https://i.ibb.co.com/gv0DMdM/lamp-3.png',
        'https://i.ibb.co.com/f2VLVRc/lamp-5.png',
        'https://i.ibb.co.com/cQ415nF/lamp-4.png',
        'https://i.ibb.co.com/C1ybMB5/lamp-6.png',
        'https://i.ibb.co.com/R31d6qv/lamp-7.png',
        'https://i.ibb.co.com/6wqxrYs/lamp-8.png',
        'https://i.ibb.co.com/nwKR4tV/lamp-9.png',
        'https://i.ibb.co.com/d5KG7Z8/lamp-10.png',
        'https://i.ibb.co.com/r0k6SsL/lamp-11.png',
        'https://i.ibb.co.com/NLYwYN9/lamp-13.png',
        'https://i.ibb.co.com/HFF2TLv/lamp-12.png',
        'https://i.ibb.co.com/GvN2KH8/lamp-14.png'
    ];

    defaultImagesLamp.forEach((imageUrl) => {
        addImageToGallery(imageUrl, galleryLamp)
    });
}


function addDefaultImagesForCeiling() {
    const defaultImagesCeiling = [
        'https://cdn.architextures.org/textures/21/07/demountable-ceiling-tile-stack-60ecba3934ac5-1200.jpg',
        'https://i.ibb.co.com/4RPxxGS/ceiling-7.jpg',
        'https://i.ibb.co.com/rkbxgkM/ceiling-6.jpg',
        'https://i.ibb.co.com/xqsdVY4/ceiling-5.jpg',
        'https://i.ibb.co.com/4NKVDD5/ceiling-4.jpg',
        'https://i.ibb.co.com/znScPtN/ceiling-2.jpg',
        'https://i.ibb.co.com/Thssxw2/ceiling-3.jpg',
        'https://i.ibb.co.com/Hr6P9pw/ceiling-1.jpg',
        'https://i.ibb.co.com/rFC4RW9/ceiling-11.jpg',
        'https://i.ibb.co.com/cksfHjR/ceiling-10.jpg',
        'https://i.ibb.co.com/xLNKLwf/ceiling-8.jpg',
        'https://i.ibb.co.com/db1QMXk/ceiling-9.jpg'
    ];

    defaultImagesCeiling.forEach((imageUrl) => {
        addImageToGallery(imageUrl, galleryTop) // Обратите внимание, что здесь используется galleryTop
    });
}


// Добавление изображений по умолчанию для стен
function addDefaultImagesForWalls() {
    const defaultImagesWalls = [
        'https://designer-walls.co.uk/wp-content/uploads/2022/05/faux-brick-wall-panels-manchester-322-mix-1-1.jpg.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLfGvpGV_MBAhZkzGdwflgjNNcLO1LIxRAg&s',
        'https://lh5.googleusercontent.com/proxy/IEMHkfe-psvIJlihfQIPwV9NYcQH5Maa4iMS3rgkiFjy2oe2Q78P832nQYCjZdGNu7bE4h4zAQ6A-1xdhkQjuh-PzJNdUFKUCa1w4epQ8O-vrM59wKVvFg9HGWI1c4GkBLW7O2CYQgxOkczkmJXWtlV2elletNLjlFcEXY9sXIKpl2bK',
        'https://oboi-ma.ru/f/product/1501_1.jpg',
        'https://cdn.stroylandiya.ru/upload/iblock/afa/c4o2kh1ee5dcnq2zergbqr1y1xxzjz70.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrc_-mq2ssVCDFJ8KiOZwLQdLQQSWXFCg2qw&s',
        'https://i.ibb.co.com/gR7T1sn/719-XF20-Ix-DL-AC-UF894-1000-QL80.jpg',
        'https://i.ibb.co.com/k9zS1cy/71y6h-Lx6rs-L-AC-UF894-1000-QL80.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2kHQ1qgm1kfMYRuchbpsL6d_UaoADqY38Q&s',
        'https://i.ibb.co.com/ccDyJ6B/shutterstock-1444974161-1024x683.jpg',
        'https://i.ibb.co.com/nrDv01t/modern-living-room-wall-mockup-with-gray-fabric-sofa-cushions-white-background-1255146-14320.jpg',
        'https://www.parquet-carrelage.com/4621/carrelage-aspect-beton-tech-anthracite-mat-30x60-cm.jpg',
        'https://i.ibb.co.com/q5SNj1B/rainbow-background-desktop-wallpaper-cute-vector-53876-136881.jpg',
        'https://i.ibb.co.com/RDR6w6s/cute-weather-pattern-background-wallpaper-weather-vector-illustration-53876-151188.jpg',
        'https://www.basicinvite.com/media/bi/33103/forest-friends-woodland-wallpaper.jpg?q=1717714147',
        'https://i.ibb.co.com/w7Ry4zs/wall1-4.jpg',
        'https://i.ibb.co.com/Bf3SBFY/wall1-3.jpg',
        'https://i.ibb.co.com/3mSMFF4/wall1-1.jpg',
        'https://i.ibb.co.com/M8wPm4v/wall1-2.jpg',
        'https://i.ibb.co.com/Ldmk5fL/wall1-1.png',
        'https://i.ibb.co.com/HhtTQfw/wall1-8.jpg',
        'https://i.ibb.co.com/JCn0ZyS/wall1-12.jpg',
        'https://i.ibb.co.com/NSwmjqv/wall1-11.jpg',
        'https://i.ibb.co.com/YQqTD1w/wall1-10.jpg',
        'https://i.ibb.co.com/9tXMWpH/wall1-9.jpg',
        'https://i.ibb.co.com/XX8qfq9/wall1-7.jpg',
        'https://i.ibb.co.com/djngTxq/wall1-5.jpg',
        'https://i.ibb.co.com/mbxpzK8/wall1-6.jpg'
    ];

    defaultImagesWalls.forEach((imageUrl) => {
        addImageToGallery(imageUrl, galleryCommon);
    });
}

// Добавление изображений по умолчанию для пола
function addDefaultImagesForFloor() {
    const defaultImagesFloor = [
        'https://i.ibb.co.com/kHP7691/herringbone-harmony-1-5-x-6-striatini-gris-honed.jpg',
        'https://www.kahrs.com/images/swatches/Medium1x1/LTCLRW3010-193.jpg',
        'https://i8.amplience.net/i/flooranddecor/100956861_washington-park-waterproof-rigid-core-luxury-vinyl-plank---foam-pad_display?fmt.jpeg.interlaced=true&fmt=auto&h=440&qlt=85&w=440',
        'https://i.ibb.co.com/JdzHFqB/22329869-8709-41b2-b024-b805c9ae96e5-ac9bdd81c18ae001756ba4349de1b7d3.jpg',
        'https://i.ibb.co.com/3pCQryW/floor-8.jpg',//5
        'https://i.ibb.co.com/L6KqsfJ/floor-7.jpg',
        'https://i.ibb.co.com/xFZ9SD5/floor-6.jpg',
        'https://i.ibb.co.com/cwZxcdG/floor-5.jpg',
        'https://i.ibb.co.com/DQjsZNn/floor-4.jpg',
        'https://i.ibb.co.com/61ZFbxP/floor-3.jpg',//10
        'https://i.ibb.co.com/TR3KPVc/floor-2.jpg',
        'https://i.ibb.co.com/q9bKFLq/floor-1.jpg',
        'https://i.ibb.co.com/vJ6Kmk5/floor-14.jpg',
        'https://i.ibb.co.com/Wp2tmSP/floor-1.png',
        'https://i.ibb.co.com/5L6ky8f/floor-13.jpg',//15
        'https://i.ibb.co.com/tCN8KT8/floor-12.jpg',
        'https://i.ibb.co.com/XLV27DM/floor-11.jpg',
        'https://i.ibb.co.com/HNMhS0C/floor-10.jpg',
        'https://i.ibb.co.com/Lh4D3cQ/floor-9.jpg', 
        'https://adv-parket.ru/f/product/pre_gusto_banoffi_02_.jpg',//20
        'https://www.poli24.ru/upload/iblock/2f7/2f72964115e0c2eb4d5236ab118d2310.jpg',
        'https://euro-standart.by/poly/published/publicdata/USER1121291POLY/attachments/SC/products_pictures/vinilovyy-pol-tarkett-art-vinyl-new-age-serenity-0_thm.jpg',
        'https://na-pol.com/upload/iblock/210/my8wmwj4ujmjh9ecsgsos2y63u785hq9.jpg',
        'https://stroycenter64.ru/f/dew_andaman_2.jpg',
        'https://cdn.pergo.com/-/media/imported%20assets/flooring/a/1/0/v420740286topshotjpg200613/square%20lr.ashx?rev=52f6512b71be4767809529d6b1c2320a&h=1024&type=square%20lr&w=1024&hash=6D6026822051A60A0B7053E51280948E',//25
        'https://holz.ua/media/amida/linking/pol_massiv.jpg',
        'https://images.satu.kz/108478331_w640_h320_shtuchnyj-parket-parquet.jpg',
        'https://grizly.club/uploads/posts/2023-01/1673119017_grizly-club-p-besshovnaya-tekstura-beloi-plitki-1.jpg',
        'https://happyhouse.guru/uploads/posts/2023-03/thumbs/1678135305_happyhouse-guru-p-cherno-belaya-plitka-tekstura-plitka-dizai-64.jpg',
        'https://kartinki.pics/uploads/posts/2021-07/1626714637_3-kartinkin-com-p-temnaya-plitka-tekstura-besshovnaya-krasiv-3.jpg', //30
        'https://i.ibb.co.com/r7L2WMT/1678571893-elles-top-p-belaya-plitka-tekstura-besshovnaya-dizain-20.jpg',
        'https://i.ibb.co.com/Gpsf2LZ/1664443213-1-amiel-club-p-belaya-plitka-na-pol-oboi-1.jpg',
        'https://i.ibb.co.com/V9VBj1h/1666974794-19-celes-club-p-belaya-plitka-tekstura-besshovnaya-oboi-19.jpg',
        'https://i.ibb.co.com/s6vFkJb/kiln-ceramic-chevron-tile-4.png',
        'https://kartinki.pics/uploads/posts/2021-07/thumbs/1626728273_11-kartinkin-com-p-keramogranit-belii-tekstura-besshovnaya-kr-11.jpg',//35
        'https://kalix.club/uploads/posts/2022-12/1671684843_kalix-club-p-plitka-seraya-tekstura-instagram-2.jpg',
        'https://celes.club/uploads/posts/2022-06/1655703382_57-celes-club-p-seraya-plitka-tekstura-krasivo-62.jpg',
        'https://idei.club/raznoe/uploads/posts/2022-11/thumbs/1668728251_idei-club-p-belii-keramogranit-tekstura-dizain-vkontak-59.jpg',
        'https://happyhouse.guru/uploads/posts/2023-03/thumbs/1678029174_happyhouse-guru-p-besshovnaya-tekstura-plitka-cherno-belaya-7.png',
        'https://i.ibb.co.com/Qry3Wvg/1627596190-25-kartinkin-com-p-plitka-svetlaya-tekstura-besshovnaya-krasi-27.jpg', //40
        'https://i.ibb.co.com/CbDJK3G/1677979536-happyhouse-guru-p-plitka-napolnaya-tekstura-besshovnaya-plit-2.jpg',
        'https://i.ibb.co.com/gMDXckW/white-marble-texture-with-natural-pattern-background-design-art-work-1258-84029.png',
        'https://i.ibb.co.com/5cXd1f3/plitka-mutina-mews-chevron-8.png',//
        'https://i.ibb.co.com/tZZkzHW/plitka-mutina-mews-chevron-9.png', //
        'https://happyhouse.guru/uploads/posts/2023-03/1678029240_happyhouse-guru-p-besshovnaya-tekstura-plitka-cherno-belaya-53.jpg',//45
        'https://images.satu.kz/197725986_w600_h600_197725986.jpg',
        'https://mirparketa.kz/wp-content/uploads/2022/11/dn-2018-4.jpg',
        'https://finnfloor.kz/upload/resize_cache/iblock/828/250_250_2/8288dfe22c3364fd4fc2538c7c64fec8.jpg',
        'https://basispro.com.ua/content/images/41/400x400l85nn0/58921269753287.jpeg',
        'https://images.satu.kz/127421167_w300_h300_vinilovyj-pol-art.jpg', //50
        'https://images.satu.kz/130528920_w300_h300_vinilovyj-pol-art.jpg',
        'https://images.satu.kz/128408439_w200_h200_vinilovyj-pol-art.jpg',
        'https://images.satu.kz/127413059_w200_h200_vinilovyj-pol-art.jpg',
        'https://slonparket.ru/media/132/132711.jpg',
        'https://stroydecor.kz/images/photos/medium/shop31817.jpg',//55
        'https://saleparket.ru/upload/iblock/0f6/5jd160y8yicc8t5dw85kin4f4tnur5co.jpg',
        'https://evro-laminat.ru/site_images/goods/original/img_23544.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioqJsFPYkIeaHpNUqf6KCZ3IIoxRPcaPzvtJkuOoRuKdeNVCrjkP5yWYjFJblG8QJSQo&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPQXXyYNihKOI4jhEAw4aPQgv4kINXzA7sQ&s',
        'https://parketsolo.ru/wa-data/public/shop/products/19/58/5819/images/13508/13508.215x215@2x.jpeg',//60
        'https://images.satu.kz/127419040_w600_h600_127419040.jpg',
        'https://polyx.com.ua/image/cache/catalog/image/cache/catalog/Vinilova_plitka/gerflor/creation-30/0347-ballerina-1000x1000.webp',
        'https://mirparketa.kz/wp-content/uploads/2024/09/0F3A8825-P036BH-S-v2.jpg',
        'https://megapoliya.ru/images/cache/product_mobile/data/catalog/alpinefloor/chevron-premium/af7011cvr_board.jpg',
        'https://mirparketa.kz/wp-content/uploads/2023/04/dn1036-4-kopiya.jpg',//65
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4mK_gsGNSQrEYmZZAn_Gc-iFFP7WtTfmPQ&s',
        'https://static.tildacdn.pro/tild3064-6363-4636-a334-646364316437/206612_6376hl.jpg',
        'https://images.satu.kz/127823182_w300_h300_vinilovyj-pol-art.jpg',
        'https://images.satu.kz/122407854_w200_h200_vinilovyj-pol-art.jpg',
        'https://images.prom.ua/4960070591_w600_h600_4960070591.jpg',//70
        'https://simfopol.ru/upload/iblock/364/3642a5f36bcc1ca56cb0986087cdf8c5.jpg',
        'https://www.fastfloors.com/media/catalog/Vinyl_Floors/IVC_Moduleo/Moduleo_Horizon_Plank_Click_4_x_48/Congo_Wood_60136.jpg',
        'https://cdn.stroylandiya.ru/upload/resize_cache/iblock/e11/300_300_1/zoo4x9tagfh1h26o564535dasz7t9p22.jpg',
        'https://images.satu.kz/146082102_w300_h300_kafel--plitka.jpg',
        'https://artkeramika-opt.ru/upload/resize_cache/iblock/585/500_500_2/585a2b0e554eb32052f65b0f3e095cb4.jpg',//75
        'https://domplitok.ru/upload/resize_cache/iblock/d5b/215_215_1/tqwxm9ob1zuxz7ehvm2ljr174ulctgzj.jpg',
        'https://media.3dplitka.ru/CACHE/images/images/tiles/images/articer/modena/mosaico-modena-caramel-lustro-305x305.572de63755a7.jpg',
        'https://santehkeram.ru/image/catalog/products/ceramic_tile/brands/AtlasConcorde_Italy/colllections/Mek/colllections/mozaika_napolnaya_amk0_mek_bronze_mosaico_30x30_atlas_concorde_italy_683.jpg',
        'https://i.ibb.co.com/C0mkqHH/images.jpg',
        'https://i.ibb.co.com/NCgXK7Z/textur-gas-kvas-com-t4vr-p-teksturi-plitka-chernii-mramor-7.jpg',//80
        'https://i.ibb.co.com/92wcTj7/2-Tekstury-M1814-T1804-18-0.jpg',
        'https://i.ibb.co.com/G0Qyn28/1685014032-idei-club-p-shestiugolnaya-plitka-na-pol-dizain-pinter-55.jpg',
        'https://i.ibb.co.com/DpGH9WS/1626265176-11-kartinkin-com-p-plitka-mramor-tekstura-besshovnaya-krasivo-16.jpg',
        'https://i.ibb.co.com/g4XkDfs/1-356.jpg',
        'https://i.ibb.co.com/d4Mc1Zp/belaya-plitka-na-polu.jpg',//85
        'https://plitka.kz/upload/resize_cache/webp/iblock/b9e/450_450_0/gaftz31nczpyyyyz54fdirkkn87nq3dt.webp',//
        'https://artkeramika-opt.ru/upload/resize_cache/iblock/590/600_600_17c9e3d2be090245d7ccba7d673637ac3/5901570c47e311038cf11040aa1c223f.jpg',
        'https://vizaviceramica.ru/upload/iblock/a47/gh9rm0wfm6dcrbaavran7pi270nrozue/65d86eac_0146_11ef_810a_000c29c5f94e_65d86ebf_0146_11ef_810a_000c29c5f94e.jpg',
        'https://technotile.ru/upload/resize_cache/iblock/66a/44sxnspzrj8zu9crli7hp05wtbclwa7f/1000_1000_1/1c6fbb59_0147_11ef_810a_000c29c5f94e_1c6fbb6c_0147_11ef_810a_000c29c5f94e.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yPsvrb6LLiuSlNOiZs6WQL5dLSEgUP6R3mnvZcWpifB7B-BfrvGoWkNXvXA43uHzYKc&usqp=CAU',//90
        'https://img.vini-pol.ru/r/82UFp7eqouM/rs:fit:533:533:1/q:80/plain/images/products/1/679/653533863/NTT9103_01_02.jpg@jpg',
        'https://i.ibb.co.com/jMHLtWF/pav-velvet-geo-negro.jpg',////
        'https://plitkaplus.com.ua/image/catalog/products/ispaniya-bauhaus-labayon-rect-598x598.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4cUYIIe4cYnLmJn169Kdc-QroTVMYS0uXcDYOpoG6WW8idT6eiQl3kHRObRDijGQ9ZA&usqp=CAU',
        'https://i.ibb.co.com/RbjjHcS/oboi-supremo-41005-mof-10051066-vinil-goryachego-tisneniya-na-flizeline.png',//95
        'https://etalonk.com/images/products/1200073490/plitka-8080-stellato-r-multicolor.jpeg',
        'https://i.plitka-sdvk.ru/i/plitka/Arcana/Stracciatella/233237_main.jpg',
        'https://avatars.mds.yandex.net/get-tycoon/13937799/2a0000019165a2d341c9914f8717da41c339/M_height',
        'https://remshop.by/image/cache/catalog/plitka/Graniteya/ZKS_Graniteya_10.04.2023/Karatash/green-black/g388-karatash-green-black_600x600_02-248x248.jpeg',
        'https://keramin.by/sites/default/files/styles/preview_product/public/ode-7p-53947-1-onice-60x60.jpg?itok=cJXqbHiH'//100
    ];

    defaultImagesFloor.forEach((imageUrl) => {
        addImageToGallery(imageUrl, galleryBottom);
    });
}

// Вызов функций для добавления изображений по умолчанию
addDefaultImagesForLamp();
addDefaultImagesForCeiling();
addDefaultImagesForWalls();
addDefaultImagesForFloor();