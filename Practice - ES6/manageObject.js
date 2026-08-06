/**
 * Function Name Must be: manageInventoryObject
একটি Warehouse System Object-ভিত্তিক Product Stock Manage করে। Action Parameter অনুযায়ী keys/values/entries বের করে, Property Delete করে, অথবা Object Seal/Freeze করে।
 */

const manageInventoryObject = (obj, action) => {
    if (obj === null ||
    typeof obj !== "object" ||
    action === undefined ||
    action === null) {
        return "Invalid"
    }

    if (action === "keys") {
        return Object.keys(obj);
    } else if (action === "values") {
        return Object.values(obj);
    } else if (action === "entries") {
        return Object.entries(obj);
    } else if (action.startsWith("delete:")) {
        const propName = action.split(":")[1]; // by 1 accessing the key with index = 1

        const newObj = { ...obj };
        delete newObj[propName];

        return newObj;
    } else if (action === "seal") {
        return Object.seal(obj);
    } else if (action === "freeze") {
        return Object.freeze(obj);
    } else {
        return "Invalid";
    }
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"))

console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"))

console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"))

console.log(manageInventoryObject({a:1}, "shrink"))