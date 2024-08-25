import { getMetadata } from "../../scripts/aem.js";

export default async function decorate(block) {
  [...block.children].forEach((row) => {
    console.log("rooo", row);
    [...row.children].forEach((child) => {
      [...child.children].forEach((subChild) => {
        [...subChild.children].forEach((anchor) => {
          anchor.target = "_blank"
        });
      });
    });
  });
}
