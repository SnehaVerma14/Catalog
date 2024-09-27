# Shamir's Secret Sharing Algorithm Using Lagrange Interpolation

## Overview

This project implements a simplified version of Shamir's Secret Sharing algorithm utilizing Lagrange interpolation to reconstruct a polynomial and find its constant term. The constant term represents the secret in Shamir's Secret Sharing scheme.

## Algorithm Explanation

### 1. **Polynomial Representation**

A polynomial of degree \( m \) can be expressed as:

\[ 
f(x) = a_m x^m + a_{m-1} x^{m-1} + \ldots + a_1 x + c 
\]

Where:
- \( f(x) \) is the polynomial function.
- \( m \) is the degree of the polynomial.
- \( a_m, a_{m-1}, \ldots, a_1, c \) are the coefficients.
- \( c \) is the constant term we aim to find.

### 2. **Lagrange Interpolation Method**

To reconstruct a polynomial from a given set of points (roots), Lagrange interpolation is employed. The main steps are as follows:

#### **Step 1: Input Points**

The algorithm requires \( k = m + 1 \) points in the form of \( (x, y) \), where \( x \) is the key and \( y \) is an encoded value decoded from a given base.

#### **Step 2: Decode Values**

Values are decoded from their respective bases using:
```javascript
function decodeValue(base, valueStr) {
    return parseInt(valueStr, base);
}
