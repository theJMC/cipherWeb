# CipherWeb
This is a Web Front-end for my [CipherAPI](https://github.com/theJMC/cipherAPI). 

It Runs using NodeJS, and will be dockerised in a future update. 

# Routes:

## `/` Route (Base)

The `/` Route is the main route of the site. It links all of the pages together.

## `/ceasar` Route

The Ceasar Route send you to the Ceasar Page, with the encode and decode data option, the shift, and the plaintext or ciphertext input. It then outputs the Ciphertext or Plaintext respectively

## `/vigenere` Route
### UNFINISHED
The Vigenere route will send to the Vigenere page and encode and decode using the vigenere cipher

## `/api` Route 
It only responds to the path:
`/api/:cipher/:method/:input/:shift`

- Cipher -> The Cipher Method (Ceasar/Vigenere)
- Method -> The Method (Encode/Decode)
- Input -> The Input Text (Ciphertext for Decode, Plaintext for Encode)
- Shift -> The Shift of the Cipher 