let project_length = 0
do {

  pattern.forEach((row) => {
    work(row.preLoopStitches)
    let stitch_number = row.preLoopStitches.length

    do {
      work(row.stitches_between_asterisks)
      stitch_number += stitches_between_asterisks.length
    } while (stitch_number < total_stitches - postLoopStitches.length)

    work(postLoopStitches)
  })

  project_length += pattern.rows.length * gauge.rows_per_inch
} while (project_length < desired_length)

