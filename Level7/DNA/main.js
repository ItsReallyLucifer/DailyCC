// create a function - DNAStrand that takes a DNA strand represented as a string 
//and returns its complementary DNA strand by replacing each nucleotide
// with its complement (A with T, T with A, C with G, and G with C).



function DNAStrand(dna) {
    let complement = "";
    
    for (let i = 0; i < dna.length; i++) {
      const currentChar = dna[i];
      
      // Replace each character with its complement
      switch (currentChar) {
        case 'A':
          complement += 'T';
          break;
        case 'T':
          complement += 'A';
          break;
        case 'C':
          complement += 'G';
          break;
        case 'G':
          complement += 'C';
          break;
        default:
          // Handle unexpected characters, if needed
          break;
      }
    }
    
    return complement;
  }
  
  // Test cases
  console.log(DNAStrand("ATTGC")); // Output: "TAACG"
  console.log(DNAStrand("GTAT")); // Output: "CATA"