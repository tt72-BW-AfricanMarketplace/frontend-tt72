import { schema } from "normalizr";

export const productEntity = new schema.Entity("products");

export const urlSchema = new schema.Entity("urls");
// export const doggyEntity = new schema.Entity("dogs", { "urls": urlSchema });
export const doggyEntity = new schema.Entity("dogs", urlSchema);
// export const doggyEntity = new schema.Entity("dogs", { urls: [url] });
// export const doggyEntity = new schema.Entity("dogs", { urls: [url] });
// export const listUrl = [url];
// export const doggyEntity = new schema.Entity("dogs", { images: listUrl })
// export const doggyEntity = new schema.Entity("dogs")


// const doggyEntity2 = new schema.Entity("dogs", {
// 	urls: [url],
// });

