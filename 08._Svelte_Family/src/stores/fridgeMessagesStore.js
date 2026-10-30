import { writable } from "svelte/store";

function fridgeMessagesCustomStore() {
    const prompt = [
        { name: "", message: "Write your message below" }
    ];

    const { subscribe, set, update } = writable([...prompt]);

    return {
        subscribe,
        set,
        update,
        wipe: () => set([...prompt])
    }
}

export const fridgeMessages = fridgeMessagesCustomStore();

/* export const fridgeMessages = writable([
    { name: "", message: "Write your message below" }
]);
 */