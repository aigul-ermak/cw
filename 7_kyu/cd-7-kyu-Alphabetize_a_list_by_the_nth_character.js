/*

https://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/javascript

 */

const sortIt = (list, n) =>
    list
        .split(', ')
        .sort((a, b) => {
            const charCodeA = a.toLowerCase().charCodeAt(n - 1)
            const charCodeB = b.toLowerCase().charCodeAt(n - 1)

            return charCodeA === charCodeB
                ? a.localeCompare(b)
                : charCodeA - charCodeB
        })
        .join(', ')





