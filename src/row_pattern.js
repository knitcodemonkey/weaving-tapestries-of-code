const row_pattern = (
  preface,
  preface_length,
  repeat,
  repeat_length,
  suffix,
  suffix_length,
  stitches_per_row
) => {
  let stitches = [preface];

  for (
    let stitch = preface_length - 1;
    stitch < stitches_per_row - suffix_length;
    stitch + repeat_length
  ) {
    stitches.push(repeat);
  }

  stitches.push(suffix);

  return stitches.join(", ");
};

export default row_pattern;
