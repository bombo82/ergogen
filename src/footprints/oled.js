module.exports = {
  params: {
    designator: 'OLED',
    side: 'F',
    outline: false,
    hole: false,
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    SDA: undefined,
    SCL: undefined
  },
  body: p => {
    const standard = `
      module lib:Display_128x64_096_I2C (layer F.Cu) (tedit 5E1ADAC2)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* pins */}
      (pad 1 thru_hole rect (at -3.62 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VCC})
      (pad 2 thru_hole oval (at -1.08 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND})
      (pad 3 thru_hole oval (at 1.46 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SCL})
      (pad 4 thru_hole oval (at 4 -10.6 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.SDA})

      ${'' /* pins outline*/}
      (fp_line (start -4.699 -11.811) (end -4.699 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start 5.08 -9.398) (end -4.699 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start 5.08 -11.811) (end 5.08 -9.398) (layer F.SilkS) (width 0.12))
      (fp_line (start -4.699 -11.811) (end 5.08 -11.811) (layer F.SilkS) (width 0.12))
    `
    const outline = `
      ${'' /* border outline */}
      (fp_line (start -13.4 15) (end -13.4 -12.3) (layer F.SilkS) (width 0.12))
      (fp_line (start 14 15) (end -13.4 15) (layer F.SilkS) (width 0.12))
      (fp_line (start 14 -12.3) (end 14 15) (layer F.SilkS) (width 0.12))
      (fp_line (start -13.4 -12.3) (end 14 -12.3) (layer F.SilkS) (width 0.12))

      ${'' /* display outline*/}
      (fp_line (start 13.462 8.62) (end 13.462 -8.005) (layer F.SilkS) (width 0.12))
      (fp_line (start -12.978 -8.005) (end 13.462 -8.005) (layer F.SilkS) (width 0.12))
      (fp_line (start -12.978 8.595) (end -12.978 -8.005) (layer F.SilkS) (width 0.12))
      (fp_line (start 13.462 8.595) (end -12.978 8.595) (layer F.SilkS) (width 0.12))
    `
    const hole = `
      ${'' /* holes */}
      (pad "" np_thru_hole oval (at -11. 13) (size 3.8 2.9) (drill oval 3.8 2.9) (layers *.Cu *.Mask))
      (pad "" np_thru_hole oval (at 11.6 13) (size 3.8 2.9) (drill oval 3.8 2.9) (layers *.Cu *.Mask))
      (pad "" np_thru_hole oval (at 11.6 -10.3) (size 3.8 2.9) (drill oval 3.8 2.9) (layers *.Cu *.Mask))
      (pad "" np_thru_hole oval (at -11 -10.3) (size 3.8 2.9) (drill oval 3.8 2.9) (layers *.Cu *.Mask))
    `
    return `(
      ${standard}
      ${p.outline ? outline : ''}
      ${p.hole ? hole : ''}
    )`
  }
}
