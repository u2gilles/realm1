const beginDate: Date = new Date();

const co = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
  // Background
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  bgGray: "\x1b[100m",
  // Reset
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
};

export function ts(): string {
  let s = `> ${(new Date().getTime() - beginDate.getTime()) / 1000}`;
  if (s.length < 10) {
    s = s + " ".repeat(10 - s.length);
  }
  return s;
}

export function tr(data: any, color = "", addNewLine = false): void {
  if (addNewLine) {
    console.log();
  }
  if (!color) {
    if (JSON.stringify(data).includes("[]")) {
      color = "white";
    } else if (JSON.stringify(data).includes("()")) {
      color = "green";
    } else if (JSON.stringify(data).includes("{}")) {
      color = "magenta";
    }
  }

  if (data === "App" || data === "1") {
    console.log();
    console.log(`${ts()}: ${co["red"]}===> New App Rendering${co["reset"]}`);
  } else {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    console.log(`${ts()}: ${co[color]}${data}`);
  }
}
