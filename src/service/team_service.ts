import { TeamResponse } from "./models.team_response.interface";

// export const findAll = async (): Promise<Items> => {
//   return items;
// };
//
// export const find = async (id: number): Promise<Item> => {
//   const record: Item = items[id];
//
//   if (record) {
//     return record;
//   }
//
//   throw new Error("No record found");
// };
//
// export const create = async (newItem: Item): Promise<void> => {
//   const id = new Date().valueOf();
//   items[id] = {
//     ...newItem,
//     id
//   };
// };
//
// export const update = async (updatedItem: Item): Promise<void> => {
//   if (items[updatedItem.id]) {
//     items[updatedItem.id] = updatedItem;
//     return;
//   }
//
//   throw new Error("No record found to update");
// };
//
// export const remove = async (id: number): Promise<void> => {
//   const record: Item = items[id];
//
//   if (record) {
//     delete items[id];
//     return;
//   }
//
//   throw new Error("No record found to delete");
// };
