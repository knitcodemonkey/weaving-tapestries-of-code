import row_pattern from "../row_pattern";

const Diamond_Brocade_Stitch = stitches_per_row => {
  const row1 = row_pattern({
    preface: "Knit 4",
    preface_length: 4,
    repeat: "Purl 1, Knit 7",
    repeat_length: 8,
    suffix: "Purl 1, Knit 4",
    suffix_length: 5,
    stitches_per_row
  });

  const row2 = row_pattern({
    preface: "Purl 3",
    preface_length: 3,
    repeat: "Knit 1, Purl 1, Knit 1, Purl 5",
    repeat_length: 8,
    suffix: "Knit 1, Purl 1, Knit 1, Purl 3",
    suffix_length: 6,
    stitches_per_row
  });

  const row3 = row_pattern({
    preface: "Knit 2",
    preface_length: 2,
    repeat: "Purl 1, Knit 3",
    repeat_length: 4,
    suffix: "Purl 1, Knit 2",
    suffix_length: 3,
    stitches_per_row
  });

  const row4 = row_pattern({
    preface: "Purl 1",
    preface_length: 1,
    repeat: "Knit 1, Purl 5, Knit 1, Purl 1",
    repeat_length: 8,
    suffix: "",
    suffix_length: 0,
    stitches_per_row
  });

  const row5 = row_pattern({
    preface: "",
    preface_length: 0,
    repeat: "Purl 1, Knit 7",
    repeat_length: 8,
    suffix: "Purl 1",
    suffix_length: 1,
    stitches_per_row
  });

  return [row1, row2, row3, row4, row5, row4, row3, row2];
};

export default Diamond_Brocade_Stitch;
