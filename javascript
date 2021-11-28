
// https://stackoverflow.com/a/16964329
function wrapAround(x, m) {
    return (x%m + m)%m;
}

// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/clampNumber.md
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
