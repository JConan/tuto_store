import { writable } from "svelte/store";

export interface Reservation {
    sejour?: string;
    nPersonne?: number;
    dates?: {
        arrivee?: Date,
        depart?: Date
    }
}

export let reservation = writable<Reservation>({})

export function addPersonne() {
    reservation.update(value => ({
        ...value,
        nPersonne: (value.nPersonne || 0) + 1
    }))
}

export function removePersonne() {
    reservation.update(value => {
        const currentValue = value.nPersonne || 0;
        return {
            ...value,
            nPersonne: currentValue > 1 ? currentValue - 1 : 1,
        }
    })
}

export function changeSejour(sejour: string) {
    reservation.update(value => {
        let temp: Reservation = {
            ...value,
            sejour
        }

        if (temp.sejour === null) {
            delete temp.sejour;
        }

        return temp
    })
}