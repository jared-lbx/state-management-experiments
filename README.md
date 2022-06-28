## Effort

I was fairly familiar with `React.context` before setting this up. It took a
moderate amount of effort to integrate context - it wasn't difficult, but it was
non-trivial.

## Results

[x] - Solve unnecessary re-renders
[x] - Solve prop-drilling

## Scalability

If architected well, this is certainly a scalable solution. `useContext` hooks allow for each component to easily
tap into whichever store's values they need. If the amount of `Providers` becomes unwieldy/-sightly in the root
component, one could easily establish a `ProviderProvider`, which wraps its children with each provider.

See branch `naive_context` for a not-so-scalable version, with contextual prop drilling and forced re-renders.
