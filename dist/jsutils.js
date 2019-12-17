let JSUtils = {};
(function(context) {
  GuidRegex = /([0-z]{8})-?([0-z]{4})-?([0-z]{4})-?([0-z]{4})-?([0-z]{12})/;
  context.Guid = context.Guid || {};
  context.Guid.New = function() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
  };
  context.Guid.IsValid = function(guid) {
    return GuidRegex.test(guid);
  };
  context.Guid.Parse = function(guid) {
    if (this.IsValid(guid)) {
      return guid.replace(GuidRegex, "$1-$2-$3-$4-$5");
    } else {
      throw Error("Invalid Guid");
    }
  };
})(JSUtils);
