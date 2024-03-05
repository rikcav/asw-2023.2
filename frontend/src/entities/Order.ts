export interface Order {
    id: number;
    user_id: number;
    item_id: number;
    quantity: number;
    total: number;
    createdAt: string;
    updatedAt: string;
}