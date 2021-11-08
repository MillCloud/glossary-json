const fs = require("fs");
const path = require("path");

const regexp = /[a-zA-Z0-9]/;
const compare = (a, b) => {
  if (regexp.test(a) || regexp.test(b)) {
    return a - b;
  }
  return a.localeCompare(b, "zh");
};

try {
  fs.readdirSync(path.resolve())
    .filter((item) => item.endsWith(".json"))
    .map((item) => path.resolve(item))
    .forEach((file) => {
      const content = fs.readFileSync(file, { encoding: "utf-8" });
      const newContent = JSON.stringify(
        Object.fromEntries(
          Object.entries(JSON.parse(content))
            .sort((entryA, entryB) => compare(entryA[0], entryB[0]))
            .map(([key, value]) => [key, value.sort(compare)])
        ),
        null,
        2
      );
      fs.writeFileSync(file, newContent, { encoding: "utf-8" });
    });
  console.log("Success.");
} catch (error) {
  console.error("Error: ", error?.message ?? error);
}
