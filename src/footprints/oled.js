module.exports = {
  params: {
    designator: 'OLED',
    side: 'F',
    outline: false,
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    SDA: undefined,
    SCL: undefined
  },
  body: p => {
    const standard = `
      module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* pins */}
      (pad 1 thru_hole rect (at -3.62 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VCC})
      (pad 2 thru_hole oval (at -1.08 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND})
      (pad 3 thru_hole oval (at 1.46 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SCL})
      (pad 4 thru_hole oval (at 4 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SDA})
    `
    const outline = `
      (fp_line (start 13.462 -9.017) (end 13.208 -9.005) (layer F.SilkS) (width 0.12))
      (fp_line (start 13.462 7.62) (end 13.462 -9.017) (layer F.SilkS) (width 0.12))
      (fp_line (start 10.122 7.595) (end 13.462 7.62) (layer F.SilkS) (width 0.12))
      (fp_line (start 10.122 -9.005) (end 13.208 -9.005) (layer F.SilkS) (width 0.12))
      (fp_line (start -4.699 -11.811) (end -4.699 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start 5.08 -9.398) (end -4.699 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start 5.08 -11.811) (end 5.08 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start -4.699 -11.811) (end 5.08 -11.811) (layer F.SilkS) (width 0.12))
      (fp_line (start -12.978 -9.005) (end 10.122 -9.005) (layer F.SilkS) (width 0.12))
      (fp_line (start -12.978 7.595) (end -12.978 -9.005) (layer F.SilkS) (width 0.12))
      (fp_line (start 10.122 7.595) (end -12.978 7.595) (layer F.SilkS) (width 0.12))
      (fp_line (start -13.4 15) (end -13.4 -12.3) (layer F.SilkS) (width 0.12))
      (fp_line (start 14 15) (end -13.4 15) (layer F.SilkS) (width 0.12))
      (fp_line (start 14 -12.3) (end 14 15) (layer F.SilkS) (width 0.12))
      (fp_line (start -13.4 -12.3) (end 14 -12.3) (layer F.SilkS) (width 0.12))
  `

    if (p.outline) {
      return `(
        ${standard}
        ${outline}
      )`
    } else {
      return `(${standard})`
    }
  }
}
