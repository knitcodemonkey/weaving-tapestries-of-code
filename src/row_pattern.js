const row_pattern = (props) => {
  const {
    preface,
    preface_length,
    repeat,
    repeat_length,
    suffix,
    suffix_length,
    stitches_per_row
  } = props
  if (stitches_per_row < 0) {
    return "Please review your calculations and try again";
  }
  let row = [];

  if (preface_length > 0) {
    console.log(preface)
    row.push(preface)
  }

  if (repeat_length > 0) {
    for (let stitch = preface_length - 1; stitch < (stitches_per_row - suffix_length); stitch += repeat_length) {
      row.push(repeat);
    }

  }

  if (suffix_length > 0) {

    row.push(suffix);
  }
  console.log(row)
  return row.join(", ");


};

export default row_pattern;
