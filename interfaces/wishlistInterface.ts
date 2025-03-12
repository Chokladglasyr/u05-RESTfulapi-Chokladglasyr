export interface Wishlist {
    id: number,
    description: string
}

export interface List extends Wishlist {
    userId: number,
    title: string,
}

export interface List_item extends Wishlist {
    listId: number,
    link: string,
    photo?: string,
    price?: number
}

