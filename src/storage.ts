import { writable } from "svelte/store";

export const FeedbackStorage = writable([
    {
        id: 1,
        rating: 8,
        review: "Idk its kinda cool to me",
    },
    {
        id: 2,
        rating: 9,
        review: "lgtm, ngl bro this is fire fr",
    },
])