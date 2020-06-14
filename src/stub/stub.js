function uniqueid() {
    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const idLength = 8;
    let id = '';
    for (let i = 0; i < idLength; i++) {
        id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return id;
}


export const bougthItems = [
    {
        id: uniqueid(),
        name: 'surfboard',
        storeName: 'Billabong',
        img: 'https://www.circle-one.co.uk/wp-content/uploads/2017/09/Razor-6ft3-matt-blue.jpg',
        price: 400,
        estDeliver: 1607772210000,
        isReceived: false
    },
    {
        id: uniqueid(),
        name: 'wax',
        storeName: 'Billabong',
        img: 'https://surfhouse.co.il/wp-content/uploads/2017/11/sexwax1-760x721.png',
        price: 3,
        estDeliver: 1607772210000,

        isReceived: false

    },
    {
        id: uniqueid(),
        name: 'wetsuit',
        storeName: 'Billabong',
        img: 'https://cdn.watersportsoutlet.com/images/33998-Mystic-Mens-Brand-3mm-Back-Zip-Shorty-Wetsuit-200070---Navy.jpg',
        price: 300,
        estDeliver: 1600428210000,
        isReceived: false

    },
    {
        id: uniqueid(),
        name: 'roller',
        storeName: 'yoga4u',
        img: 'https://bilder.hula-hoop-shop.eu/media/image/product/6390/md/yogarolle-mit-massagenoppen-fitnessrolle-rechteck-fr01.jpg',
        price: 20,
        estDeliver: 1605180210000,
        isReceived: false

    },
    {
        id: uniqueid(),
        name: 'yoga carpet',
        storeName: 'yoga4u',
        img: 'https://berlinbpictureblob.blob.core.windows.net/pictures/0015903_yoga-mat-kurma-sadhana-lite-grip_550.png',
        price: 40,
        estDeliver: 1599996210000,
        isReceived: false

    },
]

export const stores = [
    {
        id: uniqueid(),
        storeName: 'Billabong',
        img: 'https://www.foxgroup.co.il/filestock/img/thumb_1479110774-07.jpg',
        orderdItems: 0
    },
    {
        id: uniqueid(),
        storeName: 'yoga4u',
        img: 'https://toppng.com/uploads/preview/yoga-symbols-yoga-symbol-11562880459o7f1qqvlfs.png',
        orderdItems: 0

    },
]