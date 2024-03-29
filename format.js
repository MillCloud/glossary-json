const fs = require("fs");
const path = require("path");

const regexp = /^[a-zA-Z0-9\s\+\-]+$/;
const compare = (a, b) => {
  if (regexp.test(a) && regexp.test(b)) {
    return a.localeCompare(b, "en");
  }
  if (regexp.test(a)) {
    return -1;
  }
  if (regexp.test(b)) {
    return 1;
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
            .map(([key, value]) => [
              key.toLocaleLowerCase(),
              Array.isArray(value)
                ? [
                    ...new Set(value.map((item) => item.toLocaleLowerCase())),
                  ].sort(compare)
                : typeof value === "string"
                ? value.split(",")
                : [""],
            ])
        ),
        null,
        2
      );
      fs.writeFileSync(file, newContent, { encoding: "utf-8" });
    });
  console.log("Format succeeded.");
} catch (error) {
  console.error(error);
}
