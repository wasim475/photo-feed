const photos = [
    {
        id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
        title: "Whispering Waves of Nature",
        url: "https://source.unsplash.com/ztpUS4N1xhY",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=53",
            name: "Alex B",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
        title: "Serenity of the Flowing River",
        url: "https://source.unsplash.com/mPFSPqZOO7s",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=54",
            name: "Brian Xelo",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "8265198d-e2e1-4221-addc-8244f39fdd62",
        title: "Mystic Reflections in Water",
        url: "https://source.unsplash.com/uPEnxrdSKIw",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=55",
            name: "Ceza Des",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
        title: "Golden Sunset by the Bay",
        url: "https://source.unsplash.com/hFKZ5-OT9Ys",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=56",
            name: "Karim Bulletin",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 120
    },
    {
        id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
        title: "The White Warmth",
        url: "https://source.unsplash.com/xoTt2fjs7d0",
        tags: ["nature", "flower", "green"],
        views: "6M",
        share: "2.56M",
        uploaded: "2025-04-01",
        author: {
            avatar: "https://i.pravatar.cc/150?img=57",
            name: "Madan PA",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 120
        },
        likes: 80
    },
    {
        id: "6bea51c4-1123-425f-90c9-9148724872e5",
        title: "Emerald Reflections in Nature",
        url: "https://source.unsplash.com/Vc2dD4l57og",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2023-01-07",
        author: {
            avatar: "https://i.pravatar.cc/150?img=58",
            name: "Moina Lam",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    }
];

const getAllPhotos = () => {
    return photos;
};

const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
};

export {
    getAllPhotos,
    getPhotoById
};
