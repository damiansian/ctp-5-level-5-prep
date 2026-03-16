# Quantitative Reasoning Batch 001-010 Plan

## Goal

Use Questions 1-10 to establish the comparison-question workflow in the app.

## Recommended Split

### Likely ready for direct import

- `1` custom operation comparison
- `2` variable-expression comparison
- `4` grain/chicks rate comparison
- `5` largest-number comparison
- `7` leftovers comparison
- `9` zeros in scientific notation comparison
- `10` triangle base/height comparison

### Likely needs figure-aware handling

- `3` triangle-count comparison between two figures
- `6` perimeter comparison with labeled figures
- `8` number-line distance comparison

## Practical Recommendation

1. Import the text-first comparison items first.
2. Add the figure-dependent comparison items once we decide whether to use:
   - local SVG assets
   - lightweight HTML diagrams
   - temporary text descriptions

## Key Design Constraint

These should preserve the paper answer meanings:

- `A`: Box A is greater than Box B
- `B`: Box B is greater than Box A
- `C`: Box A and Box B are equal
- `D`: Not enough information

The choices should not be rewritten as unrelated generic multiple-choice labels. The comparison format is itself part of the skill being tested.
