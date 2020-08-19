const enhancer = require("./enhancer.js");



const item = {
  name: "Shovel",
  durability: 0,
  enhancement: 0,
};
const secondItem = {
    name: "Shovel",
    durability: 0,
    enhancement: 20,
  };

// test away!
describe("Repair Function", () => {
  const newItem = {
    name: "Shovel",
    durability: 100,
    enhancement: 0,
  };

  it("Checks to see that an items durability was restored to 100", () => {
    expect(enhancer.repair(item)).toEqual(newItem);
  });

  it("validates new object", () => {
    expect(enhancer.repair(item)).toBeTruthy();
    expect(enhancer.repair(item).durability).toBeTruthy();
  });
})

describe("Success Function", () => {
    const newItem2 = {
        name: "Shovel",
        durability: 0,
        enhancement: 1,
      };

      const newItem3 = {
        name: "Shovel",
        durability: 0,
        enhancement: 20,
      };


    it("Validates that an item's enhancement increases by 1", () => {
        expect(enhancer.success(item)).toEqual(newItem2)
        expect(enhancer.success(secondItem)).toEqual(newItem3)
    })
})

describe("Enhancement Fail Function", () => {
    it("Validates that if an items enhancement lvl is less than 15, the durability of the item gets decreased by 5", () => {
        const testItem = {
            name: "Shovel",
        durability: 20,
        enhancement: 14,
        }

        const expectedItem = {
            name: "Shovel",
        durability: 15,
        enhancement: 14,
        }
        expect(enhancer.fail(testItem).durability).toEqual(expectedItem.durability)
    })

    it("Validates that if an items enhancement lvl is equal to or greater than 15, the durability of the item gets decreased by 10", () => {
        const testItem = {
            name: "Shovel",
        durability: 20,
        enhancement: 15,
        }

        const expectedItem = {
            name: "Shovel",
        durability: 10,
        enhancement: 15,
        }
        expect(enhancer.fail(testItem).durability).toEqual(expectedItem.durability)
    })

    it("Validates that if an items enhancement lvl is  greater than 16, enhancement lvl of the item gets decreased by 1", () => {
        const testItem = {
            name: "Shovel",
        durability: 20,
        enhancement: 18,
        }

        const expectedItem = {
            name: "Shovel",
        durability: 10,
        enhancement: 17,
        }
        expect(enhancer.fail(testItem).durability).toEqual(expectedItem.durability)
    })

    
})

describe("GET Function", () => {
    it("Validates that if an item's enhancement lvl is 0 then the name isn't modified", () => {
        const testItem = {
            name: "Shovel",
        durability: 20,
        enhancement: 0,
        }

        const expectedItem = {
            name: "Shovel",
        durability: 10,
        enhancement: 0,
        }
        expect(enhancer.get(testItem).name).toEqual(expectedItem.name)
    })

    it("Validates that if an item's enhancement lvl is greater than 0, the items name will be changed to include the enhancement lvl", () => {
        const testItem = {
            name: "Shovel",
        durability: 20,
        enhancement: 10,
        }

        const expectedItem = {
            name: "[+10] Shovel",
        durability: 20,
        enhancement: 10,
        }
        expect(enhancer.get(testItem).name).toEqual(expectedItem.name)
    })
})
