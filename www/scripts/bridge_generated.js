// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Msg = Msg || {};

/**
 * @const
 * @namespace
 */
Msg.Bridge = Msg.Bridge || {};

/**
 * @enum
 */
Msg.Bridge.PortType = {
  Wire: 0,
  LA: 1,
  HackEV: 2,
  RadarArc: 3
};

/**
 * @enum
 */
Msg.Bridge.DownMsgContent = {
  NONE: 0,
  AddPorts: 1,
  RemovePorts: 2
};

/**
 * @constructor
 */
Msg.Bridge.AddPorts = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Msg.Bridge.AddPorts}
 */
Msg.Bridge.AddPorts.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Msg.Bridge.AddPorts=} obj
 * @returns {Msg.Bridge.AddPorts}
 */
Msg.Bridge.AddPorts.getRootAsAddPorts = function(bb, obj) {
  return (obj || new Msg.Bridge.AddPorts).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @returns {Msg.Bridge.PortType}
 */
Msg.Bridge.AddPorts.prototype.ports = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {Msg.Bridge.PortType} */ (this.bb.readUint16(this.bb.__vector(this.bb_pos + offset) + index * 2)) : /** @type {Msg.Bridge.PortType} */ (0);
};

/**
 * @returns {number}
 */
Msg.Bridge.AddPorts.prototype.portsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint16Array}
 */
Msg.Bridge.AddPorts.prototype.portsArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? new Uint16Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Msg.Bridge.AddPorts.startAddPorts = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} portsOffset
 */
Msg.Bridge.AddPorts.addPorts = function(builder, portsOffset) {
  builder.addFieldOffset(0, portsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<Msg.Bridge.PortType>} data
 * @returns {flatbuffers.Offset}
 */
Msg.Bridge.AddPorts.createPortsVector = function(builder, data) {
  builder.startVector(2, data.length, 2);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt16(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Msg.Bridge.AddPorts.startPortsVector = function(builder, numElems) {
  builder.startVector(2, numElems, 2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Msg.Bridge.AddPorts.endAddPorts = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Msg.Bridge.RemovePorts = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Msg.Bridge.RemovePorts}
 */
Msg.Bridge.RemovePorts.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Msg.Bridge.RemovePorts=} obj
 * @returns {Msg.Bridge.RemovePorts}
 */
Msg.Bridge.RemovePorts.getRootAsRemovePorts = function(bb, obj) {
  return (obj || new Msg.Bridge.RemovePorts).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @returns {number}
 */
Msg.Bridge.RemovePorts.prototype.ports = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Msg.Bridge.RemovePorts.prototype.portsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Msg.Bridge.RemovePorts.prototype.portsArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Msg.Bridge.RemovePorts.startRemovePorts = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} portsOffset
 */
Msg.Bridge.RemovePorts.addPorts = function(builder, portsOffset) {
  builder.addFieldOffset(0, portsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Msg.Bridge.RemovePorts.createPortsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Msg.Bridge.RemovePorts.startPortsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Msg.Bridge.RemovePorts.endRemovePorts = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Msg.Bridge.DownMsg = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Msg.Bridge.DownMsg}
 */
Msg.Bridge.DownMsg.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Msg.Bridge.DownMsg=} obj
 * @returns {Msg.Bridge.DownMsg}
 */
Msg.Bridge.DownMsg.getRootAsDownMsg = function(bb, obj) {
  return (obj || new Msg.Bridge.DownMsg).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {Msg.Bridge.DownMsgContent}
 */
Msg.Bridge.DownMsg.prototype.contentType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {Msg.Bridge.DownMsgContent} */ (this.bb.readUint8(this.bb_pos + offset)) : Msg.Bridge.DownMsgContent.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
Msg.Bridge.DownMsg.prototype.content = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Msg.Bridge.DownMsg.startDownMsg = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Msg.Bridge.DownMsgContent} contentType
 */
Msg.Bridge.DownMsg.addContentType = function(builder, contentType) {
  builder.addFieldInt8(0, contentType, Msg.Bridge.DownMsgContent.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} contentOffset
 */
Msg.Bridge.DownMsg.addContent = function(builder, contentOffset) {
  builder.addFieldOffset(1, contentOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Msg.Bridge.DownMsg.endDownMsg = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.Msg = Msg;
