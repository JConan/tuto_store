import { writable } from "svelte/store";

type Page = 'home' | 'reservation' | 'counter'

export let page = writable('home')

export function goto(nextPage: Page) {
    page.set(nextPage)
}