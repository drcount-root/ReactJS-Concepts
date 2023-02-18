## Why do we use fragment instead of div in react ?

1. React Fragments is faster and more space-efficient as compared to an extra div. As when we do create a div their is a dom node created for it as well which is not produced for a fragment.

This may not significantly impact a small application but benefits very large applications with very deep or large trees.

Less overall DOM markup (increased render performance and less memory overhead)

2. Increased code readability, As the Fragment component supports a syntactic sugar form <>, it makes code more readable as structured.
