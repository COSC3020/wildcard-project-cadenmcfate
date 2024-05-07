[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

## Outline:
This program pertains to MATH 3500 Algebra I.  

From Algebra in Action by Shahriar Shahriari, a Group is defined as the following:  
Let G be a non-empty set. Let * be a binary operation on G. Then G and * form a group if the following hold:  
(a) If $a$ and $b$ are arbitrary elements of G, then so is $a * b$ (closure of the product).  
(b) $\forall a,b,c \in G$, we have $a*(b*c) = (a * b)*c$ (associativity of the product).  
(c) Among the elements of G, there exists an element $e$ with the property that $\forall a \in G$, $a * e = e * a = a$ (existence of identity).  
(d) For every element $a \in G$, there exists and element, denoted by $a^{-1}$ such that $a * a^{-1} = e = a^{-1}*a$ (existence of inverses).


Example: The set of integers and addition is a group.
  - Closed under addition.  
  - Associative.  
  - The identity is 0.  
  - The inverse of any integer $x$ is $-x$.  

Definition: $\mathbb{Z} /n \mathbb{Z} = $\{0,1,2,...,(n-1)\}.  

Example: $\mathbb{Z} / 5 \mathbb{Z}$ is a group under 'addition mod $5$'.  
Example of modular addition in $\mathbb{Z} / 5 \mathbb{Z}$: 2+4 = 6 = 1. Simply take the remainder when divided by $n$.  
  - Closed under addition mod $5$; we must have a remainder between 0 and $n$ when dividing by $n$.  
  - Associative.  
  - The identity is 0.  
  - The inverse of any element $x$ is $n-x$.

Example: {1,3,5,7} is a group under multiplication mod $8$.  
  - Closed under multiplication mod $8$; Since these are all the elements that are coprime with 8 in [0,7], when multiplied mod 8 they will have a coprime remainder also in [0,7].  
  - Associative.  
  - The identity is 1.  
  - The inverse of any element $x$ is the element that multiplies with $x$ to equal 1 mod 8. E.g., the inverse of 3 is 3.  

For our purposes, we will be working with modular operations to avoid infinite sets. I.e., valid inputs will involve a set of integers, an integer for the modulo boundary, and the operation.

Example: isGroup([0,1,2,3,4], 5, '+') will return 1 if [0,1,2,3,4] is a group under addition mod 5. (this was shown to be true in the second example).
Example: isGroup([1,3,4,5,7], 8, '*') will return 1 if [1,3,4,5,7] is a group under multiplication mod 8. This will return 0 since 4 is not coprime with 8. In particular, 4 * 4 = 16 = 0, which is not an element of the set. 

As you can start to tell, this isn't a complex algorithm to impliment. However, the code will be written with expansion in mind. Eventually, the goal is to create a fleshed out 'Group Calculator' that can accept all kinds of inputs (generators for infinite sets, 'string-based' groups like $D_8$, symmetric groups, etc.), and return all kinds of outputs (what groups are isomorphic to your group, what are the subgroups of your group, what are the orbits of the elements, etc.). But, to start, we will just focus on modular groups and impliment a solid basis for group validation.

