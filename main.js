const base = require('./modules/MODELBASE')
let ts = new base("B","C:\\Users\\nexga\\Documents\\GitHub\\Express-Template-Generator-CLI\\LAYOUTS\\BasicFile.layout")
ts.AddInPosition("REQ",base.POSITIONS.BEG,"teste")
console.log(ts.LAYOUT_TEXT)