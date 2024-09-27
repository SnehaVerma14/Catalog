// Lagrange Interpolation Function
function lagrangeInterpolation(points) {
    let c = 0; // This will store the constant term of the polynomial
    const k = points.length;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        // Compute the Lagrange basis polynomial l_i(0)
        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                li *= (0 - xj) / (xi - xj);
            }
        }

        // Add the contribution of y_i * l_i(0) to the constant term c
        c += yi * li;
    }

    return c;
}

// Helper function to decode values
function decodeValue(base, valueStr) {
    return parseInt(valueStr, base);
}

// Main function to process the input
function findSecret(testCase) {
    const points = [];
    
    const { n, k } = testCase.keys;

    // Extract the (x, y) pairs and decode them
    for (let key in testCase) {
        if (key !== 'keys') {
            const x = parseInt(key); // x is just the key of the object
            const { base, value } = testCase[key];
            const y = decodeValue(parseInt(base), value); // Decode the y value based on the base
            points.push({ x, y });
        }
    }

    // We need to take the first k points for the interpolation
    const selectedPoints = points.slice(0, k);
    
    // Use Lagrange interpolation to find the constant term c
    const c = lagrangeInterpolation(selectedPoints);
    
    return c;
}

// Test case 1
const testCase1 = {
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
};

// Test case 2
const testCase2 = {
    
        "keys": {
            "n": 9,
            "k": 6
        },
        "1": {
            "base": "10",
            "value": "28735619723837"
        },
        "2": {
            "base": "16",
            "value": "1A228867F0CA"
        },
        "3": {
            "base": "12",
            "value": "32811A4AA0B7B"
        },
        "4": {
            "base": "11",
            "value": "917978721331A"
        },
        "5": {
            "base": "16",
            "value": "1A22886782E1"
        },
        "6": {
            "base": "10",
            "value": "28735619654702"
        },
        "7": {
            "base": "14",
            "value": "71AB5070CC4B"
        },
        "8": {
            "base": "9",
            "value": "122662581541670"
        },
        "9": {
            "base": "8",
            "value": "642121030037605"
        }
    
    
};

// Run the algorithm for both test cases
const secret1 = findSecret(testCase1);
console.log("Secret (c) for Test Case 1:", secret1);

const secret2 = findSecret(testCase2);
console.log("Secret (c) for Test Case 2:", secret2);
