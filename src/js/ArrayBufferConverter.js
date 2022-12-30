export default class ArrayBufferConverter {
  constructor(buffer) {
    this.load(buffer);
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      str += String.fromCharCode(this.bufferView[i]);
    }
    return str;
  }
}
